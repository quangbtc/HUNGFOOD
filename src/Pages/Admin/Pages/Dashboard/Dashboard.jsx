import React from 'react';
import styled from 'styled-components';

import FeatureInfo from '../../Components/FeatureInfo';
import Chart from '../../Components/Chart';
import HomeWidgets from '../../Components/HomeWidgets';
//===========CSS=======
const Container = styled.div`
    margin: 20px 50px;
`;

const Dashboard = () => {
    return (
        <Container>
            <FeatureInfo />
            <Chart/>
            <HomeWidgets/>
        </Container>
    );
};

export default Dashboard;
