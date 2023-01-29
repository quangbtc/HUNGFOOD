import React, { useState } from 'react';

import Slider from './Slider';
import classNames from 'classnames/bind';
import styles from './ProductDetail.module.scss';

import { dataSlide } from '../../data/slider';
import InfoProduct from './InfoProduct';
import Comment from '../../Components/Comment/Comment';
import ProductItem from '../../Components/Feature/ProductItem';
import { listProduct } from '../../data/featureProduct';

const cx = classNames.bind(styles);
const ProductDetail = () => {
    const [show, setShow] = useState(false);

    const products = listProduct.splice(0, 4);

    const styles = show
        ? { overflowY: 'scroll', height: 'auto' }
        : { overflowY: 'hidden', height: '400px' };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('top-content')}>
                <div className={cx('left')}>
                    <Slider data={dataSlide} />
                </div>
                <div className={cx('right')}>
                    <InfoProduct />
                </div>
            </div>
            <div className={cx('bottom-content')}>
                <h4 className={cx('title')}>Thông tin chi tiết về sản phẩm</h4>
                <div className={cx('product-review')} style={styles}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
                    tenetur, quasi aspernatur quae perferendis porro nihil, quas, libero
                    ipsa voluptatum sit consectetur non. Perspiciatis nesciunt
                    exercitationem ipsum autem sed nam. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Deserunt vel illo esse commodi dicta sed
                    laborum vitae! Odit quia inventore hic ipsam sapiente voluptates
                    veniam cum. Molestiae hic tempore quam! Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quibusdam tenetur, quasi aspernatur quae
                    perferendis porro nihil, quas, libero ipsa voluptatum sit consectetur
                    non. Perspiciatis nesciunt exercitationem ipsum autem sed nam. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Deserunt vel illo
                    esse commodi dicta sed laborum vitae! Odit quia inventore hic ipsam
                    sapiente voluptates veniam cum. Molestiae hic tempore quam! Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tenetur,
                    quasi aspernatur quae perferendis porro nihil, quas, libero ipsa
                    voluptatum sit consectetur non. Perspiciatis nesciunt exercitationem
                    ipsum autem sed nam. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Deserunt vel illo esse commodi dicta sed laborum
                    vitae! Odit quia inventore hic ipsam sapiente voluptates veniam cum.
                    Molestiae hic tempore quam! Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quibusdam tenetur, quasi aspernatur quae perferendis
                    porro nihil, quas, libero ipsa voluptatum sit consectetur non.
                    Perspiciatis nesciunt exercitationem ipsum autem sed nam. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Deserunt vel illo esse
                    commodi dicta sed laborum vitae! Odit quia inventore hic ipsam
                    sapiente voluptates veniam cum. Molestiae hic tempore quam! Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tenetur,
                    quasi aspernatur quae perferendis porro nihil, quas, libero ipsa
                    voluptatum sit consectetur non. Perspiciatis nesciunt exercitationem
                    ipsum autem sed nam. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Deserunt vel illo esse commodi dicta sed laborum
                    vitae! Odit quia inventore hic ipsam sapiente voluptates veniam cum.
                    Molestiae hic tempore quam! Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quibusdam tenetur, quasi aspernatur quae perferendis
                    porro nihil, quas, libero ipsa voluptatum sit consectetur non.
                    Perspiciatis nesciunt exercitationem ipsum autem sed nam. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Deserunt vel illo esse
                    commodi dicta sed laborum vitae! Odit quia inventore hic ipsam
                    sapiente voluptates veniam cum. Molestiae hic tempore quam! Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tenetur,
                    quasi aspernatur quae perferendis porro nihil, quas, libero ipsa
                    voluptatum sit consectetur non. Perspiciatis nesciunt exercitationem
                    ipsum autem sed nam. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Deserunt vel illo esse commodi dicta sed laborum
                    vitae! Odit quia inventore hic ipsam sapiente voluptates veniam cum.
                    Molestiae hic tempore quam! Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quibusdam tenetur, quasi aspernatur quae perferendis
                    porro nihil, quas, libero ipsa voluptatum sit consectetur non.
                    Perspiciatis nesciunt exercitationem ipsum autem sed nam. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Deserunt vel illo esse
                    commodi dicta sed laborum vitae! Odit quia inventore hic ipsam
                    sapiente voluptates veniam cum. Molestiae hic tempore quam! Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tenetur,
                    quasi aspernatur quae perferendis porro nihil, quas, libero ipsa
                    voluptatum sit consectetur non. Perspiciatis nesciunt exercitationem
                    ipsum autem sed nam. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Deserunt vel illo esse commodi dicta sed laborum
                    vitae! Odit quia inventore hic ipsam sapiente voluptates veniam cum.
                    Molestiae hic tempore quam!
                </div>
                <div className={cx('view-more')}>
                    {show ? (
                        <button onClick={() => setShow(!show)}>Rút gọn</button>
                    ) : (
                        <button onClick={() => setShow(!show)}>Xem thêm</button>
                    )}
                </div>
            </div>
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
                            return <ProductItem item={item} index={index} />;
                        })}
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
