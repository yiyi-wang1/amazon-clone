import React, { useEffect } from 'react';
import './App.css';
import Header from'./Header';
import Home from'./Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';
import { auth } from './firebase';
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
          <Route path="/" element={<div><Header /><Home /></div>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
