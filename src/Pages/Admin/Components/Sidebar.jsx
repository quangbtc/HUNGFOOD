import {
    BookOnline,
    Dashboard,
    Diamond,
    Home,
    ListOutlined,
    People,
    Settings,
} from '@mui/icons-material';
import { Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ipad } from '../../../responsive';

const Container = styled.div`
    background-color: lightblue;
    min-height: 100vh;
`;
const Header = styled.div`
    text-align: center;
    padding: 10px 0px;
    cursor: pointer;
`;

const Content = styled.div`
    min-width: 200px;
    ${ipad({
        width: 'auto',
    })}
`;
const List = styled.ul`
    list-style: none;
    padding: 5px 0px;
    .link {
        text-decoration: none;
        color: #333;
    }
`;
const Item = styled.li`
    margin: 5px 10px;
    padding: 5px 10px;
    border-radius: 20px;
    ${ipad({
        margin: '10px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        padding: '10px',
        display: 'flex',
        alignItem: 'center',
        justifyContent: 'center',
    })}
    background-color: ${(props) => (props.type === true ? 'green' : '')};

    .icon {
        margin-right: 10px;
        ${ipad({
            margin: '0px',
        })}
    }
    cursor: pointer;
    &:hover {
        background-color: green;
        color: #333;
    }
`;
const Name = styled.span`
    ${ipad({
        display: 'none',
    })}
`;
const Theme = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;

    ${ipad({
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
    })}
    .theme {
        width: 30px;
        height: 30px;
        border-radius: 10px;
        cursor: pointer;
    }
    .dark {
        background-color: #30336b;
    }
    .light {
        background-color: rgba(223, 249, 251, 1);
    }
    .blue {
        background-color: rgba(126, 214, 223, 1);
    }
`;

const MENU = [
    {
        id: 0,
        name: 'Bảng điều khiển',
        icon: <Home />,
        divider: false,
        path: '/',
        active: true,
    },
    {
        id: 1,
        name: 'Thống kê',
        icon: <ListOutlined />,
        divider: false,
        path: '/analys',
        active: false,
    },
    {
        id: 2,
        name: 'Sản phẩm',
        icon: <Dashboard />,
        divider: true,
        path: '/product',
        active: false,
    },
    {
        id: 3,
        name: 'Người dùng',
        icon: <People />,
        divider: false,
        path: '/user',
        active: false,
    },
    {
        id: 4,
        name: 'Đơn hàng',
        icon: <BookOnline />,
        divider: false,
        path: '/order',
        active: false,
    },
    {
        id: 5,
        name: 'Cài đặt',
        icon: <Settings />,
        divider: true,
        path: '/setting',
        active: false,
    },
];
const Sidebar = () => {
    const handleOnActive = (id) => {
        MENU.forEach((item) => {
            if (item.id === id) {
                item.active = true;
            } else {
                item.active = false;
            }
        });
    };
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
                        MENU.map((item, index) => {
                            return (
                                <>
                                    {' '}
                                    <Link to={'/admin' + item.path} className="link">
                                        <Item
                                            key={index}
                                            type={item.active}
                                            onClick={() => handleOnActive(item.id)}
                                        >
                                            <span className="icon"> {item.icon} </span>
                                            <Name> {item.name}</Name>
                                        </Item>
                                    </Link>
                                    {item.divider && <Divider />}
                                </>
                            );
                        })}
                </List>
                <Theme>
                    <div className="theme dark"></div>
                    <div className="theme light"></div>
                    <div className="theme blue"></div>
                </Theme>
            </Content>
        </Container>
    );
};

export default Sidebar;
