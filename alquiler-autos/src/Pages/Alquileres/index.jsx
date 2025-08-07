import { useContext } from "react"
import Layout from "../../Components/Layout"
import FormularioAlquiler from "../../Components/FormularioAlquiler"
import { AlquilerAutosContext } from "../../Context"
import CardAlquiler from "../../Components/CardAlquiler"
import FormularioDevolucion from "../../Components/FormularioDevolucion"

const Alquileres = () => {
  const context = useContext(AlquilerAutosContext)

  return (
    <Layout>
      <h1 className="text-2xl font-bold text-center">Alquileres con multa</h1>
      {
        <div className='grid gap-4 grid-cols-6 w-full max-w-screen-lg '>
          {
            context.alquileres?.map(alquiler => (
              <CardAlquiler key={alquiler.id} alquiler={alquiler} />
            ))
          }
        </div>
      }
      <div className="flex gap-4">
        <FormularioAlquiler></FormularioAlquiler>
        <FormularioDevolucion></FormularioDevolucion>
      </div>
    </Layout>
  )
}

export default Alquileres