import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import the Bootstrap CSS

const Banner = () => {
  return (
    <Carousel>
      {/* <Carousel.Item> */}
        {/* <img src="../images/banner01.jpg" className="d-block w-100" alt="..." /> */}
      {/* </Carousel.Item> */}
      <Carousel.Item>
        <img src="../images/banner02.jpg" className="d-block w-100" alt="..." />
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
