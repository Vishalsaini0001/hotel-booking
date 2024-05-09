import React from 'react'
import Hroom1 from "../assets/Gallery_photo/Room_photo/gallery-room-01.jpg"
import Hroom2 from "../assets/Gallery_photo/Room_photo/gallery-room-02.jpg"
import Hroom3 from "../assets/Gallery_photo/Room_photo/gallery-room-03.jpg"
import Hroom4 from "../assets/Gallery_photo/Room_photo/gallery-room-04.jpg"
import Hroom5 from "../assets/Gallery_photo/Room_photo/gallery-room-05.jpg"
import Hroom6 from "../assets/Gallery_photo/Room_photo/gallery-room-06.jpg"
import Hroom7 from "../assets/Gallery_photo/Room_photo/gallery-room-07.jpg"
import Hroom8 from "../assets/Gallery_photo/Room_photo/gallery-room-08.jpg"
import Hroom9 from "../assets/Gallery_photo/Room_photo/gallery-room-09.jpg"
import RandomComp from '../components/PhotosComponent'

export const Hroom = () => {
  return ( 
    <RandomComp img1={Hroom1} img2={Hroom2} img3={Hroom3} img4={Hroom4} img5={Hroom5} img6={Hroom6} img7={Hroom7} img8={Hroom8} img9={Hroom9}></RandomComp>
  )
}