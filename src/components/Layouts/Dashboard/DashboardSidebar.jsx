import { Link, useLocation } from "react-router-dom";

const DashboardSidebar = ({ username, role }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div className="w-full h-screen bg-[#191919] text-white px-6 pt-12 pb-4 select-none flex flex-col">
      <div>
        <h1 className="text-white text-2xl font-KronaOne ml-4">URBAN FIELDS</h1>
        <ul className="mt-10 font-Inter text-lg">
          {role === 'admin' && (
            <>
            <Link to="/dashboard/users">
              <li className={`px-2.5 rounded-lg py-4 my-2 cursor-pointer items-center ${currentPath === '/dashboard/users' ? 'bg-blue-700' : 'hover:bg-gray-700'}`}>
                <img src="/img/dashboard_item/user.png" className="w-6 inline-block mr-2" /> User
              </li>
            </Link>
              <Link to="/dashboard/fields">
                <li className={`px-2.5 rounded-lg py-4 my-2 cursor-pointer items-center ${currentPath === '/dashboard/fields' ? 'bg-blue-700' : 'hover:bg-gray-700'}`}>
                  <img src="/img/dashboard_item/field.png" className="w-6 inline-block mr-2" /> Field
                </li>
              </Link>
              <Link to="/dashboard/orders">
                <li className={`px-2.5 rounded-lg py-4 my-2 cursor-pointer items-center ${currentPath === '/dashboard/orders' ? 'bg-blue-700' : 'hover:bg-gray-700'}`}>
                  <img src="/img/dashboard_item/order.png" className="w-6 inline-block mr-2" /> Order
                </li>
              </Link>
            </>
          )}
          <Link to="/dashboard/admins">
            <li className={`px-2.5 rounded-lg py-4 my-2 cursor-pointer items-center ${currentPath === '/dashboard/admins' ? 'bg-blue-700' : 'hover:bg-gray-700'}`}>
              <img src="/img/dashboard_item/admin.png" className="w-6 inline-block mr-2" /> Admin
            </li>
          </Link>
        </ul>
      </div>
      <div className="mt-auto">
        <Link to="/dashboard">
          <div className={`flex px-2.5 rounded-lg py-4 my-2 cursor-pointer items-center ${currentPath === '/dashboard' ? 'bg-blue-700' : 'hover:bg-gray-700'}`}>
            <img src="/img/dashboard_item/userIcon.png" className="w-6 inline-block mr-2" />
            <div>
              <p className="text-sm font-semibold">{username}</p>
              <p className="text-xs text-slate-300">View Profile</p>
            </div>
          </div>
        </Link>

        <div className="w-full h-0.5 bg-gray-400 opacity-10 my-6" />

        <Link onClick={handleLogout}>
          <div className="px-2.5 rounded-lg py-4 bg-gray-600 font-Inter font-semibold cursor-pointer flex items-center mb-2">
            <img src="/img/dashboard_item/logout.png" className="w-6 inline-block mr-2" /> Logout
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DashboardSidebar;