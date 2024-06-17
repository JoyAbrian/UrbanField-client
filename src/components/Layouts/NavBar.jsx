import LandingPageButton from "../Elements/Button/LandingPageButton";

const NavBar = () => {
    return (
        <nav className="flex w-screen top-0 z-20 py-2 px-24 justify-between select-none bg-white shadow-lg">
            <div className="flex items-center cursor-pointer">
                <img src="img/icon.png" alt="logo"/>
                <h1 className="text-black text-2xl font-KronaOne ml-4">URBAN FIELDS</h1>
            </div>
            <div className="flex items-center text-black text-lg font-Inter ml-52 font-bold">
                <p className="mx-14 cursor-pointer">Reservations</p>
                <p className="mx-14 cursor-pointer">Our Fields</p>
                <p className="mx-14 cursor-pointer">About Us</p>
            </div>
            <div className="flex items-center text-black text-lg font-Inter">
                <p className="mr-20 cursor-pointer">Sign In</p>
                <LandingPageButton textsize='lg'>Sign Up</LandingPageButton>
            </div>
        </nav>
    );
}

export default NavBar;