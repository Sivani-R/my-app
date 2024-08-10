import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

function Login() {
    const [formData, setFormData] = useState({
        user_email: '',
        user_password: ''
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

    try {
        const response = await fetch('https://syoft.dev/Api/userlogin/api/userlogin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            const data = await response.json();
            console.log('User Data:', data); // Check what data is returned
            localStorage.setItem('user', JSON.stringify(data)); // Store user information in localStorage
            navigate('/dashboard'); // Redirect to Dashboard
        } else {
            alert('Login Failed');
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Log In</h2>
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
                <button type="submit">Log In</button>
                <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            </form>
        </div>
    );
}

export default Login;
