import React from "react";
import MultiCarousel, { ButtonGroupProps } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./Carousel.module.scss";

interface ArrowProps {
  left?: boolean;
  right?: boolean;
  onClick?: () => void;
}

const responsiveConfigs = {
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

const Arrow = ({ left, right, onClick }: ArrowProps) => {
  return (
    <div
      onClick={onClick}
      className={`${styles.arrow} ${left ? styles.left : styles.right}`}
    >
      <div
        className={`d-flex justify-content-center align-items-center ${styles.inner}`}
      >
        <i
          className={`fa fa-2x ${
            left ? "fa-chevron-left" : "fa-chevron-right"
          }`}
        ></i>
      </div>
    </div>
  );
};

const ButtonGroup = ({ next, previous }: ButtonGroupProps) => {
  return (
    <div>
      <Arrow onClick={previous} left />
      <Arrow onClick={next} right />
    </div>
  );
};

export function Carousel({ children }: { children: React.ReactNode }) {
  return (
    <MultiCarousel
      infinite
      draggable={false}
      responsive={responsiveConfigs}
      containerClass={styles["carousel-container"]}
      arrows={false}
      customButtonGroup={<ButtonGroup />}
      renderButtonGroupOutside={true}
      customTransition="transform 700ms ease-in-out"
    >
      {children}
    </MultiCarousel>
  );
}
