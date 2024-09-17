import React, { useEffect, useState } from 'react';
import axios from '../config/axiosConfig';

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetchCustomers();
    }, []);

    const fetchCustomers = () => {
        axios.get('/customers')
            .then(response => {
                setCustomers(response.data.data); // Assuming Laravel's pagination structure
            })
            .catch(error => {
                console.error('Error fetching customers:', error);
            });
    };

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const filteredCustomers = customers.filter(customer =>
        customer.email.includes(search) || customer.name.includes(search)
    );

    return (
        <div>
            <h2>Customer List</h2>
            <input
                type="text"
                placeholder="Search by email or name"
                value={search}
                onChange={handleSearch}
            />
            <ul>
                {filteredCustomers.map(customer => (
                    <li key={customer.id}>{customer.name} - {customer.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default CustomerList;
