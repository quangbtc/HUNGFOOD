import { Search } from '@mui/icons-material';

import React from 'react';
import styled, { css } from 'styled-components';
const Container = styled.div`
    margin: 20px 50px;
`;
//============HEADER=============
const Header = styled.div`
    margin: 20px 0px;
`;
const Title = styled.div`
    margin: 20px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
        font-size: 24px;
        color: red;
        text-transform: uppercase;
    }
`;
const WpSearch = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: rgba(0, 0, 0, 0.1);
    padding: 5px 20px;
    width: 30%;

    border-radius: 20px;
    .input {
        flex: 1;
        font-size: 18px;
        font-style: italic;
        margin-right: 10px;

        border: none;
        outline: none;
        background: transparent;
        caret-color: aqua;
    }
    .icon-search {
        color: blue;
        margin: 0 auto;
        cursor: pointer;
        &:hover {
            color: white;
        }
    }
`;
const Button = styled.button`
    outline: none;
    border: none;
    border-radius: 5px;

    background-color: orange;
    color: white;
    font-size: 18px;
    padding: 10px 20px;

    cursor: pointer;
    opacity: 0.7;
    &:hover {
        opacity: 1;
    }
`;
//=========END HEADER==========//
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px 0px;
`;
const Action = styled.div`
      .select{
        min-width: 150px;
        height: 40px;
        outline: none;
      
      }
      .option{
        background-color: white;
      }
`;
const Filter = styled.div`
    .select{
        height: 40px;
        outline: none;
      
      }
      .option{
        background-color: white;
      }
`;
const Top = styled.div`
    display: flex;
    justify-content: center;
`;
const Left = styled.div`
    flex: 1;
`;
const Center = styled.div`
    flex: 1;
`;
const Right = styled.div`
    flex: 1;
`;
const Bottom = styled.div``;
const Dashboard = () => {
    return (
        <Container>
            <Header>
                <Title>
                    <h4 className="title">San pham</h4>
                    <WpSearch>
                        <input className="input" type="text" placeholder="Tim san pham" />
                        <Search className="icon-search" />
                    </WpSearch>
                    <Button>Thêm sản phẩm</Button>
                </Title>
                <Wrapper>
                    <Action>
                      <select name="" id="" className='select'>
                        <option value="" className='option'>Actions</option>
                        <option value="" className='option'>Van chuyen</option>
                        <option value="" className='option'>Bala</option>
                        <option value="" className='option'>Pendin</option>
                      </select>
                    </Action>
                    <Filter>
                    <select name="" id="" className='select'>
                        <option value="" className='option'>Per/page</option>
                        <option value="" className='option'>5</option>
                        <option value="" className='option'>10</option>
                        <option value="" className='option'>20</option>
                      </select>
                    </Filter>
                </Wrapper>
            </Header>
            <Top>
                <Left>1</Left>
                <Center>2</Center>
                <Right>3</Right>
            </Top>
            <Bottom></Bottom>
        </Container>
    );
};

export default Dashboard;
