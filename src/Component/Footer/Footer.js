import React from 'react'
import './Footer.css';
import { Link } from "react-router-dom";
import { footer_information } from '../../constant';

function Footer() {
    const goBackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

  return (
      <div className='footer'>
          <button onClick={ goBackToTop }className='footer_button'>
              Back to Top
          </button>
          <div className='footer_container'>
              <div className='footer_info'>
                  {footer_information.map(item => (
                      <div>
                          <p>{item.title}</p>
                          <ul>
                            {item.content.map(info => (
                                <li><a href='/'>{info}</a></li>
                            ))}
                          </ul>
                      </div>
                  ))}
              </div>

              <div className='footer_logo'>
                <Link  to='/'>
                    <img className ='header_logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt='Logo' />
                </Link>
              </div>
          </div>
    </div>
  )
}

export default Footer