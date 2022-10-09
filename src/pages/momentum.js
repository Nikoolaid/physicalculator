// Step 1: Import React
import * as React from 'react'
import Container from '../components/Container'
import Equation from '../components/Equation'

const Momentum = () => {
  return (
      <Container className='page'>
        <Equation equation="x+2y=6" knowns={{x: 2}} />
      </Container>
  )
}

export const Head = () => <title>Momentum</title>
export default Momentum