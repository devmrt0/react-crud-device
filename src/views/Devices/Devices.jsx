import React, { Component } from "react";
import { Tabs } from 'antd';
import { DeviceInfo } from './DeviceDetail/DeviceInfo';
import { DeviceVersion } from './DeviceDetail/DeviceVersion';




const { TabPane } = Tabs;



export class Devices extends Component {

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

                <TabPane tab={<span>Cihaz Bilgileri</span>} key="1">
                    <DeviceInfo></DeviceInfo>

                </TabPane>

                <TabPane tab={<span>Versiyon-Durum-Uptime</span>} key="2">
                    <DeviceVersion></DeviceVersion>

                </TabPane>

                <TabPane tab={<span>Açma-Kapama-Tarih Saat</span>} key="3">

                </TabPane>





            </Tabs>

        </div>
        );
    }
}

export default Devices;