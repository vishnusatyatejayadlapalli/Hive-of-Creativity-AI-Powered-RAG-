import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Create from "./pages/Create";
import Recommendations from "./pages/Recommendations";
import CraftDetails from "./pages/CraftDetails";
import MyCreations from "./pages/MyCreations";
import Community from "./pages/Community";
import Marketplace from "./pages/Marketplace";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/craft/:id" element={<CraftDetails />} />
        <Route path="/my-creations" element={<MyCreations />} />
        <Route path="/community" element={<Community />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;