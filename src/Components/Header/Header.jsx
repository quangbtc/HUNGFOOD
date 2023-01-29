import React from 'react';
import { useState, useEffect } from 'react';

import {
    Home,
    LoginOutlined,
    LogoutOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
} from '@mui/icons-material';
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

const cart = [
    {
        id: 0,
        name: 'Iphone 16 Plus',
        img: 'data:image/jpeg;base64,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',
        qty: 2,
        price: 20,
    },
    {
        id: 1,
        name: 'Iphone 16 Plus',
        img: 'data:image/jpeg;base64,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',
        qty: 2,
        price: 20,
    },
    {
        id: 2,
        name: 'Iphone 16 Plus',
        img: 'data:image/jpeg;base64,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',
        qty: 2,
        price: 20,
    },
];

const Header = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const user = useSelector((state) => state.user.currentUser);
    const dispatch=useDispatch()
    const deBounce = useDebounce(searchValue, 500);

    const handleLogout=()=>{
        dispatch(logOut())
    }
    const handleHideResult = () => {
        setShowResult(false);
    };
    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }
        console.log(searchValue);
        console.log(showResult);
        const fetchData = async () => {
            let res = await ProductApi.searchProducts({
                q: searchValue,
            });
            if (res.data.length > 0) {
                setSearchResult(res.data);
            }
        };
        fetchData();
        console.log(searchResult);
        return () => {};
    }, [deBounce]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('top-header')}>
                <h3>
                    Khuyên mãi giảm giá sốc mùa noeln, Chúng tôi giảm giá giá 30% cho tất
                    cả các sản phẩm
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
                        <Tippy content="Trang chủ" placement="bottom">
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
                    <div className={cx('profile')}>
                        <Avatar  />
                        <span>{user.username}</span>
                    </div>
                ) : (
                    ''
                )}

                <div className={cx('menu')}>
                

                    <div className={cx('wp-icon')}>
                        {user ? (
                            <Tippy content="Đăng xuất" placement="bottom">
                                <button className={cx('icon')}>
                                    <Link to="/login" style={{ textDecoration: 'none' }}>
                                        <LogoutOutlined 
                                        onClick={handleLogout}
                                        />
                                    </Link>
                                </button>
                            </Tippy>
                        ) : (
                            <Tippy content="Đăng nhập" placement="bottom">
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
                            interactive="true"
                            placement="bottom"
                            render={(attrs) => (
                                <div className={cx('wp-cart')} tabIndex="-1" {...attrs}>
                                    {cart.length > 0 ? (
                                        <CartItem data={cart} />
                                    ) : (
                                        'Khong co san pham'
                                    )}
                                </div>
                            )}
                        >
                            <button className={cx('icon')}>
                                <ShoppingCartOutlined className={cx('cart')} />
                            </button>
                        </TippyHeadless>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
