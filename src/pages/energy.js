// Step 1: Import React
import * as React from 'react'
import Container from '../components/Container'
import Navbar from '../components/Navbar'

const Energy = () => {
  return (
      <Container className='page'>
        <Navbar />
        <p>I have none</p>
      </Container>
  )
}

export const Head = () => <title>Energy</title>
export default Energy