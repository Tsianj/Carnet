import axios from 'axios';

function loginUtilisateur(utilisateur) {
    return axios.post("http://127.0.0.1:3000/connexion", utilisateur);
    
}
function addUtilisateur(utilisateur){
    return axios.post("http://127.0.0.1:3000/utilisateur", utilisateur, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
export default {
    loginUtilisateur,
    addUtilisateur
}