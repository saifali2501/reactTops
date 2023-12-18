import Carousel from 'react-bootstrap/Carousel';
import IMg1 from '../assets/banner3.jpg'
import IMg2 from '../assets/banner4.jpg'
import IMg3 from '../assets/three.avif'
import { Button } from 'react-bootstrap';

function DarkVariantExample() {
  return (
    <div>

    <Carousel data-bs-theme="dark" className='saif' >
      <Carousel.Item>
        <img
          className="d-block w-100  "
          src={IMg1}
          alt="First slide"
          style={{height:"700px"}}
          />
        <Carousel.Caption className='text'>
        <p>The Idea That Make Customers Go Wow</p>
          <h1>
            Sharing Your Company With The Wold 
          </h1>
          <Button>Read More</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={IMg2}
          alt="Second slide"
          style={{height:"700px"}}
          />
        <Carousel.Caption className='text'>
        <p>Providing Brillint ideas For Your Business</p>
          <h1>
            Your Ideas Relized For The Real World
          </h1>
          <Button>Read More</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={IMg3}
          alt="Third slide"
          style={{height:"700px"}}
          />
        <Carousel.Caption className=' text '>
        <p>Providing Brillint ideas For Your Business</p>
          <h1>
            Your Ideas Relized For The Real World
          </h1>
          <Button>Read More</Button>
          
        </Carousel.Caption>
        
      </Carousel.Item>
     

    </Carousel>
    
          </div>
  );
}

export default DarkVariantExample;