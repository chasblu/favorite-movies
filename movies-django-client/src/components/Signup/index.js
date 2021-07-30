import { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

import React from 'react';

const Signup = () => {
    const initialFormData = {
        email: '',
        username: '',
        password: '',
        re_password: '',
    };
    const history = useHistory();
    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (event) => {
        setFormData((prevState) => {
            return { ...prevState, [event.target.id]: event.target.value };
        });
    };

    const handlePasswordMatch = (event) => {
        if (formData.password !== formData.re_password) {
            setError(true);
        } else {
            setError(false);
        }
    };
    
    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={}>
                <label htmlFor="username">Username:</label>
                <input 
                    type="username" 
                    name="username" 
                    id="username" 
                    required
                    value={formData.username}
                    onChange={handleChange}
                />
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                />
                <label htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                 />
                <label htmlFor="re_password">Confirm Password:</label>
                <input 
                    type="re_password" 
                    name="re_password" 
                    id="re_password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    onBlur={handlePasswordMatch}
                 />
                 <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Signup;