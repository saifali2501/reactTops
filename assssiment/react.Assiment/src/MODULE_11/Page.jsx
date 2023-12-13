import Carousel from 'react-bootstrap/Carousel';
import IMg1 from '../assets/one.avif'
import IMg2 from '../assets/two.avif'
import IMg3 from '../assets/three.avif'

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark" >
      <Carousel.Item>
        <img
          className="d-block w-100  "
          src={IMg1}
          alt="First slide"
          style={{height:"700px"}}
        />
        <Carousel.Caption style={{color:"white"}}>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={IMg2}
          alt="Second slide"
          style={{height:"700px"}}
        />
        <Carousel.Caption style={{color:"white"}}>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={IMg3}
          alt="Third slide"
          style={{height:"700px"}}
        />
        <Carousel.Caption style={{color:"white"}}>
          <h5 >Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;