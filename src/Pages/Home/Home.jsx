import React, { useEffect, useState } from 'react';

import Slider from '../components/Slider';
import { dataSlide } from '../../data/slider';
import { featureProduct } from '../../data/featureProduct';
import FeatureProduct from '../../Components/Feature/FeatureProduct';
import ProductApi from '../../api/Product';

const Home = () => {
    const setting = {
        autoLoading: true,
        time: 5000,
    };
    const [products, setProducts] = useState([]);
    const [saleProducts, setSaleProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            const res = await ProductApi.getAll();
            if (res && res.data) {
                setProducts(res.data);
            }
        };
        const getSaleProducts = async () => {
            const res = await ProductApi.getSaleProducts();
            if (res && res.data) {
                setSaleProducts(res.data);
            }
        };
        getProducts();
        getSaleProducts();

        return () => {};
    }, []);
    console.log('Check product', products);
    return (
        <>
            <Slider data={dataSlide} setting={setting} />
            <FeatureProduct products={products} title={'SẢN PHẨM BÁN CHẠY'} />
            <FeatureProduct products={products} title={'SẢN PHẨM NỔI BẬT'} />
            <FeatureProduct products={saleProducts} title={'SALE SẬP SÀN'} />
        </>
    );
};

export default Home;
