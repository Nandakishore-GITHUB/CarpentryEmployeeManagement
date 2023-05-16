import React from 'react'



function Tiles({name, img}) {

    return (
            <div className='lg:w-60 md:w-52 md:h-80 md:my-auto my-5 relative shadow-2xl rounded-2xl bg-white p-4 transition-transform duration-300 hover:transform hover:scale-110'>
                <img src={img} alt={name} className='w-full h-52 object-cover mb-4' />
                <h2 className='absolute text-lg font-bold text-center lg:mx-16 md:mx-14 ml-16 md:mt-auto -mt-10 mb-2 py-5 text-gray-900 hover:text-indigo-500 transition-colors duration-300'>{name}</h2>
            </div>
    )
    
}

export default Tiles