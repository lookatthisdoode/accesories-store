import React from 'react'
import './App.css';
import ProductDisplay from './ProductDisplay';
import Navigation from './Navigation';
import Landing from './Landing';

import img1 from './img/picture1.jpg'
import img2 from './img/picture2.jpg'
import img3 from './img/picture3.jpg'
import img4 from './img/picture4.jpg'
import img5 from './img/picture5.jpg'
import img6 from './img/picture6.jpg'
import img7 from './img/picture7.jpg'
import img8 from './img/picture8.jpg'
import img9 from './img/picture9.jpg'
import img10 from './img/picture10.jpg'

const images = [
img1,
img2,
img3,
img4,
img5,
img6,
img7,
img8,
img9,
img10,
]

function App() {

  //methods

  return (
    <div className="App">
      <Navigation />
      <div className="cart"> 
        <h1>Cart</h1>
        <h2>Item1</h2>
        <h2>Item2</h2>
        <h2>Item3</h2>
        <h2>Item4</h2>
        <h2>Item4</h2>
        <h2>Item4</h2>
        <h2>Item4</h2>
        <h2>Item4</h2>
        <h2>Item4</h2>
      </div>
      <Landing />
      <ProductDisplay images={images}/>
      <div className="up">
        <div onClick={() => window.scrollTo(0,0)}>up</div>
      </div>
    </div>
  );
}

export default App;
