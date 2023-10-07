import React from 'react'
import NavigationBar from './Navbar/Navbar'

function Header() {

    const style={
        backgroundImage:'url(${})',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',

    }
  return (
    <div className='h-screen w-screen ' style={style}>
        <div className='grid grid-col-3'>
            <div className='grid-col-span-2'>
              <h1 className='captalize font-bold text-6xl'>RESPOKEN SHOPPING CENTER </h1>
            </div>
            <div className='flex flex-col'>
                <div className='h-[200px w-[500px]'>
                    <h2 className='font-bold text-4xl text-white'>Falling into Strength</h2>
                    <div className='h-[200px] w-4 b-4-white'></div>
                </div>

                <div className='mt-13 pl-8'>
                    <h1 className='font-light text-3xl text-gray'>Shopping in your Hands</h1>
                </div>
                <div className='mt-13 pl-8'>
                    <h1 className='font-light text-3xl text-gray-400'>There's something about the way!</h1>
                </div>
            </div>
        </div> 
    </div>

    
  )
}

export default Header