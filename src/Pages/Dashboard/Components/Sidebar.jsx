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

const Container = styled.div``;
const Header = styled.div`
    text-align: center;
    padding: 10px 0px;
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
const Sidebar = () => {
    return (
        <Container>
            <Header>
                <Menu />
            </Header>
            <Divider/>
            <Content>
                <Icon>
                    <Dashboard />
                </Icon>
                <Icon>
                    <ListOutlined />
                </Icon>
                <Icon>
                    <PeopleAltOutlined />
                </Icon>
                <Icon>
                    <SupportAgentOutlined />
                </Icon>
                <Icon>
                    <Settings />
                </Icon>
            </Content>
        </Container>
    );
};

export default Sidebar;
