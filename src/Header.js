import React, { useTransition } from 'react'
import './Header.css'
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuth = () => {
        if (user) {
            auth.signOut();
        }
    }

  return (
    <div className='header'>
        {/* logo */}
        <Link  to='/'>
            <img className ='header_logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt='Logo' />
        </Link>
        {/* search bar */}
        <div className='header_search'>
            <input type='text' className='header_searchInput'></input>
            <AiOutlineSearch className='header_searchIcon'/>
            
        </div>
          <div className='header_nav'>
              <Link to={!user && '/login'}>
                  <div onClick={ handleAuth }className='header_option'>
                    <span className='header_optionLineOne'>
                        Hello {!user ? 'Guest' : user.email}
                    </span>
                    <span className='header_optionLineTwo'>
                        {user ? 'Sign Out' : 'Sign In'}
                    </span>
                    </div>
              </Link>

              <Link to='/orders'>
                <div className='header_option'>
                    <span className='header_optionLineOne'>
                        Returns
                    </span>
                    <span className='header_optionLineTwo'>
                        & Orders
                    </span>
                </div>
              </Link>
            <div className='header_option'>
                <span className='header_optionLineOne'>
                    Your
                </span>
                <span className='header_optionLineTwo'>
                    Prime
                </span>
            </div>

            <Link to='/checkout'>
                <div className='header_optionBasket'>
                    <AiOutlineShoppingCart size={30}/>
                      <span className='header_optionLineTwo header_basketCount'>
                          {basket.length}</span>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Header