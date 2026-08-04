import "./styles/theme.css";
import "./styles/global.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home.tsx";
import About from "./pages/About/About.tsx";
import Contact from "./pages/Contact/Contact.tsx";
import Projects from "./pages/Projects/Projects.tsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}
