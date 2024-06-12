import { Fragment } from "react";
import LandingPageHero from "../components/Fragments/Landing_Page/landing_page_hero";
import HeroNavBar from "../components/Layouts/HeroNavBar";
import { Helmet } from "react-helmet";

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
        </Fragment>
    );
}

export default LandingPage;