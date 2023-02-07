import React from 'react';
import { ArrowUpward } from '@mui/icons-material';
import styled from 'styled-components';

//=========CSS=======
const Container = styled.div`
    flex: 1;
    border-radius: 10px;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const Head = styled.div`
    display: flex;
    justify-content: space-between;
    h3 {
        padding: 10px 20px;
    }
`;
const Time = styled.small``;
const Total = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 20px;
`;
const Ratio = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;
const Icon = styled.span`
    color: ${(props) => (props.type === 'up' ? 'green' : 'red')};
    font-weight: 600;
`;
const Small = styled.small`
    color: ${(props) => (props.type === 'up' ? 'green' : 'red')};
`;
const Unit = styled.span`
    margin-left: 10px;
`;
const Text = styled.p`
    margin-left: 20px;
    font-size: 13px;
`;

const InfoItem = () => {
    const day=new Date().getDate()
    const month= new Date().getMonth()
    const year=new Date().getFullYear()

    return (
        <Container>
            <Head>
                <h3>Doanh số</h3>
                <Time>{day+'/'+month+'/'+year}</Time>
            </Head>

            <Total>
                <h2>
                    50000000<Unit>đ</Unit>
                </h2>
                <Ratio>
                    <Small type="up">-10%</Small>
                    <Icon type="up">
                        <ArrowUpward />
                    </Icon>
                </Ratio>
            </Total>
            <Text>So voi thang truoc</Text>
        </Container>
    );
};

export default InfoItem;
