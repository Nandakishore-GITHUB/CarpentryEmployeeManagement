import React from 'react'



function Tiles({name, img}) {

    return (
            <div className=' w-60 shadow-2xl rounded-2xl bg-white p-4 transition-transform duration-300 hover:transform hover:scale-110'>
                <img src={img} alt={name} className='w-full h-52 object-cover mb-4' />
                <h2 className='text-lg font-bold text-center mb-2 py-5 text-gray-900 hover:text-indigo-500 transition-colors duration-300'>{name}</h2>
            </div>
    )
    
}

export default Tiles