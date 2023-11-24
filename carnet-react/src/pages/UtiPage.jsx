import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../components/AuthContext";
import utilisateurService from "../services/utilisateurService";
import Card from "react-bootstrap/Card";

const UtiPage = () => {
  const [uti, setUti] = useState();
  const { user } = useContext(AuthContext);

  const fetchUtiById = async () => {
    try {
      const response = await utilisateurService.fetchUtiById(
        user.id_utilisateur
      );
      setUti(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchUtiById();
  }, []);

  console.log(user);
  return (
    <main>
      <div className="carte-profil">
        <h3>Profil</h3>
        <h5>Nom</h5>
        <p className="p-profil">{user.nom}</p>
        <h5>Prenom</h5>
        <p className="p-profil">{user.prenom}</p>
        <h5>Email</h5>
        <p className="p-profil">{user.email}</p>
        <button className="button-profil">Modiffier mot de passe</button>
        <button className="button-profil">Supprimer mon compte</button>
        {/* <h5>Mot de passe</h5>
            <p>{user.password}</p> */}
      </div>
    </main>
  );
};

export default UtiPage;
