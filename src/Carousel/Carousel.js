import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css'

function CarouselCom(){
  return (
    
<Carousel>
      <Carousel.Item>
        <div className='carousel-div'>
            <div className='carousel-content'>
                <h1>Kitchen Favourites</h1>
                <h3>Staring from <sup>&#8377;</sup>299 </h3>
            </div>
            <img alt='' src='https://images.unsplash.com/photo-1556909172-6ab63f18fd12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGtpdGNoZW4lMjB1dGVuc2lsc3xlbnwwfHwwfHx8MA%3D%3D' className='img-carousel'/>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='carousel-div'>
            <div className='carousel-content'>
                <h1>Starting from <sup>&#8377;</sup>299 </h1>
                <h3>Kurtas & Tshirts</h3>
                <h6>Pay on Delivery | Latest Trends</h6>
            </div>
            <img alt='' src='https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D' className='img-carousel'/>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='carousel-div'>
            <div className='carousel-content'>
                <h1>SMART PHONES</h1>
                <h2>Starting from <sup>&#8377;</sup>60,799</h2>
                <h6>No Cost EMI</h6>
            </div>
            <img alt='' src='https://images.unsplash.com/photo-1616410011236-7a42121dd981?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjBwaG9uZXN8ZW58MHx8MHx8fDA%3D' className='img-carousel'/>
        </div>
      </Carousel.Item>
    </Carousel>
      );
    };
    
    export default CarouselCom;

