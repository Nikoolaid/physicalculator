import React from 'react'
import nerdamer from 'nerdamer'
import 'nerdamer/all'

//equation should be a string, knowns should be an object with keys of the var name and values of the var value
const Equation = ({equation, knowns}) => {
    let regexForVariables = /[a-zA-Z]+/g;
    let regexMatches = [...equation.matchAll(regexForVariables)]
    let variables = []


    regexMatches.forEach(match => {
        match.forEach(m => {
            for (let i = 0; i < m.length; i++) {
                let variable = m.charAt(i)
                if (!variables.includes(variable))
                variables.push(variable)
            }
        })
    })
    
    return (
        <div className='equationContainer'>
            <h2>{equation}</h2>
            <p>Solution: {nerdamer(equation, knowns).solveFor('x').toString()}</p>
            <form className='equationInputs'>
                {variables.map(variable => (
                    <div style={{textAlign: 'center', paddingBottom: 20}}>
                        <label for={variable}>{variable}</label> <br/>
                        <input type='text' id={variable} />
                    </div>
                ))}
            </form>
            
        </div>
    )
}

export default Equation