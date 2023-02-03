import React, { memo } from 'react';
import { Delete, Edit } from '@mui/icons-material';
import { NumericFormat } from 'react-number-format';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const ImgContainer = styled.div`
    width: 80px;
    height: 60px;
    border-radius: 5px;
    background-image: url(${(props) => props.bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const ProductItem = ({ products, handleDeleteProductFromParent }) => {
    const location=useLocation()
    console.log(location)
    const handleDeleteProduct = (id) => {
        handleDeleteProductFromParent(id);
    };
    return (
        <div>
            <Table hover>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Hình ảnh</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá</th>
                        <th>Màu sắc</th>
                        <th>Size</th>
                        <th>Còn hàng</th>
                        <th>Tác vụ</th>
                    </tr>
                </thead>
                <tbody>
                    {products &&
                        products.length > 0 &&
                        products.map((item, index) => {
                            return (
                                <tr key={item._id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>
                                        <ImgContainer bg={item.img}></ImgContainer>
                                    </td>
                                    <td>{item.title}</td>
                                    <td>
                                        {' '}
                                        <NumericFormat
                                            displayType="text"
                                            value={item.price}
                                            suffix={'  đ'}
                                            thousandSeparator=","
                                        />{' '}
                                    </td>
                                    <td>
                                        {item.color[0] && item.color[0].label
                                            ? item.color[0].label
                                            : ''}
                                    </td>
                                    <td>
                                        {item.size[0] && item.size[0].label
                                            ? item.size[0].label
                                            : ''}
                                    </td>
                                    <td>{item.inStock}</td>
                                    <td>
                                        <Link to={`${location.pathname}/edit/${item._id}`}>
                                        <Edit
                                            sx={{
                                                fontSize: 30,
                                                color: 'green',
                                                cursor: 'pointer',
                                                marginRight: '5px',
                                                '&:hover': {
                                                    color: 'red',
                                                },
                                            }}                        
                                        />
                                        </Link>
                                        <Delete
                                            sx={{
                                                fontSize: 30,
                                                color: 'red',
                                                cursor: 'pointer',
                                                '&:hover': {
                                                    color: 'yellow',
                                                },
                                            }}
                                            onClick={() => handleDeleteProduct(item._id)}
                                        />
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </Table>
        </div>
    );
};
ProductItem.propTypes = {
    products: PropTypes.array,
};

export default memo(ProductItem);
