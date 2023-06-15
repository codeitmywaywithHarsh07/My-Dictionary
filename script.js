let result=document.querySelector('.result');
let sound=document.querySelector('#audio-content');
let btn=document.querySelector('search-button');
let wordBox=document.querySelector('.word-input');
let url='https://api.dictionaryapi.dev/api/v2/entries/en/';


async function resultFunction()
{
    let inputWord=document.querySelector('.word-input').value;
    // console.log(inputWord);

    let myFetch=await fetch(`${url}${inputWord}`);
    let myJson=await myFetch.json();
    console.log(myJson);

    result.innerHTML=`
                <div class="word flex">
                    <h2>${inputWord}</h2>
                    <button class="audio" onclick="playSound()"><i class="fa-solid fa-volume-high"></i></button>
                </div>

                <div class="details flex">

                    <p>${myJson[0].meanings[0].partOfSpeech}</p>
                    <p>${myJson[0].phonetic}</p>
                </div>
                <div class="parah">

                    <p class="meaning">1. ${myJson[0].meanings[0].definitions[0].definition}</p>


                    <p class="example">${myJson[0].meanings[0].definitions[0].example || " " }</p>

                </div>
    `;

    sound.setAttribute("src",myJson[0].phonetics[0].audio || myJson[0].phonetics[1].audio);
}

function clearFunction(){
    result.innerHTML=" ";
    wordBox.innerText="";
}

async function playSound()
{
    await sound.play();
}