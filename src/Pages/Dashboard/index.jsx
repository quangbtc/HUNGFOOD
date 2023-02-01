import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from '../../Layout/DashboardLayout';
import Product from './Pages/Product/Product';
import Dashboard from './Pages/Dashboard';
import AddProduct from './Pages/Product/AddProduct';
import EditProduct from './Pages/Product/EditProduct';

const index = () => {
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
            </Routes>
        </div>
    );
};

export default index;
