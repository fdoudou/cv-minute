import { useEffect, useReducer,useRef,useState,useContext,ViewTransition } from "react";
import { Link } from "react-router-dom";
import { MyContext,ThemeContext } from "./Context.jsx";
import { useFetch } from "./FetchHook.jsx";

export default function Login(props) {
  const { theme, toggleTheme } = useContext(ThemeContext);
    // const { user, setUser } = useContext(MyContext);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    // const { isLoading, data, error } = useFetch("https://shiny-backend--softgeekvert.replit.app/survey");

    function signup(params) {
      
    }
  return (
    <ViewTransition>
        <main className={`fmld-mrg-16 bkgd-${theme} grid-c-1 grid-center items-center justify-center fmld-pdg fmld-rounded`}>
        <h1 className="fmld-center">Connexion</h1>
        <form action="" method="post" className="dz-w-100 fmld-centered">
          <div className="fmld-pdg-top-bottom fmld-width-100">
            <label htmlFor="email" className="form-label fmld-medium fmld-pdg-top-bottom">
              Nom d'utilisateur (adresse email)
            </label>
            <div className="has-validation fmld-width-90">
              <input
                ref={emailRef}
                type="email"
                className="form-control fmld-pdg fmld-width-100 fmld-rounded border-gray"
                id="email"
                required
              ></input>
              <div className="invalid-feedback fmld-small">L'adress email de votre compte.</div>
            </div>
          </div>
          <div className="fmld-pdg-top-bottom fmld-width-100">
            <label htmlFor="password" className="form-label fmld-medium fmld-pdg-top-bottom">
              Mot de passe
            </label>
            <div className="has-validation fmld-width-90">
              <input
                ref={passwordRef}
                minLength={6}
                type="password"
                className="form-control fmld-pdg fmld-width-100 fmld-rounded border-gray"
                id="password"
                required
              ></input>
              <div className="invalid-feedback fmld-small">Le mot de passe de votre compte.</div>
            </div>
          </div>
          <div className="fmld-width-100 fmld-pdg-top">
            <button onClick={signup} className="btn fmld-round fmld-pdg-10 fmld-width-100 primary text-white fmld-ripple fmld-medium" type="submit">
              Se connecter
            </button>
          </div>
            <p className="fmld-mrg-top">
                Vous n'avez pas de compte?{" "}
                <Link to="/register" className="text-primary">Inscrivez-vous</Link>{" "}
            </p>
        </form>
      </main>
    </ViewTransition>
      
  );
}
