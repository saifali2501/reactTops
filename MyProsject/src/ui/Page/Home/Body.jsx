// import React from 'react'
// import Carousel from 'react-bootstrap/Carousel';
// // import { Carousel } from 'react-bootstrap';

// export default function Body() {
//   return (
//     <>
//       <div id="carouselExampleControls" className="carousel slide" data-ride="Carousel">
//   <div className="carousel-inner">
//     <div className="carousel-item active">
//       <img className="d-block w-100" src="..." alt="First slide"/>
//     </div>
//     <div className="carousel-item">
//       <img className="d-block w-100" src="..." alt="Second slide"/>
//     </div>
   
//   </div>
//   <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="sr-only">Previous</span>
//   </a>
//   <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="sr-only">Next</span>
//   </a>
// </div>
//     </>
//   )
// }
import React, { useState } from 'react';
import IMg1 from '../../../Image/boat1.webp';
import IMg2 from '../../../Image/image2.webp';
import IMg3 from '../../../Image/image3.webp';
import IMg4 from '../../../Image/image4.webp';
import IMg5 from '../../../Image/image5.webp';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: IMg1, // Use the imported image
    altText: 'Slide 1',
    caption: 'Slide 1',
    key: 1,
  },
  {
    src: IMg2, // Use the imported image
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: 3,
  },
  {
    src: IMg3, // Use the imported image
    altText: 'Slide 3',
    caption: 'Slide 3',
    key: 2,
  },
  {
    src: IMg4, // Use the imported image
    altText: 'Slide 4',
    caption: 'Slide 4',
    key: 4,
  },
  {
    src: IMg5, // Use the imported image
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: 5,
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
        <img src={item.src} alt={item.altText} className=' w-100 h-75' />
        
      </CarouselItem>
    );
  });

  return (
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
  );
}

