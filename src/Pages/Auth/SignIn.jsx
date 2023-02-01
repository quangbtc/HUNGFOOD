import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { signIn } from '../../Redux/apiCall';

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
    .input {
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
    }
`;
const Input = styled.input.attrs((props) => ({
    type: props.type,
}))``;
const Label = styled.label`
    color: white;
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

    cursor: pointer;
    &:hover {
        background-color: green;
    }
`;
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
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
    list-style: none;
    padding: 10px 5px;
    margin-left: 100px;
    background-color: lightblue;
    border-radius: 5px;
    li {
        padding-left: 20px;
        margin: 3px;
        font-size: 13px;
        color: red;
    }
`;

const SignIn = () => {
    const [password, setPassword] = useState();
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm();
    const dispatch=useDispatch()
    const onSubmit = (data) => {
        console.log(data)
        if(data){
            signIn(dispatch,data)
        }
    };
    console.log('errors', errors);
    return (
        <Container>
            <Wrapper>
                <Header>
                    <Title>Sign In</Title>
                </Header>
                <Content onSubmit={handleSubmit(onSubmit)}>
                    <Item>
                        <Label>Username</Label>
                        <input
                            className="input"
                            name="username"
                            type="text"
                            {...register('username', {
                                required: true,
                            })}
                        />
                    </Item>
                    <Item>
                        <Label>Email</Label>
                        <input
                            className="input"
                            name="email"
                            type="text"
                            {...register('email', {
                                required: true,
                                pattern: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
                            })}
                        />
                    </Item>
                    <Item>
                        <Label>Password</Label>
                        <input
                            className="input"
                            name="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            {...register('password', { required: true, minLength: 6 })}
                        />
                    </Item>
                    <Item>
                        <Label>Confirm-Password</Label>
                        <input
                            className="input"
                            name="rePassword"
                            type="password"
                            {...register('rePassword', {
                                required: true,
                                validate: (value) => {
                                    const { password } = getValues();
                                    if (password === value) {
                                        return true;
                                    }
                                    return false;
                                },
                            })}
                        />
                    </Item>
                    {Object.keys(errors).length !== 0 && (
                        <Error>
                            {errors.username?.type === 'required' && (
                                <li>Vui lòng điền tên!</li>
                            )}
                            {errors.email?.type === 'required' && (
                                <li>Vui lòng điền email!</li>
                            )}
                            {errors.email?.type === 'pattern' && (
                                <li>Email không hợp lệ !</li>
                            )}
                            {errors.password?.type === 'required' && (
                                <li>Vui lòng điền mật khẩu !</li>
                            )}
                            {errors.password?.type === 'minLength' && (
                                <li>Mật khẩu phải lớn hơn 6 ký tự !</li>
                            )}
                            {errors.rePassword?.type === 'required' && (
                                <li>Vui lòng nhập lại mật khẩu !</li>
                            )}
                            {errors.rePassword?.type === 'validate' && (
                                <li>Mật khẩu không trùng khớp !</li>
                            )}
                        </Error>
                    )}
                    <WrapperButton>
                        <Button type="submit">Sgin in</Button>
                    </WrapperButton>
                </Content>

                <Bottom>
                    <Register>Login</Register>
                </Bottom>
            </Wrapper>
            <Mask></Mask>
        </Container>
    );
};

export default SignIn;
