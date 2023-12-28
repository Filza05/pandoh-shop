"use client";

import React from "react";
// import { TECarousel, TECarouselItem } from "tw-elements-react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

const Slider = () => {
  return (
    <MDBCarousel className="h-screen" showControls showIndicators>
      <MDBCarouselItem className="h-screen" itemId={1} interval={2000}>
        <img
          src="https://mdbootstrap.com/img/new/slides/041.jpg"
          className="h-full d-block w-100"
          alt="..."
        />
        <div>This is a div</div>
      </MDBCarouselItem>
      <MDBCarouselItem className="h-screen" itemId={2} interval={2000}>
        <img
          src="https://mdbootstrap.com/img/new/slides/042.jpg"
          className="h-full d-block w-100"
          alt="..."
        />
      </MDBCarouselItem>
      <MDBCarouselItem className="h-screen" itemId={3} interval={2000}>
        <img
          src="https://mdbootstrap.com/img/new/slides/043.jpg"
          className="h-full d-block w-100"
          alt="..."
        />
      </MDBCarouselItem>
    </MDBCarousel>
    // <TECarousel
    //   className="h-screen w-screen"
    //   showControls
    //   showIndicators
    //   ride="carousel"
    // >
    //   <div className="relative h-full w-full overflow-hidden after:clear-both after:block after:content-['']">
    //     <TECarouselItem
    //       itemID={1}
    //       className="h-full relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
    //     >
    //       <img
    //         src="images/sign-up.jpg"
    //         className="block h-full w-full"
    //         alt="..."
    //       />
    //       <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
    //         <h5 className="text-xl">First slide label</h5>
    //         <p>
    //           Some representative placeholder content for the first slide.
    //         </p>
    //       </div>
    //     </TECarouselItem>
    //     <TECarouselItem
    //       itemID={2}
    //       className="h-full relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
    //     >
    //       <img
    //         src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg"
    //         className="block h-full w-full"
    //         alt="..."
    //       />
    //       <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
    //         <h5 className="text-xl">Second slide label</h5>
    //         <p>
    //           Some representative placeholder content for the second slide.
    //         </p>
    //       </div>
    //     </TECarouselItem>
    //     <TECarouselItem
    //       itemID={3}
    //       className="h-full relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
    //     >
    //       <img
    //         src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg"
    //         className="block h-full w-full"
    //         alt="..."
    //       />
    //       <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
    //         <h5 className="text-xl">Third slide label</h5>
    //         <p>
    //           Some representative placeholder content for the third slide.
    //         </p>
    //       </div>
    //     </TECarouselItem>
    //   </div>
    // </TECarousel>
  );
};

export default Slider;
