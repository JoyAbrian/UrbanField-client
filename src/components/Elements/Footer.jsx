const Footer = () => {
    return (
        <div>
            <div className="h-0.5 bg-slate-200 mx-56"/>
            <div className="flex justify-between font-DM_Sans font-medium mt-5 mx-56">
                <div className="flex justify-between gap-14 text-xl">
                    <h3 className="cursor-pointer">ABOUT US</h3>
                    <h3 className="cursor-pointer">CONTACT US</h3>
                    <h3 className="cursor-pointer">HELP</h3>
                    <h3 className="cursor-pointer">PRIVACY POLICY</h3>
                    <h3 className="cursor-pointer">DISCLAIMER</h3>
                </div>
                <h3 className="text-slate-400 cursor-pointer">Copyright © 2022 • ABC Company.</h3>
            </div>
        </div>
    )
}

export default Footer;