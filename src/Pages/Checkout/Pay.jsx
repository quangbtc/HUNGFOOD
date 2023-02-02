import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import Loading from '../../Components/Loading/Loading';
import { Navigate, useNavigate } from 'react-router-dom';
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
        position: absolute;
        text-transform: uppercase;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 200px;
        background-color: black;
        color: white;
        cursor: pointer;
        &:hover {
            color: red;
            background-color: green;
        }
    }
`;
const KEY =
    'pk_test_51MWxZFHsHRs2zVuBiqvmzYfQj12C0ECRlRFMmuD2D6sIFcao0tiJSed8BklTApQc5rTg8lYxOAon39HT0mOmEJNQ0018THwBkt';
const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null);
    const navigate=useNavigate()
    const onToken = (token) => {
        setStripeToken(token);
    };

    useEffect(() => {
        const requestPayment = async () => {
            try {
                const res = await axios.post(
                    'http://localhost:8080/api/checkout/payment',
                    {
                        tokenId: stripeToken.id,
                        amount: 2000,
                    },
                );
                console.log(res.data);
                if(res.data){
                    navigate("/success")
                }
            } catch (error) {
                console.log(error);
            }
        };
        stripeToken && requestPayment();
        return () => {};
    }, [stripeToken,navigate]);
    return (
        <Container>
            {stripeToken ? (
                <Loading type="spin" color="green" />
            ) : (
                <StripeCheckout
                    name="Shop HungFood"
                    description="Cam on quy khach"
                    image="https://static.liuhuamall.cn/resourcenormal/DBE1ED97AF034EE28BE9F91D59040AFD.png"
                    amount={2000} // cents
                    currency="usd"
                    stripeKey={KEY}
                    token={onToken}
                    shippingAddress
                >
                    <button>Pay now</button>
                </StripeCheckout>
            )}
        </Container>
    );
};
export default Pay;
