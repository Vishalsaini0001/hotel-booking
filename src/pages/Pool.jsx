import React from 'react'
import Pool1 from "../assets/Gallery_photo/Pool_photo/gallery-pool-01.jpg"
import Pool2 from "../assets/Gallery_photo/Pool_photo/gallery-pool-02.jpg"
import Pool3 from "../assets/Gallery_photo/Pool_photo/gallery-pool-03.jpg"
import Pool4 from "../assets/Gallery_photo/Pool_photo/gallery-pool-04.jpg"
import Pool5 from "../assets/Gallery_photo/Pool_photo/gallery-pool-05.jpg"
import Pool6 from "../assets/Gallery_photo/Pool_photo/gallery-pool-06.jpg"
import RandomComp from '../components/PhotosComponent'

export const Pool = () => {
  return (

    <RandomComp img1={Pool1} img2={Pool2} img3={Pool3} img4={Pool4} img5={Pool5} img6={Pool6}></RandomComp>
  )
    
}
