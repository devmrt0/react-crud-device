import React from 'react';
import { LaptopOutlined, IdcardFilled, UserOutlined, SettingOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Users } from "../../views/Users/Users";
import { Devices } from "../../views/Devices/Devices";
const { Header, Content, Sider } = Layout;




const items = [
    getItem('Kullanıcılar', 'sub1', <UserOutlined />, [
        getItem('Kullanıcılar', '1'),
        getItem('Kullanıcılar Detay', '2')]),
    getItem('Cihazlar Menüsü', 'sub2', <LaptopOutlined />, [
        getItem('Cihazlar', '3'),
        getItem('Cihazlar Detay', '4'),
    ]),
    getItem('Ayarlar', 'sub4', <SettingOutlined />, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
    ]),
];

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
export const Layouts = () => {
    const history = useNavigate();
    const onClick = (e) => {
        //console.log('click ', e);
        //console.dir(e.key)
        if (e.key === '1') {
            history("/users");
        }
        if (e.key === '3') {
            history("/devices");
        }
    };
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <span style={{ color: "white" }}> Device & User </span>
                <IdcardFilled style={{ fontSize: '26px', color: 'white' }} />
            </Header>
            <Layout>
                <Sider
                    width={200}
                    style={{
                        background: colorBgContainer,
                    }}
                >
                    <Menu
                        onClick={onClick}
                        mode="inline"
                        theme="dark"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{
                            height: '100%',
                            borderRight: 0,
                        }}
                        items={items}
                    />
                </Sider>
                <Layout
                    style={{
                        padding: '0 24px 24px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        style={{
                            margin: 0,
                            background: colorBgContainer,
                            height: '2000px'
                        }}
                    >
                        {window.location.href.includes("devices") == false &&
                            <Users></Users>
                        }
                        {window.location.href.includes("devices") == true &&
                            <Devices></Devices>
                        }
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};
export default Layouts;