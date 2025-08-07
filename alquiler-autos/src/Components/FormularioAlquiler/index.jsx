import { useForm } from 'react-hook-form'

const FormularioAlquiler = () => {

    const { 
        register, 
        handleSubmit, 
        formState:{errors},
    } = useForm()

    const onSubmit = handleSubmit(data => {
        console.log(data)
        data.fechaInicio = data.fechaInicio + "T00:00:00"
        data.fechaFin = data.fechaFin + "T00:00:00"
        console.log(data)
        //Post
        fetch('http://localhost:8080/alquileres', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Alquiler creado:', data);
        })
        .catch(error => {
            console.error('Error al crear alquiler:', error);
        });
    })

    return (
        <main className='container h-screen grid place-items-center  mx-auto'>
            <form className='flex flex-col gap-5 items-center border border-slate-700 rounded-md w-full max-w-md px-8 py-10' onSubmit={onSubmit}>
                {/* Encabezado del formulario */}
                <div className='space-y-4'>
                    <h1 className='text-2xl font-bold text-center'>
                        Alquilar un auto
                    </h1>
                    <p className='text-slate-500'>
                        Complete los siguientes campos para alquilar un auto.
                    </p>
                </div>
                
                {/* Campos del formulario */}
                <div className="space-y-3 w-full">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="idAuto" className="text-sm text-slate-700 font-semibold">Id del auto:</label>
                        <input
                        type="number"
                        id="idAuto"
                        inputMode="numeric"
                        placeholder="1"
                        className={`border rounded-sm px-2 py-3 text-sm outline-none font-medium text-slate-600 ${errors.idAuto ? 'border-red-500' : 'border-slate-500'}`}
                        {...register('idAuto', {
                            required: 'El id del auto es requerido',
                            pattern: {
                            value: /^[0-9]/,
                            message: 'El id debe ser un numero',
                            },
                        })}
                        />
                        {errors.idAuto && (<p className="text-red-500 font-medium text-sm w-full">{errors.idAuto.message}</p>)}
                    </div>
                </div>

                <div className="space-y-3 w-full">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="idCliente" className="text-sm text-slate-700 font-semibold">Id del cliente:</label>
                        <input
                        type="number"
                        id="idCliente"
                        inputMode="numeric"
                        placeholder="1"
                        className={`border rounded-sm px-2 py-3 text-sm outline-none font-medium text-slate-600 ${errors.idCliente ? 'border-red-500' : 'border-slate-500'}`}
                        {...register('idCliente', {
                            required: 'El id del cliente es requerido',
                            pattern: {
                            value: /^[0-9]/,
                            message: 'El id debe ser un numero',
                            },
                        })}
                        />
                        {errors.idCliente && (<p className="text-red-500 font-medium text-sm w-full">{errors.idCliente.message}</p>)}
                    </div>
                </div>

                {/* Fecha inicio */}
                <div className="space-y-3 w-full">
                <label htmlFor="fechaInicio" className="text-sm text-slate-700 font-semibold">Fecha de inicio: </label>
                <input
                    type="date"
                    id="fechaInicio"
                    className={`border rounded-sm px-2 py-3 text-sm outline-none font-medium text-slate-600 ${errors.fechaInicio ? 'border-red-500' : 'border-slate-500'}`}
                    {...register('fechaInicio', { required: 'La fecha de inicio es requerida' })}
                />
                {errors.fechaInicio && (<p className="text-red-500 text-sm">{errors.fechaInicio.message}</p>)}
                </div>

                {/* Fecha fin */}
                <div className="space-y-3 w-full">
                <label htmlFor="fechaFin" className="text-sm text-slate-700 font-semibold">Fecha de fin:</label>
                <input
                    type="date"
                    id="fechaFin"
                    className={`border rounded-sm px-2 py-3 text-sm outline-none font-medium text-slate-600 ${errors.fechaFin ? 'border-red-500' : 'border-slate-500'}`}
                    {...register('fechaFin', { required: 'La fecha de fin es requerida' })}
                />
                {errors.fechaFin && (<p className="text-red-500 text-sm">{errors.fechaFin.message}</p>)}
                </div>
                
                {/* Botones para enviar el formulario */}
                <div className='flex flex-col gap-3 w-full'>
                    <button type='submit' className='bg-stone-800 text-white py-3 rounded-md font-medium cursor-pointer'>Continuar</button>
                    <button type='button' className='underline font-medium cursor-pointer'>Cancelar</button>
                </div>
            </form>
        </main>
    )
}

export default FormularioAlquiler