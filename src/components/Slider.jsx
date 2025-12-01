import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../slides.css";


const slidesData = [
    {
        image: "/Zeeland.png",
        title: "Voorbeeld project 1",
        description: "Beschrijving van het eerste project",
        categories: ["Zeeland", "Waterschap", "Dijk", "Bouw"],
        buttonlink: "https://www.google.com"
    },
    {
        image: "/Dordrecht.jpg",
        title: "Voorbeeld project 2",
        description: "Beschrijving van het tweede project",
        categories: ["Dordrecht", "Gemeente", "Stedenbouw"],
        buttonlink: "https://www.google.com"
    },
    {
        image: "/skyline_asia.jpg",
        title: "Voorbeeld project 3",
        description: "Beschrijving van het derde project",
        categories: ["Test", "Voorbeeld"],
        buttonlink: "https://www.google.com"
    },
    {
        image: "/skyline_york.jpg",
        title: "Voorbeeld project 4",
        description: "Beschrijving van het vierde project",
        categories: ["Test2", "Voorbeeld2"],
        buttonlink: "https://www.google.com"
    },
]

export default function Slider() {
    const swiperWrappedRef = useRef(null);

    function adjustMargin() {
        // Ensure the slider is not offset; let CSS handle layout
        if (swiperWrappedRef.current) {
            swiperWrappedRef.current.style.marginLeft = "0px";
        }
    }

    useEffect(() => {
        adjustMargin();
        window.addEventListener("resize", adjustMargin);
        return () => {
            window.removeEventListener("resize", adjustMargin);
        }
    }, []);

    return(
        <section className="slider-root">

            <div className="slider-container">
                <div className="slider-title">
                    <h2>Projecten</h2>
                </div>
                <Swiper
                    modules={[Pagination]}
                grabCursor
                initialSlide={2}
                centeredSlides
                slidesPerView="auto"
                speed={800}
                slideToClickedSlide
                pagination={{clickable: true}}
                breakpoints={{
                    320: {spaceBetween: 40},
                    650: {spaceBetween: 30},
                    1000: {spaceBetween: 20},
                }}
                onSwiper={(swiper) => {
                    swiperWrappedRef.current = swiper.wrapperEl;
                }}>
                    {slidesData.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <img src={slide.image} alt={slide.title}/>
                            <div className="title">
                                <h1>{slide.title}</h1>
                            </div>
                            <div className="content">
                                <div className="text-box">
                                    <p>{slide.description}</p>
                                </div>
                                <div className="footer">
                                    <div className="category">
                                        {slide.categories.map((category, index) => (
                                            <span key={index} style={{"--i": index +1}}>
                                                {category}
                                            </span>
                                        ))}
                                    </div>
                                    <a
                                        className="button"
                                        href={slide.buttonlink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Meer info over ${slide.title}`}
                                    >
                                        <span className="label">
                                            Meer info
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}