// Step 1: Import React
import * as React from 'react'
import Container from '../components/Container'
import Equation from '../components/Equation'
import Navbar from '../components/Navbar'

const Momentum = () => {
  return (
      <Container className='page'>
        <Navbar />
        <p>Momentum</p>
      </Container>
  )
}

export const Head = () => <title>Momentum</title>
export default Momentum