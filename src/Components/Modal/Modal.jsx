import React from 'react';
import classNames from 'classnames/bind';
import styles from './Modal.module.scss';
import { Close } from '@mui/icons-material';

const cx = classNames.bind(styles);
const Modal = ({ img, ClickFromModal }) => {
    const handleOnclick = () => {
        ClickFromModal(false);
    };
    return (
        <div className={cx('modal')}>
            <div
                className={cx('img')}
                style={{
                    backgroundImage: `url(${img})`,
                }}
            >
                <div className={cx('icon-close')} onClick={() => handleOnclick()}>
                    <Close />
                </div>
            </div>
        </div>
    );
};

export default Modal;
