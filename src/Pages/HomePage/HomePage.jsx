import AdvertiseBanner from "./AdvertiseBanner/AdvertiseBanner";
import Banner from "./Banner/Banner";
import CustomerService from "./CustomerService/CustomerService";
import FeatureProduct from "./FeatureProduct/FeatureProduct";
import OurService from "./OurService/OurService";
import Review from "./Review/Review";
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
            <Review/>
        </div>
    );
};

export default HomePage;