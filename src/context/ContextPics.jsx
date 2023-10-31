import { createContext, useCallback, useEffect, useState } from "react";

export const ContextPics = createContext();

export const ProviderPics = ({children}) => {
    const [fotos, setFotos] = useState([]);

    const unLiked = (id) => {
        setFotos(prevFotos =>
          prevFotos.map(foto => foto.id === id ? { ...foto, likes: 0 } : foto)
      );
    }
  
    const incrementarLikes = (id) => {
        setFotos(prevFotos =>
            prevFotos.map(foto =>
                foto.id === id ? { ...foto, likes: 1 } : foto
            )
        );
    };

    const obtenerGaleria = useCallback( async() => {
        try{
            const respuesta = await fetch("https://api.pexels.com/v1/search?query=people",{
                headers: {
                    Authorization: "UKeoe1DCnMV0wYmSIomFw7GW5dv5bKKQXPA9Epl70QRXmQMWPa19hYMa" 
                }
            });
            const datos = await respuesta.json(); 
            setFotos(datos.photos);

        } catch (e){
            console.log(e.message);
        }
    });

   useEffect(() => {
        obtenerGaleria();
   },[]);

   return (
        <ContextPics.Provider value= {{fotos, setFotos, incrementarLikes, unLiked, obtenerGaleria}}>
            {children}
        </ContextPics.Provider>
   )
};