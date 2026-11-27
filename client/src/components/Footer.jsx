import { Outlet, Link, BrowserRouter, Routes, Route } from "react-router-dom";
import applogo from "../assets/logo-cvminute.webp";

const Footer = () => {
    return (
        <footer className="fmld-pdg-16 accent- fmld-relative" style={{bottom: "0px"}}>
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center md:text-left">
              {/* <!-- Brand --> */}
              <div>
                <a href="./index.html">
                    <img src={applogo} width="125px" height="35px" alt="app logo" className="flex items-start fmld-pdg"/>
                </a>
                {/* <p className="mt-2 text-sm text-gray-dark fmld-bold-500">Izi Shop - Des produits d'alimentation générale au meilleur prix!</p> */}
              </div>
        
              {/* <!-- Quick Links --> */}
              <div className="space-y-2">
                  <h4 className="text-gray-dark">Liens rapides</h4>
                  <ul className="text-sm">
                      <li className="fmld-pdg-bottom text-gray-dark"><Link to="/">Acceuil</Link></li>
                      <li className="fmld-pdg-bottom text-gray-dark"><Link to="/category">Fonctionnalités</Link></li>
                      <li className="fmld-pdg-bottom text-gray-dark"><Link to="/nopage">Templates</Link></li>
                      <li className="fmld-pdg-bottom text-gray-dark"><Link to="/account">Mon compte</Link></li>
                  </ul>
              </div>
        
              {/* <!-- Socials --> */}
              <div className="space-y-2">
                <h4 className="text-gray-dark">Contacts</h4>
                <p className="text-gray-dark text-sm"><a href="mailto:contact@frameloadshop.com" className=" text-gray-dark"> contact@cvminute.web.app</a></p>
                <p className="text-gray-dark text-sm">Téléphone: <a href="tel:+221707981934">+0123456789</a></p>
                <p className="text-gray-dark text-sm">Adresse: Dakar, Senegal</p>
              </div>
        
              {/* <!-- Legals --> */}
              <div className="space-y-2">
                <h4 className="text-gray-dark">Legals</h4>
                <ul className="text-sm">
                  <li className="fmld-pdg-bottom text-gray-dark"><Link to="/privacy">Politique de confidentialité</Link></li>
                  <li className="fmld-pdg-bottom text-gray-dark"><Link to="/cgu">CGU</Link></li>
                  <li className="fmld-pdg-bottom text-gray-dark"><Link to="/legal-notice">Mentions légales</Link></li>
                </ul>
              </div>
        
              {/* <!-- Help --> */}
              {/* <div>
                <h4 className="text-gray-dark">Besoin d'aide?</h4>
                <ul className="fmld-list-nobullet fmld-pdg-0">
                </ul>
              </div> */}
            </div>
        
            <div className="fmld-center fmld-pdg-top border-top-light text-gray-dark">
              © 2026 Doudou Fall. All rights reserved.
            </div>
            <Outlet />
        </footer>
    )
}

export default Footer