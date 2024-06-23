const DashboardAdmins = () => {
    return (
        <div className="mt-5 mx-10 font-Inter font-medium">
            <div className="mx-4 flex justify-between">
                <h1 className="text-2xl font-medium">ADMINS</h1>
                <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">UPDATE</button>
            </div>
            <div className="grid grid-cols-4 gap-8 mt-4 font-Nunito_Sans">
                <div className="flex-col flex justify-center p-8 shadow-lg shadow-slate-300 rounded-2xl items-center">
                    <img src="/img/userIcon.png" className="w-24 mt-8 rounded-lg"/>
                    <p className="text-lg mt-2 font-bold">Joy Abrian</p>
                    <p className="text-gray-500 font-bold">Admin</p>
                    <h2 className="font-bold mt-10">janick_parisian@yahoo.com</h2>
                </div>
                <div className="flex-col flex justify-center p-8 shadow-lg shadow-slate-300 rounded-2xl items-center">
                    <img src="/img/userIcon.png" className="w-24 mt-8 rounded-lg"/>
                    <p className="text-lg font-bold mt-2">Joy Abrian</p>
                    <p className="text-gray-500 font-bold">Admin</p>
                    <h2 className="font-bold mt-10">janick_parisian@yahoo.com</h2>
                </div>
                <div className="flex-col flex justify-center p-8 shadow-lg shadow-slate-300 rounded-2xl items-center">
                    <img src="/img/userIcon.png" className="w-24 mt-8 rounded-lg"/>
                    <p className="text-lg font-bold mt-2">Joy Abrian</p>
                    <p className="text-gray-500 font-bold">Admin</p>
                    <h2 className="font-bold mt-10">janick_parisian@yahoo.com</h2>
                </div>
                <div className="flex-col flex justify-center p-8 shadow-lg shadow-slate-300 rounded-2xl items-center">
                    <img src="/img/userIcon.png" className="w-24 mt-8 rounded-lg"/>
                    <p className="text-lg font-bold mt-2">Joy Abrian</p>
                    <p className="text-gray-500 font-bold">Admin</p>
                    <h2 className="font-bold mt-10">janick_parisian@yahoo.com</h2>
                </div>
            </div>
        </div>
    );
}

export default DashboardAdmins;