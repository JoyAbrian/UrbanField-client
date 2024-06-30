import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const token = localStorage.getItem('token');
    if (token) {
        window.location.href = '/fields';
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:5000/login', {
                email: email,
                password: password
            });

            // Check response status directly with Axios
            if (response.status === 200) {
                localStorage.setItem('token', response.data.access_token);
                console.log('Login successful:', response.data);
                window.location.href = '/fields';
            } else {
                setError('Failed to login. Please check your credentials.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setError('Failed to login. Please try again later.');
        }
    };

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div>
                <img src="/img/icon.png" alt="icon" className="w-24 mx-auto mb-20"/>
                <form onSubmit={handleSubmit}>
                    <label className="block font-Inter font-medium mt-10" htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        className="w-96 h-14 border border-slate-400 rounded-lg px-5 mt-2"
                        placeholder="example@gmail.com"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label className="block font-Inter font-medium mt-8" htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="w-96 h-14 border border-slate-400 rounded-lg px-5 mt-2"
                        placeholder="***********"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    
                    <div>
                        <button type="submit" className="w-96 h-12 bg-blue-600 text-white font-Inter font-medium rounded-lg mt-8">Login</button>
                        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
                        <p className="text-center mt-4">Don't have an account? <Link to="/register" className="text-blue-600">Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
