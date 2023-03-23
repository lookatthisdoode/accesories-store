import React from 'react';
import Product from './Product'



// console.log(images)

const ProductDisplay = ({ images }) => {
	return (
	  <div className="product_display">
	  	<div className="product_display_container">
	  	<h1>Write proper card component for displaying,
	  	like with background image and price and trigger to add to card etc, also make it few per row</h1>
		  	{images.map((image, i) => {
		  		return (<Product key={i} src={image}/>)
		  	})}
	  	</div>
	  </div>
	  )
}



export default ProductDisplay;
