import mobilecover1 from "../../../assets/mobilecover1.png"
import mobilecover2 from "../../../assets/mobilecover2.png"
import mobilecover3 from "../../../assets/mobilecover3.png"

const Banner = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row lg:h-[80vh] justify-between items-center px-[10%] mt-6 lg:mt-0">

            <div>
                <h1 className="playfont  text-[2rem] md:text-[2.5rem] lg:text-[2rem] lg:leading-[2.5rem] lg:w-[44rem]">Your Ultimate Destination for Cutting-Edge Devices</h1>
                <p className="mt-6 text-xl lg:w-[25rem]">Welcome to Mobile Haven, where innovation meets convenience! Explore our curated collection of the latest mobiles, from sleek designs to powerful features. </p>

                <button className="capitalize w-[18rem] h-14 btn-secondary bg-[#1C3988] border-none rounded-lg text-white mt-8 text-xl">Explore Now</button>
            </div>
            <div className="flex justify-center items-baseline mt-16">
                <img className="w-[7rem] lg:w-auto h-[12rem] lg:h-auto" src={mobilecover1} alt=""/>
                <img className="w-[9rem] lg:w-auto h-[16rem] lg:h-auto" src={mobilecover2} alt=""/>
                <img className="w-[7rem] lg:w-auto h-[12rem] lg:h-auto" src={mobilecover3} alt=""/>
            </div>
            
        </div>
    );
};

export default Banner;