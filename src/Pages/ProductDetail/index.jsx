import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Slider from './Slider';
import classNames from 'classnames/bind';
import styles from './ProductDetail.module.scss';

import InfoProduct from './InfoProduct';
import Comment from '../../Components/Comment/Comment';
import ProductItem from '../../Components/Feature/ProductItem';
import { listProduct } from '../../data/featureProduct';
import ProductApi from '../../api/Product';

const cx = classNames.bind(styles);
const Index = () => {
    const [show, setShow] = useState(false);
    const [product, setProduct] = useState({});
    const products = listProduct.splice(0, 4);
    const { id } = useParams();
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    console.log(cart);
    useEffect(() => {
        const getProductById = async (idProduct) => {
            try {
                let res = await ProductApi.getProductById(idProduct);
                setProduct(res.data[0]);
            } catch (error) {
                console.log(error);
            }
        };
        getProductById(id);
        return () => {};
    }, []);
    const styles = show
        ? { overflowY: 'scroll', height: 'auto' }
        : { overflowY: 'hidden', height: '400px' };

    console.log('check product', product);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('top-content')}>
                <div className={cx('left')}>
                    <Slider product={product} />
                </div>
                <div className={cx('right')}>
                    <InfoProduct product={product} />
                </div>
            </div>
            {product && product.content && (
                <div className={cx('bottom-content')}>
                    <h4 className={cx('title')}>Thông tin chi tiết về sản phẩm</h4>
                    <div className={cx('product-review')} style={styles}>
                        {product.content}
                    </div>
                    <div className={cx('view-more')}>
                        {show ? (
                            <button onClick={() => setShow(!show)}>Rút gọn</button>
                        ) : (
                            <button onClick={() => setShow(!show)}>Xem thêm</button>
                        )}
                    </div>
                </div>
            )}
            <div className={cx('wrapper-comment')}>
                <div className="comment-title">
                    <h4>Bình luận</h4>
                </div>
                <Comment />
                <Comment />
                <Comment />
            </div>
            <div className={cx('relation-product')}>
                <div className={cx('title')}>
                    <h4>Sản phẩm cùng loại</h4>
                </div>
                <div className={cx('wp-products')}>
                    {products &&
                        products.map((item, index) => {
                            return <ProductItem item={item} key={index} />;
                        })}
                </div>
            </div>
        </div>
    );
};

export default Index;
