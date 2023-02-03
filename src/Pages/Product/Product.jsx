import React,{useState,useEffect} from 'react'

import classNames from 'classnames/bind'
import styles from "./Product.module.scss"

import { listProduct } from '../../data/featureProduct'
import ProductItem from '../../Components/Feature/ProductItem'
import { useLocation } from 'react-router-dom'
const cx=classNames.bind(styles)
const Product = () => {
  const location=useLocation()
    const initProducts=location.state.products

  const [products,setProducts]=useState([]) 
  const [title,setTitle]=useState("") 
  //Get product from home
  useEffect(() => {
    setProducts(initProducts)
    setTitle(location.state.title)
  }, [])

  return (
    <div  className={cx('wrapper')}>
      <div className={cx('title')}>{title}</div>
      <div className={cx('list-product')}>
        {products && products.map((item)=>{
          return  <ProductItem item={item} index={item._id}/>
        })}
      </div>
    </div>
  )

}

export default Product
