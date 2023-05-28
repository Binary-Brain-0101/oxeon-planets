import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import "./MainCarousel.css"; 
import "../css/carousel.css";



const MainCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="carousel-container">
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={true}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5s"
        transitionDuration={500}
        containerClass="carousel-wrapper"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div className="carousel-image">
          <img
            className="d-block carousel-image"
            src={"/images/carousel/s1.jpg"}
            alt="First slide"
          />
        </div>
        <div className="carousel-image">
          <img
            className="d-block carousel-image"
            src={"/images/carousel/s2.jpg"}
            alt="Second slide"
          />
        </div>
        <div className="carousel-image">
          <img
            className="d-block carousel-image"
            src={"/images/carousel/s3.jpg"}
            alt="Third slide"
          />
        </div>
        <div className="carousel-image">
          <img
            className="d-block carousel-image"
            src={"/images/carousel/s4.jpg"}
            alt="Fourth slide"
          />
        </div>
        <div className="carousel-image">
          <img
            className="d-block carousel-image"
            src={"/images/carousel/s5.jpg"}
            alt="Fifth slide"
          />
        </div>
        <div className="carousel-image">
          <img
            className="d-block carousel-image"
            src={"/images/carousel/s6.jpg"}
            alt="Sixth slide"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default MainCarousel;
