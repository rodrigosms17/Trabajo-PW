import React from 'react';
import { Link } from 'react-router-dom';
import AppRoutes from '../src/routes';
import './index.css';
const App = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/orders">Orders</Link>
                    </li>
                </ul>
            </nav>

            <AppRoutes />
        </div>
    );
};

export default App;
