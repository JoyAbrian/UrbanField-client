import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../components/Layouts/Dashboard/DashboardSidebar';
import DashboardNavbar from '../components/Layouts/Dashboard/DashboardNavbar';

const DashboardPage = () => {
    return (
        <div className="flex">
        <DashboardSidebar />
        <div className="flex flex-col flex-grow">
            <DashboardNavbar />
            <Outlet />
        </div>
        </div>
    );
};

export default DashboardPage;