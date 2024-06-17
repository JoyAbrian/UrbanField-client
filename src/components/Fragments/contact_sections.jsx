import Footer from "../Elements/Footer";

const ContactSections = () => {
    return (
        <div className="w-full h-fit mt-20">
            <div className="h-0.5 bg-black mx-56"/>

            <div className="flex">
                <div className="w-1/2 h-96 flex justify-center items-center">
                    <img src="img/icon.png" className="w-40 cursor-pointer"/>
                </div>
                <div className="w-1/2 h-96 flex items-center ">
                    <div className="font-DM_Sans text-lg">
                        <div className="flex items-center cursor-pointer">
                            <img src="img/social/location.png" className="w-7"/>
                            <p className="ml-2">ABC Company, 123 East, 17th Street, St. louis 10001</p>
                        </div>
                        <div className="flex w-full justify-between mt-4">
                            <div className="flex items-center cursor-pointer justify-between">
                                <img src="img/social/phone.png" className="w-7"/>
                                <p className="ml-2">(123) 456-7890</p>
                            </div>
                            <div className="flex items-center cursor-pointer">
                                <img src="img/social/fax.png" className="w-7"/>
                                <p className="ml-2">(123) 456-7890</p>
                            </div>
                        </div>
                        <div className="flex w-full justify-between mt-12">
                            <h3 className="text-slate-500">Social Media</h3>
                            <div className="flex items-center justify-between gap-4">
                                <img src="img/social/facebook.png" className="w-7 cursor-pointer"/>
                                <img src="img/social/twitter.png" className="w-7 cursor-pointer"/>
                                <img src="img/social/linkedin.png" className="w-7 cursor-pointer"/>
                                <img src="img/social/youtube.png" className="w-7 cursor-pointer"/>
                                <img src="img/social/instagram.png" className="w-7 cursor-pointer"/>
                                <img src="img/social/google.png" className="w-7 cursor-pointer"/>
                                <img src="img/social/pinterest.png" className="w-7 cursor-pointer"/>
                                <img src="img/social/network.png" className="w-7 cursor-pointer"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    )
}

export default ContactSections;