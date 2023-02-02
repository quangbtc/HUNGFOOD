import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { login } from '../../Redux/apiCall';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Container = styled.div`
    background-image: url('https://wallpaperaccess.com/full/333783.jpg'),
        linear-gradient(to right, #6db3f2, #6db3f2);
    background-repeat: no-repeat;
    background-position: center;

    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
`;
const Mask = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.3);
`;
const Wrapper = styled.div`
    margin: 0px auto;
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 100;
    transform: translate(-50%, -50%);

    background: linear-gradient(217deg, rgba(255, 0, 0, 0.8), rgba(255, 0, 0, 0) 70.71%),
        linear-gradient(127deg, rgba(0, 255, 0, 0.8), rgba(0, 255, 0, 0) 70.71%),
        linear-gradient(336deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%);
    border-radius: 10px;
    padding: 20px;

    min-width: 400px;
`;
const Header = styled.div`
    background: transparent;
    color: lightcoral;
    margin-bottom: 20px;
`;
const Title = styled.h4`
    padding: 5px 0px;

    text-align: center;
    font-size: 24px;
    font-weight: bolder;
    text-transform: uppercase;

    letter-spacing: 10px;
`;
const Content = styled.form``;
const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 10px 0px;
`;
const Input = styled.input.attrs((props) => ({
    type: props.type,
}))`
    flex: 1;
    padding: 10px;
    font-size: 20px;
    font-weight: 400;

    background-color: rgba(137, 196, 244, 0.4);
    height: 40px;

    border: none;
    outline: none;
    border-radius: 5px;

    &:focus {
        background-color: white;
    }
`;
const Label = styled.label`
    width: 100px;
`;
const WrapperButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
const Button = styled.button.attrs((props) => ({
    type: props.type,
}))`
    margin: 10px 0px;
    padding: 8px 10px;
    min-width: 150px;
    font-size: 18px;

    border: 1px solid green;
    outline: none;
    border-radius: 10px;
    &:disabled {
        color: red;
        cursor: not-allowed;
    }
    cursor: pointer;
    &:hover {
        background-color: green;
    }
`;
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;
const RememberMe = styled.div``;
const CheckBox = styled.input.attrs((props) => ({
    type: props.type,
}))``;
const Text = styled.span`
    margin: 0px 10px;
`;
const Register = styled.div`
    text-decoration: underline;
    color: white;
    cursor: pointer;

    &:hover {
        color: blue;
    }
`;
const Error = styled.ul`
    padding: 5px;
    list-style: none;
    background-color: rgba(137, 196, 244, 0.4);
    margin-left: 100px;
    border-radius: 5px;
    li {
        padding: 5px 10px;
        color: red;
        font-size: 13px;
    }
`;

const Login = () => {
    const [value, setValue] = useState({
        email: '',
        password: '',
    });
    const dispatch = useDispatch();
    const { isLoading, error } = useSelector((state) => state.user);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        login(dispatch, data);
    };
    return (
        <Container>
            <Wrapper>
                <Header>
                    <Title>Login</Title>
                </Header>
                <Content onSubmit={handleSubmit(onSubmit)}>
                    <Item>
                        <Label>Email</Label>
                        <Input
                            name="email"
                            type="text"
                            {...register('email', {
                                required: true,
                                pattern: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
                            })}
                        />
                    </Item>
                    <Item>
                        <Label type="password">Password</Label>
                        <Input
                            name="password"
                            type="password"
                            {...register('password', {
                                required: true,
                                minLength: 6,
                            })}
                        />
                    </Item>
                    {Object.keys(errors).length !== 0 && (
                        <Error>
                            {errors.email?.type === 'required' && (
                                <li>Vuil lòng nhập email!</li>
                            )}
                            {errors.email?.type === 'pattern' && (
                                <li>Email không hợp lệ!</li>
                            )}
                            {errors.password?.type === 'required' && (
                                <li>Vui lòng nhập mật khẩu!</li>
                            )}
                            {errors.password?.type === 'minLength' && (
                                <li>Mật khẩu phải lớn hơn 6 ký tự!</li>
                            )}
                        </Error>
                    )}

                    <WrapperButton>
                        <Button type="submit" disabled={isLoading}>
                            Login
                        </Button>
                    </WrapperButton>
                </Content>

                <Bottom>
                    <RememberMe>
                        <CheckBox type="checkbox" />
                        <Text>Remember Me ?</Text>
                    </RememberMe>
                    <Link to={'/signin'}>
                        <Register>Register</Register>
                    </Link>
                </Bottom>
            </Wrapper>
            <Mask></Mask>
        </Container>
    );
};

export default Login;
