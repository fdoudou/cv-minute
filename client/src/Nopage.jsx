import { Outlet,Link } from "react-router-dom";
import Footer from "./components/Footer.jsx";

const Nopage = () => {
    return (
        <main>
            <div className="fmld-height-80vh">
                <h3 className="fmld-pdg-16">
                    <p>Erreur</p>
                    <p>Désolé, cette page est introuvable!</p>
                </h3>
            </div>
            <Footer/>
        </main>
    )
}

export default Nopage;