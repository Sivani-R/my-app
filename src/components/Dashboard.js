import React, { useEffect, useState } from 'react';
import './Dashboard.css';

function Dashboard() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Fetch user information from localStorage
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    if (!user) {
        return <div className="dashboard-container"><h2>No user information available.</h2></div>;
    }

    return (
        <div className="dashboard-container">
            <h2 className='heading'>Welcome to the Dashboard, {user.user_firstname}!</h2>
            <div className="user-details">
                <h3>Your Details:</h3>
                <p><strong>Name:</strong> {user.user_firstname} {user.user_lastname}</p>
                <p><strong>Email:</strong> {user.user_email}</p>
                <p><strong>Phone:</strong> {user.user_phone}</p>
                <p><strong>City:</strong> {user.user_city}</p>
                <p><strong>Zipcode:</strong> {user.user_zipcode}</p>
            </div>
        </div>
    );
}

export default Dashboard;

