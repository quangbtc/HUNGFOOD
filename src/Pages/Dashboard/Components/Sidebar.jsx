import {
    Dashboard,
    ListOutlined,
    Menu,
    PeopleAltOutlined,
    Settings,
    SupportAgentOutlined,
} from '@mui/icons-material';
import { Divider } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  
`;
const Header = styled.div`
    text-align: center;
    padding: 10px 0px;
    cursor: pointer;
    
`;
const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 50px;
    height: 50px;
    border-radius: 50%;

    background-color: steelblue;
    margin: 10px 5px;
`;
const Content = styled.div``;

const MENU = [
    {
        name: 'Dashboard',
        icon: <Dashboard />,
        divider: false,
    },
    {
        name: 'Dashboard',
        icon: <Dashboard />,
        divider: false,
    },
    {
        name: 'Outline',
        icon: <ListOutlined />,
        divider: false,
    },
    {
        name: 'Setting',
        icon: <Settings />,
        divider: false,
    },
];
const Sidebar = () => {
    return (
        <Container>
            <Header>
                <Menu />
            </Header>
            <Divider />
            <Content>
                {MENU.length> 0 &&
                    MENU.map((item) => {
                        return <Icon>{item.icon}</Icon>;
                    })}
            </Content>
        </Container>
    );
};

export default Sidebar;
