import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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

  // Array of image filenames (from the public/images/carousel directory)
  const imageFilenames = [
    "2.jpg",
    "3.jpg",
    "5.jpg",
    "6.jpg"
    // "hw_bio.jpg",
    // "hw_cctv.jpg",
    // "hw_web.jpg",
    // "hw_cctv1.jpg"
  ];

  return (
    <div className="carousel-container">
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={true}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all .5s"
        transitionDuration={500}
        containerClass="carousel-wrapper"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {imageFilenames.map((filename, index) => (
          <div className="carousel-image" key={index}>
            <img
              className="d-block carousel-image"
              src={`${process.env.PUBLIC_URL}/images/carousel/${filename}`}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MainCarousel;
