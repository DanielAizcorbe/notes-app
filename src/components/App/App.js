import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import "./app.css";
import { Provider } from "react-redux";
import store from "../../redux/store";
import Favourites from "../Favourites/Favourites";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/notes" element={<Home />} />
          <Route exact path="/favourites" element={<Favourites />} />
          <Route exact path="/me" element={<Home />} />
          <Route exact path="/notes/:id/edit" element={<Home />} />
          <Route exact path="/notes/new" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
