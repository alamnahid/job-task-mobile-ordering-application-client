import { Link } from "react-router-dom";

const FeatureProductCard = ({phone}) => {
    return (
        <div>
            <div data-aos="zoom-out-up" className="w-[15rem] h-[20.5rem] rounded-[0.412rem] border-[0.7px] border-[#EAEAEA] bg-white hover:shadow-xl hover:shadow-[#1C3988]">
                        <img className="w-[7.5rem] rounded-sm h-[8.7rem] mx-auto mt-[0.9rem]" src={phone?.image} alt="" />
                        <div className="w-[15rem] h-[9.8rem] bg-[#EAEAEA] mt-4 rounded-b-lg">
                            <h1 className="text-lg font-semibold px-2 pt-2 ">{phone?.modelname}</h1>

                            <div className="px-2 mt-6 flex justify-between items-center">
                                <p className="text-lg font-medium">${phone?.price}</p>
                                <Link to={`/all-mobile/${phone?._id}`}><button className="btn btn-neutral text-white h-[2rem] bg-[#1C3988] btn-xs lg:btn-md">View Details</button></Link>
                            </div>

                        </div>

                    </div>
            
        </div>
    );
};

export default FeatureProductCard;