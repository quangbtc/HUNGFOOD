import React, { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './ProductDetail.module.scss';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import Modal from '../../Components/Modal/Modal';
import { Fragment } from 'react';

const cx = classNames.bind(styles);
const Slider = ({ data }) => {
    const [index, setIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);

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
                                onClick={()=>handleShowImg(item.img)}
                                >
                                    <img
                                        className={cx('img')}
                                        src={item.img}
                                        alt={item.name}
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
        {showModal && <Modal img={data[index].img} ClickFromModal={ClickFromModal}/>}
        </Fragment>
    );
};

export default Slider;
