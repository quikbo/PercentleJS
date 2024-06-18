import "../style.css";


//helper function that generates random letter
const letterRandomizer = () => {
    const randomCode = Math.floor(Math.random() * 26) + 65; 
    return String.fromCharCode(randomCode);
}

const getAnswersForCategory = async (letter, category) => {
    try {
        const response = await fetch(`../data/${category}.json`);
        const data = await response.json();
        return data[letter] || [];
    } catch (err) {
        console.error(err);
    }
}

//factory function
const createGame = async (category) => {
    const dailyLetter = letterRandomizer();
    const dailyAnswers = await getAnswersForCategory(dailyLetter, category)

    return {
        getLetter: () => dailyLetter,
        getAnswers: () => dailyAnswers,
    }
}

let percentleGame;




//RENDERING HELPER FUNCTIONS

//creates div to display daily letter for the game
const createDailyLetterItem = () => {
    console.log(5);
    const dailyLetterHeader = document.createElement("h1");
    dailyLetterHeader.innerText = `Letter of the day: ${percentleGame.getLetter()}`;
    dailyLetterHeader.className = "font-sans text-5xl text-rose-700 mt-5 text-center";
    return dailyLetterHeader;
}

//creates ordered list where correct answers will be displayed
const createAnswerlist = () => {
    const answerList = document.createElement("ol");
    answerList.className = "list-decimal list-inside bg-gray-100 p-4 rounded-lg shadow-md mx-auto w-full max-w-lg my-10";
    const answers = percentleGame.getAnswers();
    answers.forEach((answer) => {
        const {name, pct} = answer;        
        const newAnswer = document.createElement("li");
        newAnswer.innerText = `${name} - ${pct}%`
        newAnswer.className = "text-lg py-2";
        //newAnswer.classList.add("hidden");
        answerList.appendChild(newAnswer);
    });
    return answerList;
}

//renders UI: daily letter heading, list for right answers, guess submission form
const renderUI = () => {
    const gameBody = document.getElementById("game-section");
    gameBody.appendChild(createDailyLetterItem());
    gameBody.appendChild(createAnswerlist());
}




document.addEventListener("DOMContentLoaded", async () => {
    const page = window.location.pathname.split('/').pop();
    const category = page.split('.')[0];
    if (category !== "index") {
        percentleGame = await createGame(category);
        renderUI();
    }
});



//NAVIGATION BUTTONS
const countriesButton = document.getElementById('countriesButton')
if (countriesButton) {
    countriesButton.onclick = () => {
    window.location.href = "PercentleJS/src/games/countries.html";
    };
}

const nflButton = document.getElementById('nflButton')
if (nflButton) {
    nflButton.onclick = () => {
    window.location.href = 'PercentleJS/src/games/NFL.html';
    };
}

const nbaButton = document.getElementById('nbaButton')
if (nbaButton) {
    nbaButton.onclick = () => {
    window.location.href = 'PercentleJS/src/games/NBA.html';
    };
}

const logoButton = document.getElementById('logo-button')
if (logoButton) {
    logoButton.onclick = () => {
    window.location.href = 'PercentleJS/index.html';
    };
}