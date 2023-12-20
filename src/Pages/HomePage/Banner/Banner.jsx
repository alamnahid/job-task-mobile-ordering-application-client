import { TypeAnimation } from "react-type-animation";
import mobilecover1 from "../../../assets/mobilecover1.png"
import mobilecover2 from "../../../assets/mobilecover2.png"
import mobilecover3 from "../../../assets/mobilecover3.png"

const Banner = () => {
    return (
        <div className="flex flex-col-reverse 2xl:flex-row justify-between items-center px-[10%] mt-6 lg:mt-20">

            <div className="flex-1">
                

                <h1 className="text-2xl md:text-3xl font-bold md:leading-[2.5rem]">
                Your Ultimate Destination
                </h1>

                <TypeAnimation
                    sequence={[
                        'Cutting-Edge Devices',
                        1000,
                        'Tech Bliss Awaits You at Mobile Shop!',
                        1000,
                        'Your Mobile Experience with Mobile Shop',
                        1000,
                        
                    ]}
                    speed={50}
                    className='text-base md:text-2xl text-[#1C3988] font-bold md:leading-[2.5rem] lg:w-[40rem] '
                    repeat={Infinity}
                /> <br />

                <p className="mt-6 lg:w-[25rem] ">Welcome to Mobile Haven, where innovation meets convenience! Explore our curated collection of the latest mobiles, from sleek designs to powerful features. </p>

                <button className="capitalize w-[18rem] h-14 btn-secondary bg-[#1C3988] border-none rounded-lg text-white mt-8 text-xl">Explore Now</button>
            </div>
            <div className="flex justify-center items-baseline lg:w-[50%]">
                <img className="w-[7rem] lg:w-[20rem] h-[12rem] lg:h-auto" src={mobilecover1} alt=""/>
                <img className="w-[9rem] lg:w-[23rem] h-[16rem] lg:h-auto" src={mobilecover2} alt=""/>
                <img className="w-[7rem] lg:w-[20rem] h-[12rem] lg:h-auto" src={mobilecover3} alt=""/>
            </div>
            
        </div>
    );
};

export default Banner;