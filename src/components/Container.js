import React from 'react'
import '../styles/containerStyles.css'
import Credits from './Credits'

const Container = ({children}) => {
    return (
        <div className="container">
            {children} 
            <Credits />
        </div>
    )

    
}

export default Container