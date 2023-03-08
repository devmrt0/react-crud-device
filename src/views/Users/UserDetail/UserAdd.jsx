import React, { Component } from "react";
import { connect } from "react-redux";
import {
    getAllUsers,
    getAllUsers2,
    findUsersByTitle,
    deleteAllUsers,
    CreateUser2
} from "../../../actions/userAddActions";
import * as ACTIONS from "../../../actions/userAddActions";
import { Link } from "react-router-dom";
import { Button, Modal, Checkbox } from 'semantic-ui-react';
import TextField from '@mui/material/TextField';
import { bindActionCreators } from 'redux';
import "./deviceadd.css";



export class UserAdd extends Component {
    constructor(props) {
        super(props);
        this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
        this.refreshData = this.refreshData.bind(this);
        this.setActiveTutorial = this.setActiveTutorial.bind(this);
        this.findByTitle = this.findByTitle.bind(this);
        this.removeAllUsers = this.removeAllUsers.bind(this);


        this.state = {
            datalist: [],
            currentTutorial: null,
            currentIndex: -1,
            searchTitle: "",
            opens: false,
            id: "",
            uid: "",
            name: "",
            password: "",
            position: "",
            photo: "",
            access_enabled: false,
            device2: [{ id: "IRT28123456", name: "test cihazi", password: "password" }, { id: "IRT281234526", name: "test cihaz2i", password: "passwor2d" }],
            users2: [{ uid: "AD75C9CE", name: "Test Kişisi", position: "Güvenlik", photo: "", access_enabled: false }]
        };
    }

    async componentDidMount() {

        await this.getData()


    }

    componentDidUpdate(prevProps) {
        if (this.props.users !== prevProps.users) {
            console.dir("a")
        }

        if (this.props.datalist !== prevProps.datalist) {
            console.dir("a")
        }
    }

    onChangeSearchTitle(e) {
        const searchTitle = e.target.value;

        this.setState({
            searchTitle: searchTitle,
        });
    }

    async getData() {
        let datalar = await getAllUsers2();
        this.setState({
            datalist: datalar.payload.data,
        });
       

    }

    refreshData() {
        this.setState({
            currentTutorial: null,
            currentIndex: -1,
        });
    }

    setActiveTutorial(tutorial, index) {
        this.setState({
            currentTutorial: tutorial,
            currentIndex: index,
        });
    }

    removeAllUsers() {

        deleteAllUsers()
            .then((response) => {
                console.log(response);
                this.refreshData();
            })
            .catch((e) => {
                console.log(e);
            });
    }

    findByTitle() {
        this.refreshData();

        this.props.findTutorialsByTitle(this.state.searchTitle);
    }

    openModal() {
        this.setState({
            opens: true,
        });
    }

    closeModal() {
        this.setState({
            opens: false,
            uid: "",
            name: "",
            position: "",
        });
    }

    async addPerson() {
        let data = {
            uid: this.state.uid,
            name: this.state.name,
            position: this.state.position,
            access_enabled: true,
        };
        await CreateUser2(data);
        await this.getData();
        this.closeModal();

    }

    handleInputChange = (event) => {
        this.setState({
            position: event.target.value,
        });
    };

    handleUidChange = (event) => {
        this.setState({
            uid: event.target.value,
        });
    };

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value,
        });
    };

    handleCheckboxChange = (e, { checked }) => {
        this.setState({
            [e.target.label]: checked,
        });
    }

    render() {
        const { searchTitle, currentTutorial, currentIndex, users2, users, datalist } = this.state;
        return (
            <div className="list row">
                <div className="col-md-8">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by title"
                            value={searchTitle}
                            onChange={this.onChangeSearchTitle}
                        />
                        <div className="input-group-append">
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={this.findByTitle}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Users List</h4>

                    <ul className="list-group">
                        {datalist &&
                            datalist.map((tutorial, index) => (
                                <li
                                    className={
                                        "list-group-item "
                                        //+
                                        //(index === currentIndex ? "active" : "")
                                    }
                                    onClick={() => this.setActiveTutorial(tutorial, index)}
                                    key={index}
                                >
                                    İsim:{tutorial.name}
                                    <button
                                        className="m-3 btn btn-sm btn-danger"
                                    //onClick={this.removeAllDevices}
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))}
                    </ul>

                    <button
                        className="m-3 btn btn-sm btn-primary"
                        onClick={this.openModal.bind(this)}
                    >
                        Add
                    </button>

                    <button
                        className="m-3 btn btn-sm btn-danger"
                        onClick={this.removeAllUsers}
                    >
                        Remove All
                    </button>
                </div>
                <div className="col-md-6">
                    {currentTutorial ? (
                        <div>
                            <h4>User</h4>
                            <div>
                                <label>
                                    <strong>UID:</strong>
                                </label>{" "}
                                {currentTutorial.uid}
                            </div>
                            <div>
                                <label>
                                    <strong>Name:</strong>
                                </label>{" "}
                                {currentTutorial.name}
                            </div>
                            <div>
                                <label>
                                    <strong>Position:</strong>
                                </label>{" "}
                                {currentTutorial.position}
                            </div>
                            <div>
                                <label>
                                    <strong>Geçiş Etkin:</strong>
                                </label>{" "}
                                <Checkbox
                                    checked={currentTutorial.access_enabled == true ? true : false}

                                />



                            </div>

                            <Link
                                to={"/devices/" + currentTutorial.id}
                                className="badge badge-warning"
                                style={{ color: "blue", fontSize: "15px" }}
                            >
                                Edit
                            </Link>
                        </div>
                    ) : (
                        <div>
                            <br />
                            <p>Please click on a User...</p>
                        </div>
                    )}
                </div>
                <div>
                    <Modal
                        onClose={this.closeModal.bind(this)}
                        onOpen={this.openModal.bind(this)}
                        open={this.state.opens}
                        size={'small'}
                        centered={true}

                    //trigger={<Button>Show Modal</Button>}
                    >
                        <Modal.Header>Add User</Modal.Header>
                        <Modal.Content>
                            <TextField
                                id="UID"
                                label="uid"
                                value={this.state.uid}
                                onChange={this.handleUidChange.bind(this)}
                            />
                            <TextField
                                id="name"
                                label="İsim"
                                value={this.state.name}
                                onChange={this.handleNameChange.bind(this)}
                            />
                            <TextField
                                id="position"
                                label="Pozisyon"
                                value={this.state.position}
                                onChange={this.handleInputChange.bind(this)}
                            />
                            <br></br>
                            <br></br>
                            <br></br>

                            <Checkbox
                                checked={this.state.access_enabled}
                                label='Geçiş Etkin'
                                onChange={this.handleCheckboxChange}
                            />
                        </Modal.Content>
                        <Modal.Actions>
                            <Button color='black' onClick={this.closeModal.bind(this)}>
                                İptal
                            </Button>
                            <Button
                                content="Kaydet"
                                labelPosition='right'
                                icon='checkmark'
                                onClick={this.addPerson.bind(this)}
                                positive
                            />
                        </Modal.Actions>
                    </Modal>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        getAllUsers: bindActionCreators(getAllUsers, dispatch),
        getAllUserss2: bindActionCreators(getAllUsers2, dispatch),
        create2: bindActionCreators(CreateUser2, dispatch),
        findUsersByTitle: bindActionCreators(findUsersByTitle, dispatch),
        deleteAllUsers: bindActionCreators(deleteAllUsers, dispatch),

    };
}


export default connect(mapStateToProps, { getAllUsers })(UserAdd);