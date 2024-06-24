import { Fragment, useEffect, useState } from "react";
import NavBar from "../components/Layouts/NavBar";
import { Helmet } from "react-helmet";
import TitleSections from "../components/Fragments/title_sections";
import ContactSections from "../components/Fragments/contact_sections";
import FieldsImageDetails from "../components/Fragments/Detail_Page/field_image_details";
import FieldDescDetail from "../components/Fragments/Detail_Page/field_desc_details";
import FieldFacilityDetails from "../components/Fragments/Detail_Page/field_facility_details";
import FieldDateBooks from "../components/Fragments/Detail_Page/field_date_books";
import FieldReviews from "../components/Fragments/Detail_Page/field_reviews";
import { getFieldById } from "../services/db/field.service";
import { useParams } from "react-router-dom";

const FieldsDetailPage = () => {
    const { id } = useParams();
    const [field, setField] = useState({});

    useEffect(() => {
        getFieldById(id).then((data) => {
            setField(data);
        });
    }, [id]);

    return (
        <Fragment>
            <Helmet>
                <title>Details Page | Urban Fields</title>
            </Helmet>
            <NavBar />
            <TitleSections title="BOOKING"/>
            <div className="select-none">
                <div className="mt-8">
                    <FieldsImageDetails />
                    <FieldDescDetail name={field.name} city={field.city} address={field.address} street_address={field.street_address} price={field.price_per_hour}/>

                    <FieldFacilityDetails field_id={field.id}/>

                    <FieldDateBooks />
                    <FieldReviews />

                    <ContactSections />
                </div>
            </div>
        </Fragment>
    );
}

export default FieldsDetailPage;