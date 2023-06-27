import { getGifs } from "../helpers/getGifs";
import { useEffect, useState  } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

  const { images , isLoading} = useFetchGifs(category);
  
  return (
    <>
        <h3>{ category }</h3>
        
        {
          isLoading && 
          <h1> Cargando...</h1>
        }
       <div className="card-grid">
          {
            images.map( (image) => (
              <GifItem key={image.id}
                { ...image}
              />
            ))
          }

        </div>
        
    </>
  )
}

 // A - usar este hook useEffect siempre para que no se renderize 
  // en el dom cada vez que agrego algo a la lista
  // sin esto lo q pasaria es que , al agregar algo a la lista ,
  // se vuelva a llamar para toda la lista
  // de esta forma lo que hace es solo llamar para la nueva categoria
 
  // B - Igualmente vamos a ver dos llamados por cada categoria , esto pasa
  // por el modo estricto que esta en el main, es solo para desarrollo
  // cuando creamos el productivo esto se saca y se llama solo 1 vez, no se bien 
  // para que sirve... investigar mas