import { useForm } from 'react-hook-form'
import { useState, useContext } from 'react'
import { AlquilerAutosContext } from '../../Context'

const FormularioDevolucion = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const [mensaje, setMensaje] = useState('')
  const context = useContext(AlquilerAutosContext)
  
  const onSubmit = handleSubmit(data => {
    data.fechaDevolucion = data.fechaDevolucion+"T00:00:00"
    console.log(data)
    fetch(`http://localhost:8080/alquileres/${data.idAlquiler}/devolucion`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fechaDevolucion: data.fechaDevolucion })
    })
      .then(res => {
        if (!res.ok) throw new Error(`Error ${res.status}`)
        return res.json()
      })
      .then(data => {
        setMensaje(`✅ Devolucion realizada`)
        context.cargarMultas()
        reset()

      })
      .catch(error => {
        console.error('Error al devolver el auto:', error)
        setMensaje('❌ Error al devolver el auto')
      })
    
  })

  return (
    <main className="container h-screen grid place-items-center mx-auto">
      <form
        className="flex flex-col gap-5 items-center border border-slate-700 rounded-md w-full max-w-md px-8 py-10"
        onSubmit={onSubmit}
      >
        {/* Encabezado */}
        <div className="space-y-4 text-center">
          <h1 className="text-2xl font-bold">Registrar la devolucion de un auto</h1>
          <p className="text-slate-500">Complete los siguientes campos para la devolucion.</p>
        </div>

        {/* Campo: ID del producto */}
        <div className="w-full space-y-3">
          <label htmlFor="idAlquiler" className="text-sm text-slate-700 font-semibold">
            ID del alquiler:
          </label>
          <input
            type="number"
            id="idAlquiler"
            step="1"
            placeholder="1"
            className={`border rounded-sm px-2 py-3 text-sm outline-none font-medium text-slate-600 ${
              errors.idAlquiler ? 'border-red-500' : 'border-slate-500'
            }`}
            {...register('idAlquiler', {
              required: 'El ID del alquiler es requerido',
              valueAsNumber: true,
              min: { value: 1, message: 'El ID debe ser mayor a 0' },
            })}
          />
          {errors.idAlquiler && (
            <p className="text-red-500 text-sm">{errors.idAlquiler.message}</p>
          )}
        </div>

        <div className="space-y-3 w-full">
            <label htmlFor="fechaDevolucion" className="text-sm text-slate-700 font-semibold">Fecha de devolucion: </label>
            <input
                type="date"
                id="fechaDevolucion"
                className={`border rounded-sm px-2 py-3 text-sm outline-none font-medium text-slate-600 ${errors.fechaDevolucion ? 'border-red-500' : 'border-slate-500'}`}
                {...register('fechaDevolucion', { required: 'La fecha de devolucion es requerida' })}
            />
            {errors.fechaDevolucion && (<p className="text-red-500 text-sm">{errors.fechaDevolucion.message}</p>)}
        </div>

        {/* Botones */}
        <div className="flex flex-col gap-3 w-full">
          <button
            type="submit"
            className="bg-stone-800 text-white py-3 rounded-md font-medium cursor-pointer"
          >
            Continuar
          </button>
          <button
            type="button"
            onClick={() => {
              reset()
              setMensaje('')
            }}
            className="underline font-medium cursor-pointer"
          >
            Cancelar
          </button>
        </div>

        {/* Mensaje */}
        {mensaje && (
          <p className="text-center text-sm font-medium mt-2">{mensaje}</p>
        )}
      </form>
    </main>
  )
}

export default FormularioDevolucion