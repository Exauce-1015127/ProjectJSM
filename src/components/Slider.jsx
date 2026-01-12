import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { sanityClient } from "../lib/sanity";
import "swiper/css";
import "swiper/css/pagination";
import "../slides.css";

export default function Slider() {
  const swiperWrappedRef = useRef(null);
  const [slidesData, setSlidesData] = useState([]);

  function adjustMargin() {
    if (swiperWrappedRef.current) {
      swiperWrappedRef.current.style.marginLeft = "0px";
    }
  }

  useEffect(() => {
    adjustMargin();
    window.addEventListener("resize", adjustMargin);

    sanityClient
      .fetch(`
        *[_type == "sliderItem"] | order(order asc) {
          title,
          description,
          categories,
          "image": image.asset->url
        }
      `)
      .then(setSlidesData)
      .catch(console.error);

    return () => {
      window.removeEventListener("resize", adjustMargin);
    };
  }, []);

  if (!slidesData.length) return null;

  return (
    <section className="slider-root">
      <div className="slider-container">
        <div className="slider-title">
          <h2>Referenties</h2>
        </div>

        <Swiper
          modules={[Pagination]}
          grabCursor
          initialSlide={2}
          centeredSlides
          slidesPerView="auto"
          speed={800}
          slideToClickedSlide
          pagination={{ clickable: true }}
          breakpoints={{
            320: { spaceBetween: 40 },
            650: { spaceBetween: 30 },
            1000: { spaceBetween: 20 },
          }}
          onSwiper={(swiper) => {
            swiperWrappedRef.current = swiper.wrapperEl;
          }}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <img src={slide.image} alt={slide.title} />

              <div className="title">
                <h1>{slide.title}</h1>
              </div>

              <div className="content">
                <div className="text-box">
                  <p>{slide.description}</p>
                </div>

                <div className="footer">
                  <div className="category">
                    {slide.categories?.map((category, i) => (
                      <span key={i} style={{ "--i": i + 1 }}>
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
