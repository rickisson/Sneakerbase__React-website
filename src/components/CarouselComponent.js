import React from 'react';
import Carousel from 'react-bootstrap/Carousel'



class HomeCarousel extends React.Component {
    render() {
      return (
          <div className="container-fluid">
         <Carousel>
         <Carousel.Item>
            <img style={{'height':"600px"}} className="d-block w-100" src="/images/ebayair.webp"/>
         <Carousel.Caption><h3>First slide label</h3></Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item>
            <img style={{'height':"600px"}} className="d-block w-100" src="/images/sneakershop.webp"/>
         <Carousel.Caption><h3>Second slide label</h3></Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item>
            <img style={{'height':"600px"}} className="d-block w-100" src="/images/ebaysneaks.jpg"/>
         <Carousel.Caption><h3>Third slide label</h3></Carousel.Caption>
       </Carousel.Item>

         </Carousel>
         </div>
           

        );
  }

} 
  
  export default HomeCarousel;