import { useState, useEffect } from 'react';
import axios from 'axios';
import { getUsers } from '../../../services/db/user.service';

const DashboardUser = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then((data) => {
            setUsers(data);
        });
    }, []);

    return (
        <div className="mt-5 mx-10 font-Inter font-medium">
        <div className="ml-4">
            <h1 className="text-2xl font-bold">Users</h1>
        </div>
        <div className="mt-8 mx-12">
            <table className="w-full">
            <thead className="border-b-[1px] border-gray-800">
                <tr>
                <th className="text-left font-medium py-4">ID</th>
                <th className="text-left font-medium py-4">Nama</th>
                <th className="text-left font-medium py-4">Phone Number</th>
                <th className="text-left font-medium py-4">Email</th>
                </tr>
            </thead>
            <tbody className="mt-4">
                {users.map(user => (
                    <tr key={user.id} className="border-b-[0.5px] border-gray-200">
                        <td className="py-2 pt-4">{user.id}</td>
                        <td className="py-2 pt-4">{user.username}</td>
                        <td className="py-2 pt-4">{user.phone_number}</td>
                        <td className="py-2 pt-4">{user.email}</td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
        </div>
    );
};

export default DashboardUser;