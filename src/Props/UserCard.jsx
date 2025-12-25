import React from 'react'

const UserCard = (user) => {
  return (
    <div className="App">
    <div className="Parent">
      <div className="userCard">
        <img src={user.img} alt="User Avatar" />
      <h1>Welcome to React {user.user}!</h1>
      <h2>Your Age: {user.age}</h2>
      <h3>Occupation: {user.occupation}</h3>
      <h4>Bio: Lorem ipsum dolor sit, amet consectetur adipisicing elit.Cupiditate!</h4>
      <button>View Profile</button>
      </div>
    </div>
    </div>
  )
}

export default UserCard
