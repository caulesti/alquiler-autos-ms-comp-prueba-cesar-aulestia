import { useForm } from 'react-hook-form'

const FormularioCliente = () => {

    const { 
        register, 
        handleSubmit, 
        formState:{errors},
    } = useForm()

    const onSubmit = handleSubmit(data => {
        //Post
        fetch('http://localhost:8080/clientes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Cliente creado:', data);
        })
        .catch(error => {
            console.error('Error al crear cliente:', error);
        });
    })

    return (
        <main className='container h-screen grid place-items-center  mx-auto'>
            <form className='flex flex-col gap-5 items-center border border-slate-700 rounded-md w-full max-w-md px-8 py-10' onSubmit={onSubmit}>
                {/* Encabezado del formulario */}
                <div className='space-y-4'>
                    <h1 className='text-2xl font-bold text-center'>
                        Ingreso de clientes
                    </h1>
                    <p className='text-slate-500'>
                        Complete los siguientes campos para registrar un cliente.
                    </p>
                </div>
                
                {/* Campos del formulario */}
                <div className="space-y-3 w-full">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="nombre" className="text-sm text-slate-700 font-semibold">Nombre completo:</label>
                        <input
                        type="text"
                        id="nombre"
                        placeholder="Cesar Aulestia"
                        autoComplete="name"
                        className={`border rounded-sm px-2 py-3 text-sm outline-none font-medium text-slate-600 ${errors.nombre ? 'border-red-500' : 'border-slate-500'}`}
                        {...register('nombre', {
                            required: 'El nombre completo es requerido',
                            minLength: {
                            value: 3,
                            message: 'El nombre debe tener al menos 3 caracteres',
                            },
                            pattern: {
                            value: /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/,
                            message: 'El nombre solo puede contener letras y espacios',
                            },
                        })}
                        />
                        {errors.nombre && (<p className="text-red-500 font-medium text-sm w-full">{errors.nombre.message}</p>)}
                    </div>
                </div>

                <div className="space-y-3 w-full">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="cedula" className="text-sm text-slate-700 font-semibold">Cédula:</label>
                        <input
                        type="number"
                        id="cedula"
                        inputMode="numeric"
                        placeholder="0952667445"
                        className={`border rounded-sm px-2 py-3 text-sm outline-none font-medium text-slate-600 ${errors.cedula ? 'border-red-500' : 'border-slate-500'}`}
                        {...register('cedula', {
                            required: 'La cedula es requerida',
                            pattern: {
                            value: /^[0-9]{10}$/,
                            message: 'La cedula debe tener exactamente 10 dígitos',
                            },
                        })}
                        />
                        {errors.cedula && (<p className="text-red-500 font-medium text-sm w-full">{errors.cedula.message}</p>)}
                    </div>
                </div>


                <div className='space-y-3 w-full'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor='correo' className='text-sm text-slate-700 font-semibold'>Correo:</label>
                        <input
                        type='email'
                        id='correo'
                        className={`border rounded-sm px-2 py-3 text-sm outline-none font-medium text-slate-600 ${errors.correo ? 'border-red-500' : 'border-slate-500'}`}
                        placeholder='correo@ejemplo.com'
                        {...register('correo', {
                            required: 'El correo es requerido',
                            pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'El formato del correo no es válido',
                            },
                        })}
                        />
                        {errors.correo && (<p className='text-red-500 font-medium text-sm w-full'>{errors.correo.message}</p>)}
                    </div>
                </div>


                <div className="space-y-3 w-full">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="telefono" className="text-sm text-slate-700 font-semibold">Teléfono:</label>
                        <input
                        type="tel"
                        id="telefono"
                        inputMode="numeric"
                        placeholder="0992667445"
                        className={`border rounded-sm px-2 py-3 text-sm outline-none font-medium text-slate-600 ${errors.telefono ? 'border-red-500' : 'border-slate-500'}`}
                        {...register('telefono', {
                            required: 'El teléfono es requerido',
                            pattern: {
                            value: /^[0-9]{10}$/,
                            message: 'El teléfono debe tener exactamente 10 dígitos',
                            },
                        })}
                        />
                        {errors.telefono && (<p className="text-red-500 font-medium text-sm w-full">{errors.telefono.message}</p>)}
                    </div>
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

export default FormularioCliente