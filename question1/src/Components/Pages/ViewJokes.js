import Christmas from "../../img/Christmas.jpg";
import Programming from "../../img/Programming.jpg";
import Pun from "../../img/Pun.jpg";
import { setJoke, getJoke, getJokeCategory } from "../../utils/jokes";
import { clearPage } from "../../utils/render";

const divImg1 = document.createElement("div");
const divImg2 = document.createElement("div");
const divImg3 = document.createElement("div");
const divImgAll = document.createElement("div");
const divQuestion = document.createElement("div");
const divAnswer = document.createElement("div");
const divAll = document.createElement("div");
const pageDiv = document.querySelector("#page");



const ViewJoke = () => {
    pageDiv.innerHTML = "";
    getViewJoke();

}


function getViewJoke() {
    divImg1.innerHTML = `<img src="${Christmas}" />`;
    divImg1.addEventListener('click', () => {
        setJoke("Christmas");
        displayJokeWithCategory();

    });

    divImg2.innerHTML = `<img src="${Programming}" />`
    divImg2.addEventListener('click', () => {

        setJoke("Programming");
        displayJokeWithCategory();

    });
    divImg3.innerHTML = `<img src="${Pun}" />`
    divImg3.addEventListener('click', () => {

        setJoke("Pun");
        displayJokeWithCategory();

    });

    divImgAll.appendChild(divImg1);
    divImgAll.appendChild(divImg2);
    divImgAll.appendChild(divImg3);

    pageDiv.appendChild(divImgAll);
}

function displayJokeWithCategory() {
    pageDiv.innerHTML = "";
    const joke = getJokeCategory(getJoke());

    divImgAll.style.display = "none";



    divQuestion.innerHTML = `<p>${joke.question}<p/>`;
    divAnswer.innerHTML = `<p>${joke.answer}<p/>`;




    divAll.appendChild(divQuestion);
    setTimeout(divAll.appendChild(divAnswer), 5000);
    

    pageDiv.appendChild(divAll);
};


export default ViewJoke;
