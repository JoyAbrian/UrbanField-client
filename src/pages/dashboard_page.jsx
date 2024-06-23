import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../components/Layouts/Dashboard/DashboardSidebar';
import DashboardNavbar from '../components/Layouts/Dashboard/DashboardNavbar';

const DashboardPage = () => {
    return (
        <div className="flex h-screen overflow-hidden">
            <div className="fixed top-0 left-0 h-screen w-1/6 bg-gray-800">
                <DashboardSidebar />
            </div>

            <div className="flex flex-col flex-grow ml-1/5 overflow-auto h-full">
                <div className="fixed top-0 left-1/5 right-0 h-16 bg-gray-900 z-10">
                    <DashboardNavbar />
                </div>

                <div className="mt-16 p-4 overflow-auto h-full">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;