import React from 'react'

import classNames from 'classnames/bind'
import styles from "./Comment.module.scss"
import Avatar from '../Avatar/Avatar'

const cx=classNames.bind(styles)

const Comment = () => {
  return (
    <div className={cx('wrapper')}>
        <div className={cx('comment-content')}>
            <Avatar />
            <div className={cx('content')}>
                San pham tot qua !!!
            </div>
        </div>
    </div>
  )
}

export default Comment
