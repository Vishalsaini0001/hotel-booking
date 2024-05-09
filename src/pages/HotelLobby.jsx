import React from 'react'
import Hotel_lobby1 from "../assets/Gallery_photo/HotelLobby_photo/gallery-hotel-lobby-01.jpg"
import Hotel_lobby2 from "../assets/Gallery_photo/HotelLobby_photo/gallery-hotel-lobby-02.jpg"
import Hotel_lobby3 from "../assets/Gallery_photo/HotelLobby_photo/gallery-hotel-lobby-03.jpg"
import Hotel_lobby4 from "../assets/Gallery_photo/HotelLobby_photo/gallery-hotel-lobby-04.jpg"
import Hotel_lobby5 from "../assets/Gallery_photo/HotelLobby_photo/gallery-hotel-lobby-05.jpg"
import Hotel_lobby6 from "../assets/Gallery_photo/HotelLobby_photo/gallery-hotel-lobby-06.jpg"
import Hotel_lobby7 from "../assets/Gallery_photo/HotelLobby_photo/gallery-hotel-lobby-07.jpg"
import Hotel_lobby8 from "../assets/Gallery_photo/HotelLobby_photo/gallery-hotel-lobby-08.jpg"
import Hotel_lobby9 from "../assets/Gallery_photo/HotelLobby_photo/gallery-hotel-lobby-09.jpg"
import RandomComp from '../components/PhotosComponent'


export const HotelLobby = () => {
  return (
    <RandomComp img1={Hotel_lobby1} img2={Hotel_lobby2} img3={Hotel_lobby3} img4={Hotel_lobby4} img5={Hotel_lobby5} img6={Hotel_lobby6} img7={Hotel_lobby7} img8={Hotel_lobby8} img9={Hotel_lobby9}></RandomComp>
  )
}