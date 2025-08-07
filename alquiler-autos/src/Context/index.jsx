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

    const cargarAutos = () => {
        fetch('http://localhost:8080/autos/disponible')
            .then(response => response.json())
            .then(data => setAutos(data))
    }

    // ALQUILERES
    const [alquileres, setAlquileres] = useState(null)
    
    useEffect(() => {
        fetch('http://localhost:8080/alquileres/multas')
        .then(response => response.json())
        .then(data => setAlquileres(data))
    },[])

    const cargarMultas = () => {
        fetch('http://localhost:8080/alquileres/multas')
            .then(response => response.json())
            .then(data => setAlquileres(data))
    }
   
    // CLIENTES

    return (
        <AlquilerAutosContext.Provider value={{
            autos,
            setAutos,
            alquileres,
            setAlquileres,
            cargarAutos,
            cargarMultas
        }}>
            { children }
        </AlquilerAutosContext.Provider>
    )
}