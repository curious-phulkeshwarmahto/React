import React from 'react'
import Card from './components/Card'
import NavBar from './components/NavBar'
import UserCard from './Props/UserCard'
const App = () => {

  // const user = {
  //   name: 'Phulkeshwar',
  //   age: 21,
  //   occupation: 'Developer'
  // }
  return (
    <div className="app">
      {/* {NavBar()} // called as function never do this */}
      <NavBar />
      

      <div className='Parent'>
      {/* <div className="userCard">
        <img src="https://i.pinimg.com/originals/3d/a7/a1/3da7a11be8bc9b0d08e2098fdd3a5f29.jpg" alt="User Avatar" />
      <h1>Welcome to React {user.name}!</h1>
      <h2>Your Age: {user.age}</h2>
      <h3>Your Occupation: {user.occupation}</h3>
      <h4>Bio: Lorem ipsum dolor sit, amet consectetur adipisicing elit.Cupiditate!</h4>
      <button>View Profile</button>
      </div>

      <div className="userCard">
        <img src="https://i.pinimg.com/originals/3d/a7/a1/3da7a11be8bc9b0d08e2098fdd3a5f29.jpg" alt="User Avatar" />
      <h1>Welcome to React {user.name}!</h1>
      <h2>Your Age: {user.age}</h2>
      <h3>Your Occupation: {user.occupation}</h3>
      <h4>Bio: Lorem ipsum dolor sit, amet consectetur adipisicing elit.Cupiditate!</h4>
      <button>View Profile</button>
      </div>

      <div className="userCard">
        <img src="https://i.pinimg.com/originals/3d/a7/a1/3da7a11be8bc9b0d08e2098fdd3a5f29.jpg" alt="User Avatar" />
      <h1>Welcome to React {user.name}!</h1>
      <h2>Your Age: {user.age}</h2>
      <h3>Your Occupation: {user.occupation}</h3>
      <h4>Bio: Lorem ipsum dolor sit, amet consectetur adipisicing elit.Cupiditate!</h4>
      <button>View Profile</button>
      </div>

      <div className="userCard">
        <img src="https://i.pinimg.com/originals/3d/a7/a1/3da7a11be8bc9b0d08e2098fdd3a5f29.jpg" alt="User Avatar" />
      <h1>Welcome to React {user.name}!</h1>
      <h2>Your Age: {user.age}</h2>
      <h3>Your Occupation: {user.occupation}</h3>
      <h4>Bio: Lorem ipsum dolor sit, amet consectetur adipisicing elit.Cupiditate!</h4>
      <button>View Profile</button>
      </div> */}


      <UserCard user="Phulkeshwar Mahto" age={21} occupation="Developer" img = "https://i.pinimg.com/originals/3d/a7/a1/3da7a11be8bc9b0d08e2098fdd3a5f29.jpg" />
      <UserCard user="Kunal Prajapati" age={21} occupation="Developer" img = "https://as1.ftcdn.net/v2/jpg/05/64/11/42/1000_F_564114238_mcU43Fplgq3J1wpxYUCvDIew9JxUbJrB.jpg" />
      <UserCard user = "Arif Sultan" age={22} occupation="Devloper" img = "https://th.bing.com/th/id/R.f95cdac3a05ca538d7fc150097c937a8?rik=01jpMhZFNwc7zQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-n7kAAljaOyM%2fURnafe-xVRI%2fAAAAAAAAAtw%2fBiUOpOEyy2w%2fs1600%2fLord%2bKrishna%2bHD%2bWallpapers1.jpg&ehk=e479wLJLRf%2fhPENg6sWZKWs0QcJi9YpGM9fkiLvdYNE%3d&risl=&pid=ImgRaw&r=0"/>

      <UserCard user = "Kumdan Mathur" age={20} occupation="Designer" img = "https://tse2.mm.bing.net/th/id/OIP.JFfY7D1yhe5Sl9T6MFMBgQHaLH?w=1728&h=2592&rs=1&pid=ImgDetMain&o=7&rm=3" />
      </div>



      <div className="card">
      <h1>Hello React</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, facere. Esse deleniti itaque odit reprehenderit.</p>
    </div>

      <Card user = 'Phulkeshwar Mahto' age={21} MobileNo = {9876543210} />

      <Card user = 'Phulkeshwar Mahto' age={21} MobileNo = {9876543210} />

      <Card />

      {/* {Card()}  // never use like this  */}
    </div>
    
  )
} 

export default App
