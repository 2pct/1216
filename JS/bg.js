const body = document.querySelector("body");
const todo = document.querySelector(".todoForm");
var input = document.querySelectorAll("input");
const href = document.querySelector("#photoCredit");

const imgCount = 6;


const bgOrders = [...Array(imgCount).keys()];


function genRandom(){
    const random = Math.floor(Math.random()*10% imgCount);
    return random
}



function paintBg(number){
    const image = new Image();
    image.src = `images/${number}.jpg`;
    image.classList.add("bg");
    body.append(image);
    
}

const names = {
    0: ["Lucas Marcomini", "https://unsplash.com/@lucasmarcomini"],
    1: ["Daniela Cuevas", "https://unsplash.com/@danielacuevas"],
    2: ["Dino Reichmuth", "https://unsplash.com/@dinoreichmuth"],
    3: ["Nicolas J Leclercq", "https://unsplash.com/@nicolasjleclercq"],
    4: ["Ryan Schroeder", "https://unsplash.com/@ryanschroeder"],
    5: ["Eberhard grossgasteiger", "https://unsplash.com/@eberhardgross"]
}


function newTab(){
    window.open(names[imgNumber][1]);
}


function photoCredit(number){
    href.innerText =`@ ${names[number][0]} / Unsplash`;
}

const IMG_NUMBER = 'number';

function bgChange(){
    const number = localStorage.getItem(IMG_NUMBER);
    if (number === null){
        localStorage.setItem(IMG_NUMBER, JSON.stringify(bgOrders));
        return 0
    }
    else{
        const numberParsed = JSON.parse(number);
        numberParsed.unshift(numberParsed.pop());
        localStorage.setItem(IMG_NUMBER, JSON.stringify(numberParsed));
        return numberParsed[0]
    }
}

const imgNumber = bgChange()

function init(){
    paintBg(imgNumber);
    photoCredit(imgNumber);


}

init();
