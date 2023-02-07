import React from 'react';
import styled from 'styled-components';

import InfoItem from './InfoItem';

//========CSS=========//
const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    border-radius: 10px;
    box-shadow: azure;
`;

const FeatureInfo = () => {
    return (
        <Container>
            <InfoItem />
            <InfoItem />
            <InfoItem />
        </Container>
    );
};

export default FeatureInfo;
