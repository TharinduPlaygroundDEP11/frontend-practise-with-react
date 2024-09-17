import React, { useState, useEffect } from 'react';
import axios from '../config/axiosConfig';

const RegisterCar = () => {
    const [formData, setFormData] = useState({
        registration_number: '',
        model: '',
        fuel_type: '',
        transmission: '',
        customer_id: '',
    });
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        // Fetch customers to populate the customer dropdown
        axios.get('/customers')
            .then(response => {
                setCustomers(response.data.data); // Adjust based on your pagination
            })
            .catch(error => {
                console.error('Error fetching customers:', error);
            });
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/cars', formData)
            .then(response => {
                alert('Car registered successfully');
                setFormData({
                    registration_number: '',
                    model: '',
                    fuel_type: '',
                    transmission: '',
                    customer_id: '',
                });
            })
            .catch(error => {
                console.error('Error registering car:', error);
                alert('Failed to register car');
            });
    };

    return (
        <div>
            <h2 className='text-3xl font-bold underline'>Register Car</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="registration_number"
                    placeholder="Registration Number"
                    value={formData.registration_number}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="model"
                    placeholder="Model"
                    value={formData.model}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="fuel_type"
                    placeholder="Fuel Type"
                    value={formData.fuel_type}
                    onChange={handleChange}
                    required
                />
                <select name="transmission" value={formData.transmission} onChange={handleChange} required>
                    <option value="">Select Transmission</option>
                    <option value="auto">Automatic</option>
                    <option value="manual">Manual</option>
                </select>
                <select name="customer_id" value={formData.customer_id} onChange={handleChange} required>
                    <option value="">Select Customer</option>
                    {customers.map(customer => (
                        <option key={customer.id} value={customer.id}>{customer.name} - {customer.email}</option>
                    ))}
                </select>
                <button type="submit">Register Car</button>
            </form>
        </div>
    );
};

export default RegisterCar;
