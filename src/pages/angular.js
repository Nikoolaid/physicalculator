// Step 1: Import React
import * as React from 'react'
import Container from '../components/Container'
import Navbar from '../components/Navbar'

const Angular = () => {
  return (
      <Container className='page'>
        <Navbar />
        <p>angular stuff 4 nerdz</p>
      </Container>
  )
}

export const Head = () => <title>Angular Stuff</title>
export default Angular