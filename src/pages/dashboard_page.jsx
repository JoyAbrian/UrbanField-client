import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../components/Layouts/Dashboard/DashboardSidebar';
import DashboardNavbar from '../components/Layouts/Dashboard/DashboardNavbar';

const DashboardPage = () => {
    return (
        <div className="flex h-screen overflow-hidden">
            <div className="w-80 bg-gray-800 flex-shrink-0">
                <DashboardSidebar />
            </div>
            <div className="flex flex-col flex-grow overflow-hidden h-full">
                <DashboardNavbar />
                <div className="p-4 overflow-y-auto h-full">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;