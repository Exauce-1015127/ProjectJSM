import Navbar from './Navbar.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx'
import { Routes, Route } from 'react-router-dom'
import "./styles.css"

function App() {
    return (
        <>
            <div className="page-container">
                <div className="content-wrap">
                    <Navbar/>

                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </>
    )
}
export default App
