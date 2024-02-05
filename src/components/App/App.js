import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import "./app.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/notes" element={<Home />} />
        <Route exact path="/favourites" element={<Home />} />
        <Route exact path="/me" element={<Home />} />
        <Route exact path="/notes/:id/edit" element={<Home />} />
        <Route exact path="/notes/new" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
