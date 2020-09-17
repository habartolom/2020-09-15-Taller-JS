const exercise1 = document.getElementById('exercise1');
const exercise2 = document.getElementById('exercise2');
const exercise3 = document.getElementById('exercise3');
const rightPanel = document.getElementById('rightPanel');
const exercise = document.getElementById('exercise');
const answer = document.getElementById('answer');
const header = document.getElementById('header');

exercise1.addEventListener('click', initExercise1);
exercise2.addEventListener('click', initExercise2);
exercise3.addEventListener('click', initExercise3);

function initExercise1(){
    rightPanel.classList.remove('d-none');
    let namesList = [];
    let name = prompt('Ingresa un nombre');
    
    while(name != ' '){
        if(namesList.indexOf(name)!=-1){
            alert("No debes repetir nombres");
        }
        else{
            namesList.push(name); 
        }
        name = prompt('Ingresa un nombre');
    }
    exercise.innerText = 'Punto 1';
    header.innerText = 'Tu lista ordenada alfabeticamente es:';
    answer.innerText = '[' + namesList.sort().join(", ") + ']';
}

function initExercise2() {
    rightPanel.classList.remove('d-none');
    var phrase = prompt('Ingresa una palabra o frase');
    let invertedPhrase = '';
    let letters = 0;
    
    for(let i = phrase.length-1; i >= 0; i--){
        invertedPhrase += phrase[i];
        if(phrase[i] != ' ')
        letters++;
    }
    
    exercise.innerText = 'Punto 2';
    header.innerHTML = 'Tu frase invertida es: <p class="font-weight-normal">' + invertedPhrase + '</p>';
    answer.innerText = 'Tiene ' + letters + ' letra(s) y ' + (phrase.length - letters) + ' espacio(s)';
}
    
function initExercise3(){
    rightPanel.classList.remove('d-none');
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
    exercise.innerText = 'Punto 3';
    header.innerText = 'Tu frase separada por guiones es:';
    answer.innerText = separatedPhrase;
}

