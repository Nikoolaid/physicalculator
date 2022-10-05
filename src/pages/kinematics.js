// Step 1: Import React
import * as React from 'react'

const varsStyles = {
  display:"flex",
  flexDirection: "column",
}

const pagesStyles = {
  display:"flex",
  justifyContent:"center",
  padding:"10px 400px 10px",
}

const rightColStyle = {
  padding: "25px"
}



// Step 2: Define your component
const KinematicsPage = () => {
  return (
    <main style={pagesStyles}>
      <div class="leftCol">
        <h1>Kinematics</h1>
        <p>"Kinematics is the study of motion of a system of bodies without directly considering the forces or potential fields affecting the motion. In other words, kinematics examines how the momentum and energy are shared among interacting bodies." - Science Direct</p>
      </div>
      <div class="rightCol" style={rightColStyle}>
        EQUATION GOES HERE
        <form style={varsStyles}>
          <input type="text"/> X initial
          <input type="text"/> X final 
          <input type="text"/> t initial
          <input type="text"/> t final
          <input type="text"/> a
          <input type="text"/> v initial
          <input type="text"/> v final
        </form>
      </div>
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Kinematics</title>

// Step 3: Export your component
export default KinematicsPage