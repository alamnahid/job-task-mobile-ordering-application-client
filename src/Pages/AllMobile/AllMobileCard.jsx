import { Link } from "react-router-dom";


const AllMobileCard = ({phone}) => {
    console.log(phone)
    return (
        <div className="w-[21.875rem] h-[26.25rem] rounded-tr-[3rem] shadow-md hover:shadow-2xl hover:shadow-[#1C3988] hover:cursor-grab bg-white">
                <div className="w-[21.875rem] rounded-tr-[3rem] h-[15.5625rem] relative">
                <img className="w-[21.875rem] rounded-tr-[3rem] h-[15.5625rem]" src={phone?.image} alt="" />

                <div className="w-[10rem] h-[2.6rem] bg-[#1C3988] flex justify-center items-center rounded-r-lg absolute bottom-0">
                    <h1 className="text-white text-xl font-medium">{phone?.brandname}</h1>
                </div>
                </div>
                <h1 className="text-[#141B2D] text-[1.32rem] font-semibold px-5 mt-6 merrin">{phone?.modelname}</h1>
                <p className=" text-[#141B2D] sans pl-5">{phone?.sorage}</p>
                <div className="flex mt-4 justify-between items-center pr-5">
                    <div>
                        <p className="text-[#1C3988] text-lg sans font-semibold pl-5">${phone?.price}</p>
                        <p className=" text-[#141B2D] sans pl-5">{phone?.location}</p>
                    </div>
                    <Link to={`/allhouse/${phone?._id}`}><button className="btn btn-outline border-[#1C3988] text-lg border-2">See Details</button></Link>
                </div>

            </div>
    );
};

export default AllMobileCard;