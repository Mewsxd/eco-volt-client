import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

// Testimonials Data
const testimonials = [
  {
    id: 1,
    name: "Jane Smith",
    position: "Sustainable Energy Consultant",
    quote:
      "EcoVolt is a game-changer for sustainable energy projects. The token-based incentives and carbon tracking features are revolutionizing how we approach green initiatives.",
    image: "https://images.pexels.com/photos/3601757/pexels-photo-3601757.jpeg",
  },
  {
    id: 2,
    name: "John Doe",
    position: "Software Engineer at Microsoft",
    quote:
      "EcoVolt makes it easier than ever to integrate renewable energy solutions into everyday transactions. The crowdfunding platform and carbon credit marketplace are especially innovative.",
    image:
      "https://st.depositphotos.com/1144472/2003/i/450/depositphotos_20030237-stock-photo-cheerful-young-man-over-white.jpg",
  },
  {
    id: 3,
    name: "Alice Johnson",
    position: "Environmental Scientist",
    quote:
      "I love how EcoVolt combines technology with sustainability. It’s a great step forward in promoting eco-friendly practices and supporting green projects.",
    image: "https://images.pexels.com/photos/4050314/pexels-photo-4050314.jpeg",
  },
];

const Testimonials: React.FC = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className=" text-black my-24 px-4 font-inter">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className=" text-3xl sm:text-4xl font-extrabold font-robo-mono text-center mb-4 text-black">
          What Our <span className="text-green-400">Users</span> Say
        </h2>
        <p className="text-center mb-12 text-gray-400 text-lg">
          What Our Users Say: Empowering Green Energy with EcoVolt
        </p>

        {/* Swiper Slider */}
        <div className="relative max-w-4xl mx-auto">
          <Swiper
            modules={[Navigation]}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              // Attach buttons to swiper navigation
              if (swiper.params.navigation) {
                (swiper.params.navigation as any).prevEl = prevRef.current;
                (swiper.params.navigation as any).nextEl = nextRef.current;
              }
            }}
            className="py-8"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="flex flex-col items-center bg-[#00384F] p-8 rounded-lg shadow-lg transition-all duration-300 ">
                  <p className="text-lg italic text-gray-300 mb-6 text-center">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full border-2 border-gray-600"
                    />
                    <div className="text-center">
                      <p className="font-semibold text-white text-lg">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              ref={prevRef}
              className="w-10 h-10 flex items-center justify-center text-gray-400 border border-gray-600 rounded-full hover:bg-gray-700 hover:text-white transition duration-200"
            >
              {/* &#8592; */}
              <FaArrowLeft />
            </button>
            <button
              ref={nextRef}
              className="w-10 h-10 flex items-center justify-center text-gray-400 border border-gray-600 rounded-full hover:bg-gray-700 hover:text-white transition duration-200"
            >
              {/* &#8594; */}
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
