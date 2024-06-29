import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../components/Layouts/Dashboard/DashboardSidebar';
import DashboardNavbar from '../components/Layouts/Dashboard/DashboardNavbar';
import { jwtDecode } from "jwt-decode";

const DashboardPage = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            window.location.href = '/login';
        } else {
            try {
                const decodedToken = jwtDecode(token);
                const userId = decodedToken.sub;

                fetchUser(userId);
            } catch (error) {
                console.error('Error decoding token:', error);
                window.location.href = '/login';
            }
        }
    }, []);

    const fetchUser = async (userId) => {
        try {
            const response = await fetch(`http://127.0.0.1:5000/users/${userId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }
            const userData = await response.json();
            setUser(userData);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    return (
        <div className="flex h-screen overflow-hidden">
            <div className="w-80 bg-gray-800 flex-shrink-0">
                <DashboardSidebar username={user.username} role={user.role} />
            </div>
            <div className="flex flex-col flex-grow overflow-hidden h-full">
                <DashboardNavbar  username={user.username} />
                <div className="p-4 overflow-y-auto h-full">
                    <Outlet context={{ role: user.role }} />
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;