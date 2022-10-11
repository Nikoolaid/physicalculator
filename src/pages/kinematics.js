// Step 1: Import React
import * as React from 'react'
import Container from '../components/Container'
import Equation from '../components/Equation'
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
        <p>The study of kinematics is often introduced through <b>kinematic formulas</b>. A good example of these would be distance compared to velocity. If you're traveling at a constant velocity, the distance you travel will just be velocity multiplied by the time you travel for.</p>
        <Equation equation="d = v * t" />

      </div>
      </Container>
  )
}

export const Head = () => <title>Kinematics</title>

export default KinematicsPage