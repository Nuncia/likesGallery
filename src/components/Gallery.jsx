import { useContext, useEffect, useState } from "react"
import { ContextPics } from "../context/ContextPics"
import IconHeart from "./IconHeart";


const Gallery = () => {
  const [cargando, setCargando] = useState(true)
  const {fotos, incrementarLikes, obtenerGaleria} = useContext(ContextPics);

  

  useEffect(() => {
     if(fotos.length == 0){
      obtenerGaleria();
      setCargando(false);
     } else{
      setCargando(false);
     }
  }, [])

  return (
    <div className="gallery grid-columns-5 p-3">
      {
        cargando ? ('Cargando ...') : 
          (
            fotos.length > 0 ?
              fotos.map((foto) => (
                <div className='foto' key={foto.id}>
                  <IconHeart className='corazon' filled={foto.likes > 0 ? true : false}/>
                  {/* <div style={{color: 'black'}}>{foto.likes}</div> */}
                  <img  onClick={() => incrementarLikes(foto.id)} src={foto.src.original} className="card-img-top" style={{height: '250px'}} alt={foto.alt} />
                </div>
              )) : 'Cargando...'
          ) 
      }
    </div>
  )
}

export default Gallery