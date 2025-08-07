import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { AlquilerAutosContext } from '../../Context'

const FormularioAuto = () => {
    const context = useContext(AlquilerAutosContext)
    const { cargarAutos } = context;
	const { 
		register, 
		handleSubmit, 
		formState:{errors},
	} = useForm()

	const onSubmit = handleSubmit(data => {
		//Post
		fetch('http://localhost:8080/autos', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
		.then(response => response.json())
		.then(data => {
			console.log('Auto creado:', data);
            cargarAutos();
		})
		.catch(error => {
			console.error('Error al crear el auto:', error);
		});
	})

	return (
		<main className='container h-screen grid place-items-center  mx-auto'>
			<form className='flex flex-col gap-5 items-center border border-slate-700 rounded-md w-full max-w-md px-8 py-10' onSubmit={onSubmit}>
				{/* Encabezado del formulario */}
				<div className='space-y-4'>
					<h1 className='text-2xl font-bold text-center'>
						Ingreso de Autos
					</h1>
					<p className='text-slate-500'>
						Complete los siguientes campos para registrar un auto.
					</p>
				</div>
				
				{/* Campos del formulario */}
				<div className='space-y-3 w-full'>
					<div className='flex flex-col gap-2'>
						<label htmlFor='marca' className='text-sm text-slate-700 font-semibold'> Marca: </label>
						<input
							type='text'
							id='marca'
							className={`border  rounded-sm px-2 py-3 text-sm outline-none font-medium text-slate-600 ${errors.marca ? 'border-red-500' : 'border-slate-500' }`}
							placeholder='Nisan'
							{...register('marca', {required: 'La marca es requerida',})}
						/>
						{errors.marca && (<p className='text-red-500 font-medium text-sm w-full'>{errors.marca.message}</p>)}
					</div>
				</div>

				<div className='space-y-3 w-full'>
					<div className='flex flex-col gap-2'>
						<label htmlFor='modelo' className='text-sm text-slate-700 font-semibold'> Modelo: </label>
						<input
							type='text'
							id='modelo'
							className={`border  rounded-sm px-2 py-3 text-sm outline-none font-medium text-slate-600 ${errors.modelo ? 'border-red-500' : 'border-slate-500' }`}
							placeholder='FJ-CRUSIER'
							{...register('modelo', {required: 'El modelo es requerido',})}
						/>
						{errors.modelo && (<p className='text-red-500 font-medium text-sm w-full'>{errors.modelo.message}</p>)}
					</div>
				</div>

				<div className='space-y-3 w-full'>
					<div className='flex flex-col gap-2'>
						<label htmlFor='anio' className='text-sm text-slate-700 font-semibold'> Año: </label>
						<input
							type='number'
							id='anio'
							step='1'
							className={`border  rounded-sm px-2 py-3 text-sm outline-none font-medium text-slate-600 ${errors.anio ? 'border-red-500' : 'border-slate-500' }`}
							placeholder='2009'
							{...register('anio', {required: 'El año es requerido', valueAsNumber: true, min: { value: 2000, message: 'El año debe ser mayor que 2000' },})}
						/>
						{errors.anio && (<p className='text-red-500 font-medium text-sm w-full'>{errors.anio.message}</p>)}
					</div>
				</div>

                <div className='space-y-3 w-full'>
					<div className='flex flex-col gap-2'>
						<label htmlFor='placa' className='text-sm text-slate-700 font-semibold'> Placa: </label>
						<input
							type='text'
							id='placa'
							className={`border  rounded-sm px-2 py-3 text-sm outline-none font-medium text-slate-600 ${errors.placa ? 'border-red-500' : 'border-slate-500' }`}
							placeholder='SRV-6542'
							{...register('placa', {required: 'La placa es requerida',})}
						/>
						{errors.placa && (<p className='text-red-500 font-medium text-sm w-full'>{errors.placa.message}</p>)}
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

export default FormularioAuto