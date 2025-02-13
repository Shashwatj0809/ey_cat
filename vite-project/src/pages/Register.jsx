import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const nav = useNavigate();const navigate = useNavigate();
    const handleRegister = async (e) => {
        e.preventDefault();  // ✅ Prevents form default submission

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
                navigate("/dashboard");;
            } else {
                alert(response.data.message);
            }

        } catch (error) {
            console.error("❌ Error:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <div>
            <div className='registerHeading'><h1>Register</h1></div>
            <div className="registerDetails">
                <form className='registerContainer' onSubmit={handleRegister}>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='name' required />
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' required />
                    <input type='text' value={contact} onChange={(e) => setContact(e.target.value)} placeholder='contact' required />
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' required />
                    <input type='text' value={address} onChange={(e) => setAddress(e.target.value)} placeholder='address' required />

                    <button className='registerButton' type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
