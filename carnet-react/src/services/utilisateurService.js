import axios from "axios";

function loginUtilisateur(utilisateur) {
  return axios.post("http://127.0.0.1:3000/connexion", utilisateur);
}
function addUtilisateur(utilisateur) {
  return axios.post("http://127.0.0.1:3000/utilisateur", utilisateur, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function fetchUtiById(id_utilisateur) {
  return axios.get("http://127.0.0.1:3000/utilisateur/ " + id_utilisateur);
}

export default {
  loginUtilisateur,
  addUtilisateur,
  fetchUtiById,
};
