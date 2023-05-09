import React from 'react'
import './App.css';
// import ProductDisplay from './ProductDisplay';
import Navigation from './Navigation';
import Landing from './Landing';
import Card from './Card';
import Upbutton from './containers/Upbutton/Upbutton';
import 'tachyons'

// import img1 from './img/picture1.jpg'
// import img2 from './img/picture2.jpg'
// import img3 from './img/picture3.jpg'
// import img4 from './img/picture4.jpg'
// import img5 from './img/picture5.jpg'
// import img6 from './img/picture6.jpg'
// import img7 from './img/picture7.jpg'
// import img8 from './img/picture8.jpg'
// import img9 from './img/picture9.jpg'
// import img10 from './img/picture10.jpg'

// const images = [
// img1,
// img2,
// img3,
// img4,
// img5,
// img6,
// img7,
// img8,
// img9,
// img10,
// ]


const serverUrl = 'http://localhost:5000'
const serverUrl1 = 'http://192.168.0.100:5000'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [1,12,21,1,1,1],
      productsLoaded: false
    }
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = () => {
    console.log('trying to get products')
    fetch(serverUrl1, {
      method: 'get',
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(data => {
      this.setState({products: data, productsLoaded: true})
    })
    .catch(err=> {console.log(err)})
  }



  render() {
    const state = this.state
    return (
        <div className="App">
          <Navigation onClick={this.getProducts} />
          <Landing />
          <div className="category">Bracelettes</div>
          { state.productsLoaded 
          ? <div className="card-container"> {state.products.map((product, i) => {
              if(product.type === 'bracelette') {
                return (<Card product={product} key={i}/>)
              }
              })}
            </div>
          : <div className="pv6 w-100 ma0 bg-light-red flex justify-center">
              <h1>{'Oops, can`t get products, '}
              <span onClick={this.getProducts} className="mid-gray underline pointer">{' try again'}</span>
              </h1>
            </div>
          }
          <div className="category">Necklaces</div>
          { state.productsLoaded 
          ? <div className="card-container"> {state.products.map((product, i) => {
              if(product.type === 'necklace') {
                return (<Card product={product} key={i}/>)
              }
              })} // try Array.filter() instead of if and maybe make it reusable
            </div>
          : <div className="pv6 w-100 ma0 bg-light-red flex justify-center">
              <h1>{'Oops, can`t get products, '}
              <span onClick={this.getProducts} className="mid-gray underline pointer">{' try again'}</span>
              </h1>
            </div>
          }
          {/*<ProductDisplay images={images}/>*/}
          <Upbutton />
        </div>
      )
  }
}




export default App;
