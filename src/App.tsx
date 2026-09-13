import Header from "./components/Header/Header"
import Title from "./components/Title/Title"
import './App.css'
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"
import Contact from "./components/Contact/Contact"

function App() {
  return <div className="wrapper">
    <Header/>
    <Title/>
    <Projects/>
    <Skills/>
    <Contact />
  </div>
}

export default App
