// Step 1: Import React
import * as React from 'react'
import Container from '../components/Container'
import Equation from '../components/Equation'
import Navbar from '../components/Navbar'

const Momentum = () => {
  return (
      <Container className='page'>
        <Navbar />
        <h1>Momentum</h1>
        <p>Momentum is kinda like kinetic energy, but not quite. It has less to do with the work an object can do, and more with the amount of "oomph" it would hit something with (were it to collide with it). It is proportional to "how hard it is to get moving", and how fast it's going. In regular motion, the "how hard it is to get moving" is the mass, and the fastness of it thing it's velocity, making it's equation</p>

        <Equation equation="p=m*v"/>

        <p>where p is it's momentum. In the case of angular stuff, the "how hard it is to get moving" is the rotational inertia, and the "fastness" is angular velocity, making the equation</p>

        <Equation equation="L = I * ω" />
      </Container>
  )
}

export const Head = () => <title>Momentum</title>
export default Momentum