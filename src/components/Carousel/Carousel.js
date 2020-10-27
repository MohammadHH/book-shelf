import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Carousel.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1085 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 681 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 680, min: 0 },
    items: 1,
  },
};

const Arrow = (props) => {
  let shape = ["fa", "fa-2x"];
  let arrow = ["Arrow"];
  if (props.right) {
    shape.push("fa-chevron-right");
    arrow.push("right");
  }
  if (props.left) {
    shape.push("fa-chevron-left");
    arrow.push("left");
  }

  return (
    <div onClick={props.onClick} className={arrow.join(" ")}>
      <div className="d-flex justify-content-center align-items-center inner">
        <i className={shape.join(" ")}></i>
      </div>
    </div>
  );
};

const MyCarousel = (props) => (
  <Carousel
    infinite
    draggable={false}
    responsive={responsive}
    containerClass="carousel-container"
    arrows={false}
    customButtonGroup={<ButtonGroup />}
    renderButtonGroupOutside={true}
    customTransition="transform 700ms ease-in-out"
  >
    {props.children}
  </Carousel>
);

const ButtonGroup = ({ next, previous }) => {
  return (
    <div>
      <Arrow onClick={() => previous()} left />
      <Arrow onClick={() => next()} right />
    </div>
  );
};

export default MyCarousel;
