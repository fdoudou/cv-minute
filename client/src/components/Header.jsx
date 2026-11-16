import { Outlet, Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { MyContext } from "../Context";
import { useContext } from "react";
import applogo from "../assets/logo-cvminute.webp";

const Header = () => {
    // const {  } = useContext(MyContext);

    return (
        <header className="">
            <div className="container- flex items-center justify-between" style={{ background:"", zIndex:"9", position:"sticky", top:"0px",height:"65px"}}>
                <Link className="fmld-mrg-left flex items-start fmld-pdg" to="/">
                    <img src={applogo} width="150px" height="50px" alt="logo cv minute" />
                </Link>
                <nav className="flex items-center justify-center fmld-hide-mobile">
                    <span className="fmld-pdg-16"><Link to="/">Acceuil</Link></span>
                    <span className="fmld-pdg-16"><Link to="/category/#features">Fonctionnalités</Link></span>
                    <span className="fmld-pdg-16"><Link to="/#templates">Templates</Link></span>
                    <span className="fmld-pdg-16"><Link to="/category">Produits</Link></span>
                </nav>
                <span className="flex items-center justify-between column-gap-2 fmld-pdg-16">
                    <Link to="/builder" className="btn flex items-center fmld-pdg-right fmld-round fmld-pdg-8 fmld-zoom-out noshrink-"><span>Tester</span> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></Link>
                    <Link to="/login" className="btn noshrink- fmld-round fmld-pdg-8 fmld-zoom-out fmld-hide-mobile" viewTransition>Connexion</Link>
                    <button className="btn fmld-pdg-8 noshrink- fmld-round fmld-zoom-out fmld-hide-nomobile" ><svg className="fmld-svg" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button>
                </span>
            </div>

            <div className='modal-parent fmld-hide-nomobile' id="c-modal-popup">
                <div className='modal-underlay'></div>
                <div className='fmld-modal overlay-content fmld-anim-left fmld-pdg-top' style={{right:"auto",left:"0%"}}>
                    <span className="fmld-pdg-16"><Link  className="nav-btn-mobile" to="/">Acceuil</Link></span>
                    <span className="fmld-pdg-16"><Link  className="nav-btn-mobile" to="/category/dejeuner">Catégories</Link></span>
                    <span className="fmld-pdg-16"><Link  className="nav-btn-mobile" to="/category">Produits</Link></span>
                    <span className="fmld-pdg-16"><Link  className="nav-btn-mobile" to="/checkout">Panier</Link></span>
                    <span className="fmld-pdg-16"><Link to="/login" className="fmld-medium fmld-pdg-8 fmld-round text-white primary transition">Connexion</Link></span>
                    <button className="fmld-xlarge fmld-bold- fmld-pdg-left fmld-pdg-right text-white" style={{ position: "absolute", top: "16px", right: "16px" }}>&times;</button>
                </div>
            </div>
            <Outlet />
        </header>
    )
}

export default Header