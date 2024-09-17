import React, { useEffect, useState } from 'react';
import axios from '../config/axiosConfig';

const CurrentJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = () => {
        axios.get('/current-jobs')
            .then(response => {
                setJobs(response.data);
            })
            .catch(error => {
                console.error('Error fetching current jobs:', error);
            });
    };

    const updateJobStatus = (jobId, status) => {
        axios.post(`/update-job-status/${jobId}`, { status })
            .then(response => {
                alert('Job status updated');
                fetchJobs();
            })
            .catch(error => {
                console.error('Error updating job status:', error);
                alert('Failed to update job status');
            });
    };

    return (
        <div>
            <h2>Current Jobs</h2>
            <ul>
                {Object.keys(jobs).map(carId => {
                    const carJobs = jobs[carId];
                    const progress = carJobs.progress || 0;
                    const car = carJobs[0].car; // Assuming all jobs have the same car info

                    return (
                        <li key={carId}>
                            <h3>{car.name} - {car.registration_number}</h3>
                            <p>Progress: {progress}%</p>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: `${progress}%` }}>
                                    {progress}%
                                </div>
                            </div>
                            <button onClick={() => /* Implement view detail */ null}>View Detail</button>
                            {/* Implement job status update functionality */}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default CurrentJobs;
