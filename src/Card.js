import React, { useState } from 'react'
import './Card.css'

const Card = ({ product }, key) => {
  const { id, name, type, price, quantity, likes, picture } = product
  const [ isLiked, setIsLiked] = useState(false)


  // testing adding to card endpoint
  const addToCart = () => {
    fetch('http://192.168.0.100:5000/test',{
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: name
      })
    })
    .then(response => response.json())
    .catch(err => console.log(err))
  }

  const addLike = () => {
    fetch('http://192.168.0.100:5000/like',{
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: name,
        id: id
      })
    }).then(response => response.json())
    .then(data => console.log(name, data))
    setIsLiked(true);
  }

  return (
    <div className="card" key={key}>
        <div className="card-title">{name.toUpperCase()}</div>
      <div className="card-image">
        <img src={picture} alt={name} />
      </div>
      <div className="card-info">
      	<div className="card-type-likes">
	        <div className="card-type">{type.toUpperCase()}</div>
        {
          isLiked === true //change depends if liked maybe to full heart
            ? <div onClick={addLike} className="card-likes">{likes, '+1'} ♡</div>
            : <div onClick={addLike} className="card-likes">{likes} ♡</div>
        }
        </div>
        <p className="card-bio">Браслет из камней и все такое</p>
        <div className="card-price-add-to-cart">
	        <div className="card-price">{price}</div>
	        <button onClick={addToCart} className="add-to-cart">Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default Card;