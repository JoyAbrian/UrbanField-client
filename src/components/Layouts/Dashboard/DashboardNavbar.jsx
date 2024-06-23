const DashboardNavbar = () => {
    const date = new Date();
    const formattedDate = new Intl.DateTimeFormat('id-ID', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    }).format(date);

    return (
        <nav className="shadow-md p-4 select-none">
            <div className="container mx-auto flex items-center">
                <h1 className="text-black font-Inter font-bold text-2xl">Hello Joy</h1>
                <img src="img/dashboard_item/chevrons-right.png" className="font-bold ml-12 mt-1"/> <span className="font-light font-Inter ml-1"> {formattedDate}</span>
            </div>
        </nav>
    );
};

export default DashboardNavbar;