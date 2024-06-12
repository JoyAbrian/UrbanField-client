import LandingPageButton from "../../Elements/Button/LandingPageButton";

const LandingPageHero = () => {
    return (
        <div className='w-screen h-screen relative select-none'>
            <img className='w-screen h-screen absolute top-0 left-0 object-fill' src='img/landing_page.png' alt='Landing Page'/>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="font-Inter font-semibold absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 left-1/4 ml-16">
                <div className="mb-8">
                    <h1 className="text-7xl font-Inter font-semibold leading-tight text-white">Now, Find Your</h1>
                    <h1 className="text-7xl font-Inter font-semibold leading-tight text-white">Favorite Fields Here!</h1>
                </div>
                <LandingPageButton>Sewa Sekarang!</LandingPageButton>
            </div>
        </div>
    )
}

export default LandingPageHero;