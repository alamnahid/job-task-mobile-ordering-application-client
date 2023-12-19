import AdvertiseBanner from "./AdvertiseBanner/AdvertiseBanner";
import Banner from "./Banner/Banner";
import FeatureProduct from "./FeatureProduct/FeatureProduct";
import OurService from "./OurService/OurService";


const HomePage = () => {
    return (
        <div>
            <Banner/>
            <OurService/>
            <FeatureProduct/>
            <AdvertiseBanner/>
            
        </div>
    );
};

export default HomePage;