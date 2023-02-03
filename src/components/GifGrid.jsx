
import { useEffect, useState } from "react";
import GifGridItem from "./GifGridItem";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({category}) => {

  const {images,isLoading} = useFetchGifs(category);

  console.log(isLoading)

  /*
  
   */

  return (
    <>
      <h3>{category}</h3>

      {
        isLoading && (<h2>Cargando...</h2>)
      }

      <div className="card-grid">
        {
            images.map( (img)=>(  
             <GifGridItem
                key={img.id}
                {... img}
             />
            ))  
        }
      </div>
    </>
  )
}


