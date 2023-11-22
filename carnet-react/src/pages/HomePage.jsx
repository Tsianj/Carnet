import React, { useContext } from "react";
import Inscription from "../components/Inscription";
import Connexion from "../components/Connexion";
import AuthContext from "../components/AuthContext";
import Auth from "../services/Auth";


const HomePage = () => {
  const { isAuthenticated, setIsAuthenticated, user } = useContext(AuthContext);
  return <>
  {isAuthenticated == false ?
      <main>
        <div className="box_post">
        <h1>Post It</h1>
        <div>
          <Inscription />
          <Connexion />
        </div>
        </div>
      </main>
    : 
      <main>
        <div className="box_post">
        <h1>Post It</h1>
        <div>
          <p>Profil connecté : {user.prenom}</p>
          <button id="button_princ" onClick={()=>{setIsAuthenticated(false); Auth.logout()}}>Déconnexion</button>
        </div>
        </div>
      </main>
    }
  </>
}
    


export default HomePage;
