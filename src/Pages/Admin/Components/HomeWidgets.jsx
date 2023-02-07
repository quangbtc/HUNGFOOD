import React from 'react';
import styled from 'styled-components';
import UserItem from './UserItem';
import OrderItem from './OrderItem';

//=========SCSS=========//
const Container = styled.div`
    margin-top: 20px;
    padding: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    display: flex;
    gap: 20px;
`;
const Left = styled.div`
    flex: 2;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    h3{
        padding: 10px 20px;
    }
`;
const Right = styled.div`
    flex: 3;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    h3{
        padding: 10px 20px;
    }
`;

const HomeWidgets = () => {
    return (
        <Container>
            <Left>
                <h3>Người dùng mới</h3>
                <UserItem />
            </Left>
            <Right>
                <h3>Đơn hàng mới</h3>
                <OrderItem />
            </Right>
        </Container>
    );
};

export default HomeWidgets;
