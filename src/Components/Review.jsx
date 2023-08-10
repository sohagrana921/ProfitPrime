import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Reviews = () => {

    return (
        <div className='text-center md:mb-20'>
            <h1 className='lg:text-4xl text-2xl uppercase font-bold pt-10 md:py-20 text-sky-950 text-center'>Whats our clients say</h1>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className=" flex flex-col items-center md:mx-40">
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={4.3}
                            readOnly
                        />
                        <p className="my-4">ProfitPrime has been a valuable tool for optimizing my online business revenue. The features provided by ProfitPrime have helped streamline my processes and improve my overall business performance. With its user-friendly interface and comprehensive analytics, I can make informed decisions to enhance my revenue generation strategies</p>
                        <h3 className="md:text-2xl text-yellow-600">Shadhin</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" flex flex-col items-center md:mx-40">
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={4.3}
                            readOnly
                        />
                        <p className="my-4">ProfitPrime has been a valuable tool for optimizing my online business revenue. The features provided by ProfitPrime have helped streamline my processes and improve my overall business performance. With its user-friendly interface and comprehensive analytics, I can make informed decisions to enhance my revenue generation strategies</p>
                        <h3 className="md:text-2xl text-yellow-600">Shadhin</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" flex flex-col items-center md:mx-40">
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={4.3}
                            readOnly
                        />
                        <p className="my-4">ProfitPrime has been a valuable tool for optimizing my online business revenue. The features provided by ProfitPrime have helped streamline my processes and improve my overall business performance. With its user-friendly interface and comprehensive analytics, I can make informed decisions to enhance my revenue generation strategies</p>
                        <h3 className="md:text-2xl text-yellow-600">Shadhin</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" flex flex-col items-center md:mx-40">
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={4.3}
                            readOnly
                        />
                        <p className="my-4">ProfitPrime has been a valuable tool for optimizing my online business revenue. The features provided by ProfitPrime have helped streamline my processes and improve my overall business performance. With its user-friendly interface and comprehensive analytics, I can make informed decisions to enhance my revenue generation strategies</p>
                        <h3 className="md:text-2xl text-yellow-600">Shadhin</h3>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Reviews;