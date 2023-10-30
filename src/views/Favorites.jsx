import { useContext, useEffect, useState } from "react";
import { ContextPics } from "../context/ContextPics";

const Favorites = () => {

  const [cargando, setCargando] = useState(true);
  const {fotos, unLiked} = useContext(ContextPics);

  useEffect(() => {
    console.log('fotos: ', fotos.filter((foto) => foto.likes > 0))
    fotos.length > 0 ? setCargando(false) : setCargando(true);
  }, [fotos])
  return (
    <div>
      <h3 className="App" style={{textAlign: 'center'}}>Favoritas</h3>
      {
        cargando ? 'Cargando' :
          fotos.filter((foto) => foto.likes > 0).length == 0 ? <h3 className="favoritos">No tienes favoritos...</h3> :
            fotos.filter((foto) => foto.likes > 0).map((item) => (
              <div key={item.id} style={{padding: '2px'}}>
                <img src={item.src} alt={item.alt} className="card-img-top" onClick={() => unLiked(item.id)}/>
              </div>
          ))
      }
    </div>
  );
};
export default Favorites;
