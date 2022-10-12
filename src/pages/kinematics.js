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
        <p>"Kinematics is the study of motion of a system of bodies without directly considering the forces or potential fields affecting the motion. In other words, kinematics examines how the momentum and energy are shared among interacting bodies." - <a href="https://www.sciencedirect.com/topics/physics-and-astronomy/kinematics">Science Direct</a></p>
        <p>Google defines kinematics as "the branch of mechanics concerned with the motion of objects without reference to the forces which cause the motion." It is the study of how stuff moves just taking into account positions, velocities, accelerations, etc. For example, consider how distance changes based on velocity. Since velocity is defined as the distance traveled per period of time, we just multiply the number of "periods of time" (seconds, minutes, etc) we've traveled and multiply that by the velocity.</p>
        <Equation equation="d = v * t" />

        <p>Now consider the case that our velocity is changing from <b>i</b> to <b>f</b> (with i standing for initial velocity and f meaning the final velocity). In this case, we could just use the average velocity, which would be the sum of v and t divided by 2. Then, we would multiply this by the time we've been traveling.</p>

        <Equation equation="d = (i + f)/2 * t" />

        <p>Or, using some fancy calculus, we could also derive this equation (where <b>a</b> is the acceleration).</p>
        <Equation equation="d = i*t + (1/2)a * t^2" />

        <p>Through some clever combinations of the last few equations, we are also able to derive the following one:</p>

        <Equation equation="f^2 = i^2 + 2 * a * d" />

      </div>
      </Container>
  )
}

export const Head = () => <title>Kinematics</title>

export default KinematicsPage