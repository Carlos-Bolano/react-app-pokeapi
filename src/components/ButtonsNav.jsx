import React from 'react'

export function ButtonsNav({onClick, mostrar}) {
    return (
        <button className="btn btn-primary" onClick={onClick}>
            {mostrar}
            </button> 
      )
    }
    
