import { Fragment, useEffect, useState } from "react";
import NavBar from "../components/Layouts/NavBar";
import FieldsInput from "../components/Elements/Input/FieldsInput";
import FieldCard from "../components/Elements/Card/FieldCard";
import LandingPageAbout from "../components/Fragments/Landing_Page/landing_page_about";
import { Helmet } from "react-helmet";
import TitleSections from "../components/Fragments/title_sections";
import { getFields } from "../services/db/field.service";

const FieldsPage = () => {
    const [fields, setFields] = useState([]);
    const [filteredFields, setFilteredFields] = useState([]);
    const [search, setSearch] = useState({
        name: '',
        type: '',
        location: ''
    });

    useEffect(() => {
        getFields().then((data) => {
            setFields(data);
            setFilteredFields(data); // Initialize filtered fields
        });
    }, []);

    const handleSearchChange = (e) => {
        const { name, value } = e.target;
        setSearch({
            ...search,
            [name]: value
        });
    };

    const handleSearch = () => {
        let filtered = fields;

        if (search.name) {
            filtered = filtered.filter(field => field.name.toLowerCase().includes(search.name.toLowerCase()));
        }
        if (search.type) {
            filtered = filtered.filter(field => field.venue.toLowerCase().includes(search.type.toLowerCase()));
        }
        if (search.location) {
            filtered = filtered.filter(field => field.city.toLowerCase().includes(search.location.toLowerCase()));
        }

        setFilteredFields(filtered);
    };

    return (
        <Fragment>
            <Helmet>
                <title>Our Fields | Urban Fields</title>
            </Helmet>
            <NavBar />
            <TitleSections title="BOOKING LAPANGAN ONLINE TERBAIK"/>
            <div className="mx-36">
                <div className="mt-7 w-full justify-center gap-10 flex select-none">
                    <FieldsInput 
                        name="name"
                        image="img/searchIcon.png" 
                        placeholder="Cari nama venue"
                        value={search.name}
                        onChange={handleSearchChange}
                    />
                    <FieldsInput 
                        name="type"
                        image="img/fieldIcon.png" 
                        placeholder="Jenis lapangan"
                        value={search.type}
                        onChange={handleSearchChange}
                    />
                    <FieldsInput 
                        name="location"
                        image="img/locationIcon.png" 
                        placeholder="Pilih lokasi"
                        value={search.location}
                        onChange={handleSearchChange}
                    />
                    <button 
                        className="w-1/6 h-16 bg-sky-900 text-white text-xl font-Poppins rounded-2xl"
                        onClick={handleSearch}
                    >
                        Cari Venue
                    </button>
                </div>
            </div>
            <div className="mt-20 w-full grid grid-cols-3 gap-y-10 px-40 justify-items-center select-none">
                {filteredFields.slice(0, 12).map(field => (
                    <a key={field.id} href={`/fields/${field.id}`} className="mx-5">
                        <FieldCard key={field.id} img={field.image_url} venue={field.venue} name={field.name} location={field.city} price={field.price_per_hour} />
                    </a>
                ))}
            </div>
            
            <LandingPageAbout />
        </Fragment>
    );
}

export default FieldsPage;