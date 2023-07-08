import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';

class Highlights extends React.Component {
  render() {
    return (
      <Carousel fade>
        <Carousel.Item>
          <img src="background.jpg" alt="" style={{ width: '100%', height: '650px' }} />
          <Carousel.Caption style={{ backgroundColor: 'rgba(100, 97, 97, 0.5)' }}>
            <h1 style={{ color: 'white', fontSize: '100px' }}>Yummies</h1>
            <h1 style={{ color: 'black' }}>Where taste matters</h1>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src="download.jpeg" alt="" style={{ width: '100%', height: '650px' }} />
          <Carousel.Caption style={{ backgroundColor: 'rgba(100, 97, 97, 0.5)' }}>
            <h1 style={{ color: 'white', fontSize: '100px' }}>Fast Food</h1>
            <h1 style={{ color: 'black' }}>World class taste</h1>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src="background.jpg" alt="" style={{ width: '100%', height: '650px' }} />
          <Carousel.Caption style={{ backgroundColor: 'rgba(100, 97, 97, 0.5)' }}>
            <h1 style={{ color: 'white', fontSize: '100px' }}>Delicious Dinner</h1>
            <h1 style={{ color: 'black' }}>Yummies Special</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Highlights;
