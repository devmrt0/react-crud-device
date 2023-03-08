import React, { Component } from "react";
import { connect } from "react-redux";
import { Tabs } from 'antd';
import { DeviceAdd } from './UserDetail/DeviceAdd';
import { UserAdd } from './UserDetail/UserAdd';




const { TabPane } = Tabs;



export class Users extends Component {

    /***
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    /***
   * componentDidMount
   */
    componentDidMount() {


    }
    render() {
        return (<div className="main-content">

            <Tabs defaultActiveKey="1" animated={true}>

                <TabPane tab={<span>Kişi Ekleme</span>} key="1">
                    <UserAdd></UserAdd>
                </TabPane>

                <TabPane tab={<span>Cihaz Ekleme</span>} key="2">
                    <DeviceAdd></DeviceAdd>
                </TabPane>



            </Tabs>

        </div>
        );
    }
}

export default connect(Users);