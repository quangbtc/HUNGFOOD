import React from 'react';
import styled from '@emotion/styled';
import { Check } from '@mui/icons-material';

const Container = styled.div`
    background-color: white;
    position: relative;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    button {
        padding: 10px 30px;
        outline: none;
        border: none;
        display: inline-flex;
        align-items: center;
        border-radius: 200px;
        background-color: green;
        color: white;
        font-size: 18px;
        span{
            margin-left: 10px;
            width: 40px;
            height: 40px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background-color: white;
            color:green;

        }
    }
`;
const Content = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
        width: 400px;
        padding: 15px 20px;
        text-align: center;
    }
`;

const Success = () => {
    return (
        <Container>
            <Content>
                <button>
                    Thanh toán thành công !
                    <span>
                        <Check />
                    </span>
                </button>
                <p>
                    Đơn hàng của bạn đã được thanh toán. Cảm ơn quý khách đã chọn sản phẩm
                    của chúng tôi!
                </p>
            </Content>
        </Container>
    );
};
export default Success;
