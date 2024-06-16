import ContactSections from "../contact_sections";

const LandingPageAbout = () => {
    return (
        <div className="h-screen select-none mt-40">
            <h1 className="text-5xl font-Poppins font-semibold justify-center text-center mt-10">ABOUT US</h1>
            <div className="text-3xl text-center font-Poppins mt-20">
                <p>UF adalah platform penyewaan lapangan futsal yang dirancang untuk memudahkan</p>
                <p>Anda dalam menemukan, memesan, dan menikmati fasilitas lapangan futsal terbaik di </p>
                <p>Makassar. Kami memahami pentingnya olahraga dan aktivitas fisik dalam kehidupan </p>
                <p>sehari-hari, oleh karena itu kami berkomitmen untuk memberikan layanan terbaik dan </p>
                <p>pengalaman sewa lapangan yang tak terlupakan.</p>
            </div>
            
            <ContactSections />
        </div>
    );
}

export default LandingPageAbout;