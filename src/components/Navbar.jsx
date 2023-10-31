import { Link } from "react-router-dom";
import { FaCameraRetro } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="navbar">
      <FaCameraRetro style={{color: 'rgb(224, 234, 244)', marginRight: '2px'}}/>
      <Link to="/"> Home </Link> &nbsp; | &nbsp;<Link to="/favoritos"> Favoritos </Link>
    </nav>
  );
};
export default Navbar;
