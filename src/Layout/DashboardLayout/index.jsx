import React from 'react';
import styled from 'styled-components';
import Appbar from '../../Pages/Dashboard/Components/Appbar';
import Sidebar from '../../Pages/Dashboard/Components/Sidebar';

const Container = styled.div`
    display: flex;
`;
const SidebarContainer=styled.div` 
        height: 100vh;
        border: 1px solid red;
`;

const Content = styled.div`
    flex: 1;
    `;
const DashboardLayout = ({ children }) => {
    return (
        <div>
            <Appbar />
            <Container>
                <SidebarContainer>
                    <Sidebar />
                </SidebarContainer>
                <Content>{children}</Content>
            </Container>
        </div>
    );
};

export default DashboardLayout;
