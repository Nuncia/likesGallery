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
    <div className="App">
      <h1 style={{textAlign: 'center', fontWeight: '700'}}>Favoritos</h1>
      <div className="cards grid-columns-5 p-3">
        {
          cargando ? 'Cargando' :
            fotos.filter((foto) => foto.likes > 0).length == 0 ? <h3>No tienes favoritos...</h3> :
              fotos.filter((foto) => foto.likes > 0).map((item) => (
                <div className="foto" key={item.id}>
                  <img src={item.src.original} alt={item.alt} title={item.photographer} style={{height: '250px'}} className="card-img-top" onClick={() => unLiked(item.id)}/>
                  <div style={{margin: '8px'}}>
                    <a href={item.photographer_url} style={{fontWeight: '700'}}>{item.photographer}</a>
                  </div>
                </div>
            ))
        }
      </div>
    </div>
  );
};
export default Favorites;
