import React, { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './ProductDetail.module.scss';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import Modal from '../../Components/Modal/Modal';
import { Fragment } from 'react';

const cx = classNames.bind(styles);
const Slider = ({product}) => {
    const [index, setIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);
   const data=product.thumbs?product.thumbs:[]
    //Click to slide
    const handleOnclick = (type) => {
        const lengthOfData = data.length;
        console.log('check lengh', lengthOfData);
        if (type === 'left') {
            index > 0 ? setIndex((prev) => prev - 1) : setIndex(lengthOfData - 1);
        } else {
            index < lengthOfData - 1 ? setIndex((prev) => prev + 1) : setIndex(0);
        }
    };
    //Click to img function

    const handleShowImg=(item)=>{
            setShowModal(!showModal)
           
    }

    const ClickFromModal=(variable)=>{
            setShowModal(variable)
    }
    const styles = {
        transform: `translate(${index * -400}px)`,
    };
    return (
        <Fragment>
        <div className={cx('container')}>
            <div className={cx('arrow-left')} onClick={() => handleOnclick('left')}>
                <ArrowBack />
            </div>
            <div className={cx('wp-slider')} style={styles}>
                <div className={cx('slider')}>
                    {data &&
                        data.map((item, index) => {
                            return (
                                <div className={cx('img-contain')} key={index}
                                onClick={()=>handleShowImg(item)}
                                >
                                    <img
                                        className={cx('img')}
                                        src={item}
                                        alt={item.title}
                                    />
                               
                                </div>
                            );
                        })}
                </div>
            </div>
            <div className={cx('arrow-right')} onClick={() => handleOnclick('right')}>
                <ArrowForward />
            </div>
        </div>
        {showModal && <Modal img={data[index]} ClickFromModal={ClickFromModal}/>}
        </Fragment>
    );
};

export default Slider;
