import { useState, useEffect } from 'react';
import axios from 'axios';
import DashboardAdminCard from '../../Elements/Card/DashboardAdminCard';

const DashboardAdmins = () => {
    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        const fetchAdmins = async () => {
            try {
                const response = await axios.get('http://localhost:5000/users');
                // Filter users with role === 'admin'
                const adminUsers = response.data.filter(user => user.role === 'admin');
                setAdmins(adminUsers);
            } catch (error) {
                console.error('Error fetching admins:', error);
            }
        };
        fetchAdmins();
    }, []);

    return (
        <div className="mt-5 mx-10 font-Inter font-medium">
            <div className="mx-4 flex justify-between">
                <h1 className="text-2xl font-medium">ADMINS</h1>
                <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                    UPDATE
                </button>
            </div>
            <div className="grid grid-cols-4 gap-8 mt-4 font-Nunito_Sans">
                {admins.map(admin => (
                    <DashboardAdminCard key={admin.id} id={admin.id} username={admin.username} email={admin.email} />
                ))}
            </div>
        </div>
    );
};

export default DashboardAdmins;
