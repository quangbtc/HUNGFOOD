import React, { useState, useEffect } from 'react';

import classNames from 'classnames/bind';
import styles from './Cart.module.scss';

import { Divider } from '@mui/material';
import { NumericFormat } from 'react-number-format';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { deleteAllCart } from '../../Redux/cartSlice';
import CheckoutModal from '../../Components/CheckOutModal';
import { Form, FormGroup, Input, Label, Button, Col, Row } from 'reactstrap';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import Loading from '../../Components/Loading/Loading';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);
const KEY =
    'pk_test_51MWxZFHsHRs2zVuBiqvmzYfQj12C0ECRlRFMmuD2D6sIFcao0tiJSed8BklTApQc5rTg8lYxOAon39HT0mOmEJNQ0018THwBkt';

const Cart = () => {
    // const [modal, setModal] = useState(false);
    const dispatch = useDispatch();
    //Checkout
    const [stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate();
    const onToken = (token) => {
        setStripeToken(token);
    };
    //Cart processing
    const cart = useSelector((state) => state.cart);
    const shippingFee = cart.total > 10000 ? 50 : 15;
    const tax = cart.total > 10000 ? cart.total * 0.1 : cart.total * 0.05;
    const totalFee = shippingFee + tax;

    useEffect(() => {
        const requestPayment = async () => {
            try {
                const res = await axios.post(
                    'http://localhost:8080/api/checkout/payment',
                    {
                        tokenId: stripeToken.id,
                        amount: (cart.total + totalFee) * 1000,
                    },
                );
                console.log(res.data);
                if (res.data) {
                    navigate('/success');
                    dispatch(deleteAllCart());
                }
            } catch (error) {
                console.log(error);
            }
        };
        stripeToken && cart.total > 1 && requestPayment();
        return () => {};
    }, [stripeToken, navigate]);

    const deleteCart = () => {
        dispatch(deleteAllCart());
    };

    //Chec user login
    const currentUser = useSelector((state) => state.user.currentUser);

    // const handleCheckout = () => {
    //     //Show modal to fill infor customer
    //     setModal(!modal);
    // };
    // const closeModal = () => {
    //     setModal(!modal);
    // };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('cart-header')}>
                <Link to={'/'}>
                    <button className={cx('continue')}>Tiếp tục mua hàng</button>
                </Link>

                <div className={cx('qty-cart')}>Giỏ hàng ({cart.quantity})</div>
                <button className={cx('btn-delete')} onClick={() => deleteCart()}>
                    Xoá giỏ hàng
                </button>
            </div>
            {cart.products.length > 0 ? (
                <div className={cx('cart-content')}>
                    <div className={cx('left')}>
                        {cart.products.map((item, index) => {
                            return (
                                <>
                                    <CartItem
                                        key={item._id}
                                        product={item}
                                        index={index}
                                    />
                                    <Divider />
                                </>
                            );
                        })}
                    </div>
                    <div className={cx('right')}>
                        <div className={cx('title')}>Tổng thanh toán</div>
                        <div className={cx('sumary')}>
                            <div className={cx('item')}>
                                <label className={cx('label')}>Thành tiền</label>
                                <div className={cx('name')}>
                                    <NumericFormat
                                        displayType="text"
                                        value={cart.total}
                                        suffix={'  k'}
                                        thousandSeparator=","
                                    />
                                </div>
                            </div>
                            <div className={cx('item')}>
                                <label className={cx('label')}>Ship</label>
                                <div className={cx('name')}>
                                    <NumericFormat
                                        displayType="text"
                                        value={shippingFee}
                                        suffix={'  đ'}
                                        thousandSeparator=","
                                    />
                                </div>
                            </div>
                            <div className={cx('item')}>
                                <label className={cx('label')}>Thuế</label>
                                <div className={cx('name')}>
                                    <NumericFormat
                                        displayType="text"
                                        value={tax}
                                        suffix={'  đ'}
                                        thousandSeparator=","
                                    />
                                </div>
                            </div>
                            <Divider />
                            <div className={cx('item')}>
                                <label className={cx('label')}>Thanh toán :</label>
                                <div className={cx('total-checkout')}>
                                    <NumericFormat
                                        displayType="text"
                                        value={totalFee + cart.total}
                                        suffix={'  k'}
                                        thousandSeparator=","
                                    />
                                </div>
                            </div>
                            {stripeToken ? (
                                <Loading type="spin" color="green" />
                            ) : (
                                <StripeCheckout
                                    name="Shop HungFood"
                                    description="Cam on quy khach"
                                    image="https://static.liuhuamall.cn/resourcenormal/DBE1ED97AF034EE28BE9F91D59040AFD.png"
                                    amount={cart.total + totalFee} // cents
                                    currency="vnd"
                                    stripeKey={KEY}
                                    token={onToken}
                                    shippingAddress
                                >
                                    <button
                                        className={cx('btn-checkout')}
                                        // onClick={() => {
                                        //     handleCheckout();
                                        // }}
                                    >
                                        Thanh toán
                                    </button>
                                </StripeCheckout>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div className={cx('empty')}>Không có sản phẩm trong giỏ hàng</div>
            )}

            {/* {currentUser ? (
                modal && (
                    <CheckoutModal
                        modal
                        closeModal={closeModal}
                        button="Xác nhận thanh toán"
                        title="Thông tin khách hàng"
                    >
                        <Form>
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="exampleEmail">Email</Label>
                                        <Input
                                            id="exampleEmail"
                                            name="email"
                                            placeholder="with a placeholder"
                                            type="email"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="examplePassword">Password</Label>
                                        <Input
                                            id="examplePassword"
                                            name="password"
                                            placeholder="password placeholder"
                                            type="password"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="exampleEmail">Tên</Label>
                                        <Input
                                            id="exampleEmail"
                                            name="email"
                                            placeholder="with a placeholder"
                                            type="email"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="examplePassword">Số điện thoại</Label>
                                        <Input
                                            id="examplePassword"
                                            name="password"
                                            placeholder="password placeholder"
                                            type="password"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Label for="exampleAddress">Địa chỉ</Label>
                                <Input
                                    id="exampleAddress"
                                    name="address"
                                    placeholder="1234 Main St"
                                />
                            </FormGroup>

                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="exampleCity">Thành phố</Label>
                                        <Input id="exampleCity" name="city" />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="exampleState">Tỉnh thành</Label>
                                        <Input id="exampleState" name="state" />
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup>
                                        <Label for="exampleZip">Mã bưu</Label>
                                        <Input id="exampleZip" name="zip" />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>
                    </CheckoutModal>
                )
            ) : (
                <Navigate to={'/login'} />
            )} */}
        </div>
    );
};

export default Cart;
