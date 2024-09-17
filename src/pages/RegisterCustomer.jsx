import React, { useState } from 'react';
import axios from '../config/axiosConfig';

const RegisterCustomer = () => {
    const [formData, setFormData] = useState({
        nic: '',
        name: '',
        email: '',
        phone: '',
        address: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/customers', formData)
            .then(response => {
                alert('Customer registered successfully');
                setFormData({
                    nic: '',
                    name: '',
                    email: '',
                    phone: '',
                    address: '',
                });
            })
            .catch(error => {
                console.error('Error registering customer:', error);
                alert('Failed to register customer');
            });
    };

    return (
        <div>
            <h2>Register Customer</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="nic"
                    placeholder="NIC"
                    value={formData.nic}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterCustomer;
