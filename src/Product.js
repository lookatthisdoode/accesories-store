import React from 'react'


const Product = ({ src }) => {
	return(
	  <div className="picture_card">
			<img  src={src} alt="accesory"/>
			<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
			<p>20$</p>
		</div>
   		)
}


export default Product