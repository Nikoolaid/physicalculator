// Step 1: Import React
import * as React from 'react'
import Container from '../components/Container'
import Equation from '../components/Equation'
import Navbar from '../components/Navbar'

const Energy = () => {
  return (
      <Container >
        <Navbar />
        <h1>Energy</h1>
        <div ></div>
        <p>When we talk about energy, we're usually either talking about potential or kinetic energy. Kinetic energy is the energy something has because it's in motion. This type of energy is proportional to it's mass, and proportional to the square of its velocity.</p>

        <Equation equation="e = m*v^2" />

        <p>Potential energy is the energy that something <i>could</i> have were it allowed to move freely. A common example in our physics class is <b>gravitational kinetic energy</b>, which is the amount of kinetic energy something would have if it were released and allowed to fall freely. Gravitational potential energy is proportional to the object's mass, gravitational acceleration, and height above the ground.</p>

        <Equation equation="e = m*g*h" />

        <p>Now let's say we lift something up, and then drop it. In a theoretically perfect world, every single iota of the potential energy would be converted into kinetic energy. However, this isn't always the case. If it falls <i>really</i> far it almost definitely won't be the same, since the air resistance slows it down. This brings us to our final point: conservation of energy.</p>

        <p><b>Energy is only conserved if there are no outside forces acting on the system.</b></p> That means that if there's any friction or air resistance caused by things outside of your system, the total energy of the system won't be constant.

      </Container>
  )
}

export const Head = () => <title>Energy</title>
export default Energy