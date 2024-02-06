"use client";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import LinkButton from "../shared/buttons/LinkButton";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./banner.css";

const slides = [
  {
    id: "1",
    imgURL:
      "https://images.pexels.com/photos/2305098/pexels-photo-2305098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Chikanchara Emdadul Ulum Islamia Madrasah",
    subtitle:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt quis excepturi cum ut est, nemo laborum qui? Optio, vel quibusdam!",
  },
  {
    id: "2",
    imgURL:
      "https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Chikanchara Emdadul Ulum Islamia Madrasah",
    subtitle:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt quis excepturi cum ut est, nemo laborum qui? Optio, vel quibusdam!",
  },
  {
    id: "3",
    imgURL:
      "https://images.pexels.com/photos/247823/pexels-photo-247823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Chikanchara Emdadul Ulum Islamia Madrasah",
    subtitle:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt quis excepturi cum ut est, nemo laborum qui? Optio, vel quibusdam!",
  },
  {
    id: "4",
    imgURL:
      "https://images.pexels.com/photos/13057058/pexels-photo-13057058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Chikanchara Emdadul Ulum Islamia Madrasah",
    subtitle:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt quis excepturi cum ut est, nemo laborum qui? Optio, vel quibusdam!",
  },
];

export default function Banner() {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"></span>';
        },
      }}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
    >
      {slides.map(({ imgURL, title, subtitle, id }) => (
        <SwiperSlide key={id}>
          <div className="relative w-full h-[calc(100vh-5rem)] lg:h-[calc(100vh-10rem)]">
            <Image
              src={imgURL}
              alt="Banner"
              fill
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="container absolute inset-0 text-white flex flex-col justify-center items-center">
              <h1 className="text-4xl font-bold max-w-lg text-center mb-3">
                {title}
              </h1>
              <p className="max-w-2xl text-center mb-3">{subtitle}</p>
              <div className="flex gap-5">
                <LinkButton href="/contact-us" className="bg-secondary">
                  Contact Us
                </LinkButton>
                <LinkButton href="/apply-now">Apply Now</LinkButton>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
