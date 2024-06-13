import { Fragment } from "react";
import LandingPageHero from "../components/Fragments/Landing_Page/landing_page_hero";
import HeroNavBar from "../components/Layouts/HeroNavBar";
import { Helmet } from "react-helmet";
import LandingPageDesc from "../components/Fragments/Landing_Page/landing_page_desc";
import LandingPageFields from "../components/Fragments/Landing_Page/landing_page_fields";
import LandingPageAbout from "../components/Fragments/Landing_Page/landing_page_about";

const LandingPage = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Home | Urban Fields</title>
            </Helmet>
            <HeroNavBar />
            <section id="hero">
                <LandingPageHero />
            </section>
            <section id="description">
                <LandingPageDesc />
            </section>
            <section id="fields">
                <LandingPageFields />
            </section>
            <section id="footer">
                <LandingPageAbout />
            </section>
        </Fragment>
    );
}

export default LandingPage;