const contenantChoixAdversaire = document.getElementById('choix-adversaire');
const contenantChoixUtilisateur = document.getElementById('choix-utilisateur');
const contenantResultat = document.getElementById('resultat');

const ChoixPossibles = document.querySelectorAll('button');

let ChoixUtilisateur 
let resultat
let ChoixAdversaire
// Evenement "Clique sur les boutons"

ChoixPossibles.forEach(ChoixPossibles => ChoixPossibles.addEventListener('click',(e)=>{
// récupération de l'id du bouton cliqué
ChoixUtilisateur = e.target.id ;
// On ajoute l'image qui correspond au choix
contenantChoixUtilisateur.innerHTML = `<img src="${ChoixUtilisateur}.png">`
generer_choix_adversaire();
verification()
}))

//Fonction pour générer le choix de l'adversaire

function generer_choix_adversaire (){
random= Math.floor(Math.random() * 3) +1 // Générer des nombre compris entre 1 et 3
if(random === 1) {  // si random = 1 :
    ChoixAdversaire = "pierre"
}

if(random === 2) {
    ChoixAdversaire = "papier" // si random = 2 :
}

if(random === 3 ) {
    ChoixAdversaire = "ciseaux" // si random = 3 :    
}

// On ajoute l'image qui correspond au choix
contenantChoixAdversaire.innerHTML = `<img src="${ChoixAdversaire}.png">`


}

// Fonction pour vérifier si le joueur a gagné ou pas

function verification(){
    if(ChoixUtilisateur == ChoixAdversaire){
        resultat = "Egalite" ;
    }

    // Les cas où le joueur perd
    if(ChoixUtilisateur == "pierre" && ChoixAdversaire =="papier"){
        resultat = "Game over !" ;
    }
    if(ChoixUtilisateur == "papier" && ChoixAdversaire =="ciseaux"){
        resultat = "Game over !" ;
    }
    if(ChoixUtilisateur == "ciseaux" && ChoixAdversaire =="pierre"){
        resultat = "Game over !" ;
    }
    // Les cas où le joueur gagne

    if(ChoixUtilisateur == "pierre" && ChoixAdversaire =="ciseaux"){
        resultat = "Gagné !" ;
    }
    if(ChoixUtilisateur == "papier" && ChoixAdversaire =="pierre"){
        resultat = "Gagné !" ;
    }
    if(ChoixUtilisateur == "ciseaux" && ChoixAdversaire =="papier"){
        resultat = "Gagné !" ;
    }
    contenantResultat.innerHTML = resultat ;



console.log('verification');

}