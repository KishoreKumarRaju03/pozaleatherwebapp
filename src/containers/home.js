import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CollectionSection from "../components/collectionSection";
import FooterSection from "../components/footerSection";
import FullCollection from "../components/fullCollection";
import HeroSection from "../components/heroSection";
import InstagramSection from "../components/instagramSection";
import NavHead from "../components/navHead";


const Home = () => {
    return(
        <>
            <NavHead />
            <HeroSection />
            <CollectionSection />
            <FullCollection />
            <InstagramSection />
            <FooterSection />
        </>
    );
};

export default Home;