import React from 'react'

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const { nombre, propietario, email, fecha, sintomas, id } = paciente

    const handleEliminar = () => {
        const respuesta =  confirm('Deseas eliminar este paciente ?')
        
        if(respuesta){
            eliminarPaciente(id)
        }
    }

  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl mx-5 my-10">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {nombre}
            <span className="font-normal normal-case"></span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {propietario}
            <span className="font-normal normal-case"></span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {email}
            <span className="font-normal normal-case"></span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de alta: {fecha}
            <span className="font-normal normal-case"></span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {sintomas}
            <span className="font-normal normal-case"></span>
        </p>
        <div className='flex justify-between mt-10'>
            <button 
                type="button"
                className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 transition-all text-white font-bold uppercase rounded'
                onClick={() => setPaciente(paciente)}
            >Editar</button>

            <button 
                type="button"
                className='py-2 px-10 bg-red-600 hover:bg-red-700 transition-all text-white font-bold uppercase rounded'
                onClick={handleEliminar}
            >Eliminar</button>
        </div>
    </div>
  )
}

export default Paciente