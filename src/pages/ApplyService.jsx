import React, { useState, useEffect } from 'react';
import axios from '../config/axiosConfig';

const ApplyService = ({ carId }) => {
    const [services, setServices] = useState([]);
    const [selectedServices, setSelectedServices] = useState([]);

    useEffect(() => {
        // Fetch available services
        axios.get(`/initiate-services/${carId}`)
            .then(response => {
                setServices(response.data.services);
            })
            .catch(error => {
                console.error('Error fetching services:', error);
            });
    }, [carId]);

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedServices([...selectedServices, value]);
        } else {
            setSelectedServices(selectedServices.filter(id => id !== value));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/store-services', {
            car_id: carId,
            service_tasks: selectedServices,
        })
            .then(response => {
                alert('Services applied successfully');
                setSelectedServices([]);
            })
            .catch(error => {
                console.error('Error applying services:', error);
                alert('Failed to apply services');
            });
    };

    return (
        <div>
            <h2>Apply Services to Car</h2>
            <form onSubmit={handleSubmit}>
                {services.map(section => (
                    <div key={section.id}>
                        <h3>{section.name}</h3>
                        {section.tasks.map(task => (
                            <div key={task.id}>
                                <label>
                                    <input
                                        type="checkbox"
                                        value={task.id}
                                        checked={selectedServices.includes(task.id.toString())}
                                        onChange={handleCheckboxChange}
                                    />
                                    {task.name}
                                </label>
                            </div>
                        ))}
                    </div>
                ))}
                <button type="submit">Confirm Services</button>
            </form>
        </div>
    );
};

export default ApplyService;
