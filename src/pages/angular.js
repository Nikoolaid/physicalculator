// Step 1: Import React
import * as React from 'react'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import Equation from '../components/Equation'

const Angular = () => {
  return (
      <Container className='page'>
        <Navbar />
        <h1>Angular</h1>
        <p>Angular motion is just like linear motion, but we'll need to transform some of our units. Angular motion has some different ways of writing equivalents to linear variables:</p>
        <table>
          <tr>
            <th>Linear Variable</th>
            <th>Angular Equivalent</th>
          </tr>
          <tr>
            <td>F</td>
            <td>τ</td>
          </tr>
          <tr>
            <td>m</td>
            <td>I</td>
          </tr>
          <tr>
            <td>x</td>
            <td>θ</td>
          </tr>
          <tr>
            <td>v</td>
            <td>ω</td>
          </tr>
          <tr>
            <td>a</td>
            <td>α</td>
          </tr>
        </table>
        <h1>Angular ⇔ Linear</h1>
        <div className="rowy">
          <Equation equation="a = r * α" />
          <Equation equation="v = r * ω" />
          <Equation equation="S = r * θ" />
        </div>
        <h1>Rotational Motion</h1>
        <Equation equation="τ = I * α" />
        <Equation equation="K = 1/2  I * ω^2" />
        <h1>Angular Momentum</h1>
        <Equation equation="L = I * ω" />
        
      </Container>
  )
}

export const Head = () => <title>Angular Stuff</title>
export default Angular