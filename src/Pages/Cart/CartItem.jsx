import React, { useState } from 'react';

import { NumericFormat } from 'react-number-format';
import { Add, Delete, Remove } from '@mui/icons-material';
import { Divider } from '@mui/material';

import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { useDispatch } from 'react-redux';
import { removeCart, increase, decrease } from '../../Redux/cartSlice';
const cx = classNames.bind(styles);
const CartItem = ({ product, index }) => {
    const [qty, setQty] = useState(product.quantity);
    const [imgErr,setImgErr]=useState(false)
    const dispatch = useDispatch();

    const handleOnclickRemove = (id) => {
        if (qty > 1) {
            setQty((prev) => prev - 1);
            dispatch(decrease({ index }));
        }
    };
    const handleOnclickAdd = () => {
        setQty((prev) => prev + 1);
        dispatch(increase({ index }));
    };
    const handleOnchangeInput = () => {};
    const hanleRemoveCart = () => {
        dispatch(removeCart(index));
    };
   
    return (
        <div className={cx('container-left')}>
            <div className={cx('cart-img')}>
                <img src={(imgErr===false && product.img)?product.img:"https://cf.shopee.vn/file/3230ecec15facec8d6878f11e17bdda5"} alt={product.title} 
                onError={()=> setImgErr(true)}
                />
            </div>
            <div className={cx('cart-info')}>
                <div className={cx('info')}>
                    <label className={cx('label')}>Mã sản phẩm:</label>
                    <div className={cx('name')}>ABCXYZ</div>
                </div>
                <div className={cx('info')}>
                    <label className={cx('label')}>Tên sản phẩm:</label>
                    <div className={cx('name')}>{product.title}</div>
                </div>
                <div className={cx('info')}>
                    <label className={cx('label')}>Giá:</label>
                    <div className={cx('name')}>
                        <NumericFormat
                            displayType="text"
                            value={product.price}
                            suffix={'  k'}
                            thousandSeparator=","
                        />
                    </div>
                </div>
                <div className={cx('info')}>
                    <label className={cx('label')}>Màu sắc:</label>
                    <div className={cx('name')}>
                        <button
                            className={cx('color', 'active')}
                            style={{ backgroundColor: `${product.color}` }}
                        ></button>
                    </div>
                </div>
                <div className={cx('info')}>
                    <label className={cx('label')}>Size:</label>
                    <div className={cx('name')}>{product.size}</div>
                </div>
            </div>
            <div className={cx('cart-total')}>
                <div className={cx('qty')}>
                    <Remove
                        className={cx('icon-remove')}
                        onClick={() => handleOnclickRemove()}
                    />
                    <input
                        type="text"
                        min={1}
                        value={qty}
                        onChange={(e) => handleOnchangeInput(e)}
                    />
                    <Add className={cx('icon-add')} onClick={() => handleOnclickAdd()} />
                </div>
                <Divider />
                <div className={cx('sub-total')}>
                    <NumericFormat
                        displayType="text"
                        value={product.price * qty}
                        suffix={'  k'}
                        thousandSeparator=","
                    />
                </div>
            </div>
            <span className={cx('action')} onClick={hanleRemoveCart}>
                <Delete />
            </span>
        </div>
    );
};

export default CartItem;
