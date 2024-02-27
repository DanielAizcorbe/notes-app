import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import "./app.css";
import { Provider } from "react-redux";
import store from "../../redux/store";
import Favourites from "../Favourites/Favourites";
import CreateNote from "../CrearNota/CreateNote";
import { EditarNota } from "../EditarNota/EditarNota";

function App() {
  return (
    <Provider store={store}>
      <HashRouter >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/notes" element={<Home />} />
          <Route exact path="/favourites" element={<Favourites />} />
          <Route path="/notes/:id" element={<EditarNota />} />
          <Route exact path="/notes/new" element={<CreateNote />} />
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;
