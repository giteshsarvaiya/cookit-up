import React from 'react'

const RecipeCard = () => {
  return (
    <div className='relative max-w-3xl mx-auto bg-white overflow-hidden shadow-md rounded-lg mb-12'>
        <img src="https://www.teenaagnel.com/wp-content/uploads/2019/12/food-photography-in-dubai.jpg" alt="dish image" className='w-full h-64 object-cover'/>
        <div className='p-6'>
            <div>
                <span className=''></span>
                <a href="#" className='block text-gray-800 font-semibold text-2xl mt-2 hover:text-gray-600 hover:underline'>Burgir</a>
                <p className='text-sm text-gray-600 mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, quae laudantium doloremque vel sunt ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, vero!</p>
            </div>
            <div className='mt-4'>
                <div className='flex items-center'>
                    <div className='flex items-center'>
                        <img src='https://www.bizasialive.com/wp-content/uploads/2017/03/Hrithik-Roshan-1-1900x.jpg' className='h-10 object-cover rounded-full' alt='user photo'></img>
                        <a href='#' className='mx-2 text-gray-700 font-semibold hover:underline'>Cook with Hritik</a>
                    </div>
                    <svg className="mx-2 h-5 w-5 text-gray-800 hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12l-6 4V2h12v14l-6-4z" />
                    </svg>


                    <button className="absolute bottom-6 right-7 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Follow</button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default RecipeCard