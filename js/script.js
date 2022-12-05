console.log('Hello Universe!');

let teamMembers = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg'
    },

    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg'
    },

    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg'
    },

    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg'
    },

    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg'
    },

    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg'
    },
];

for (i = 0; i < teamMembers.length; i++) {
    console.log(teamMembers[i]);
}

let firstRow = document.getElementById('firstRow');
let secondRow = document.getElementById('secondRow');
let thirdRow = document.getElementById('thirdRow');
let fourthRow = document.getElementById('fourthRow');
let fifthRow = document.getElementById('fifthRow');
let sixthRow = document.getElementById('sixthRow');

let elementsArray = [
    firstRow,
    secondRow,
    thirdRow,
    fourthRow,
    fifthRow,
    sixthRow
];

for (let i = 0; i < teamMembers.length; i++) {
    elementsArray[i].innerHTML = `${String(teamMembers[i].nome)}` + ` ; ` + `${String(teamMembers[i].ruolo)}` + ` ; ` + `${String(teamMembers[i].foto)}`;
}



/*
secondRow.innerHTML
thirdRow.innerHTML
fourthRow.innerHTML
fifthRow.innerHTML
sixthRow.innerHTML

for (i = 0; i < teamMembers.length; i++) {
    elementsArray[1].innerHTML = teamMembers[i];
    firstRow.innerHTML = teamMembers
}

*/