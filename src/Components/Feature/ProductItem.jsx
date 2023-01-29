import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './FeatureProduct.module.scss';
import Rating from '@mui/material/Rating';
import { NumericFormat } from 'react-number-format';
import { Add, ShoppingCart } from '@mui/icons-material';
const cx = classNames.bind(styles);

const ProductItem = ({ item, index }) => {
    const [value, setValue] = useState([]);
    return (
        <div className={cx('item')} key={item.id}>
            <Link to={`product/${item.id}`} className={cx('link')}>
                <div className={cx('img-container')}>
                    <img
                        className={cx('img')}
                        src={
                            item.thumb ||
                            'https://cf.shopee.vn/file/3230ecec15facec8d6878f11e17bdda5'
                        }
                        alt={item.name}
                    />
                </div>

                <div className={cx('name')}>{item.name}</div>
            </Link>
            <div className={cx('price')}>
                <span className={cx('current-price')}>
                    <b>
                        <NumericFormat
                            displayType="text"
                            value={item.salePrice}
                            suffix={'k'}
                            thousandSeparator=","
                        />
                    </b>
                </span>
                <del className={cx('old-price')}>
                    <NumericFormat
                        displayType="text"
                        value={item.price}
                        suffix={'k'}
                        thousandSeparator=","
                    />
                </del>
            </div>
            <div className={cx('action')}>
                <button className={cx('add-to-cart')}>
                    Them gio hang
                    <span className={cx('cart-icon')}>
                        <Add />
                    </span>
                </button>
            </div>
            <div className={cx('evaluate')}>
                <div className={cx('icon')}>
                    <Rating
                        name="simple-controlled"
                        value={value[index]}
                        onChange={(event, newValue) => {
                            setValue((prev) => [...prev, (value[index] = newValue)]);
                        }}
                    />
                </div>
            </div>
            {item.saleOff > 0 && (
                <div className={cx('label-sale-off')}>{item.saleOff}%off</div>
            )}
        </div>
    );
};

export default ProductItem;
