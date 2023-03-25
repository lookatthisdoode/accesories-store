import React from 'react'




const ProductCard = ({ src }) => {
	
	const bgStyle = {
  	height: '50%',
    backgroundImage: `url(${src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };
  //css here kinda


	return(
	  <div className="picture_card">
	  	<div className="picture_picture" style={bgStyle}>
				{/*<img  src={src} alt="accesory"/>*/}
			</div>
			<div className="picture_description">
				<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
			</div>
			<div className="picture_card_price">
				<div>20$</div>
				<div className="to_cart">Add to Cart</div>
			</div>
		</div>
   		)
}


export default ProductCard