// Data/authHelpers.tsx
import { utilisateurs } from "./DonneeType";
import { Connexion, Inscription } from "./DonneeType";

export const validateConnexion = (data: Connexion): boolean => {
    return utilisateurs.some(user => 
        user.email === data.mail && 
        user.passWord === data.password
    );
}

export const validateInscription = (data: Inscription): boolean => {
    const userExists = utilisateurs.some(user => user.email === data.mail);
    if (userExists) {
        return false;
    }
    utilisateurs.push({
        userName: data.nom,
        preNom: data.preNom,
        passWord: data.password,
        email: data.mail
    });
    return true;
}
