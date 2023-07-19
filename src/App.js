import React from 'react'
import './App.css'
import Navigation from './Navigation'
import Landing from './Landing'
import Card from './Card'
import Cart from './Cart'
import Upbutton from './containers/Upbutton/Upbutton';
import 'tachyons'

const serverUrl = 'http://localhost:5000'
const serverUrl1 = 'http://192.168.0.100:5000'


class App extends React.Component {
  constructor() {
    super();
    this.braceletsRef = React.createRef()
    this.necklacesRef = React.createRef()
    this.state = {
      products: [1,12,21,1,1,1],
      productsLoaded: false,
      cart: [],
      total: 0,
      cartVisible : false
    }
  }

  addToCart = (item, price) => {
    this.setState((prevState) => ({
      cart: [...prevState.cart, item],
      total: prevState.total + price
    }));
  };

  //soooo basically this will check if cart is not empty and send request to server to store it or send email or whatnot
  //then it will clear current state of cart
  //not ideal because it will drop as soon as you refresh
  
  sendOrder = () => {
    this.state.cart.length > 0 && fetch(serverUrl + '/cart',{
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        cart: this.state.cart,
        total: this.state.total
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState((prevState) => ({
      cart: [],
      total: 0
      }));
    })
    .catch(err => console.log(err))
  }

  toggleCart = () => {
    this.setState((prevState) => ({
    cartVisible: !prevState.cartVisible,
    }));
  };

  scrollToBracelets = () => {
    if (this.braceletsRef.current) {
      window.scrollTo({
        top: this.braceletsRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  scrollToNecklaces = () => {
    if (this.necklacesRef.current) {
      window.scrollTo({
        top: this.necklacesRef.current.offsetTop -50,
        behavior: 'smooth',
      });
    }
  };

  componentDidMount() {
    this.getProducts()
  }

  getProducts = () => {
    console.log('trying to get products')
    fetch(serverUrl, {
      method: 'get',
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(data => {
      this.setState({products: data, productsLoaded: true})
    })
    .catch(err=> {console.log(err)})
  }

  scrollToCategory = (categoryRef) => {
    categoryRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  render() {
    const state = this.state
    return (
        <div className="App">
          {this.state.cartVisible && <Cart 
            items={this.state.cart} 
            total={this.state.total} 
            sendOrder={this.sendOrder}
            toggleCart={this.toggleCart}
          />}
          <Navigation 
          onClick={this.getProducts} 
          items={this.state.cart.length}
          toggleCart={this.toggleCart}
          />
          <Landing 
          scrollToNecklaces={this.scrollToNecklaces}
          scrollToBracelets={this.scrollToBracelets}
          />

          { state.productsLoaded 
          ? <>
              <div className="category" ref={this.braceletsRef}>Bracelettes</div>
              <div className="card-container"> {state.products.map((product, i) => {
                if(product.type === 'bracelette') {
                  return (<Card product={product} key={i} addToCart={this.addToCart}/>)
                } return null
                })}
              </div>
              <div className="category" ref={this.necklacesRef}>Necklaces</div>
              <div className="card-container"> {state.products.map((product, i) => {
                if(product.type === 'necklace') {
                  return (<Card product={product} key={i} addToCart={this.addToCart}/>)
                }
                })}
              </div>
            </>
            : <div className="pv6 w-100 pa3 bg-light-red flex justify-center">
                <h1>{'Oops, can`t get products, '}
                <span onClick={this.getProducts} className="mid-gray underline pointer">{' try again'}</span>
                </h1>
              </div>
          }

          <Upbutton />
        </div>
      )
  }
}




export default App;
