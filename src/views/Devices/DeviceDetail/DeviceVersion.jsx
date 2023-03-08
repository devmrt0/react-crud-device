import React, { Component } from "react";
import { connect } from "react-redux";
import {
    getDeviceAppById,
    getDeviceLinuxById,
    getDeviceStatusById,
    getDeviceUptimeById

} from "../../../actions/deviceVersionActions";
import { Button, Modal, Checkbox, Dropdown, Card, Icon, Image } from 'semantic-ui-react';


const friendOptions = [
    {
        key: 'Cihaz',
        text: 'Cihaz',
        value: 'Cihaz',
        image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
    },
    {
        key: 'Cihaz2',
        text: 'Cihaz2',
        value: 'Cihaz2',
        image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
    },
    {
        key: 'Cihaz3',
        text: 'Cihaz3',
        value: 'Cihaz3',
        image: { avatar: true, src: '/images/avatar/small/stevie.jpg' },
    },
    {
        key: 'Cihaz4',
        text: 'Cihaz4',
        value: 'Cihaz4',
        image: { avatar: true, src: '/images/avatar/small/christian.jpg' },
    },

]






export class DeviceVersion extends Component {
    constructor(props) {
        super(props);
        this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
        this.refreshData = this.refreshData.bind(this);
        this.setActiveTutorial = this.setActiveTutorial.bind(this);



        this.state = {
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
            device_id: "",
            access_enabled: false,
            device2: [{ id: "IRT28123456", name: "test cihazi", password: "password" }, { id: "IRT281234526", name: "test cihaz2i", password: "passwor2d" }],
            users2: [{ uid: "AD75C9CE", name: "Test Kişisi", position: "Güvenlik", photo: "", access_enabled: false }]
        };
    }

    componentDidMount() {
       //this.props.getDeviceAppById(1);

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





    openModal() {
        this.setState({
            opens: true,
        });
    }

    closeModal() {
        this.setState({
            opens: false,
        });
    }

    handleInputChange = (event, id) => {
        this.setState({
            [id]: event.target.value,
        });
    };

    handleCheckboxChange = (e, { checked }) => {
        this.setState({
            [e.target.label]: checked,
        });
    }

    handleDropdownChange = (e, { device_id }) => this.setState({ device_id })

    render() {
        const { searchTitle, currentTutorial, currentIndex, users2, device_id } = this.state;
        //const { devices } = this.props;

        return (
            <div className="list row">
                <div className="col-md-4">
                    <label>Cihaz Seç</label>
                    <Dropdown
                        placeholder='Select Device'
                        fluid
                        selection
                        options={friendOptions}
                        onChange={this.handleDropdownChange}
                        value={device_id}
                    />

                </div>
                <div className="col-md-8">

                </div>
                <div className="col-md-12">
                    <div style={{ position: "relative", marginTop: "20px", left: "40%" }}>
                        <Card>
                            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>Cihaz 1</Card.Header>
                                <Card.Description>
                                    <Icon name='clock' /> Uptime : 10 <br></br>
                                    <Icon name='laptop' /> Application Version : 10 <br></br>
                                    <Icon name='linux' /> Linux Version : 10
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>

                                <Icon name='plug' />
                                Baglı

                            </Card.Content>
                        </Card>
                    </div>


                </div>


            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        devicesVersions: state.devicesVersions,
        //appversionByID: {},
        //linuxversionByID: {},
        //statusByID: {},
        //uptimeByID: {},
    };
};

export default connect(mapStateToProps, {
    getDeviceAppById,
    getDeviceLinuxById,
    getDeviceStatusById,
    getDeviceUptimeById
})(DeviceVersion);