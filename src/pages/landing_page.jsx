import { Fragment } from "react";
import LandingPageHero from "../components/Fragments/Landing_Page/landing_page_hero";
import HeroNavBar from "../components/Layouts/HeroNavBar";
import { Helmet } from "react-helmet";
import LandingPageDesc from "../components/Fragments/Landing_Page/landing_page_desc";
import LandingPageFields from "../components/Fragments/Landing_Page/landing_page_fields";

const LandingPage = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Home | Urban Fields</title>
            </Helmet>
            <section id="hero-section">
                <HeroNavBar />
                <LandingPageHero />
            </section>
            <section id="description-section">
                <LandingPageDesc />
            </section>
            <section id="fields-section">
                <LandingPageFields />
            </section>
        </Fragment>
    );
}

export default LandingPage;