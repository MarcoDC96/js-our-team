let ourTeam = 
[
{
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
    foto: "./img/wayne-barnett-founder-ceo.jpg"
},

{
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    foto: "./img/angela-caroll-chief-editor.jpg"
},

{
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    foto: "./img/walter-gordon-office-manager.jpg"
},

{
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    foto: "./img/angela-lopez-social-media-manager.jpg"
},

{
    nome: "Scott Estrada",
    ruolo: "Developer",
    foto: "./img/scott-estrada-developer.jpg"
},

{
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    foto: "./img/barbara-ramos-graphic-designer.jpg"
}
]

console.log(ourTeam);

for(let i = 0; i < ourTeam.length; i++){
    console.log("Nome:", ourTeam[i].nome);
    console.log("Ruolo:", ourTeam[i].ruolo);
    console.log("foto:", ourTeam[i].foto);
    console.log("");
}

for(let i = 0; i < ourTeam.length; i++){
document.getElementById("cards").innerHTML+=`

    <div class="col-3 m-3 card text-center">
        <img src="${ourTeam[i].foto}" class="card-img-top" alt="Prima foto">
    <div class="card-body">
        <h6 class="card-text">${ourTeam[i].nome}</h6>
        <p>${ourTeam[i].ruolo}</p>
    </div>
</div>


`
}
