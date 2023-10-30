import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ProviderPics } from "./context/ContextPics";

import Favorites from "./views/Favorites";
import Home from "./views/Home";

const App = () => {
  return (
    <div>
      <ProviderPics>
        <Navbar />
        <Routes>
            <Route
            path="/"
            element={<Home />}
            />
            <Route
            path="/favoritos"
            element={<Favorites />}
            />
        </Routes>
      </ProviderPics>
    </div>
  );
};
export default App;
