import React from 'react'
import './Home.css';
import Product from '../Product/Product';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { sliceImg, productInfo } from '../../constant';


function Home() {

    //settings for slider
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: false
    };
    console.log(sliceImg);
    
    return (
        <div className='home'>
            <div className='home_container'>
                <div className='home_slice'>
                    <Slider {...settings}>
                        {sliceImg.map((slice) => (
                                <div>
                                <img
                                    className='home_img'
                                    src={slice.linkImg}
                                    alt=''/>
                                </div>
                            ))}
                    </Slider>
                </div>
                <div>
                    {productInfo.map(list => (
                        <div className='home_row'>
                            {list.content.map(item => (
                                    <Product
                                        id={item.id}
                                        title={item.title}
                                        price={item.price}
                                        rating={item.rating}
                                        image={item.image}
                                    />
                               
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
  )
}

export default Home