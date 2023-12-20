import FeatureProductCard from "./FeatureProductCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";

const FeatureProduct = () => {
    return (
        <div className="mt-20 mx-[10%]">
            <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
                <div className="w-[1.25rem] h-[2.5rem] bg-[#1C3988]">
                </div>
                <h1 className="text-[#1C3988] text-2xl font-semibold">Feature Product</h1>
            </div>
            <Link to='/all-mobile'><button className="btn btn-outline border-[#1C3988] lg:w-[6rem] text-lg border-2">See All</button></Link>
            </div>

            <div className="mt-6">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper mt-12"
                        autoplay
                        breakpoints={{
                            320: {
                                slidesPerView: 1, 
                            },
                            768: {
                                slidesPerView: 1.5, 
                            },
                            1024: {
                                slidesPerView: 4.5, 
                            },
                        }}

                    >
                        <SwiperSlide className='pb-12'>
                            <FeatureProductCard />
                        </SwiperSlide>
                        <SwiperSlide className='pb-12'>
                            <FeatureProductCard />
                        </SwiperSlide>
                        <SwiperSlide className='pb-12'>
                            <FeatureProductCard />
                        </SwiperSlide>
                        <SwiperSlide className='pb-12'>
                            <FeatureProductCard />
                        </SwiperSlide>
                        <SwiperSlide className='pb-12'>
                            <FeatureProductCard />
                        </SwiperSlide>

                    </Swiper>

                </div>

        </div>
    );
};

export default FeatureProduct;