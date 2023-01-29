import React, { useState } from 'react';



import classNames from 'classnames/bind';
import styles from './FeatureProduct.module.scss';

import { Button, ButtonBase } from '@mui/material';
import ProductItem from './ProductItem';
const cx = classNames.bind(styles);
const FeatureProduct = ({ products, title }) => {
    const [sort, setSort] = useState('');
    const handleChange = (e) => {
        setSort(e.target.value);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('head')}>
                <h4 className={cx('title')}>{title}</h4>
                <div className={cx('view-more')}>
                    <Button>Xem them</Button>
                </div>
            </div>
            <div className={cx('content')}>
                <div className={cx('list-item')}>
                    {products &&
                        products.map((item, index) => {
                            return <ProductItem item={item} index={index} />;
                        })}
                </div>
            </div>
        </div>
    );
};

export default FeatureProduct;
