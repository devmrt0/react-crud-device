import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getAllDevices,
  findDevicesByTitle,
  deleteAllDevices,
  getAllDevices2,
  CreateDevice2,
} from "../../../actions/deviceActions";
import { Link } from "react-router-dom";
import { Button, Modal } from 'semantic-ui-react';
import TextField from '@mui/material/TextField';
import "./deviceadd.css";

export class DeviceAdd extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.findByTitle = this.findByTitle.bind(this);
    this.removeAllDevices = this.removeAllDevices.bind(this);

    this.state = {
      datalist:[],
      currentTutorial: null,
      currentIndex: -1,
      searchTitle: "",
      opens: false,
      id: "",
      name: "",
      password: "",
      device2: [{ id: "IRT28123456", name: "test cihazi", password: "password" }, { id: "IRT281234526", name: "test cihaz2i", password: "passwor2d" }]
    };
  }

  async componentDidMount() {
    await this.getData()
  }


  async getData() {
    let datalar = await getAllDevices2();
    this.setState({
      datalist: datalar.payload.data,
    });


  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle,
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

  removeAllDevices() {
    this.props
      .deleteAllDevices()
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
      id: "",
      name: "",
      password: "",
    });
  }

  async addDevice() {
    let data = {
      id: this.state.id,
      name: this.state.name,
      password: this.state.password,

    };
    await CreateDevice2(data);
    await this.getData();
    this.closeModal();

  }



  handleInputChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleidChange = (event) => {
    this.setState({
      id: event.target.value,
    });
  };

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    const { searchTitle, currentTutorial, currentIndex, device2 , datalist } = this.state;
    const { devices } = this.props;

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
          <h4>Device List</h4>

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
            onClick={this.removeAllDevices}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentTutorial ? (
            <div>
              <h4>Device</h4>
              <div>
                <label>
                  <strong>ID:</strong>
                </label>{" "}
                {currentTutorial.id}
              </div>
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                {currentTutorial.name}
              </div>
              <div>
                <label>
                  <strong>Password:</strong>
                </label>{" "}
                {currentTutorial.password}
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
              <p>Please click on a Device...</p>
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
            <Modal.Header>Add Device</Modal.Header>
            <Modal.Content>
              <TextField
                id="ID"
                label="id"
                value={this.state.id}
                onChange={this.handleidChange.bind(this)}
              />
              <TextField
                id="name"
                label="İsim"
                value={this.state.name}
                onChange={this.handleNameChange.bind(this)}
              />
              <TextField
                id="password"
                label="Şifre"
                value={this.state.password}
                onChange={this.handleInputChange.bind(this)}
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
                onClick={this.addDevice.bind(this)}
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
    devices: state.devices,
  };
};

export default connect(mapStateToProps, {
  getAllDevices,
  getAllDevices2,
  CreateDevice2,
  findDevicesByTitle,
  deleteAllDevices,
})(DeviceAdd);