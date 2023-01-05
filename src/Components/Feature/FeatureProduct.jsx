import React, { useState } from 'react';
//select from matirial ui
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Rating from '@mui/material/Rating';

import classNames from 'classnames/bind';
import styles from './FeatureProduct.module.scss';
import { Favorite, SettingsOverscanOutlined } from '@mui/icons-material';
import { Button, ButtonBase } from '@mui/material';
const cx = classNames.bind(styles);
const FeatureProduct = ({ products, title }) => {
    const [sort, setSort] = useState('');
    const handleChange = (e) => {
        setSort(e.target.value);
    };
    const [value, setValue] = useState([]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('head')}>
                <h4 className={cx('title')}>{title}</h4>
                <div className={cx('sort-by')}>
                    <FormControl fullWidth className={cx('form')}>
                        <InputLabel>Sắp xếp</InputLabel>
                        <Select value={sort} label="Sắp xếp" onChange={handleChange}>
                            <MenuItem value={'name'}>Theo tên</MenuItem>

                            <MenuItem value={'asc'}>Tăng</MenuItem>
                            <MenuItem value={'dec'}>Giảm</MenuItem>
                        </Select>
                    </FormControl>
                    {/* <select name="" id="" >
              <option value="" disabled>Sắp xếp</option>
              <option value="">DESC</option>
              <option value="">ASC</option>
              <option value="">NAME</option>
            </select> */}
                </div>
            </div>
            <div className={cx('content')}>
                <ul className={cx('list-item')}>
                    {products &&
                        products.map((item, index) => {
                            return (
                                <>
                                    <li className={cx('item')} key={index}>
                                        <img
                                            className={cx('img')}
                                            src={
                                                item.thumb ||
                                                'https://cf.shopee.vn/file/3230ecec15facec8d6878f11e17bdda5'
                                            }
                                            alt={item.name}
                                        />
                                        <div className={cx('name')}>{item.name}</div>
                                        <div className={cx('price')}>
                                            <span className={cx('current-price')}>
                                                {' '}
                                                <b>{item.salePrice}</b> vnd
                                            </span>
                                            <del className={cx('old-price')}>
                                                {item.price} vnd
                                            </del>
                                        </div>
                                        <div className={cx('action')}>
                                            <button className={cx('add-to-cart')}>
                                                THEM GIỎ HÀNG
                                            </button>
                                            <button className={cx('buy-now')}>
                                                MUA NGAY
                                            </button>
                                        </div>
                                        <div className={cx('evaluate')}>
                                            <div className={cx('icon')}>
                                                <Rating
                                                    name="simple-controlled"
                                                    value={value[index]}
                                                    onChange={(event, newValue) => {
                                                        setValue((prev) => [
                                                            ...prev,
                                                            (value[index] = newValue),
                                                        ]);
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        {item.saleOff>0 &&   <div className={cx('label-sale-off')}>
                                          Sale off {item.saleOff}%
                                        </div>}
                                       
                                    </li>
                                </>
                            );
                        })}
                </ul>
                
                <div className={cx('view-more')}>
                    <Button>Xem them</Button>
                </div>
            </div>
        </div>
    );
};

export default FeatureProduct;
