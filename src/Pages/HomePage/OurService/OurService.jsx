import service1 from "../../../assets/icon/service1.svg"
import service2 from "../../../assets/icon/service2.svg"
import service3 from "../../../assets/icon/service3.svg"
import service4 from "../../../assets/icon/service4.svg"
import service5 from "../../../assets/icon/service5.svg"
import OurServiceCard from "./OurServiceCard";

const OurService = () => {
    return (
        <div className="mt-12 mx-[2%] lg:mx-[10%] lg:h-[5rem] rounded-[0.375rem] border-2 border-[#D0D0D0] px-8 flex flex-col xl:flex-row justify-between xl:items-center">
            <OurServiceCard img = {service1} text={'7 Days Replacement'}/>
            <OurServiceCard img = {service2} text={'Upto 12 months warranty'}/>
            <OurServiceCard img = {service3} text={'EMI Available'}/>
            <OurServiceCard img = {service4} text={'55+ Quality Checks'}/>
            <OurServiceCard img = {service5} text={'Fast & Free Delivery'}/>
            
        </div>
    );
};

export default OurService;