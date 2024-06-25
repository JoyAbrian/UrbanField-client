import { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                // Save token to local storage
                localStorage.setItem('token', data.access_token);
                // Optionally, you can redirect the user or perform other actions
                console.log('Login successful:', data);
            } else {
                const errorData = await response.json();
                setError(errorData.message);
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
}

export default LoginPage;