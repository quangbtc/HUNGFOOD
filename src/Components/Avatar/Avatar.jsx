import React from 'react';

import classNames from 'classnames/bind';
import styles from './Avatar.module.scss';

const cx = classNames.bind(styles);
const Avatar = () => {
    const image =
        'https://png.pngtree.com/element_our/20200610/ourmid/pngtree-character-default-avatar-image_2237203.jpg';
    return (
        <div className={cx('wrapper')}>
            <div
                className={cx('avatar')}
                style={{ backgroundImage: `url(${image})` }}
            ></div>
            <h4>Anomyus</h4>
        </div>
    );
};

export default Avatar;
