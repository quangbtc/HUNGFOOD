import React, { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Cart.module.scss';

import { Divider } from '@mui/material';
import { cart } from '../../data/featureProduct';
import { NumericFormat } from 'react-number-format';
import CartItem from './CartItem';

<NumericFormat value={123} suffix={'/ -'} />;
const cx = classNames.bind(styles);

const Cart = () => {
  
    return (
        <div className={cx('wrapper')}>
            <div className={cx('cart-header')}>
                <button className={cx('continue')}>Tiếp tục mua hàng</button>
                <div className={cx('qty-cart')}>Giỏ hàng (5)</div>
                <button className={cx('btn-checkout')}>Thanh toán</button>
            </div>
            <div className={cx('cart-content')}>
                <div className={cx('left')}>
                  <CartItem />
                    <Divider />
                   <CartItem />
                </div>
                <div className={cx('right')}>
                    <div className={cx('title')}>Tổng thanh toán</div>
                    <div className={cx('sumary')}>
                        <div className={cx('item')}>
                            <label className={cx('label')}>Thành tiền</label>
                            <div className={cx('name')}>
                                <NumericFormat
                                    displayType="text"
                                    value={2000000}
                                    suffix={'  đ'}
                                    thousandSeparator=","
                                />
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <label className={cx('label')}>Ship</label>
                            <div className={cx('name')}>
                                <NumericFormat
                                    displayType="text"
                                    value={15000}
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
                                    value={100000}
                                    suffix={'  đ'}
                                    thousandSeparator=","
                                />
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <label className={cx('label')}>Khuyến mãi</label>
                            <div className={cx('name')}>
                                <NumericFormat
                                    displayType="text"
                                    value={100000}
                                    suffix={'  đ'}
                                    thousandSeparator=","
                                />
                            </div>
                        </div>
                        <Divider />
                        <div className={cx('item')}>
                            <label className={cx('label')}>
                                Thanh toán :
                            </label>
                            <div className={cx('checkout')}>
                                <NumericFormat
                                    displayType="text"
                                    value={3000000}
                                    suffix={'  đ'}
                                    thousandSeparator=","
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
