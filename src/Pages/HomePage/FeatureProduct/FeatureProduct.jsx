import featurephoto from "../../../assets/feature.png"

const FeatureProduct = () => {
    return (
        <div className="mt-20 mx-[10%]">
            <div className="flex items-center gap-4">
                <div className="w-[1.25rem] h-[2.5rem] bg-[#1C3988]">


                </div>
                <h1 className="text-[#1C3988] text-2xl font-semibold">Feature Product</h1>
            </div>

            <div className="flex gap-8">
                <div className="mt-6 w-[17rem] h-[30rem] relative">
                    <img className="w-full h-full" src={featurephoto} alt="" />
                    <h1 className="text-2xl font-semibold absolute bottom-4 text-white text-center left-[2.52rem]">Upto 50% <br />flat discount</h1>
                </div>

                <div className="mt-6">
                    <div className="w-[11rem] h-[14.5rem] rounded-[0.412rem] border-[0.7px] border-[#EAEAEA] bg-white hover:shadow-xl hover:shadow-[#1C3988]">
                        <img className="w-[5.5rem] rounded-sm h-[6.7rem] mx-auto mt-[0.9rem]" src={featurephoto} alt="" />
                        <div className="w-[11rem] h-[5.8rem] bg-[#EAEAEA] mt-4 rounded-b-lg">
                            <h1 className="text-xs font-semibold px-2 pt-2 ">Samsung ultra edge AMOLED phone</h1>

                            <div className="px-2 mt-3 flex justify-between items-center">
                                <p>$300</p>
                                <button className="btn btn-neutral text-white h-[2rem] bg-[#1C3988] btn-xs">View Details</button>
                            </div>

                        </div>

                    </div>
                   
                </div>
            </div>

        </div>
    );
};

export default FeatureProduct;