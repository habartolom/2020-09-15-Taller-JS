const exercise1 = document.getElementById('exercise1');
const exercise2 = document.getElementById('exercise2');
const exercise3 = document.getElementById('exercise3');

exercise1.addEventListener('click', initExercise1);
exercise2.addEventListener('click', initExercise2);
exercise3.addEventListener('click', initExercise3);

function initExercise1(){
    let namesList = [];
    let name = prompt('Ingresa un nombre');
    
    while(name != ' '){
        if(namesList.indexOf(name)!=-1){
            console.log("No debes repetir nombres");
        }
        else{
            namesList.push(name); 
        }
        name = prompt('Ingresa un nombre');
    }
    console.log(namesList.sort());
}

function initExercise2() {
    var phrase = prompt('Ingresa una palabra o frase');
    let invertedPhrase = '';
    let letters = 0;
    
    for(let i = phrase.length-1; i >= 0; i--){
        invertedPhrase += phrase[i];
        if(phrase[i] != ' ')
        letters++;
    }
    
    console.log('Tu palabra al revés es: ' + invertedPhrase);
    console.log('Tiene ' + letters + ' letra(s) y ' + (phrase.length - letters) + ' espacio(s)');
}
    
function initExercise3(){
    var phrase = prompt('Ingresa una palabra o frase');
    let separatedPhrase = '';
    
    for(let i = 0; i < phrase.length; i++){
        if(phrase[i] == ' ')
        separatedPhrase += '--';
        else if((i == phrase.length - 1) || (phrase[i+1] == ' '))
        separatedPhrase += phrase[i];
        else
        separatedPhrase += phrase[i] + '-';
    }
    console.log(separatedPhrase);
}

