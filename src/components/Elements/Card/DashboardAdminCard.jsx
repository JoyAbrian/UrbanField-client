const DashboardAdminCard = (props) => {
    const { id, username, email } = props;
    return (
        <div className="flex-col flex justify-center p-8 shadow-lg shadow-slate-300 rounded-2xl items-center">
            <img src="/img/userIcon.png" className="w-24 mt-8 rounded-lg" alt="User Icon" />
            <p className="text-lg mt-2 font-bold">{username}</p>
            <p className="text-gray-500 font-bold">Admin</p>
            <h2 className="font-bold mt-10">{email}</h2>
        </div>
    );
};

export default DashboardAdminCard;