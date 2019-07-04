import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import avengers from '../images/avengers.jpg'
import kgf from '../images/kgf.jpg'
import gog from '../images/gog.jpg'

function CarouselComponent(){
    return(
        <div>
            <Carousel autoPlay 
                className="carousel"
                showThumbs={false} 
                interval={2500} 
                swipeable={true} 
                stopOnHover={true}
                useKeyboardArrows={true}
            >
                <div>
                    <img src={avengers} alt="avenegrs" className="carousel-imgs"/>
                </div>
                <div>
                    <img src={kgf} alt="kgf" className="carousel-imgs"/>
                </div>
                <div>
                    <img src={gog} alt="gog" className="carousel-imgs"/>
                </div>
            </Carousel>
            
        </div>
    )
    
}

export default CarouselComponent