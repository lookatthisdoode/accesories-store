import React from 'react';
import ProductCard from './ProductCard'



// console.log(images)

const ProductDisplay = ({ images }) => {
	return (
	  <div className="product_display">
	  	<div className="product_display_container">
		  	{images.map((image, i) => {
		  		return (<ProductCard key={i} src={image}/>)
		  	})}
	  	</div>
	  </div>
	  )
}



export default ProductDisplay;
