import React from 'react';
import { useState, useEffect } from 'react';

import {
    Home,
    LoginOutlined,
    LogoutOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
} from '@mui/icons-material';
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';

import TippyHeadless from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import CartItem from './CartItem';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import MenuItem from './MenuItem';
import ProductApi from '../../api/Product';
import useDebounce from '../../hooks/useDebounce';
import { Avatar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../Redux/userSlice';
const cx = classNames.bind(styles);

const Header = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const user = useSelector((state) => state.user.currentUser);
    const dispatch = useDispatch();
    const deBounce = useDebounce(searchValue, 500);

    const handleLogout = () => {
        dispatch(logOut());
    };
    const handleHideResult = () => {
        setShowResult(false);
    };
    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchData = async () => {
            let res = await ProductApi.searchProduct({
                q: searchValue,
            });
            console.log(res)
            if (res.data.length > 0) {
                setSearchResult(res.data);
            }
        };
        fetchData();
        return () => {};
    }, [deBounce]);
    const quantity = useSelector((state) => state.cart.quantity);
    const products = useSelector((state) => state.cart.products);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('top-header')}>
                <h3>
                    Khuy??n m??i gi???m gi?? s???c m??a noeln, Ch??ng t??i gi???m gi?? gi?? 30% cho t???t
                    c??? c??c s???n ph???m
                </h3>
            </div>
            <div className={cx('bottom-header')}>
                <div className={cx('logo')}>
                    <Link to=".." style={{ textDecoration: 'none' }}>
                        <h1>HUNGFOOD</h1>
                    </Link>
                </div>
                <div className={cx('search')}>
                    <div className={cx('wp-icon')}>
                        <Tippy content="Trang ch???" placement="bottom">
                            <Link to={'/'}>
                                <button className={cx('icon')}>
                                    <Home />
                                </button>
                            </Link>
                        </Tippy>
                    </div>
                    <TippyHeadless
                        interactive={true}
                        placement="bottom"
                        visible={showResult && searchResult.length > 0 ? true : false}
                        onClickOutside={() => handleHideResult()}
                        render={(attrs) => (
                            <div className={cx('wp-cart')} tabIndex="-1" {...attrs}>
                                {searchResult && searchResult.length > 0 && (
                                    <MenuItem data={searchResult} />
                                )}
                            </div>
                        )}
                    >
                        <div className={cx('wp-search')}>
                            <input
                                type="text"
                                placeholder="Tim kiem san pham"
                                onChange={(e) => setSearchValue(e.target.value)}
                                onFocus={() => setShowResult(true)}
                            />
                            <div className={cx('icon-search')}>
                                <SearchOutlined />
                            </div>
                        </div>
                    </TippyHeadless>
                </div>
                {user ? (
                    <TippyHeadless
                        placement="bottom"
                        interactive={true}
                        render={(attrs) => (
                            <div className={cx('user-info')} tabIndex="-1" {...attrs}>
                                <ul className={cx('user-list')}>
                                    <li className={cx('user-list-item')}>
                                        Th??ng tin c?? nh??n
                                    </li>
                                    <li className={cx('user-list-item')}>
                                        Th??ng tin ????n h??ng
                                    </li>
                                </ul>
                            </div>
                        )}
                    >
                        <div className={cx('profile')}>
                            <Avatar />
                            <span>{user.username}</span>
                        </div>
                    </TippyHeadless>
                ) : (
                    ''
                )}

                <div className={cx('menu')}>
                    <div className={cx('wp-icon')}>
                        {user ? (
                            <Tippy content="????ng xu???t" placement="bottom">
                                <button className={cx('icon')}>
                                    <Link to="/login" style={{ textDecoration: 'none' }}>
                                        <LogoutOutlined onClick={handleLogout} />
                                    </Link>
                                </button>
                            </Tippy>
                        ) : (
                            <Tippy content="????ng nh???p" placement="bottom">
                                <button className={cx('icon')}>
                                    <Link to="/login" style={{ textDecoration: 'none' }}>
                                        <LoginOutlined />
                                    </Link>
                                </button>
                            </Tippy>
                        )}
                    </div>
                    <div className={cx('wp-icon')}>
                        <TippyHeadless
                            interactive={true}
                            placement={'bottom'}
                            hideOnClick={true}
                            render={(attrs) => (
                                <div className={cx('wp-cart')} tabIndex="-1" {...attrs}>
                                    {products.length > 0 ? (
                                        <CartItem data={products} />
                                    ) : (
                                        <div className={cx('empty-cart')}>
                                            Gi??? h??ng tr???ng
                                        </div>
                                    )}
                                </div>
                            )}
                        >
                            <Link to={'/cart'}>
                                <button className={cx('icon')}>
                                    <Badge badgeContent={quantity} color="primary">
                                        <ShoppingCartOutlined className={cx('cart')} />
                                    </Badge>
                                </button>
                            </Link>
                        </TippyHeadless>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
