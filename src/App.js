import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './Layout/MainLayout/MainLayout';
import Home from './Pages/Home/Home';
import ProductLayout from './Layout/ProductLayout/ProductLayout';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Product from './Pages/Product/Product';
import Cart from './Pages/Cart/Cart';
import Login from './Pages/Auth/Login';
import SignIn from './Pages/Auth/SignIn';
import { useSelector } from 'react-redux';
import NotFound from './Pages/NotFound';
import Dashboard from './Pages/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const user = useSelector((state) => state.user.currentUser);
    return (
        <>
            <Router>
                <div className="App">
                    <Routes>
                        {/* {publicRoutes.map((route, index) => {
                            const Pages = route.component;
                            let Layout = MainLayout;
                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Pages />
                                        </Layout>
                                    }
                                />
                            );
                        })} */}
                        <Route
                            path="/"
                            exact
                            element={
                                <MainLayout>
                                    <Home />
                                </MainLayout>
                            }
                        />
                        <Route
                            path="/product"
                            element={
                                <ProductLayout>
                                    <Product />
                                </ProductLayout>
                            }
                        />
                        <Route
                            path="/product/:id"
                            element={
                                <MainLayout>
                                    <ProductDetail />
                                </MainLayout>
                            }
                        />
                        <Route
                            path="/cart"
                            element={
                                <MainLayout>
                                    <Cart />
                                </MainLayout>
                            }
                        />
                        <Route
                            path="/login"
                            element={user ? <Navigate to="/" replace /> : <Login />}
                        />
                        <Route
                            path="/signin"
                            element={user ? <Navigate to="/" replace /> : <SignIn />}
                        />
                        <Route
                            path="/dashboard/*"
                            exact
                            element={user && user.isAdmin ? <Dashboard /> : <NotFound />}
                        />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </Router>
        </>
    );
};

export default App;
