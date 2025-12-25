import React from 'react'
import App from '../App'
const Card = (raju) => {
  console.log(raju);
  console.log(raju.user);
  console.log(raju.age);
  console.log(raju.MobileNo);

  return (
    <div className="App">
      <div className="card">
        <h1>Hello React</h1>
        <h2>Welcome {raju.user}</h2>
        <h3>Age: {raju.age}</h3>
        <h4>Mobile: {raju.MobileNo}</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  );
};

export default Card;
