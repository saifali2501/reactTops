import React, { useState } from "react";
import "./Body.css";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

// import Img1 from "../../..//Images/BodyImage/LapTop.webp";
import Img1 from "../../../../../assets/Images/BodyImage/LapTop.webp"
import Img2 from "../../../../../assets/Images/BodyImage/Mobile.webp"
import Img3 from "../../../../../assets/Images/BodyImage/Watch.webp"

// import Img2 from "../../../Images/BodyImage/Mobile.webp";
// import Img3 from "../../../Images/BodyImage/Watch.webp";
import { Button } from "react-bootstrap";

const items = [
  {
    src: Img1,
    altText: "saif",
    caption: "Slide 1",
    key: 1,
  },
  {
    src: Img2,
    altText: "Slide 2",
    caption: "Slide 2",
    key: 2,
  },
  {
    src: Img3,
    altText: "Slide 3",
    caption: "Slide 3",
    key: 3,
  },
];

export default function Body(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img
          style={{ position: "relative" }}
          src={item.src}
          alt={item.altText}
          className="w-100 h-100"
        />

        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        {...args}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>

      <div className="Body_text">
        <p>Best Prices</p>
        <h2>Incredible Prices on All Your Favorite Items</h2>
        <h6 className="txt">Get more for less on selected brands</h6>
        <Button className="bt">Shop Now</Button>

      </div>
    </>
  );
}
