

let vip = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']



let tavoloVip = vip.map ((element, index) =>{
    
    return{
        tableName : 'TavoloVip',
        guestName : element,
        place : index + 1
    }
})
console.log (tavoloVip)

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