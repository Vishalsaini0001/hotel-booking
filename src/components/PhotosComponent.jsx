import React from 'react'

export default function PhotosComponent(props) {
  return (
    <>
    <div className='flex items-center justify-center py-10'>

    <div className='w-[95%] md:w-[85%]'>

    <div className='md:flex md:justify-center '>
        <div className=''>
        <img src={props.img1} alt="" className='px-3 py-4 hover:brightness-50 hover:rounded-3xl' />
        </div>
        
        <div className='flex flex-col'>
        <img src ={props.img2} alt="" className='px-3 py-4 md:py-4 hover:brightness-50 hover:rounded-3xl' />
        <img src={props.img3} alt="" className='px-3 py-3 hover:brightness-50 hover:rounded-3xl'/>
        </div>
    </div>

    <div className='md:flex md: justify-center'>
        <div>
        <img src={props.img4} alt="" className='px-4 py-4 hover:brightness-50 hover:rounded-3xl' />
        </div>
        
        <div>
        <img src ={props.img5} alt="" className='px-4 py-4 hover:brightness-50 hover:rounded-3xl ' />
        <img src={props.img6} alt="" className='px-4 py-4 hover:brightness-50 hover:rounded-3xl' />
        </div>
    </div>

    <div className='md:flex md: justify-center'>
        <div>
        <img src={props.img7} alt="" className='px-3 py-4 hover:brightness-50 hover:rounded-3xl' />
        </div>
        
        <div>
        <img src ={props.img8} alt="" className='px-3 py-4 hover:brightness-50 hover:rounded-3xl' />
        </div>

        <div>
        <img src={props.img9} alt="" className='px-3 py-4 hover:brightness-50 hover:rounded-3xl' />
        </div>
    </div>

    </div>

    </div>


    </>
  )
}
