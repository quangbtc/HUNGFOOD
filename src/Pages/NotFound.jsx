
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`;
const TextField=styled.h2`
    position: absolute;
    top: 50%;
    letter-spacing: 5px;
`
const NotFound = () => {
    return (
        <Wrapper>
            <TextField>NotFound|404</TextField>
        </Wrapper>
    );
};

export default NotFound;
