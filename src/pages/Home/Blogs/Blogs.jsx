import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import image1 from "../../../assets/Team/Tonmoy.jpg"
import image2 from "../../../assets/Team/Sohag.jpg"
import image3 from "../../../assets/Team/Arafat.jpg"
import image4 from "../../../assets/Team/sohan.jpg"

const Blogs = () => {

    return (
        <div>
            <SectionTitle
                subheading={"From us"}
                heading={"OUR BLOG"}
            ></SectionTitle>

            <div className="text-center md:mb-20 my-container">
                <Swiper
                    spaceBetween={50}
                    centeredSlides={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className=" flex flex-col items-center lg:mx-40" data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom">
                            <img src={image1} alt="" className="w-32 h-32 rounded-full mx-auto" data-aos="flip-right" />
                            <p className="my-4">
                                ProfitPrime has been a valuable tool for optimizing my online
                                business revenue. The features provided by ProfitPrime have
                                helped streamline my processes and improve my overall business
                                performance. With its user-friendly interface and comprehensive
                                analytics, I can make informed decisions to enhance my revenue
                                generation strategies
                            </p>
                            <h3 className="md:text-2xl text-purple-950 font-bold uppercase">
                                Tonmoy
                            </h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" flex flex-col items-center lg:mx-40" data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom">
                            <img src={image2} alt="" className="w-32 h-32 rounded-full mx-auto" data-aos="flip-right" />
                            <p className="my-4">
                                I have found ProfitPrime to be an effective platform for
                                boosting revenue. Its range of tools and resources have given my
                                business a competitive edge. The insights provided by
                                ProfitPrimes analytics have been invaluable in understanding
                                customer behavior and fine-tuning my strategies. I highly
                                recommend ProfitPrime to fellow entrepreneurs
                            </p>
                            <h3 className="md:text-2xl text-purple-950 font-bold uppercase" data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom">
                                Sohag
                            </h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" flex flex-col items-center lg:mx-40">
                            <p className="my-4">
                                <img src={image3} alt="" className="w-32 h-32 rounded-full mx-auto" data-aos="flip-right" />
                                As a creative professional, I have benefited from ProfitPrimes
                                revenue optimization solutions. The platforms innovative
                                approach has helped me monetize my artistic endeavors more
                                effectively. With ProfitPrimes guidance, I have been able to
                                reach a wider audience and increase my earnings while staying
                                true to my creative vision
                            </p>
                            <h3 className="md:text-2xl text-purple-950 font-bold uppercase" data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom">
                                Arafat
                            </h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" flex flex-col items-center lg:mx-40">
                            <p className="my-4">
                                <img src={image4} alt="" className="w-32 h-32 rounded-full mx-auto" data-aos="flip-right" />
                                ProfitPrime has exceeded my expectations in revenue generation.
                                The platforms data-driven insights have been instrumental in
                                driving growth for my business. Its user-friendly interface and
                                powerful features make it accessible to businesses of all sizes.
                                Thanks to ProfitPrime, I have achieved remarkable results and
                                significantly increased my revenue
                            </p>
                            <h3 className="md:text-2xl text-purple-950 font-bold uppercase">
                                Sohan
                            </h3>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Blogs;