// Step 1: Import React
import * as React from 'react'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import Equation from '../components/Equation'

const Angular = () => {
  return (
      <Container className='page'>
        <Navbar />
        {/* <h1>Angular</h1> */}
        <h2>Angular ⇔ Linear</h2>
        <div className="rowy">
          <Equation equation="a = r * α" />
          <Equation equation="v = r * ω" />
          <Equation equation="S = r * θ" />
        </div>
        <h2>Rotational Motion</h2>
        <Equation equation="τ = I * α" />
        <Equation equation="K = 1/2  I * ω^2" />
        <h2>Angular Momentum</h2>
        <Equation equation="L = I * ω" />
        
      </Container>
  )
}

export const Head = () => <title>Angular Stuff</title>
export default Angular