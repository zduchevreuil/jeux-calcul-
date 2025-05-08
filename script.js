var nb1 = document.querySelector('.nb1');
var nb2 = document.querySelector('.nb2');
var op = document.querySelector('.op');
var Message = document.querySelector('.Message');
var score = document.querySelector('.score');
var link = document.querySelector('.link');
var section = document.querySelector('section');
var compteur = 0;


// nombres Aléatoires Début du jeu

random1 = Math.random()*11 << 0;
random2 = Math.random()*11 << 0;
console.log(random1);
console.log(random2);

// Insérer mes nombres au hazard dans les variables nb1 et nb2

nb1.innerHTML = random1;
nb2.innerHTML = random2;


// fonction verification 

function verification(){
    // Récupérer le résultat entré par le joueur
    
    var res = document.querySelector('.res').value;
    if(random1 + random2 == res){
        Message.style.background = "green";
        Message.innerHTML = "correcte";
        // creer d'autre nnombre aléatoir 
        random1 = Math.random()*11 << 0;
        random2 = Math.random()*11 << 0;
        console.log(random1);
        console.log(random2);

        // Insérer mes nombres au hazard dans les variables nb1 et nb2

        nb1.innerHTML = random1;
        nb2.innerHTML = random2;
        compteur = compteur + 1;
    }
    else{
        Message.style.background = "red";
        Message.innerHTML = "Vous Avez Perdue";
        section.innerHTML="";
        score.innerHTML =`<span>${compteur}</span></br> Score` // (attention ! ce signe est donner par la bomninaison "ALT + 7 alphanumerique")
        link.style.display = "block";
    }
}