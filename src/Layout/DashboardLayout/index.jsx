import React from 'react';
import styled from 'styled-components';
import Appbar from '../../Pages/Admin/Components/Appbar';
import Sidebar from '../../Pages/Admin/Components/Sidebar';

const Container = styled.div`
    display: flex;
`;
const SidebarContainer=styled.div` 
        height: 100vh;
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
