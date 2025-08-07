const CardAlquiler = ( alquiler ) => {
    return (
        <div className="w-52 rounded-xl border border-slate-200 p-5 m-3 shadow-sm bg-white hover:shadow-lg transition-all duration-200">
            <div className="space-y-2">
                <h2 className="text-lg font-semibold text-slate-800">
                    Alquiler #{alquiler.alquiler.id}
                </h2>
                <p className="text-sm text-slate-600">
                    Cliente: <span className="font-medium text-slate-700">{alquiler.alquiler.cliente.nombre}</span>
                </p>
                <p className={`text-sm font-medium ${alquiler.alquiler.multa > 0 ? 'text-red-500' : 'text-green-600'}`}>
                    Multa: ${alquiler.alquiler.multa}
                </p>
            </div>
        </div>
    )
}

export default CardAlquiler