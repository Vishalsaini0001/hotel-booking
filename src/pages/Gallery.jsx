import React, { useState } from 'react'
import { FrontExterior } from './FrontExterior'
import { HotelLobby } from './HotelLobby'
import { Hroom } from './Hroom'
import { Dinning } from './Dinning'
import { Spa } from './Spa'
import { Pool } from './Pool'

const Gallery = () => {
  const [CurrentIndex, setCurrentIndex] = useState(1);
  return (
    <>
      <div className=''>

        <ul className=' flex  flex-col text-nowrap font-semibold text-xl md:flex-row md:justify-center md:items-center'>

          <button className={`py-6 px-5 text-left border-b-4 hover:border-sky-500  ${CurrentIndex===1? "border-sky-500 text-sky-500":"border-slate-100"}  hover:text-sky-500  cursor-pointer `} onClick={()=>{setCurrentIndex(1)}}>
            <p>FRONT EXTERIOR</p>
          </button>
          {CurrentIndex===1 &&
          <div className='md:hidden'>
          <FrontExterior></FrontExterior>
          </div>
        }
          <button className={`py-6 px-5 text-left border-b-4 hover:border-sky-500 ${CurrentIndex===2?"border-sky-500 text-sky-500":"border-slate-50"} hover:text-sky-500  cursor-pointer`} onClick={()=>{setCurrentIndex(2)}}>
            <p>HOTEL LOBBY</p>
          </button>
          {CurrentIndex===2 && 
          <div className= "md:hidden">
          <HotelLobby/>
          </div>}
          <button className={`py-6 px-5 text-left border-b-4 hover:border-sky-500 ${CurrentIndex===3? "border-sky-500 text-sky-500":"border-slate-50"} hover:text-sky-500  cursor-pointer`} onClick={()=>{setCurrentIndex(3)}}>
            <p> ROOM</p>
          </button>
          {CurrentIndex===3 && 
          <div className= "md:hidden">
          <Hroom/>
          </div>}
          <button className={`py-6 px-5 text-left border-b-4 hover:border-sky-500 ${CurrentIndex===4?"border-sky-500 text-sky-500":"border-slate-50"} hover:text-sky-500  cursor-pointer`} onClick={()=>{setCurrentIndex(4)}}>
            <p>DINNING</p>
          </button>
          {CurrentIndex===4 && 
          <div className= "md:hidden">
          <Dinning/>
          </div>}
          <button className={`py-6 px-5 text-left border-b-4 hover:border-sky-500 ${CurrentIndex===5?"border-sky-500 text-sky-500":"border-slate-50"} hover:text-sky-500  cursor-pointer`} onClick={()=>{setCurrentIndex(5)}}>
            <p>SPA</p>
          </button>
          {CurrentIndex===5 && 
          <div className= "md:hidden">
          <Spa/>
          </div>}
          <button className={`py-6 px-5 text-left border-b-4 hover:border-sky-500 ${CurrentIndex===6?"border-sky-500 text-sky-500":"border-slate-50"} hover:text-sky-500  cursor-pointer`} onClick={()=>{setCurrentIndex(6)}}>
            <p>POOL</p>
          </button>
          {CurrentIndex===6 && 
          <div className= "md:hidden">
          <Pool/>
          </div>}

        </ul>

      </div>
      <div className='md:block hidden'>

{CurrentIndex===1 && <FrontExterior></FrontExterior>}
{CurrentIndex===2 && <HotelLobby></HotelLobby>}
{CurrentIndex===3 && <Hroom></Hroom>}
{CurrentIndex===4 && <Dinning></Dinning>}
{CurrentIndex===5 && <Spa></Spa>}
{CurrentIndex===6 && <Pool></Pool>}
      </div>
    </>
  )
}

export default Gallery
