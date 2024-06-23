import { Link } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <div className="w-72 h-screen bg-[#191919] text-white px-6 pt-12 pb-4 select-none flex flex-col">
      <div>
        <img src="/img/icon.png" alt="logo" className="w-32 ml-8 mt-3"/>
        <ul className="mt-10 font-Inter text-lg">
          <Link to="/dashboard">
            <li className="px-2.5 rounded-lg py-4 my-2 hover:bg-gray-700 cursor-pointer items-center">
              <img src="/img/dashboard_item/home.png" className="w-6 inline-block mr-2"/> Home
            </li>
          </Link>

          <Link to="/dashboard/users">
            <li className="px-2.5 rounded-lg py-4 my-2 hover:bg-gray-700 cursor-pointer items-center">
              <img src="/img/dashboard_item/user.png" className="w-6 inline-block mr-2"/> User
            </li>
          </Link>

          <Link to="/dashboard/fields">
            <li className="px-2.5 rounded-lg py-4 my-2 hover:bg-gray-700 cursor-pointer items-center">
              <img src="/img/dashboard_item/field.png" className="w-6 inline-block mr-2"/> Field
            </li>
          </Link>

          <Link to="/dashboard/orders">
            <li className="px-2.5 rounded-lg py-4 my-2 hover:bg-gray-700 cursor-pointer items-center">
              <img src="/img/dashboard_item/order.png" className="w-6 inline-block mr-2"/> Order
            </li>
          </Link>

          <Link to="/dashboard/admin">
            <li className="px-2.5 rounded-lg py-4 my-2 hover:bg-gray-700 cursor-pointer items-center">
              <img src="/img/dashboard_item/admin.png" className="w-6 inline-block mr-2"/> Admin
            </li>
          </Link>
        </ul>
      </div>
      <div className="mt-auto">
        <div className="px-2.5 rounded-lg py-4 hover:bg-gray-700 cursor-pointer flex items-center">
          <img src="/img/dashboard_item/userIcon.png" className="w-6 inline-block mr-2"/>
          <div>
            <p className="text-sm font-semibold">Joy Abrian Rantepasang</p>
            <p className="text-xs text-slate-300">View Profile</p>
          </div>
        </div>
        <div className="w-full h-0.5 bg-gray-400 opacity-10 my-6"/>
        <div className="px-2.5 rounded-lg py-4 bg-gray-600 font-Inter font-semibold cursor-pointer flex items-center mb-2">
          <img src="/img/dashboard_item/logout.png" className="w-6 inline-block mr-2"/> Logout
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;