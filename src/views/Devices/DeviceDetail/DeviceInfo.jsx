import React, { Component } from "react";
import { connect } from "react-redux";
import {
    getAllDeviceInfos,

} from "../../../actions/deviceInfoActions";
import { Link } from "react-router-dom";
import { Button, Modal, Checkbox, Dropdown } from 'semantic-ui-react';
import TextField from '@mui/material/TextField';
import { Table } from 'antd';

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

const data2 = [{
    model: "IRT28M",
    communication: {
        rs232: 1,
        ethernet: true,
        wifi: false
    },
    SAM: false,
    display: {
        type: 0
    },
    keyboard: {
        type: null
    },
    audio: {
        type: 0
    },
    outputs: {
        relay: 1,
        MOSFET: 1
    },
    inputs: {
        digitalinput: 2
    },
    card_reader: true,
    qr_reader: false,
    face_recocnation: false,
    fingerprint_recocnation: false
}];

const data3 = [{
    key: 1,
    model: data2[0].model,
    communication_rs232: data2[0].communication.rs232,
    communication_wifi: data2[0].communication.wifi,
    communication_ethernet: data2[0].communication.ethernet,
    SAM: data2[0].SAM,
    display_type: data2[0].display.type,
    keyboard_type: data2[0].keyboard.type,
    audio_type: data2[0].audio.type,
    outputs_relay: data2[0].outputs.relay,
    outputs_MOSFET: data2[0].outputs.MOSFET,
    inputs_digitalinput: data2[0].inputs.digitalinput,
    card_reader: data2[0].card_reader,
    qr_reader: data2[0].qr_reader,
    face_recocnation: data2[0].face_recocnation,
    fingerprint_recocnation: data2[0].fingerprint_recocnation
}];


const data = [
    {
        key: 1,
        name: 'John Brown',
        age: 2,
        street: 'Lake Park',
        building: 'C',
        number: 2035,
        companyAddress: 'Lake Street 42',
        companyName: 'SoftLake Co',
        gender: 'M',
    },
    {
        key: 2,
        name: 'John Brown',
        age: 3,
        street: 'Lake Park',
        building: 'C',
        number: 2035,
        companyAddress: 'Lake Street 42',
        companyName: 'SoftLake Co',
        gender: 'M',
    }

];

const columns = [
    {
        title: 'Model',
        dataIndex: 'model',
        key: 'model',
        width: 100,
        fixed: 'left',

    },
    {
        title: 'İletişim',
        children: [
            {
                title: 'RS32',
                dataIndex: 'communication_rs232',
                key: 'communication_rs232',
                width: 200,
            },
            {
                title: 'Wifi',
                dataIndex: 'communication_wifi',
                key: 'communication_wifi',
                width: 200,
                render: (text) => (text == true ?
                    <input type="checkbox" name="vehicle3" value="Boat" checked></input> : <input type="checkbox" name="vehicle3" value="Boat" ></input>
        
                ),
            },
            {
                title: 'Ethernet',
                dataIndex: 'communication_ethernet',
                key: 'communication_ethernet',
                width: 200,
                render: (text) => (text == true ?
                    <input type="checkbox" name="vehicle3" value="Boat" checked></input> : <input type="checkbox" name="vehicle3" value="Boat" ></input>
        
                ),
            },
        ],
    },
    {
        title: 'SAM',
        dataIndex: 'SAM',
        key: 'SAM',
        width: 100,
        render: (text) => (text == true ?
            <input type="checkbox" name="vehicle3" value="Boat" checked></input> : <input type="checkbox" name="vehicle3" value="Boat" ></input>

        ),
    },
    {
        title: 'Tipler',
        children: [
            {
                title: 'Display Type',
                dataIndex: 'display_type',
                key: 'display_type',
                width: 150,

            },
            {
                title: 'Keyboard Type',
                dataIndex: 'keyboard_type',
                key: 'keyboard_type',
                width: 150

            },
            {
                title: 'Audio Type',
                dataIndex: 'audio_type',
                key: 'audio_type',
                width: 150

            },
        ],
    },
    {
        title: 'Inputs',
        children: [
            {
                title: 'Digital Inputs',
                dataIndex: 'inputs_digitalinput',
                key: 'inputs_digitalinput',
                width: 150,

            },


        ],
    },
    {
        title: 'Outputs',
        children: [
            {
                title: 'Relay',
                dataIndex: 'outputs_relay',
                key: 'outputs_relay',
                width: 150,

            },
            {
                title: 'MOSFET',
                dataIndex: 'outputs_MOSFET',
                key: 'outputs_MOSFET',
                width: 150

            },

        ],
    },

    {
        title: 'Card Reader',
        dataIndex: 'card_reader',
        key: 'card_reader',
        width: 200,
        render: (text) => (text == true ?
            <input type="checkbox" name="vehicle3" value="Boat" checked></input> : <input type="checkbox" name="vehicle3" value="Boat" ></input>

        ),

    },
    {
        title: 'QR Reader',
        dataIndex: 'qr_reader',
        key: 'qr_reader',
        width: 200,
        render: (text) => (text == true ?
            <input type="checkbox" name="vehicle3" value="Boat" checked></input> : <input type="checkbox" name="vehicle3" value="Boat" ></input>

        ),

    },
    {
        title: 'Face recognation',
        dataIndex: 'face_recocnation',
        key: 'face_recocnation',
        width: 200,
        render: (text) => (text == true ?
            <input type="checkbox" name="vehicle3" value="Boat" checked></input> : <input type="checkbox" name="vehicle3" value="Boat" ></input>

        ),

    },
    {
        title: 'Fingerprint recognation',
        dataIndex: 'finger_recocnation',
        key: 'finger_recocnation',
        width: 200,
        render: (text) => (text == true ?
            <input type="checkbox" name="vehicle3" value="Boat" checked></input> : <input type="checkbox" name="vehicle3" value="Boat" ></input>

        ),

    },
];


export class DeviceInfo extends Component {
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

    async onPush() {
        for (let i = 0; i < 5; i++) {
            data.push({
                key: i,
                name: 'John Brown',
                age: i + 1,
                street: 'Lake Park',
                building: 'C',
                number: 2035,
                companyAddress: 'Lake Street 42',
                companyName: 'SoftLake Co',
                gender: 'M',
            });
        }


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
                    <Table
                        columns={columns}
                        dataSource={data3}
                        bordered
                        size="middle"
                        scroll={{
                            x: 'calc(700px + 50%)',
                            y: 240,
                        }}
                    />

                </div>


            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        devicesInfos: state.devicesInfos,
    };
};

export default connect(mapStateToProps, {
    getAllDeviceInfos,
})(DeviceInfo);