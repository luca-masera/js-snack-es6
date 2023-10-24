
//SNACK 1

let tavoloVip = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']


//SNACK 2

let studenti = [
    
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
/*Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120*/


//PUNTO 2

let lista = studenti.filter ((element) =>{
    return element.Grades > 70;
})
console.log(lista)