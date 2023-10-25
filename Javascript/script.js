
//SNACK 1

/*let vip = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']



let tavoloVip = vip.map ((element, index) =>{
    
    return{
        tableName : 'TavoloVip',
        guestName : element,
        place : index + 1
    }
})
console.log (tavoloVip)*/


//SNACK 2

/*let studenti = [
    
    {
        Id : '213',
        Name : 'Marco della Rovere',
        Grades : '78'
    },
    {
        Id : '110', 
        Name : 'Paola Cortellessa',
        Grades : '96'
    },

    {
        Id : '250',
        Name : 'Andrea Mantegna',
        Grades : '48'
    },

    {
        Id : '145',
        Name : 'Gaia Borromini',
        Grades : '74'
    },

    {
        Id : '196',
        Name : 'Luigi Grimaldello',
        Grades : '68'
    },

    {
        Id : '102',
        Name : 'Piero della Francesca',
        Grades : '50'
    },

    {
        Id : '120',
        Name : 'Francesca da Polenta',
        Grades : '84'
    }
    

]
console.log(studenti)

//PUNTO 1
let nomeStudenti = studenti. map ((element) => {
    return element.Name.toUpperCase ()
})
console.log (nomeStudenti)

//PUNTO 2

let lista = studenti.filter ((element) =>{
    return element.Grades > 70;
})
console.log(lista)

//PUNTO 3

let listaStudenti = studenti. filter ((element) =>{
    return element.Grades > 70 && element.Id > 120;
})
console.log (listaStudenti)*/

// SNACK 3
/*Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal*/

let bici = [
    
    {
        name :'scott',
        peso : '20'
    },
    {
        name :'decathlon',
        peso : '10'
    },
    {
        name :'ktm',
        peso : '15'
    },
    {
        name :'cube',
        peso : '30'
    }
]


let pesoMinore = bici[0];

bici.forEach ((element, index) => {
    
    if (bici [index].peso < pesoMinore.peso) {
        pesoMinore = bici[index];
    }

});


const{ name, peso } = pesoMinore;



let html = document.getElementById('scrittura');
html.innerHTML = ` La bici ${name} è la più leggera di tutte con un peso di ${peso}`;

/*SNACK 4
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/


let squadreCalcio = [
    
    {
        nome: 'Juventus',
        puntiFatti : 0,
        falliSubiti : 0
    },
    {
        nome: 'Inter',
        puntiFatti : 0,
        falliSubiti : 0
    },
    {
        nome: 'Milan',
        puntiFatti : 0,
        falliSubiti : 0
    },
    {
        nome: 'Sassuolo',
        puntiFatti : 0,
        falliSubiti : 0
    },
    {
        nome: 'Napoli',
        puntiFatti : 0,
        falliSubiti : 0
    }
]




function getRndInteger(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;   
            
}
