import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


window.addEventListener('keydown', (key) => {
  key.key === 'y' ? console.log(window.scrollY) : console.log("wrongkey")
})
// debug show current scroll value

window.addEventListener('scroll', e => {
  document.body.style.cssText += `--scrollTop: ${window.scrollY}px`
})
//adding var of scroll to css for parallax


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
