import { createContext, useState, useEffect } from 'react'

export const AlquilerAutosContext = createContext()

export const AlquilerAutosProvider = ({ children }) => {

    /** ALQUILER - AUTOS */
    
    // AUTOS
    const [autos, setAutos] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8080/autos/disponible')
        .then(response => response.json())
        .then(data => setAutos(data))
    },[])

    // ALQUILERES
   
    // CLIENTES
    

    return (
        <AlquilerAutosContext.Provider value={{
            autos,
            setAutos,
        }}>
            { children }
        </AlquilerAutosContext.Provider>
    )
}