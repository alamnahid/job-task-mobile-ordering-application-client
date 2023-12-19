import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const HomePage = () => {
    return (
        <div className=' mt-6'>

            <div className='mx-[8%] rounded-lg'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper mt-12 rounded-lg"
                    autoplay
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 1,
                        },
                        1024: {
                            slidesPerView: 1,
                        },
                    }}

                >
                    <SwiperSlide className='pb-12'>
                    <img className='h-[80vh] w-full rounded-lg'  src="https://i.ibb.co/S5H1Zbz/4882860.jpg" alt="" />
                        
                    </SwiperSlide>
                    <SwiperSlide className='pb-12'>
                    <img className='h-[80vh] w-full rounded-lg' src="https://i.ibb.co/VjhzS9F/Screenshot-2023-12-19-221958.png" alt="" />
                    </SwiperSlide>
                   

                </Swiper>

            </div>

        </div>
    );
};

export default HomePage;