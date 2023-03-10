import React, { useState,useEffect } from 'react';

import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';

const cx = classNames.bind(styles);
const Slider = ({ data,setting }) => {
    const {autoLoading,time}=setting
    const [index, setIndex] = useState(0);
    const handleOnclick = (type) => {
        const lengthOfData = data.length;
        if (type === 'left') {
            index > 0 ? setIndex((prev) => prev - 1) : setIndex(lengthOfData-1);
        } else {
            index < lengthOfData - 1 ? setIndex((prev) => prev + 1) : setIndex(0);
        }
    };
    const styles = { 
      transform: `translate(${index* -80}vw)` 
  };
  useEffect(() => {
    const lengthOfData = data.length;
    let timerId;
    if(autoLoading && index<=lengthOfData-1){
         timerId=setInterval(()=>{
          setIndex((prev)=>prev+1)
        },time)

    }else{
      setIndex(0)
      clearInterval(timerId)
    }
    return () => {
      clearInterval(timerId)
    };
  }, [index,autoLoading,data.length,time]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('icon-left')} onClick={() => handleOnclick('left')}>
                <ArrowLeft />
            </div>
            <div className={cx('slider-container')}
            style={styles}
            >
                {data &&
                    data.map((item,index) => {
                        return (
                            <div className={cx('slider')} key={index}>
                                <div className={cx('img-container')}>
                                    <img
                                        src={
                                            data
                                                ? item.img
                                                : 'https://picsum.photos/200/300'
                                        }
                                        alt={item.title}
                                    />
                                </div>

                                <div className={cx('info-container')}>
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        );
                    })}
            </div>
            <div className={cx('icon-right')} onClick={() => handleOnclick('right')}>
                <ArrowRight />
            </div>
        </div>
    );
};

export default Slider;
