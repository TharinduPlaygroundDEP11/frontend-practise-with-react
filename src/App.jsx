import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import CustomerList from './pages/CustomerList';
import RegisterCustomer from './pages/RegisterCustomer';
import RegisterCar from './pages/RegisterCar';
import ApplyService from './pages/ApplyService';
import CurrentJobs from './pages/CurrentJobs';
import './App.css';

const ApplyServiceWrapper = () => {
  const { carId } = useParams();
  return <ApplyService carId={carId} />;
};

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/customers" element={<CustomerList />} />
                <Route path="/register-customer" element={<RegisterCustomer />} />
                <Route path="/register-car" element={<RegisterCar />} />
                <Route path="/apply-service/:carId" element={<ApplyServiceWrapper />} />
                <Route path="/current-jobs" element={<CurrentJobs />} />

                <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
        </Router>
    );
}

export default App;

