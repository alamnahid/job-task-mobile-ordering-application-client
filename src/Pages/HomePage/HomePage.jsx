import AdvertiseBanner from "./AdvertiseBanner/AdvertiseBanner";
import Banner from "./Banner/Banner";
import CustomerService from "./CustomerService/CustomerService";
import FeatureProduct from "./FeatureProduct/FeatureProduct";
import OurService from "./OurService/OurService";
import TopBrans from "./TopBrands/TopBrans";


const HomePage = () => {
    return (
        <div>
            <Banner/>
            <OurService/>
            <FeatureProduct/>
            <AdvertiseBanner/>
            <CustomerService/>
            <TopBrans/>
            
        </div>
    );
};

export default HomePage;