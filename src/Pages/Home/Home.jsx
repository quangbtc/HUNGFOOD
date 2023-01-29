import React,{useEffect,useState} from 'react';


import Slider from '../components/Slider';
import { dataSlide } from '../../data/slider';
import { featureProduct } from '../../data/featureProduct';
import FeatureProduct from '../../Components/Feature/FeatureProduct';
import ProductApi from '../../api/Product';



const Home = () => {
  const setting={
    autoLoading:true,
    time:5000,
  }
  const [products,setProducts]=useState([])
  useEffect(() => {
      const getProducts=async()=>{
       const res= await ProductApi.getAll()
       if(res && res.data){
        setProducts(res.data)
       }
      }
     getProducts()
     
    return () => {
     
    };

  }, []);
  console.log('Check product',products)
    return (
        <>
           <Slider data={dataSlide} setting={setting} />
           <FeatureProduct products={featureProduct} title={'SẢN PHẨM BÁN CHẠY'}/>
           <FeatureProduct products={featureProduct} title={'SẢN PHẨM NỔI BẬT'}/>
           <FeatureProduct products={featureProduct} title={'SALE SẬP SÀN 50%'}/>
        </>
    );
};

export default Home;
