// Step 1: Import React
import * as React from 'react'
import Container from '../components/Container'
import Equation from '../components/Equation'
import Navbar from '../components/Navbar'

const Momentum = () => {
  return (
      <Container className='page'>
        <Navbar />
        <Equation equation="x+2y=6z"/>
      </Container>
  )
}

export const Head = () => <title>Momentum</title>
export default Momentum