import React, { useState } from 'react'
import './Card.css'

const Card = ({product, cardKey, addToCart}) => {
  const { id, name, type, price, quantity, likes, picture, bio} = product
  const [isLiked, setIsLiked] = useState(false)
  const [showFullBio, setShowFullBio] = useState(false)

  const serverUrl = 'http://localhost:5000'
  const serverUrl1 = 'http://192.168.0.100:5000'


  const addLike = () => {
    fetch(serverUrl +'/like',{
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

//console.log(cardKey)

  return (
    <div className="card">
        <div className="card-title">{name.toUpperCase()}</div>
      <div className="card-image">
        {quantity>0 ? (
          <img src={picture} alt={name} />
        ) : (
          <div className="out-of-stock">
            <img src={picture} alt={name} className="black-white-filter" />
            <div className="out-of-stock-overlay">Out of Stock</div>
          </div>
        )}
      </div>
      <div className="card-info">
      	<div className="card-type-likes">
	        <div className="card-type">{type.toUpperCase()}</div>
        {
          isLiked === true //change depends if liked maybe to full heart
            ? <div className="card-likes">{likes + 1} ♡</div>
            : <div onClick={addLike} className="card-likes">{likes} ♡</div>
        }
        </div>
        <p className="card-bio">
          {bio && showFullBio ? bio : (bio && `${bio.slice(0, 50)}... `)}
          {bio && !showFullBio && (
            <span
              className="read-more"
              onClick={() => setShowFullBio(true)}
            >
              Read more
            </span>
          )}
        </p>
        <div className="card-price-add-to-cart">
	        <div className="card-price">{price}$</div>
	        <button
            onClick={quantity > 0 ? () => addToCart(name, price) : null}
            className={`add-to-cart ${quantity > 0 ? 'active' : 'inactive'}`}
          >
            {quantity > 0 ? 'Add to cart' : 'Not available'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card;