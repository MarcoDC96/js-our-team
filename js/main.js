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

let containerCard = document.getElementById("card") 
    for (let i = 0; i < ourTeam.length; i++) { 
    let member = ourTeam[i]
    for (let key in member){ 
        let memberDetails = member[key]
    }

    
let card =  `   
<div class="col-3 m-2"> 
<div class="card"> <img src="${[member.foto]}" 
class="card-img-top" alt="foto"> <div class="card-body">   
<h5 class="titolo-card">${[member.nome]}</h5>   
<p class="card-text">   ${[member.ruolo]}</p>   
</div> 
</div> 
</div> `

containerCard.insertAdjacentHTML("beforeend",card)
}

