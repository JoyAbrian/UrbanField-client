import { useEffect, useState } from "react";
import LandingPageButton from "../../Elements/Button/LandingPageButton";
import FieldCard from "../../Elements/Card/FieldCard";
import { getFields } from '../../../services/db/field.service';

const LandingPageFields = () => {
    const [fields, setFields] = useState([]);

    useEffect(() => {
        getFields().then((data) => {
            setFields(data);
        });
    }, []);

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
            <div className="flex w-full justify-between px-20 gap-5 mt-20">
                {fields.slice(0, 3).map(field => (
                    <a key={field.id} href={`/fields/${field.id}`} className="mx-10">
                        <FieldCard img={field.image_url} venue={field.venue} name={field.name} location={field.city} price={field.price_per_hour} />
                    </a>
                ))}
            </div>
            <a className="mt-14 flex justify-center items-center w-full" href="/fields">
                <LandingPageButton textsize='lg'>See More</LandingPageButton>
            </a>
        </div>
    );
}

export default LandingPageFields;