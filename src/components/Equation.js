import React, { useState } from 'react'
import nerdamer, { setVar } from 'nerdamer'
import 'nerdamer/all'

//equation should be a string, knowns should be an object with keys of the var name and values of the var value
const Equation = ({equation, knowns}) => {
    const [knownVars, setKnownVars] = useState({...knowns})
    const [error, setError] = useState(null)
    const [varToSolveFor, setVarToSolveFor] = useState(null)

    let regexForVariables = /[a-zA-Z]+/g;
    let regexMatches = [...equation.matchAll(regexForVariables)]
    let variables = []


    //get all the variables from the equation and put them in the variables array
    regexMatches.forEach(match => { 
        match.forEach(m => {
            for (let i = 0; i < m.length; i++) {
                let variable = m.charAt(i)
                if (!variables.includes(variable))
                variables.push(variable)
            }
        })
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        let numUnknowns = variables.length
        let newKnowns = {}
        let variablesWeDontKnow = [...variables]
        for (let i = 0; i < variables.length; i++) {
            if (event.target[variables[i]] && event.target[variables[i]].value !== '') {
                newKnowns[variables[i]] = event.target[variables[i]].value
                variablesWeDontKnow.splice(variablesWeDontKnow.indexOf(variables[i]), 1) //should leave us with only one at the end
                numUnknowns--
                console.log(`we have ${variables[i]}`)
            }
        }


        if (numUnknowns < 1) {
            console.log('too many vars')
            setError("You need to leave one one variable blank to solve for it")
            setVarToSolveFor(null)
        } else if (numUnknowns > 1) {
            console.log('too few vars')
            setError("You need to fill in all but one of the variables")
            setVarToSolveFor(null)
        } else {
            console.log( typeof variablesWeDontKnow[0])
            setError(null)
            setVarToSolveFor(variablesWeDontKnow[0])
            setKnownVars({...newKnowns})
            console.log(newKnowns)
        }


    }
    
    return (
        <div className='equationContainer'>
            <h2>{equation}</h2>
            {varToSolveFor !== null && (
                <p>Solution: {varToSolveFor} = {nerdamer(equation, knownVars).solveFor(varToSolveFor).toString()}</p>
            )}
            <form className='equationInputs' onSubmit={handleSubmit}>
                {error != null && (
                    <p style={{color: 'red'}}>{error}</p>
                )}
                {variables.map(variable => (
                    <div style={{textAlign: 'center', paddingBottom: 20}}>
                        <label for={variable}>{variable}</label> <br/>
                        <input type='text' id={variable} />
                    </div>
                ))}
                <input type="submit" value="Submit" />
            </form>
            
        </div>
    )
}

export default Equation