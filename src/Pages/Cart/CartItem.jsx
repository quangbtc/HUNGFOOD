import React,{useState} from 'react';

import { NumericFormat } from 'react-number-format';
import { Add, Remove } from '@mui/icons-material';
import { Divider } from '@mui/material';

import classNames from 'classnames/bind';
import styles from "./Cart.module.scss"
const cx=classNames.bind(styles)
const CartItem = () => {
    const [qty, setQty] = useState([]);
    const handleOnclick = () => {};
    const handleOnchangeInput = () => {};
    return (
        <div className={cx('container-left')}>
            <div className={cx('cart-img')}>
                <img
                    src="https://bizweb.dktcdn.net/thumb/large/100/415/697/products/den2-1663927933961.jpg?v=1663927942000"
                    alt=""
                />
            </div>
            <div className={cx('cart-info')}>
                <div className={cx('info')}>
                    <label className={cx('label')}>Mã sản phẩm:</label>
                    <div className={cx('name')}>ABCXYZ</div>
                </div>
                <div className={cx('info')}>
                    <label className={cx('label')}>Tên sản phẩm:</label>
                    <div className={cx('name')}>
                        Iphone promax fasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasd
                    </div>
                </div>
                <div className={cx('info')}>
                    <label className={cx('label')}>Giá:</label>
                    <div className={cx('name')}>
                        <NumericFormat
                            displayType="text"
                            value={200000}
                            suffix={'  đ'}
                            thousandSeparator=","
                        />
                    </div>
                </div>
                <div className={cx('info')}>
                    <label className={cx('label')}>Màu sắc:</label>
                    <div className={cx('name')}>
                        <button
                            className={cx('color', 'active')}
                            style={{ backgroundColor: 'red' }}
                        ></button>
                        <button
                            className={cx('color')}
                            style={{ backgroundColor: 'blue' }}
                        ></button>
                        <button
                            className={cx('color')}
                            style={{ backgroundColor: 'yellow' }}
                        ></button>
                        <button
                            className={cx('color')}
                            style={{ backgroundColor: 'green' }}
                        ></button>
                    </div>
                </div>
                <div className={cx('info')}>
                    <label className={cx('label')}>Size:</label>
                    <div className={cx('name')}>
                        <select name="" id="" className={cx('size')}>
                            <option value="" selected={true}>
                                SM
                            </option>
                            <option value="">M</option>
                            <option value="">L</option>
                            <option value="">Xl</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className={cx('cart-total')}>
                <div className={cx('qty')}>
                    <Remove className={cx('icon-remove')} 
                    onClick={handleOnclick}
                    />
                    <input
                        type="text"
                        min={1}
                        value={1}
                        onChange={(e) => handleOnchangeInput(e)}
                    />
                    <Add className={cx('icon-add')} 
                       onClick={handleOnclick}
                    />
                </div>
                <Divider />
                <div className={cx('sub-total')}>
                    <NumericFormat
                        displayType="text"
                        value={500000}
                        suffix={'  đ'}
                        thousandSeparator=","
                    />
                </div>
            </div>
        </div>
    );
};

export default CartItem;
