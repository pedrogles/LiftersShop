import React from "react";
import NavHome from "../../components/navhome/NavHome";
import Banner from "../../components/banner/Banner";
import SectionProducts from "../../components/sectionproducts/SectionProducts";

const Home = () => {
    return (
        <>
            <NavHome />
            <Banner />
            <SectionProducts />
        </>
    )
};

export default Home;