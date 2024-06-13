import { Fragment } from "react";
import NavBar from "../components/Layouts/NavBar";
import FieldsInput from "../components/Elements/Input/FieldsInput";
import FieldCard from "../components/Elements/Card/FieldCard";
import LandingPageAbout from "../components/Fragments/Landing_Page/landing_page_about";

const FieldsPage = () => {
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
        {
            id: 4,
            img: "img/field4.png",
            name: "Lapangan Generasi Baru",
            venue: "Futsal",
            location: "Kota Jakarta Pusat",
            price: 240000
        },
        {
            id: 5,
            img: "img/field5.png",
            name: "Lapangan Generasi Baru",
            venue: "Futsal",
            location: "Kota Jakarta Pusat",
            price: 240000
        },
        {
            id: 6,
            img: "img/field6.png",
            name: "Lapangan Generasi Baru",
            venue: "Venue",
            location: "Kota Jakarta Pusat",
            price: 240000
        },
        {
            id: 7,
            img: "img/field7.png",
            name: "Lapangan Generasi Baru",
            venue: "Venue",
            location: "Kota Jakarta Pusat",
            price: 240000
        },
        {
            id: 8,
            img: "img/field8.png",
            name: "Lapangan Generasi Baru",
            venue: "Bola Mini",
            location: "Kota Jakarta Pusat",
            price: 240000
        },
        {
            id: 9,
            img: "img/field9.png",
            name: "Lapangan Generasi Baru",
            venue: "Venue",
            location: "Kota Jakarta Pusat",
            price: 240000
        },
        {
            id: 10,
            img: "img/field10.png",
            name: "Lapangan Generasi Baru",
            venue: "Bulu Tangkis",
            location: "Kota Jakarta Pusat",
            price: 240000
        },
        {
            id: 11,
            img: "img/field11.png",
            name: "Lapangan Generasi Baru",
            venue: "Bulu Tangkis",
            location: "Kota Jakarta Pusat",
            price: 240000
        },
        {
            id: 12,
            img: "img/field12.png",
            name: "Lapangan Generasi Baru",
            venue: "Renang",
            location: "Kota Jakarta Pusat",
            price: 240000
        },
    ]
    return (
        <Fragment>
            <NavBar />
            <div className="bg-gradient-to-r from-cyan-600 via-sky-900 to-gray-800 w-full h-[116px] justify-center flex items-center select-none">
                <h1 className="text-white font-Poppins font-bold text-4xl">BOOKING LAPANGAN ONLINE TERBAIK</h1>
            </div>
            <div className="mx-36">
                <div className="mt-7 w-full justify-center gap-10 flex select-none">
                    <FieldsInput image="img/searchIcon.png" placeholder="Cari nama venue"/>
                    <FieldsInput image="img/fieldIcon.png" placeholder="Jenis lapangan"/>
                    <FieldsInput image="img/locationIcon.png" placeholder="Pilih lokasi"/>
                    <button className="w-1/6 h-16 bg-sky-900 text-white text-xl font-Poppins rounded-2xl">Cari Venue</button>
                </div>
            </div>
            <div className="mt-20 w-full grid grid-cols-3 gap-20 px-40 justify-items-center select-none">
                {fields.length > 0 && fields.map((field) => (
                    <FieldCard key={field.id} img={field.img} venue={field.venue} name={field.name} location={field.location} price={field.price} />
                ))}
            </div>
            <div className="mt-40">
                <LandingPageAbout />
            </div>
        </Fragment>
    );
}

export default FieldsPage;