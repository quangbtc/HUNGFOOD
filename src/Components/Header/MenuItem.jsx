import React from 'react';
import classNames from 'classnames/bind';
import styles from './MenuItem.module.scss';
const cx = classNames.bind(styles);

const MenuItem = ({ data }) => {
    
    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('title')}>Ket qua tim kiem</h4>
            <div className={cx('menu')}>
                <ul className={cx('list-item')}>
                    {data.map((item,index) => (
                        <li className={cx('item')}
                        key={index}
                        >
                            <img
                                className={cx('thumb')}
                                src={item.thumbnail}
                                alt={item.name}
                            />
                            <p className={cx('name')}>{item.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MenuItem;
