import React, { useEffect, useState,useCallback } from 'react';
import { Search } from '@mui/icons-material';
import styled from 'styled-components';
import ProductItem from '../../Components/ProductItem';
import ProductApi from '../../../../api/Product';
import { Link, useLocation } from 'react-router-dom';
import Loading from "../../../../Components/Loading/Loading"
const Container = styled.div`
    margin: 20px 50px;
`;
//============HEADER=============
const Header = styled.div`
    margin: 20px 0px;
`;
const Title = styled.div`
    margin: 20px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
        font-size: 24px;
        color: red;
        text-transform: uppercase;
    }
`;
const WpSearch = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: rgba(0, 0, 0, 0.1);
    padding: 5px 20px;
    width: 30%;

    border-radius: 20px;
    .input {
        flex: 1;
        font-size: 18px;
        font-style: italic;
        margin-right: 10px;

        border: none;
        outline: none;
        background: transparent;
        caret-color: aqua;
    }
    .icon-search {
        color: blue;
        margin: 0 auto;
        cursor: pointer;
        &:hover {
            color: white;
        }
    }
`;
const Button = styled.button`
    outline: none;
    border: none;
    border-radius: 5px;

    background-color: green;
    color: white;
    font-size: 18px;
    padding: 10px 20px;

    cursor: pointer;
    opacity: 0.7;
    &:hover {
        opacity: 1;
    }
`;
//=========END HEADER==========//
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px 0px;
`;
const Action = styled.div`
    .select {
        min-width: 150px;
        height: 40px;
        outline: none;
    }
    .option {
        background-color: white;
    }
`;
const Filter = styled.div`
    .select {
        height: 40px;
        outline: none;
    }
    .option {
        background-color: white;
    }
`;
const ListProduct = styled.div``;

const Product = () => {
    const location = useLocation();
    console.log('check parent render');

    const [products, setProducts] = useState([]);
    const [isLoading,setIsLoading]=useState(false)
    const getProducts = useCallback(async () => {
        try {
            let res = await ProductApi.getAll();
            if (res && res.data) {
                setProducts(res.data);
            }
        } catch (error) {
            console.log(error);
        }
    }, []);
    useEffect(() => {
        console.log('check render useEffect')
        getProducts();
        //Clean
        return () => {};
    }, [isLoading]);

    const handleDeleteProductFromParent = async (id) => {
        try {
            setIsLoading(true)
            const res = await ProductApi.deleteProduct(id);
           if(res.data){
            setIsLoading(false)
           }
        } catch (error) {
            setIsLoading(false)
            console.log(error);
        }
    };
    return (
        <Container>
            <Header>
                <Title>
                    <h4 className="title">San pham</h4>
                    <WpSearch>
                        <input className="input" type="text" placeholder="Tim san pham" />
                        <Search className="icon-search" />
                    </WpSearch>
                    <Link to={location.pathname + '/add'}>
                        <Button>Thêm sản phẩm</Button>
                    </Link>
                </Title>
                <Wrapper>
                    <Action>
                        <select name="" id="" className="select">
                            <option value="" className="option">
                                Actions
                            </option>
                            <option value="" className="option">
                                Van chuyen
                            </option>
                            <option value="" className="option">
                                Bala
                            </option>
                            <option value="" className="option">
                                Pendin
                            </option>
                        </select>
                    </Action>
                    <Filter>
                        <select name="" id="" className="select">
                            <option value="" className="option">
                                Per/page
                            </option>
                            <option value="" className="option">
                                5
                            </option>
                            <option value="" className="option">
                                10
                            </option>
                            <option value="" className="option">
                                20
                            </option>
                        </select>
                    </Filter>
                </Wrapper>
            </Header>
            <ListProduct>
                {products.length > 0 ? (
                    <ProductItem
                        products={products}
                        handleDeleteProductFromParent={handleDeleteProductFromParent}
                    />
                ) : (
                    'Khong co san pham nao'
                )}
            </ListProduct>
            {isLoading && <Loading type="spin" color="red"/>}
        </Container>
    );
};

export default Product;
