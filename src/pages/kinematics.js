// Step 1: Import React
import * as React from 'react'
import Container from '../components/Container'
import Navbar from '../components/Navbar'

// const varsStyles = {
//   display:"flex",
//   flexDirection: "column",
// }

// const pagesStyles = {
//   display:"flex",
//   justifyContent:"center",
//   padding:"10px 400px 10px",
// }

// const rightColStyle = {
//   padding: "25px"
// }



const KinematicsPage = () => {
  return (
      <Container className='page'>
        <Navbar />
      <div>
        <h1>Kinematics</h1>
        <p>"Kinematics is the study of motion of a system of bodies without directly considering the forces or potential fields affecting the motion. In other words, kinematics examines how the momentum and energy are shared among interacting bodies." - Science Direct</p>
      </div>
      <div className="rightCol" >
        EQUATION GOES HERE
        <form className='equation'>
          <input type="text"/> X initial
          <input type="text"/> X final 
          <input type="text"/> t initial
          <input type="text"/> t final
          <input type="text"/> a
          <input type="text"/> v initial
          <input type="text"/> v final
        </form>
      </div>
      </Container>
  )
}

export const Head = () => <title>Kinematics</title>

export default KinematicsPage