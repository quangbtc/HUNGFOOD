import {
    BookOnline,
    Dashboard,
    Diamond,
    Home,
    ListOutlined,
    Menu,
    People,
    PeopleAltOutlined,
    Settings,
    SupportAgentOutlined,
} from '@mui/icons-material';
import { Divider } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: burlywood;
    min-height: 100vh;
`;
const Header = styled.div`
    text-align: center;
    padding: 10px 0px;
    cursor: pointer;
`;

const Content = styled.div`
    min-width: 180px;
`;
const List = styled.ul`
    list-style: none;
    padding: 5px 0px;
`;
const Item = styled.li`
    margin: 5px 0px;
    padding: 5px 10px;
    border-radius: 20px;
    .icon {
        margin-right: 10px;
    }
    .name {
    }
    cursor: pointer;
    &:hover {
        background-color: goldenrod;
        color: white;
    }
`;
const Theme=styled.div`
    display: flex;
    justify-content: space-around;
    .theme{
        width: 30px;
        height: 30px;
        border-radius: 10px;
        cursor: pointer;
    }
    .dark{
        background-color:#30336b;
    }
    .light{
        background-color: rgba(223, 249, 251,1.0);
    }
    .blue{
        background-color: rgba(126, 214, 223,1.0);
    }
`;

const MENU = [
    {
        name: 'Bảng điều khiển',
        icon: <Home />,
        divider: false,
    },
      {
        name: 'Thống kê',
        icon: <ListOutlined />,
        divider: false,
    },
    {
        name: 'Sản phẩm',
        icon: <Dashboard />,
        divider: true,
    },
    {
        name: 'Người dùng',
        icon: <People />,
        divider: false,
    },
     {
        name: 'Đơn hàng',
        icon: <BookOnline />,
        divider: false,
    },
    {
        name: 'Cài đặt',
        icon: <Settings />,
        divider: true,
    },
];
const Sidebar = () => {
    return (
        <Container>
            <Header>
                <Diamond />
                App
            </Header>
            <Divider />
            <Content>
                <List>
                    {MENU.length > 0 &&
                        MENU.map((item) => {
                            return (
                                <>
                                    <Item>
                                        <span className="icon"> {item.icon} </span>
                                        <span className="name"> {item.name}</span>
                                    </Item>
                                    {item.divider && <Divider />}
                                </>
                            );
                        })}
                </List>
                <Theme>
                    <div className='theme dark'></div>
                    <div className='theme light'></div>
                    <div className='theme blue'></div>
                </Theme>
            </Content>
        </Container>
    );
};

export default Sidebar;
