import React, { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './FeatureProduct.module.scss';

import { Button, ButtonBase } from '@mui/material';
import ProductItem from './ProductItem';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);
const FeatureProduct = ({ products, title }) => {
    const [sort, setSort] = useState('');
    const handleChange = (e) => {
        setSort(e.target.value);
    };
    const navigate = useNavigate();
    const handleToView = () => {
        return navigate('/product', { state: { products: products, title: title } });
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('head')}>
                <h4 className={cx('title')}>{title}</h4>
                <div className={cx('view-more')}>
                    <Button onClick={() => handleToView()}>Xem thêm</Button>
                </div>
            </div>
            <div className={cx('content')}>
                <div className={cx('list-item')}>
                    {products &&
                        products.map((item, index) => {
                            return <ProductItem item={item} index={index} key={index} />;
                        })}
                </div>
            </div>
        </div>
    );
};

export default FeatureProduct;
