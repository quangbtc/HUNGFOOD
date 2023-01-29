
import React ,{memo}from 'react';
import { Delete, Edit } from '@mui/icons-material';
import { NumericFormat } from 'react-number-format';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const ImgContainer = styled.div`
    width: 80px;
    height: 60px;
    border-radius: 5px;
    background-image: url(${(props)=>props.bg});
    background-position:center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const ProductItem = ({ data }) => {
    console.log('check data',data)
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
                    {data &&
                        data.length > 0 &&
                        data.map((item, index) => {
                                console.log(item.img)
                            return (
                                <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td>
                                        <ImgContainer
                                        bg={item.img}
                                        >
                                            {/* <img className="img" src={item.img} alt="" /> */}
                                        </ImgContainer>
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
                                    <td>{item.color[0] && item.color[0].label?item.color[0].label:""}</td>
                                    <td>{item.size[0] &&item.size[0].label?item.size[0].label:""}</td>
                                    <td>{item.inStock}</td>
                                    <td>
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
                                        <Delete
                                            sx={{
                                                fontSize: 30,
                                                color: 'red',
                                                cursor: 'pointer',
                                                '&:hover': {
                                                    color: 'yellow',
                                                },
                                            }}
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
    data: PropTypes.array,
};

export default memo(ProductItem);
