import styled from 'styled-components';

import { Avatar } from '@mui/material';
import { VisibilityOff } from '@mui/icons-material';
import { Table } from 'reactstrap';

//==========SCSS========//
const Contain = styled.div``;

const Button = styled.button`
    width: 80px;
    border: none;
    outline: none;
    border-radius: 3px;
    padding: 5px 10px;
    opacity: 0.7;
    &:hover {
        opacity: 1;
    }
`;
const AvatarContainer=styled.div`
    display: flex;
    align-items: center;
`
const Name=styled.div`
    display: flex;
    align-items: center;
`

const UserItem = () => {
    return (
        <Contain>
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Ảnh đại diện</th>
                        <th>Tên</th>
                        <th>Xem chi tiết</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>
                            <AvatarContainer>
                                <Avatar />
                            </AvatarContainer>
                        </td>
                        <td>
                            <Name>Quang Pt</Name>
                        </td>
                        <td>
                            <Button>
                                <VisibilityOff />
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Contain>
    );
};

export default UserItem;
