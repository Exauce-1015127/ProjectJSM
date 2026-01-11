import Navbar from './Navbar.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx'
import { Routes, Route, useLocation } from 'react-router-dom'
import "./styles.css"

// 404 Not Found Component
function NotFound() {
    const location = useLocation();
    
    return (
        <div style={{
            textAlign: 'center',
            padding: '50px 20px',
            minHeight: '60vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <h1 style={{ fontSize: '4rem', marginBottom: '20px' }}>404</h1>
            <h2>Page not found</h2>
            <p style={{ marginTop: '20px' }}>
                The page <code>{location.pathname}</code> could not be found.
            </p>
            <a 
                href="/" 
                style={{
                    display: 'inline-block',
                    marginTop: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '5px',
                    transition: 'background-color 0.3s'
                }}
                onMouseOver="this.style.backgroundColor='#0056b3'"
                onMouseOut="this.style.backgroundColor='#007bff'"
            >
                Go to Homepage
            </a>
        </div>
    );
}

function App() {
    return (
        <>
            <div className="page-container">
                <div className="content-wrap">
                    <Navbar/>

                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        {/* Catch-all route - this will match any path not matched above */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
                <Footer/>
            </div>
        </>
    )
}
export default App
