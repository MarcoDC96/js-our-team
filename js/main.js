let ourTeam = 
[
{
    nome: "Wayne",
    cognome: "Barnett",
    ruolo: "Founder & CEO",
    foto: "wayne-barnett-founder-ceo.png"
},

{
    nome: "Angela",
    cognome: "Caroll",
    ruolo: "Chief Editor",
    foto: "angela-caroll-chief-editor.png"
},

{
    nome: "Walter",
    cognome: "Gordon",
    ruolo: "Office Manager",
    foto: "walter-goldon-office-manager.png"
},

{
    nome: "Angela",
    cognome: "Lopez",
    ruolo: "Social Media Manager",
    foto: "angela-lopez-social-media-manager.png"
},

{
    nome: "Scott",
    cognome: "Estrada",
    ruolo: "Developer",
    foto: "scott-estrada-developer.png"
},

{
    nome: "Barbara",
    cognome: "Ramos",
    ruolo: "Graphic Designer",
    foto: "barbara-ramos-graphic-designer.png"
}
]

console.log(ourTeam);

for(let i = 0; i < ourTeam.length; i++){
    console.log("Nome:", ourTeam[i].nome);
    console.log("Cognome:", ourTeam[i].cognome);
    console.log("Ruolo:", ourTeam[i].ruolo);
    console.log("foto:", ourTeam[i].foto);
    console.log("");
}
