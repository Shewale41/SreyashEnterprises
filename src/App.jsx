import { useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './pages/Nav.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import About from './pages/About.jsx';
import Contact from "./pages/Contact.jsx";
import Clients from "./pages/Clients.jsx";

function App() {
    const [contactOpen, setContactOpen] = useState(false);

    return (
        <Router>
            <>
                <Nav />

                {/* Use the styled Home component instead of custom section */}
                <Home onContactClick={() => setContactOpen(true)} />

                {/* Services Section */}
                <section id="services">
                    <Services />
                </section>

                {/* About Section */}
                <section id="about">
                    <About />
                </section>

                <section id="clients">
                    <Clients/>
                </section>

                <Contact isVisible={contactOpen} onClose={() => setContactOpen(false)} />
            </>
        </Router>
    );
}

export default App;
