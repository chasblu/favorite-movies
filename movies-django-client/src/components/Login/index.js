import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import React from 'react';

const Login = ({ handleSetLogIn, handleLogOut }) => {
    const initialFormData = {
		email: '',
		password: '',
	};
    const history = useHistory();
    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (event) => {
		setFormData((prevState) => {
			return { ...prevState, [event.target.id]: event.target.value };
		});
	};

    const _handleLogin = async (event) => {
		event.preventDefault();
		console.log('you submitted a form!');
        try {
            const res = await fetch('http://localhost:8000/token/login', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (res.status === 200){
                const token = await res.json();
                console.log(token);
                handleSetLogIn(token.auth_token);
                history.push('/')
                } else {
                    alert('Invalid credentials');
                }
            } catch(err) {
                console.log(err)
            }
        };
    return (
        <div>
            <h2>Log In</h2>
            <form onSubmit={_handleLogin}>
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}/>
                    <label htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                 />
                 <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;