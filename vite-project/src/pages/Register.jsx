import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            console.log("Sending Request...");

            const response = await axios.post("http://localhost:6060/register", {
                name,
                email,
                contact,
                password,
                address,
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            console.log("Response:", response.data);

            if (response.data.success) {
                alert("Registration successful!");
                navigate("/dashboard");
            } else {
                alert(response.data.message);
            }

        } catch (error) {
            console.error("❌ Error:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="register-page">
            <div className="register-card">
                <div className="register-header">
                    <h1>Welcome</h1>
                    <p>Create your account</p>
                </div>
                <form className='register-form' onSubmit={handleRegister}>
                    <div className="form-field">
                        <label>Name</label>
                        <input 
                            type='text' 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            placeholder='Enter your name' 
                            required 
                        />
                    </div>
                    <div className="form-field">
                        <label>Email</label>
                        <input 
                            type='email' 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder='Enter your email' 
                            required 
                        />
                    </div>
                    <div className="form-field">
                        <label>Contact</label>
                        <input 
                            type='text' 
                            value={contact} 
                            onChange={(e) => setContact(e.target.value)} 
                            placeholder='Enter your contact number' 
                            required 
                        />
                    </div>
                    <div className="form-field">
                        <label>Password</label>
                        <input 
                            type='password' 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder='Enter your password' 
                            required 
                        />
                    </div>
                    <div className="form-field">
                        <label>Address</label>
                        <input 
                            type='text' 
                            value={address} 
                            onChange={(e) => setAddress(e.target.value)} 
                            placeholder='Enter your address' 
                            required 
                        />
                    </div>
                    <button className='register-button' type="submit">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
