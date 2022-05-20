import React, { useEffect } from 'react';
import './App.css';
import Header from'./Component/Header/Header';
import Home from'./Component/Home/Home';
import Checkout from './Component/Checkout/Checkout';
import Login from './Component/Login/Login';
import Payment from './Component/Payment/Payment';
import Orders from './Component/Orders/Orders';
import Footer from './Component/Footer/Footer';
import Profile from './Component/Profile/Profile';
import { auth, db } from './firebase';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51L0yVYAumYmZMfpEEVGac7wlF6lQNVLHjYvCLownKV4ewdHIpjgiLvRubmdOIOPNo6pPz5wMVrXK8vq0ADRoZtbd00Dp7qAfka');


function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {

    //
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Routes>
        <Route path="/orders" element={<div><Header /><Orders /></div>}/>
          <Route path="/payment" element={
            <div>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </div>}
          />
          <Route path="/checkout" element={<div><Header /><Checkout /></div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<div><Header /><Profile /></div>} />
          <Route path="/" element={<div><Header /><Home /></div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
