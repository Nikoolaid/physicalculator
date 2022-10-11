// Step 1: Import React
import * as React from 'react'
import Container from '../components/Container'
import Equation from '../components/Equation'
import Navbar from '../components/Navbar'

const Energy = () => {
  return (
      <Container className='page'>
        <Navbar />
        <div className='funcontent'></div>
        <p>When we talk about energy, we're usually either talking about potential or kinetic energy. Kinetic energy is the energy something has because it's in motion. This type of energy is proportional to it's mass, and proportional to the square of its velocity.</p>

        <Equation equation="e = m*v^2" />

        <p>Potential energy is the energy that something <i>could</i> have were it allowed to move freely. A common example in our physics class is <b>gravitational kinetic energy</b>, which is the amount of kinetic energy something would have if it were released and allowed to fall freely. Gravitational potential energy is proportional to the object's mass, gravitational acceleration, and height above the ground.</p>

        <Equation equation="e = m*g*h" />

      </Container>
  )
}

export const Head = () => <title>Energy</title>
export default Energy