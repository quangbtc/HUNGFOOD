import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
const CartItem = ({ data }) => {
    return (
        <div className={cx('wrapper-cart')}>
            <h3 className={cx('title')}>Thông tin giỏ hàng</h3>
            {data.length > 0 &&
                data.map((item, index) => {
                    return (
                        <div className={cx('top')} key={index}>
                            <div className={cx('wp-img')}>
                                <img src={item.img} alt={item.title} />
                            </div>
                            <div className={cx('wp-info')}>
                                <p className={cx('name')}>{item.title}</p>
                                <div className={cx('price')}>
                                    <label className={cx('label')}>Giá:</label>
                                    {item.price}
                                </div>
                                <div className={cx('qty')}>
                                    <label className={cx('label')}>Số lượng:</label>
                                    {item.quantity}
                                </div>
                            </div>
                        </div>
                    );
                })}

            <div className={cx('bottom')}>
                <Link to={'/cart'}>
                    <button className={cx('order-button')}>Xem giỏ hàng</button>
                </Link>
            </div>
        </div>
    );
};

export default CartItem;
