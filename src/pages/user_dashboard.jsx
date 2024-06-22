import DashboardSidebar from "../components/Layouts/Dashboard/DashboardSidebar";
import DashboardNavbar from "../components/Layouts/Dashboard/DashboardNavbar";

const UserDashboard = () => {
    return (
        <div className="flex">
            <DashboardSidebar />
            <div className="flex flex-col flex-grow">
                <DashboardNavbar />
            </div>
        </div>
    )
}

export default UserDashboard;