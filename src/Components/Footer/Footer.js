import React from 'react'

import classNames from 'classnames/bind'
import styles from "./Footer.module.scss"
import { Mail, Phone, Place } from '@mui/icons-material'
const cx=classNames.bind(styles)
const Footer = () => {
  return (
    <div className={cx("wrapper")}>
        <div className={cx('logo')}>
            HUNGFOOD
        </div>
        <div className={cx('column contact')}>
            <h4 className={cx('title')}>Thong tin lien he</h4>
            <ul className={cx('list-item')}>
                <li className={cx('item')}>
                    <Mail />
                    phungthanhquang73@gmail.com
                </li>
                <li className={cx('item')}>
                    <Place />
                    84/14 KP2 P tam hoa, Bien Hoa, Dong Nai
                </li>
                <li className={cx('item')}>
                    <Phone />
                   (+84)-977720829
                </li>
            </ul>

        </div>
        <div className={cx('column categoies')}>
            <h4 className={cx('title')}>Danh muc</h4>
            <ul className={cx('list-item')}>
                <li className={cx('item')}>
                   Quan Jean Nam
                </li>
                <li className={cx('item')}>
                   Quan Jean Nu
                </li>
                <li className={cx('item')}>
                   Ao thun Nam
                </li>
                <li className={cx('item')}>
                   Ao thun Nu
                </li>
                <li className={cx('item')}>
                   Ao len Nu
                </li>
            </ul>

        </div>
        <div className={cx('column delivery')}>
            <h4 className={cx('title')}>Chính sách giao hàng</h4>
            <ul className={cx('list-item')}>
                <li className={cx('item')}>
                   Giao hang tận nơi
                </li>
                <li className={cx('item')}>
                   Thanh toán online
                </li>
                <li className={cx('item')}>
                   Thanh toán tại cửa hàng
                </li>
                <li className={cx('item')}>
                   Ao thun Nu
                </li>
                <li className={cx('item')}>
                   Ao len Nu
                </li>
            </ul>

        </div>
    </div>
  )
}

export default Footer
