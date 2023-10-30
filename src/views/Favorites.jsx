import { useContext, useEffect, useState } from "react";
import { ContextPics } from "../context/ContextPics";

const Favorites = () => {

  const [cargando, setCargando] = useState(true);
  const {fotos, unLiked} = useContext(ContextPics);

  useEffect(() => {
    fotos.length > 0 ? setCargando(false) : setCargando(true);
  }, [fotos])
  return (
    <div>
      <h3>Fotos favoritas</h3>
      
    </div>
  );
};
export default Favorites;
