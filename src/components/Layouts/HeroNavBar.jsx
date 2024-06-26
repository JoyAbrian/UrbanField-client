import { Link } from "react-router-dom";
import LandingPageButton from "../Elements/Button/LandingPageButton";

const HeroNavBar = () => {
    // Check if token exists in local storage
    const isAuthenticated = localStorage.getItem('token');

    return (
        <nav className="flex w-screen absolute top-0 z-20 py-10 px-24 justify-between select-none">
            <div className="flex items-center cursor-pointer">
                <img src="/img/icon.png" alt="logo" />
                <h1 className="text-white text-2xl font-KronaOne ml-4">URBAN FIELDS</h1>
            </div>
            <div className="flex items-center text-white text-lg font-Inter ml-52">
                {/* <p className="mx-14 cursor-pointer">Reservations</p>
                <p className="mx-14 cursor-pointer">Our Fields</p>
                <p className="mx-14 cursor-pointer">About Us</p> */}
            </div>
            <div className="flex items-center text-white text-lg font-Inter">
                {isAuthenticated ? (
                    <Link to="/dashboard" className="mr-20 cursor-pointer">My Dashboard</Link>
                ) : (
                    <>
                        <Link to="/login" className="mr-20 cursor-pointer">Sign In</Link>
                        <Link to="/register" className="cursor-pointer">
                            <LandingPageButton textsize='lg'>Sign Up</LandingPageButton>
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
}

export default HeroNavBar;