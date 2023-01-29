import React from 'react'

import classNames from 'classnames/bind'
import styles from "./Product.module.scss"

import { listProduct } from '../../data/featureProduct'
import ProductItem from '../../Components/Feature/ProductItem'
const cx=classNames.bind(styles)
const Product = () => {
  return (
    <div  className={cx('wrapper')}>
      <div className={cx('title')}>Ao thu nu</div>
      <div className={cx('list-product')}>
        {listProduct && listProduct.map((item,index)=>{
          return  <ProductItem item={item} index={index}/>
        })}
      </div>
    </div>
  )
}

export default Product
