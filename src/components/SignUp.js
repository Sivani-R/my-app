import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';


function SignUp() {
    const [formData, setFormData] = useState({
        user_firstname: '',
        user_email: '',
        user_password: '',
        user_phone: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            ...formData,
            user_lastname: 'static_lastname',
            user_city: 'static_city',
            user_zipcode: '123456'
        };

        try {
            const response = await fetch('https://syoft.dev/Api/user_registeration/api/user_registeration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                alert('Registration Successful!');
                navigate('/login');  // Redirect to Login page
            } else {
                alert('Registration Failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <input
                    type="text"
                    name="user_firstname"
                    placeholder="First Name"
                    value={formData.user_firstname}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="user_password"
                    placeholder="Password"
                    value={formData.user_password}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="user_phone"
                    placeholder="Phone Number"
                    value={formData.user_phone}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;
