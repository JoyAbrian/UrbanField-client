import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phone_number: "",
        password: ""
    });
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const token = localStorage.getItem('token');
    if (token) {
        window.location.href = '/fields';
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://127.0.0.1:5000/users", formData);
            setSuccessMessage("User registered successfully!");
            setFormData({
                username: "",
                email: "",
                phone_number: "",
                password: ""
            });
            window.location.href = '/login';
        } catch (err) {
            setError("Registration failed. Please try again.");
            console.error("Registration Error:", err);
        }
    };

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div>
                <img src="/img/icon.png" alt="icon" className="w-24 mx-auto mb-20"/>
                <form onSubmit={handleSubmit}>
                    <label className="block font-Inter font-medium mt-10" htmlFor="username">Username</label>
                    <input type="text" className="w-96 h-14 border border-slate-400 rounded-lg px-5 mt-2" placeholder="John Doe" name="username" id="username" value={formData.username} onChange={handleInputChange}/>

                    <label className="block font-Inter font-medium mt-5" htmlFor="email">Email Address</label>
                    <input type="email" className="w-96 h-14 border border-slate-400 rounded-lg px-5 mt-2" placeholder="example@gmail.com" name="email" id="email" value={formData.email} onChange={handleInputChange}/>

                    <label className="block font-Inter font-medium mt-5" htmlFor="phone_number">Phone Number</label>
                    <input type="text" className="w-96 h-14 border border-slate-400 rounded-lg px-5 mt-2" placeholder="+1 234 5678" name="phone_number" id="phone_number" value={formData.phone_number} onChange={handleInputChange}/>

                    <label className="block font-Inter font-medium mt-5" htmlFor="password">Password</label>
                    <input type="password" className="w-96 h-14 border border-slate-400 rounded-lg px-5 mt-2" placeholder="***********" name="password" id="password" value={formData.password} onChange={handleInputChange}/>
                    
                    <div>
                        <button type="submit" className="w-96 h-12 bg-blue-600 text-white font-Inter font-medium rounded-lg mt-8">Register</button>
                        {error && <p className="text-red-600 text-center mt-2">{error}</p>}
                        {successMessage && <p className="text-green-600 text-center mt-2">{successMessage}</p>}
                        <p className="text-center">Already have an account? <Link to="/login" className="text-blue-600">Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;