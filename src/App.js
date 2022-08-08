import logo from './logo.svg';
import './App.css';
import Main from "./Components/files/Main"
import About from "./Components/files/About"
import Projects from "./Components/files/Projects"
import Skills from "./Components/files/Skills"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>

      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>

      {/* <Main /> */}



    </>
  );
}

export default App;
