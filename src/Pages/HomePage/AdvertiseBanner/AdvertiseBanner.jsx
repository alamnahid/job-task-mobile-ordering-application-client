

const AdvertiseBanner = () => {
    return (
        <div className=" mt-12 lg:mt-32 lg:px-[10%] ">
            <div className="w-full h-[30vh] lg:h-[40vh] rounded-xl bg-[#223949] flex justify-between items-center">
                <div className="lg:w-[20rem] text-center lg:ml-[10vw]">
                    <h1 className="text-white text-[1.2rem] lg:text-[2.75rem] font-medium">Realme 11x PRO ultra</h1>
                    <p className="lg:text-2xl text-white mt-4">Only ₹19,999</p>
                    <button className="btn btn-secondary mt-6 bg-[#FF6951] border-none w-[7rem] capitalize text-white text-lg">View</button>
                </div>

                <div>
                    <div>
                        <div className="w-[25vw] h-[30vh] lg:h-[40vh] flex justify-center items-center rounded-l-[50rem] bg-[#FF6951]">
                            <img className="mr-[20vw] w-[20rem] lg:w-auto" src="https://i.ibb.co/kXBf16h/image-10.png" alt="" />
                        </div>

                    </div>

                </div>

            </div>
            
        </div>
    );
};

export default AdvertiseBanner;