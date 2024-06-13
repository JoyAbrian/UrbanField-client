import LandingPageButton from "../../Elements/Button/LandingPageButton";
import FieldCard from "../../Elements/Card/FieldCard";

const LandingPageFields = () => {
    const fields = [
        {
            id: 1,
            img: "img/field1.png",
            name: "Lapangan Generasi Baru",
            venue: "Venue",
            location: "Kota Jakarta Pusat",
            price: 240000
        },
        {
            id: 2,
            img: "img/field2.png",
            name: "Lapangan Generasi Baru",
            venue: "Venue",
            location: "Kota Jakarta Pusat",
            price: 240000
        },
        {
            id: 3,
            img: "img/field3.png",
            name: "Lapangan Generasi Baru",
            venue: "Venue",
            location: "Kota Jakarta Pusat",
            price: 240000
        },
    ];

    return (
        <div className="h-screen select-none">
            <h2 className="mt-20 text-5xl font-Poppins font-semibold text-center">
                Cari Lapangan Terbaik untuk Anda Bermain!
            </h2>
            <p className="mt-12 text-2xl font-Poppins font-light text-center">
                Tersedia berbagai pilihan lapangan dari urban fields Indonesia dan berbagai fasilitas tiap lapangan.
            </p>
            <p className="mt-5 text-2xl font-Poppins font-light text-center">
                Rasakan keseruan silaturahmi di lapangan bersama teman amatir anda lainnya sekarang juga!
            </p>
            <div className="flex w-full justify-between px-20 mt-20">
                {fields.length > 0 && fields.map((field) => (
                    <FieldCard key={field.id} img={field.img} venue={field.venue} name={field.name} location={field.location} price={field.price} />
                ))}
            </div>
            <div className="mt-14 flex justify-center items-center w-full">
                <LandingPageButton textsize='lg'>See More</LandingPageButton>
            </div>
        </div>
    );
}

export default LandingPageFields;