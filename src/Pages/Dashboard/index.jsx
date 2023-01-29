import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from '../../Layout/DashboardLayout';
import Product from './Pages/Product';
import Dashboard from './Pages/Dashboard';
import AddProduct from './Components/AddProduct';

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
            </Routes>
        </div>
    );
};

export default index;
