import { Delete, Edit, Visibility } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import moment from 'moment';
import { Table } from 'reactstrap';
import styled from 'styled-components';
import { getAllUser } from '../../../../Redux/apiCall';
import Pagination from '../../../../Components/Pagination';

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
const Detail = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: blue;
    &:hover {
        color: red;
    }
`;

const Users = () => {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const limit = 5;
    const { users, isLoading, error } = useSelector((state) => state.user);

    console.log('check users', users);
    useEffect(() => {
        getAllUser(dispatch, { page: currentPage, limit: limit });
        return () => {};
    }, [currentPage]);
    const onPageChange = (newPage) => {
        setCurrentPage(newPage);
    };
    const totalPage = users.total;
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
                            <th>Tên</th>
                            <th>Email</th>
                            <th>Chức vụ</th>
                            <th>Ngày tháng</th>
                            <th>Trạng thái</th>
                            <th>Tác vụ</th>
                            <th>Xem chi tiết</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.data &&
                            users.data.length > 0 &&
                            users.data.map((item, index) => {
                                return (
                                    <tr>
                                        <td>
                                            <input type="checkbox" />
                                        </td>
                                        <td>{index + 1}</td>
                                        <td>{item.username}</td>
                                        <td>{item.email}</td>
                                        <td>{item.isAdmin ? 'Admin' : 'Guest'}</td>
                                        <td>
                                            {moment(item.createdAt).format(
                                                'HH:MM MMM DD,YYYY',
                                            )}
                                        </td>
                                        <td>Pending</td>
                                        <td>
                                            <EditContainer>
                                                <Edit />
                                            </EditContainer>
                                            <DeleteContainer>
                                                <Delete />
                                            </DeleteContainer>
                                        </td>
                                        <td>
                                            <Detail>
                                                <Visibility />
                                            </Detail>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </Table>

                <Pagination
                    onPageChange={onPageChange}
                    totalPages={totalPage}
                    currentPage={currentPage}
                />
            </User>
        </Container>
    );
};

export default Users;
