import { Avatar } from '@mui/material';
import React from 'react';
import { Table } from 'reactstrap';
import styled from 'styled-components';

//============SCSS===========//
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Name = styled.span``;
const AvatarContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;
const Status = styled.span`
    color:white;
    background-color: ${props=>props.type==="pending"?'#eb4d4b':'#6ab04c'};
    border-radius: 3px;
    padding: 5px 10px;
`;
const Td = styled.td`
    align-items: center;
`;

const OrderItem = () => {
    return (
        <Container>
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Khách hàng</th>
                        <th>Thời gian</th>
                        <th>Số lượng</th>
                        <th>Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <Td>1</Td>
                        <Td>
                            <AvatarContainer>
                                <Avatar />
                                <Name>Jonh</Name>
                            </AvatarContainer>
                        </Td>
                        <Td>Match 17th,2023</Td>
                        <Td>2000$</Td>
                        <Td>
                            <Status type="pending">Pending</Status>
                        </Td>
                    </tr>
                    <tr>
                        <Td>2</Td>
                        <Td>
                            <AvatarContainer>
                                <Avatar />
                                <Name>Jonh</Name>
                            </AvatarContainer>
                        </Td>
                        <Td>Match 17th,2023</Td>
                        <Td>2000$</Td>
                        <Td>
                            <Status type="approved">Approved</Status>
                        </Td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};

export default OrderItem;
