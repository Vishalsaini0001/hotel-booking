import React from 'react'
import Spa1 from "../assets/Gallery_photo/SPA_photo/gallery-spa-01.jpg"
import Spa2 from "../assets/Gallery_photo/SPA_photo/gallery-spa-02.jpg"
import Spa3 from "../assets/Gallery_photo/SPA_photo/gallery-spa-03.jpg"
import Spa4 from "../assets/Gallery_photo/SPA_photo/gallery-spa-04.jpg"
import Spa5 from "../assets/Gallery_photo/SPA_photo/gallery-spa-05.jpg"
import Spa6 from "../assets/Gallery_photo/SPA_photo/gallery-spa-06.jpg"
import RandomComp from '../components/PhotosComponent'

export const Spa = () => {
  return (
    <RandomComp img1={Spa1} img2={Spa2} img3={Spa3} img4={Spa4} img5={Spa5} img6={Spa6}></RandomComp>
  )
}
