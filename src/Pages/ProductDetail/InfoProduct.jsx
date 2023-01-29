import React ,{useState}from 'react';

import classNames from 'classnames/bind';
import styles from './ProductDetail.module.scss';
import { Add, Remove } from '@mui/icons-material';
const cx = classNames.bind(styles);
const InfoProduct = () => {

    const [valueInput,setValueInput]=useState(1)

    const handleClickQty=(type)=>{
        if(type==='remove'){
            if(valueInput >1){
                setValueInput((prev)=>prev-1)
            } else{
                setValueInput(1)
            }      
        }else{
            setValueInput((prev)=> prev+1)
        }
    }
    return (
        <div>
            <div className={cx('title')}>Thông tin sản phẩm</div>
            <div className={cx('desc')}>
                <div className={cx('list-item')}>
                    <div className={cx('item')}>
                        <label className={cx('label')}>Tên sản phẩm:</label>
                        <h4 className={cx('name')}>Áo thun nam phong cách trẻ trung</h4>
                    </div>

                    <div className={cx('item')}>
                        <label className={cx('label')}>Giá:</label>
                        <div className={cx('price')}>8000.000 vnd</div>
                    </div>
                    <div className={cx('item')}>
                        <label className={cx('label')}>Màu sắc:</label>
                        <div className={cx('color')}>
                            <button
                                className={cx('color-item', 'active')}
                                style={{ backgroundColor: 'red' }}
                            ></button>
                            <button
                                className={cx('color-item')}
                                style={{ backgroundColor: 'blue' }}
                            ></button>
                            <button
                                className={cx('color-item')}
                                style={{ backgroundColor: 'yellow' }}
                            ></button>
                            <button
                                className={cx('color-item')}
                                style={{ backgroundColor: 'green' }}
                            ></button>
                        </div>
                    </div>
                    <div className={cx('item')}>
                        <label className={cx('label')}>Kích thước:</label>
                        <div className={cx('size')}>
                            <button className={cx('size-item', 'active')}>SM</button>
                            <button className={cx('size-item')}>M</button>
                            <button className={cx('size-item')}>L</button>
                            <button className={cx('size-item')}>XL</button>
                            <button className={cx('size-item')}>XXL</button>
                        </div>
                    </div>
                    <div className={cx('item')}>
                        <label className={cx('label')}>Số lượng:</label>
                        <div className={cx('qty')}>
                            <Remove className={cx('remove')}
                            onClick={()=>handleClickQty('remove')}
                            />
                            <input type="text" min={1} value={valueInput} />
                            <Add className={cx('add')}
                             onClick={()=>handleClickQty('add')}
                            />
                        </div>
                    </div>
                    <div className={cx('item')}>
                        <label className={cx('label')}>Trạng thái:</label>
                        <span className={cx('status')}>
                           Còn hàng
                        </span>
                    </div>
                    <div className={cx('item')}>
                        <label className={cx('label')}>Mô tả:</label>
                        <div className={cx('detail')}>
                            Thông tin sản phẩm
                            dfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
                        </div>
                    </div>
                </div>
                <div className={cx('button')}>
                    <button className={cx('add-to-cart')}>Thêm giỏ hàng</button>
                    <button className={cx('buy-now')}>Mua ngay</button>
                </div>
            </div>
        </div>
    );
};

export default InfoProduct;
