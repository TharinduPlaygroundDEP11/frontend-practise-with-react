import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerList from './pages/CustomerList';
import RegisterCustomer from './pages/RegisterCustomer';
import RegisterCar from './pages/RegisterCar';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/customers" element={<CustomerList />} />
                <Route path="/register-customer" element={<RegisterCustomer />} />
                <Route path="/register-car" element={<RegisterCar />} />
                {/* Add more routes as necessary */}
                <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
        </Router>
    );
}

export default App;

