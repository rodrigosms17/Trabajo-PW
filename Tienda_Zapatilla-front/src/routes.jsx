import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserList from './components/UserList';
import OrderList from './components/OrderList';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/users" element={<UserList />} />
            <Route path="/orders" element={<OrderList />} />
        </Routes>
    );
};

export default AppRoutes;
