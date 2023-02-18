import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '../../Layout/DashboardLayout';
import Product from './Pages/Product/Product';
import Dashboard from './Pages/Dashboard/Dashboard';
import AddProduct from './Pages/Product/AddProduct';
import EditProduct from './Pages/Product/EditProduct';
import User from './Pages/User';
import UserDetail from './Pages/User/UserDetail';


const Index = () => {
    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    exact
                    element={
                        <DashboardLayout>
                            <Dashboard />
                        </DashboardLayout>
                    }
                />
                <Route
                    path="/product"
                    exact
                    element={
                        <DashboardLayout>
                            <Product />
                        </DashboardLayout>
                    }
                />
                <Route
                    path="/product/add"
                    exact
                    element={
                        <DashboardLayout>
                            <AddProduct />
                        </DashboardLayout>
                    }
                />
                <Route
                    path="/product/edit/:id"
                    exact
                    element={
                        <DashboardLayout>
                            <EditProduct />
                        </DashboardLayout>
                    }
                />
                <Route
                    path="/user"
                    exact
                    element={
                        <DashboardLayout>
                            <User />
                        </DashboardLayout>
                    }
                />
                <Route
                    path="/user/profile"
                    exact
                    element={
                        <DashboardLayout>
                            <UserDetail />
                        </DashboardLayout>
                    }
                />
               
            </Routes>
        </div>
    );
};

export default Index;
