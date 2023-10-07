import React from 'react'
import { img_300, unavailable } from '../config/config'

function SingleContent({
    id,
    title,
    category,
    image,
    price,
    
}) {
    return (
 

        <div className='' id={id}>
            <img className='rounded-t-lg w-full' src={image ? `${img_300}/${image}` : unavailable} alt="" />
                <div >
                    <h1 className='text-3xl font-bold px-4'>{title}</h1>
                    <div className='flex flex-row'>
                          <h2 className='text-4xl font-semibold'>{category}</h2>
                        <h2 className='text-3xl font-bold'>{price}</h2>

                    </div>
                </div>

        </div>
    )
}

export default SingleContent