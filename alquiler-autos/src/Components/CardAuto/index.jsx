const CardAuto = ( auto ) => {
    return (
        <div className="w-40 rounded-lg border border-slate-200 p-5 m-3 shadow-sm bg-white hover:shadow-md transition-all">
            <div className="space-y-1">
                <h2 className="text-lg font-semibold text-slate-800">{auto.auto.marca} {auto.auto.modelo}</h2>
                <p className="text-sm text-slate-500">Año: {auto.auto.anio}</p>
                <p className={`text-sm font-medium ${auto.auto.disponible ? 'text-green-600' : 'text-red-600'}`}>
                {auto.auto.disponible ? 'Disponible' : 'No disponible'}
                </p>
            </div>
        </div>
    )
}

export default CardAuto