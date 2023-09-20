import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "@smastrom/react-rating/style.css";
import SectionTitle from "../pages/Shared/SectionTitle/SectionTitle";
import { useState } from "react";
import { useEffect } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://profit-prime-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  
  return (
    <div id="testimonials">
      <SectionTitle
        subheading={"Testimonials"}
        heading={"WHAT OUR CLIENTS SAY"}
      ></SectionTitle>

      <div className="text-center md:mb-20 my-container">
        <Swiper
          spaceBetween={50}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div
                className=" flex flex-col items-center lg:mx-40"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                <p className="my-4">{review?.quote}</p>
                <h3 className="md:text-2xl text-purple-950 font-bold uppercase">
                  {review?.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
