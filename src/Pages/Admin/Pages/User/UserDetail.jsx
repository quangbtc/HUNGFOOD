import { Divider } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

//========SCSS=========
const Container = styled.div`
    display: flex;
    margin: 20px;
    gap: 30px;
`;
const Left = styled.div`
    width: 30%;
`;
const ImgContainer = styled.div`
    width: 100%;
`;
const Img = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 5px;
`;
const InfoContainer = styled.div``;
const Label = styled.label`
    font-weight: 600;
    width: 200px;
    margin: 10px auto;
`;
const Value = styled.span``;
const Right = styled.div`
    flex: 1;
`;

//========END===========
const UserDetail = () => {
    return (
        <Container>
            <Left>
                <ImgContainer>
                    <Img
                        src={
                            'https://cdn.vox-cdn.com/thumbor/5CFwNThyu7rnexz_O3xrC_u0Qlc=/0x0:1980x1320/1200x800/filters:focal(1141x290:1457x606)/cdn.vox-cdn.com/uploads/chorus_image/image/71757363/avatar6.0.jpg'
                        }
                    />
                </ImgContainer>
            </Left>
            <Right>
                <InfoContainer>
                    <Label>Ten</Label>
                    <Value>Phuc Vinh</Value>
                </InfoContainer>
                <InfoContainer>
                    <Label>Email</Label>
                    <Value> phucvinh@gmail.com</Value>
                </InfoContainer>
                <InfoContainer>
                    <Label>Nam sinh</Label>
                    <Value>March 17,1990</Value>
                </InfoContainer>
                <InfoContainer>
                    <Label>Dia chi</Label>
                    <Value>Song Ray - Dong Nai</Value>
                </InfoContainer>
                <InfoContainer>
                    <Label>So dien thoai</Label>
                    <Value>0977720829</Value>
                </InfoContainer>
                <InfoContainer>
                    <Label>Vai tro</Label>
                    <Value>Admin</Value>
                </InfoContainer>
                <InfoContainer>
                    <Label>Ngay </Label>
                    <Value>17/8/2021</Value>
                </InfoContainer>
            </Right>
        </Container>
    );
};
export default UserDetail;
