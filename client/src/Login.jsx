import { useEffect, useReducer,useRef,useState,useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext,ThemeContext } from "./Context.jsx";
import { useFetch } from "./FetchHook.jsx";

function Register(props) {
  const { theme, toggleTheme } = useContext(ThemeContext);
    // const { user, setUser } = useContext(MyContext);
    // const { isLoading, data, error } = useFetch("https://shiny-backend--softgeekvert.replit.app/survey");
    const [connectType,setConnectType] = useState("login");
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const phoneRef = useRef(null);
    function toggleConnectType(type) {
      connectType == "signup"? setConnectType("login"):setConnectType("signup");
    }
    function signup(params) {
      
    }
  return (
      <main className={`fmld-mrg-16 bkgd-${theme} grid-c-1 grid-center items-center justify-center fmld-pdg fmld-rounded`}>
        <h1 className="text-center">{connectType == "signup"? "Créer un compte":"Connexion"}</h1>
        <form id="registration-form" action="" method="post" className="fmld-width-100 fmld-centered">
          {connectType == "signup"&&
          <div className="fmld-pdg-top-bottom fmld-width-100">
            <label htmlFor="email" className="form-label fmld-medium fmld-pdg-top-bottom">
              Nom d'utilisateur (adresse email)
            </label>
            <div className="fmld-width-100">
              <input
                ref={emailRef}
                type="email"
                className="form-control fmld-pdg fmld-width-100 fmld-rounded border-gray"
                id="email"
                required
              ></input>
              <div className="invalid-feedback fmld-small">L'adress email de votre compte.</div>
            </div>
          </div>}
          <div className="fmld-pdg-top-bottom fmld-width-100">
            <label htmlFor="password" className="form-label fmld-medium fmld-pdg-top-bottom">
              Mot de passe
            </label>
            <div className="fmld-width-100">
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
          <div className="fmld-pdg-top-bottom fmld-width-100">
            <label htmlFor="phone" className="form-label fmld-medium fmld-pdg-top-bottom">
              Numéro de téléphone
            </label>
            <div className="fmld-width-100">
              <input
                ref={phoneRef}
                minLength={9}
                maxLength={9}
                pattern="^\d+$"
                type="tel"
                inputMode="numeric"
                className="form-control fmld-pdg fmld-width-100 fmld-rounded border-gray"
                id="phone"
                required
              ></input>
              <div className="invalid-feedback fmld-small">Doit contenir exatement 9 chiffres.</div>
            </div>
          </div>
          <div className="fmld-width-100 fmld-pdg-top">
            <button onClick={signup} className="btn fmld-round fmld-pdg-10 fmld-width-100 primary text-white fmld-ripple fmld-medium" type="submit">
              {connectType == "signup"? "S'inscrire":"Se connecter"}
            </button>
          </div>
            <p className="fmld-mrg-top">
              {connectType == "signup"? "Vous avez déjà un compte?":"Vous n'avez pas un compte?"}
              <button type="button" className="text-primary transparent fmld-medium" onClick={()=>{toggleConnectType("signup")}}>{connectType == "signup"? "Connectez-vous":"Inscrivez-vous"}</button>{" "}
            </p>
        </form>
      </main>
  );
}

export default Register;