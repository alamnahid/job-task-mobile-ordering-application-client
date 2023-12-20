import { useEffect } from "react";
import AdvertiseBanner from "./AdvertiseBanner/AdvertiseBanner";
import Banner from "./Banner/Banner";
import CustomerService from "./CustomerService/CustomerService";
import FeatureProduct from "./FeatureProduct/FeatureProduct";
import OurService from "./OurService/OurService";
import Review from "./Review/Review";
import TopBrans from "./TopBrands/TopBrans";
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = () => {
    useEffect(()=>{
        AOS.init();
    }, [])
    return (
        <div>
            <Banner/>
            <OurService/>
            <FeatureProduct/>
            <AdvertiseBanner/>
            <CustomerService/>
            <TopBrans/>
            <Review/>
        </div>
    );
};

export default HomePage;