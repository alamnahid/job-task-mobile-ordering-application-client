import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { FaCarSide, FaCartPlus, FaShoppingBag, FaSignInAlt } from "react-icons/fa";
import Zoom from "react-img-hover-zoom";

const MobileDetails = () => {
    const {id} = useParams();
    const axiosPublic = useAxiosPublic()
    const { data, refetch, isLoading } = useQuery({
        queryKey: ['mobile', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/allmobile/${id}`)
            return res.data;
        }
    })

    console.log(data)
    return (
        <div className="mt-20">
            <div className="flex flex-col lg:flex-row lg:justify-evenly lg:items-center px-[7%] lg:px-0">
                <Zoom
                        img={data?.image}
                        zoomScale={2}
                        width={450}
                        height={500}
                        className="w-[450px] lg:w-[500px]"
                    />

                <div className="lg:w-[30vw]">
                    <h1 className="text-2xl font-medium ">{data?.modelname}</h1>

                    <p className="text-xl mt-3">${data?.price}</p>

                    <div className="flex justify-between items-center my-6">
                        <div className="flex gap-2 lg:text-xl items-center">
                            <FaShoppingBag />
                            In Stock
                        </div>
                        <div className="flex gap-2 lg:text-xl items-center">
                            <FaSignInAlt />
                            Guaranteed
                        </div>
                        <div className="flex gap-2 lg:text-xl items-center">
                            <FaCarSide />
                            Free Delivery
                        </div>
                    </div>

                    

                    <ul className="space-y-3 mt-3">
                        <li className="list-disc text-xl font-medium">Brand Name: <span className="">{data?.brandname}</span></li>
                        <li className="list-disc text-xl font-medium">Battery: <span className="">{data?.battery}</span></li>
                        <li className="list-disc text-xl font-medium">Camera: <span className="">{data?.camera}</span></li>
                        <li className="list-disc text-xl font-medium ">Type <span className="">{data?.type}</span></li>
                        <li className="list-disc text-xl font-medium ">Display <span className="">{data?.display}</span></li>
                        <li className="list-disc text-xl font-medium ">Processor <span className="">{data?.processor}</span></li>
                        <li className="list-disc text-xl font-medium ">Storage <span className="">{data?.storage}</span></li>
                    </ul>

                    <p className="mt-4">{data?.description}</p>

                    <div className="flex gap-6">
                        <button  className=" h-[3rem]  btn border-none bg-[#1C3988] l text-white  btn-neutral  rounded-lg   text-lg font-medium flex justify-center items-center gap-2 mt-6 w-full"><FaCartPlus /> Add to cart </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MobileDetails;