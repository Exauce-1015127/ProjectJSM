import Navbar from './Navbar.jsx'
import Projects from './pages/Projects.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import { Routes, Route } from 'react-router-dom'
import HeroCard from './components/HeroCard.jsx'

function App() {
    return (
        <>
            <Navbar/>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </div>
        </>
    )
}
export default App
