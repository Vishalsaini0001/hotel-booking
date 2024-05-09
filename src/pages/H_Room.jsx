import React from 'react'
import H_Room1 from "../assets/Gallery_photo/Room_photo/gallery-room-01.jpg"
import H_Room2 from "../assets/Gallery_photo/Room_photo/gallery-room-02.jpg"
import H_Room3 from "../assets/Gallery_photo/Room_photo/gallery-room-03.jpg"
import H_Room4 from "../assets/Gallery_photo/Room_photo/gallery-room-04.jpg"
import H_Room5 from "../assets/Gallery_photo/Room_photo/gallery-room-05.jpg"
import H_Room6 from "../assets/Gallery_photo/Room_photo/gallery-room-06.jpg"
import H_Room7 from "../assets/Gallery_photo/Room_photo/gallery-room-07.jpg"
import H_Room8 from "../assets/Gallery_photo/Room_photo/gallery-room-08.jpg"
import H_Room9 from "../assets/Gallery_photo/Room_photo/gallery-room-09.jpg"
import RandomComp from '../components/PhotosComponent'

export const H_Room = () => {
  return ( 
    <RandomComp img1={H_Room1} img2={H_Room2} img3={H_Room3} img4={H_Room4} img5={H_Room5} img6={H_Room6} img7={H_Room7} img8={H_Room8} img9={H_Room9}></RandomComp>
  )
}