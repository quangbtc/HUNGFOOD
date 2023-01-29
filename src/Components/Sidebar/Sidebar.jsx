import React from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { FilterAlt } from '@mui/icons-material';
import { Divider } from '@mui/material';
const cx = classNames.bind(styles);

const Sidebar = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('wp-title')}>
                    <FilterAlt />
                   <span className={cx('title')}> Bộ lọc tìm kiếm</span>
                </div>
            </div>
            <div className={cx('content')}>
                <div className={cx('search-content')}>
                    <h4 className={cx('name-content')}>Tìm theo danh mục</h4>
                    <ul className={cx('list-item')}>
                        <li className={cx('item')}>
                            <input type="radio" name="Danh muc" id="women" />
                            <label htmlFor="women">Ao thun cho nu</label>
                        </li>
                        <li className={cx('item')}>
                            <input type="radio" name="Danh muc" id="men" />
                            <label htmlFor="men">Ao thun cho nam</label>
                        </li>
                        <li className={cx('item')}>
                            <input type="radio" name="Danh muc" id="clothes" />
                            <label htmlFor="clothes">Quan ao nam nu</label>
                        </li>
                        <li className={cx('item')}>
                            <input type="radio" name="Danh muc" id="jeans" />
                            <label htmlFor="jeans">Quan jeans</label>
                        </li>
                        <li className={cx('item')}>
                            <input type="radio" name="Danh muc" id="dress" />
                            <label htmlFor="dress">Ao thun cho nu</label>
                        </li>
                    </ul>
                    <Divider />
                    <h4 className={cx('name-content')}>Tìm theo giá</h4>
                    <ul className={cx('list-item')}>
                        <li className={cx('item')}>
                            <input type="radio" name="price" id="0" />
                            <label htmlFor="0"> {"<<"} 1000.000 vnd</label>
                        </li>
                        <li className={cx('item')}>
                            <input type="radio" name="price" id="1" />
                            <label htmlFor="1">1tr vnd {">>>"} 5tr vnd</label>
                        </li>
                        <li className={cx('item')}>
                            <input type="radio" name="price" id="3" />
                            <label htmlFor="3">5tr vnd {">>>"} 10tr vnd</label>
                        </li>
                        <li className={cx('item')}>
                            <input type="radio" name="price" id="4" />
                            <label htmlFor="4">{">>"} 10.000.000 vnd</label>
                        </li>
                       
                    </ul>
                    <Divider />
                    <h4 className={cx('name-content')}>Sắp xếp</h4>
                    <ul className={cx('list-item')}>
                        <li className={cx('item')}>
                            <input type="radio" name="sort" id="0" />
                            <label htmlFor="0">Xếp theo tên</label>
                        </li>
                        <li className={cx('item')}>
                            <input type="radio" name="sort" id="1" />
                            <label htmlFor="1">Giá giảm dần</label>
                        </li>
                        <li className={cx('item')}>
                            <input type="radio" name="sort" id="3" />
                            <label htmlFor="3">Giá tăng dần</label>
                        </li>
                        <li className={cx('item')}>
                            <input type="radio" name="sort" id="4" />
                            <label htmlFor="4">Sản phẩm mới nhất</label>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
