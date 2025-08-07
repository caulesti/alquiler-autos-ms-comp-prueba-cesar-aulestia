import { useContext } from "react"
import Layout from "../../Components/Layout"
import { AlquilerAutosContext } from "../../Context"
import CardAuto from "../../Components/CardAuto"
import FormularioAuto from "../../Components/FormularioAuto"

const Autos = () => {

  const context = useContext(AlquilerAutosContext)

  return (
    <Layout>
      <h1 className="text-2xl font-bold text-center">Autos disponibles</h1>
      {
        <div className='grid gap-4 grid-cols-6 w-full max-w-screen-lg '>
          {
            context.autos?.map(auto => (
              <CardAuto key={auto.id} auto={auto}/>
            ))
          }
        </div>
      }
      <div>
        <FormularioAuto></FormularioAuto>
      </div>
    </Layout>
  )
}

export default Autos