import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h1>AutoShine Admin Dashboard</h1>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Link to="/customers" className="dashboard-button">
                    View Customer List
                </Link>
                <Link to="/register-customer" className="dashboard-button">
                    Register Customer
                </Link>
                <Link to="/register-car" className="dashboard-button">
                    Register Car
                </Link>
                <Link to="/current-jobs" className="dashboard-button">
                    View Current Jobs
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;
