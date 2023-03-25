import React, { useState } from 'react'

const Navigation = (pos) => {

  const [ posScroll, setPosScroll] = useState(-200)


  const updateState = () => {
    window.scrollY > 600 ? setPosScroll(0) : setPosScroll(-200)
  }


  // const effect = useEffect
  // use effect later

  window.addEventListener('scroll', updateState);


  let cart = document.querySelector('.cart')
  const switchCart = () => {
    cart.classList.contains('active') ? cart.classList.remove('active') : cart.classList.add('active')
  }

//cart.classList.add('active')
  return (
    <div className="navigation" style={{top: posScroll}}>
      <div className="logo">Vitalina</div>
      <ul className="menu">
        <li>About</li>
        <li>Shop</li>
        <li onClick={switchCart}>Cart</li>
      </ul>
    </div>
  );
};


export default Navigation;
