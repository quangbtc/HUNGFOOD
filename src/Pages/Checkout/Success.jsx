import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Check } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import OrderApi from '../../api/Order';
import { useSelector } from 'react-redux';

const Container = styled.div`
    background-color: white;
    position: relative;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    .btn-success {
        padding: 10px 30px;
        outline: none;
        border: none;
        display: inline-flex;
        align-items: center;
        border-radius: 200px;
        background-color: green;
        color: white;
        font-size: 18px;
        span {
            margin-left: 10px;
            width: 40px;
            height: 40px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background-color: white;
            color: green;
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
const Action = styled.div`
    width: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .btn {
        border-radius: 100px;
        border: none;
        outline: none;
        color: white;
        padding: 10px 20px;
        cursor: pointer;
        opacity: 0.7;
        &:hover {
            opacity: 1;
        }
    }
    .turn-back {
        background-color: blue;
    }
    .view-order {
        background-color: steelblue;
    }
`;

// userId: { type: String, required: true},
// products: [
//   {
//     productId: { type: String },
//     qty: { type: Number, default: 1 },
//   },
// ],
// amount: { type: Number, required: true },
// address: { type: Object, required: true },
const Success = () => {
    const location = useLocation();
    console.log(location.state);
    const currentUser = useSelector((state) => state.user.currentUser);
    const { stripeData, products } = location.state;
    const [orderId, setOrderId] = useState(null);

    useEffect(() => {
        const data = {
            userId: currentUser._id,
            products: products.products.map((item) => ({
                productId: item._id,
                qty: item.quantity,
            })),
            amount: stripeData.amount,
            address: stripeData.billing_details.address,
        };
        const createOrder = async () => {
            try {
                let res = await OrderApi.createOrder(data);
                console.log('check order', res.data);
                // setOrderId(res.data._id)
            } catch (error) {
                console.log(error);
            }
        };
        stripeData && currentUser && createOrder();
        return () => {};
    }, [stripeData, products, currentUser]);

    return (
        <Container>
            <Content>
                <button className="btn-success">
                    Thanh toán thành công !
                    <span>
                        <Check />
                    </span>
                </button>
                <p>
                    Đơn hàng của bạn đã được thanh toán. Cảm ơn quý khách đã chọn sản phẩm
                    của chúng tôi!
                </p>
                <Action>
                    <Link to={'/'}>
                        <button className="btn turn-back">Trở lại</button>
                    </Link>
                    <button className="btn view-order">Xem đơn hàng</button>
                </Action>
            </Content>
        </Container>
    );
};
export default Success;
