import React from 'react'
import classNames from "classnames/bind"
import styles from "./Header.module.scss"
const cx=classNames.bind(styles)
const CartItem = ({data}) => {
    return (
        <div className={cx("wrapper-cart")}>
             <h3 className={cx('title')}>Thông tin giỏ hàng</h3>
             {
                data.length>0 && data.map((item,index)=>{
                    return (
                        <div className={cx('top')} key={index}>
                        <div className={cx('wp-img')}>
                            <img src={item.img} alt={item.name} />
                        </div>
                        <div className={cx('wp-info')}>
                            <p className={cx("name")}>
                                <label className={cx('label')}>Tên:</label>
                                {item.name}</p>
                            <div className={cx('price')}>
                            <label className={cx('label')}>Giá:</label>
                                 {item.price}</div>
                            <div className={cx('qty')}>
                            <label className={cx('label')}>Số lượng:</label>
                                {item.qty}</div>
                        </div>
                        </div>
                    )
                })
             }
         
            <div className={cx('bottom')}>
                <button className={cx('order-button')}>Xem giỏ hàng</button>
            </div>
        </div>
    )
}

export default CartItem
