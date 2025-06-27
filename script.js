const descriptions = {
    html: "HTML (HyperText Markup Language) est le langage de base pour structurer le contenu d'un site web.",
    css: "CSS (Cascading Style Sheets) permet de styliser et de mettre en forme le contenu HTML.",
    js: "JavaScript permet de rendre un site web interactif en gérant les événements et les comportements.",
    git: "Git est un système de contrôle de version permettant de suivre l'historique des modifications.",
    wordpress: "WordPress est un CMS (système de gestion de contenu) utilisé pour créer des sites web dynamiques."
};

const compteur = {
    html: 0,
    css: 0,
    js: 0,
    git: 0,
    wordpress: 0
};

function chargerCompteurs() {
    for (let key in compteur) {
        const val = localStorage.getItem("c_" + key);
        if (val !== null) {
            compteur[key] = parseInt(val);
            document.getElementById("c_" + key).textContent = compteur[key];
        }
    }
}

function afficherDescription(key) {
    compteur[key]++;
    document.getElementById("description").innerHTML = `<p>${descriptions[key]}</p>`;
    document.getElementById("c_" + key).textContent = compteur[key];
    localStorage.setItem("c_" + key, compteur[key]);
}

window.onload = chargerCompteurs;
