
var xhr = new XMLHttpRequest();
var people;
var person;
var personTwo;
var personThree;
var counter=0;
var valueSelected;
var miArray=[null,null,null];
var iArray=0;
const image=document.getElementById('image');
console.log(image);
const alternative1=document.getElementById('alternative1');
const alternative2=document.getElementById('alternative2');
const alternative3=document.getElementById('alternative3');
const alternativeInput1=document.getElementById('alternative-1');
const alternativeInput2=document.getElementById('alternative-2');
const alternativeInput3=document.getElementById('alternative-3');
const rate=document.getElementById('score');

xhr.open('GET', 'https://innovastorga.com/api/remember-game/api.php', true);

xhr.onload = function () {
  people= JSON.parse(xhr.responseText);
  changeperson();
};

xhr.send(null);

function changeperson(){
    valueSelected=null;
    iArray=0;
    miArray[0]=null;
    miArray[1]=null;
    miArray[2]=null;
    generateAlternatives();
    alternative1.innerHTML=`${person.nombre} ${person.apellidoPaterno} ${person.apellidoMaterno}`;
    alternative2.innerHTML=`${personTwo.nombre} ${personTwo.apellidoPaterno} ${personTwo.apellidoMaterno}`;
    alternative3.innerHTML=`${personThree.nombre} ${personThree.apellidoPaterno} ${personThree.apellidoMaterno}`;
    let randomVal=generateRandomNumber(0,3);
    switch(randomVal){
        case 0:
            console.log(0);
            image.style.backgroundImage=`url(assets/${person.url})`;
            alternativeInput1.setAttribute('data-result','1');
            alternativeInput2.setAttribute('data-result','0');
            alternativeInput3.setAttribute('data-result','0');
        break;
        case 1:
            console.log(1);
            image.style.backgroundImage=`url(assets/${personTwo.url})`;
            alternativeInput2.setAttribute('data-result','1');
            alternativeInput1.setAttribute('data-result','0');
            alternativeInput3.setAttribute('data-result','0');
        break;
        case 2:
            console.log(2);
            image.style.backgroundImage=`url(assets/${personThree.url})`;
            alternativeInput3.setAttribute('data-result','1');
            alternativeInput1.setAttribute('data-result','0');
            alternativeInput2.setAttribute('data-result','0');
        break;
    }
    addClicksListeners();
}

function getperson(people){
    let large=Object.keys(people).length;
    let actualperson;
    let flag;
    if(large){
        do{
            valueSelected=generateRandomNumber(0,large);
            flag=miArray.find(verifySelected);
            console.log(flag);
            if(flag!= undefined){
                flag=true;
            }
        }while(flag);
        miArray[iArray]=valueSelected;
        console.log(miArray);
        iArray++;
        actualperson=people[`${valueSelected}`];
        return actualperson;
    }else{
        console.log('there is not data');
    }

}
function verifySelected(value){
    console.log(`value: ${value} valueSelected: ${valueSelected}`);
    return value== valueSelected;
}
function generateRandomNumber(min_value,max_value){
    let randomNumber=Math.random()*(max_value-min_value)+min_value;
    return Math.floor(randomNumber);
}
function generateAlternatives(){

    person=getperson(people);
    personTwo=getperson(people);
    personThree=getperson(people);
}

const verify=function verifyAnswer(ev){
    console.log(ev);
    let result = ev.target.dataset.result;
    if(result==="1"){
        counter++;
        rate.innerHTML=counter;
        changeperson();
        ev.target.checked=false;
    }else{
        alert(`You lost: ${counter} correct anwers`);
        removeClicksListeners();
        changeperson();
        ev.target.checked=false;
        counter=0;
        rate.innerHTML=counter;
    }
}

function addClicksListeners(){
    alternativeInput1.addEventListener("click",verify);
    alternativeInput2.addEventListener("click",verify);
    alternativeInput3.addEventListener("click",verify);
}
function removeClicksListeners(){
    alternativeInput1.removeEventListener("click",verify);
    alternativeInput2.removeEventListener("click",verify);
    alternativeInput3.removeEventListener("click",verify);
}

function counter(){

}
