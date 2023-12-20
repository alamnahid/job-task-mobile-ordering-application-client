import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ReviewCard from './ReviewCard';

const Review = () => {
    return (
        <div className="my-20 px-4 lg:ml-[10%]">
            <h1 className="text-[#091638] text-3xl lg:text-[3.2425rem] font-semibold  ">What Our Customers Say</h1>
            <p className="text-[#091638] text-xs lg:text-[1.1rem] mt-8 lg:w-[70vw] leading-6">Explore the firsthand experiences of our valued customers in the Mobile Shop review section. From seamless shopping experiences to unbeatable prices, our customers share their thoughts on why Mobile Shop is their preferred destination for all things mobile. Discover why our community trusts us for top-notch service and exceptional products. </p>


            <div>
                <div className='mt-4'>

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
                                slidesPerView: 1, 
                            },
                            1024: {
                                slidesPerView: 2.5, 
                            },
                        }}

                    >
                        <SwiperSlide className='pb-12'>
                            <ReviewCard review={'Mobile Shop has made ordering a breeze! The user-friendly interface and quick navigation make finding and purchasing my favorite items a seamless process. Highly recommend for a hassle-free mobile shopping experience!'} name={'John Thompson'} designation={'IT Professional'} />
                        </SwiperSlide>
                        <SwiperSlide className='pb-12'>
                            <ReviewCard review={'Mobile Shop delivers on its promise of speedy service. Placing orders is quick, and the delivery is always on time. The reliability of this mobile ordering website keeps me coming back for more.'} name={'Laura Reynolds'} designation={'Marketing Manager'}/>
                        </SwiperSlide>
                        <SwiperSlide className='pb-12'>
                            <ReviewCard review={'I love the wide range of products available on Mobile Shop, and the prices are competitive. The website offers excellent value for money, making it my go-to destination for all my mobile needs.'} name={'David Martinez'} designation={'Software Engineer'}/>
                        </SwiperSlide>
                        <SwiperSlide className='pb-12'>
                            <ReviewCard review={'The sleek and modern design of Mobile Shop enhances the overall shopping experience. Navigating through the website is a breeze, making it enjoyable to explore and find the latest mobile gadgets.'}  name={'Emma Carter'} designation={'Interior Designer'}/>
                        </SwiperSlide>
                        <SwiperSlide className='pb-12'>
                            <ReviewCard review={'Mobile Shops customer support team is top-notch. Any queries or concerns are addressed promptly, and they go the extra mile to ensure customer satisfaction. Its refreshing to see such dedication to service.'} name={'Ryan Anderson'} designation={'Sales Executive'} />
                        </SwiperSlide>

                    </Swiper>

                </div>
            </div>

        </div>
    );
};

export default Review;