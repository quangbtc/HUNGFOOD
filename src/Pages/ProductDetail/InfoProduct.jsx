import React, { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './ProductDetail.module.scss';
import { Add, Remove } from '@mui/icons-material';
import { NumericFormat } from 'react-number-format';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../Redux/cartSlice';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
const InfoProduct = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');
    const dispatch = useDispatch();

    const handleClickQty = (type) => {
        if (type === 'remove') {
            if (quantity > 1) {
                setQuantity((prev) => prev - 1);
            } else {
                setQuantity(1);
            }
        } else {
            setQuantity((prev) => prev + 1);
        }
    };
    const hanleSelect = (type, item) => {
        if (type === 'color') {
            setColor(item);
        }
        if (type === 'size') {
            setSize(item);
        }
    };
    const handleAddToCart = () => {
        dispatch(addProduct({ ...product, color, size, quantity }));
    };

    return (
        <div>
            <div className={cx('title')}>Thông tin sản phẩm</div>
            <div className={cx('desc')}>
                <div className={cx('list-item')}>
                    <div className={cx('item')}>
                        <label className={cx('label')}>Tên sản phẩm:</label>
                        <h4 className={cx('name')}>{product.title}</h4>
                    </div>

                    <div className={cx('item')}>
                        <label className={cx('label')}>Giá:</label>
                        <div className={cx('price')}>
                            <NumericFormat
                                displayType="text"
                                value={product.price}
                                suffix={'  k'}
                                thousandSeparator=","
                            />
                        </div>
                    </div>
                    {product.color && (
                        <div className={cx('item')}>
                            <label className={cx('label')}>Màu sắc:</label>
                            <div className={cx('color')}>
                                {product.color.map((item) => {
                                    return (
                                        <button
                                            key={item._id}
                                            onClick={() =>
                                                hanleSelect('color', item.value)
                                            }
                                            className={cx(
                                                'color-item',
                                                `${color === item.value && 'active'}`,
                                            )}
                                            style={{ backgroundColor: `${item.value}` }}
                                        ></button>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                    {product.size && (
                        <div className={cx('item')}>
                            <label className={cx('label')}>Kích thước:</label>
                            <div className={cx('size')}>
                                {product.size.map((item) => {
                                    return (
                                        <button
                                            className={cx(
                                                'size-item',
                                                `${size === item.value && 'active'}`,
                                            )}
                                            key={item._id}
                                            onClick={() =>
                                                hanleSelect('size', item.value)
                                            }
                                        >
                                            {item.value}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                    <div className={cx('item')}>
                        <label className={cx('label')}>Số lượng:</label>
                        <div className={cx('qty')}>
                            <Remove
                                className={cx('remove')}
                                onClick={() => handleClickQty('remove')}
                            />
                            <input type="text" min={1} value={quantity} readOnly />
                            <Add
                                className={cx('add')}
                                onClick={() => handleClickQty('add')}
                            />
                        </div>
                    </div>
                    <div className={cx('item')}>
                        <label className={cx('label')}>Trạng thái:</label>
                        {product.inStock > 0 ? (
                            <span className={cx('status')}>Còn hàng</span>
                        ) : (
                            <span
                                className={cx('status')}
                                style={{ backgroundColor: 'red' }}
                            >
                                Pending
                            </span>
                        )}
                    </div>
                    {product.desc && (
                        <div className={cx('item')}>
                            <label className={cx('label')}>Mô tả:</label>
                            <div className={cx('detail')}>{product.desc}</div>
                        </div>
                    )}
                </div>
                <div className={cx('button')}>
                    <button
                        className={cx('add-to-cart')}
                        onClick={() => handleAddToCart()}
                    >
                        Thêm giỏ hàng
                    </button>
                    <Link to={'/cart'}>
                        <button className={cx('buy-now')}>Mua ngay</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default InfoProduct;
