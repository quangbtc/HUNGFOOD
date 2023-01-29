import React from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(99, 100, 100, 0.5);
    z-index: 100;
    .loading {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        z-index: 110;
    }
`;
const Text = styled.h3`
    color: red;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 110;
`;
const Loading = ({ type, color }) => (
    <Wrapper>
        <ReactLoading
            type={type}
            color={color}
            height={'5%'}
            width={'5%'}
            className="loading"
        />
        <Text>Loading...</Text>
    </Wrapper>
);

export default Loading;
