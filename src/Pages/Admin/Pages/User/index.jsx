import { Delete, Edit } from '@mui/icons-material';
import React from 'react';
import { Table } from 'reactstrap';
import styled from 'styled-components';

//======SCSS======
const Container = styled.div`
    margin: 20px;
`;
const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0px;
`;
const Title = styled.h4``;
const Button = styled.button`
    height: 40px;
    border: none;
    background-color: green;
    border-radius: 3px;
    padding: 5px 10px;
    color: white;
    opacity: 0.7;
    cursor: pointer;
    &:hover {
        opacity: 1;
    }
`;
const Action = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;
const Select = styled.select`
    height: 40px;
    border: none;
    border-radius: 3px;
    outline: none;
    padding: 10px;
    cursor: pointer;
    background-color: blue;
    color: white;
`;
const Option = styled.option``;
const Amount = styled.div``;
const User = styled.div`
    margin: 20px auto;
`;
const DeleteContainer = styled.span`
    color: red;
    margin-left: 10px;
    cursor: pointer;
    &:hover {
        color: yellow;
    }
`;
const EditContainer = styled.span`
    color: green;
    cursor: pointer;
    &:hover {
        color: blue;
    }
`;

const index = () => {
    return (
        <Container>
            <Header>
                <Title>List User</Title>
                <Button>Add User</Button>
            </Header>
            <Action>
                <Select>
                    <Option>Pending</Option>
                    <Option>Shipping</Option>
                    <Option>Delete</Option>
                </Select>
                <Button>Apply</Button>
                <Amount>Nguoi dung (6)</Amount>
            </Action>
            <User>
                <Table striped>
                    <thead>
                        <tr>
                            <th>
                                <input type="checkbox" />
                            </th>
                            <th>#</th>
                            <th>Name</th>
                            <th>Avatar</th>
                            <th>Role</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>1</td>
                            <td>Quang Pt</td>
                            <td>Avatar</td>
                            <td>Admin</td>
                            <td>March 17,2023</td>
                            <td>Pending</td>
                            <td>
                                <EditContainer>
                                    <Edit />
                                </EditContainer>
                                <DeleteContainer>
                                    <Delete />
                                </DeleteContainer>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>1</td>
                            <td>Quang Pt</td>
                            <td>Avatar</td>
                            <td>Admin</td>
                            <td>March 17,2023</td>
                            <td>Pending</td>
                            <td>
                                <EditContainer>
                                    <Edit />
                                </EditContainer>
                                <DeleteContainer>
                                    <Delete />
                                </DeleteContainer>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>1</td>
                            <td>Quang Pt</td>
                            <td>Avatar</td>
                            <td>Admin</td>
                            <td>March 17,2023</td>
                            <td>Pending</td>
                            <td>
                                <EditContainer>
                                    <Edit />
                                </EditContainer>
                                <DeleteContainer>
                                    <Delete />
                                </DeleteContainer>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </User>
        </Container>
    );
};

export default index;
