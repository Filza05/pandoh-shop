"use client";

import { MDBCarousel } from "mdb-react-ui-kit";
import CarouselItem from "./CarouselItem";
import slides from "../constants/Slides";
import { useState } from "react";

const HomePageCarousel = () => {
  const [scrollingEnabled, setScrollingEnabled] = useState(true);

  return (
  <MDBCarousel className="h-screen" showControls showIndicators interval={scrollingEnabled? 5000: 9999999}>
    {slides.map((slide, index) => {
      return (
        <CarouselItem
        key={index}
        setScrollingEnabled = {setScrollingEnabled}
        imageURL={slide.image} index={index}
        title={slide.title}
        category={slide.category}
        description={slide.description}/>
      )
    })}
  </MDBCarousel>
  );
};

export default HomePageCarousel;
