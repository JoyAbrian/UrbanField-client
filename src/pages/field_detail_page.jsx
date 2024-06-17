import { Fragment } from "react";
import NavBar from "../components/Layouts/NavBar";
import { Helmet } from "react-helmet";
import TitleSections from "../components/Fragments/title_sections";
import ContactSections from "../components/Fragments/contact_sections";
import FieldsImageDetails from "../components/Fragments/Detail_Page/field_image_details";
import FieldDescDetail from "../components/Fragments/Detail_Page/field_desc_details";
import FieldFacilityDetails from "../components/Fragments/Detail_Page/field_facility_details";
import FieldDateBooks from "../components/Fragments/Detail_Page/field_date_books";
import FieldReviews from "../components/Fragments/Detail_Page/field_reviews";

const FieldsDetailPage = () => {
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
                    <FieldDescDetail />
                    <FieldFacilityDetails />

                    <FieldDateBooks />
                    <FieldReviews />

                    <ContactSections />
                </div>
            </div>
        </Fragment>
    );
}

export default FieldsDetailPage;