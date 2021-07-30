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
            
    return (
        <div>
            
        </div>
    );
};

export default Login;