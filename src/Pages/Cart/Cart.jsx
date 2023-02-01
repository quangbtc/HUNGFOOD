import React, { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Cart.module.scss';

import { Divider } from '@mui/material';
import { NumericFormat } from 'react-number-format';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteAllCart } from '../../Redux/cartSlice';

<NumericFormat value={123} suffix={'/ -'} />;
const cx = classNames.bind(styles);

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    console.log('check cart', cart);
    const shippingFee = cart.total > 10000 ? 50 : 15;
    const tax = cart.total > 10000 ? cart.total * 0.1 : cart.total * 0.05;
    const totalFee = shippingFee + tax;
    const deleteCart = () => {
        dispatch(deleteAllCart());
    };
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
                            <button className={cx('btn-checkout')}>Thanh toán</button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={cx('empty')}>
                    Không có sản phẩm trong giỏ hàng
                </div>
            )}
        </div>
    );
};

export default Cart;
