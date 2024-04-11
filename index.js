let totalCorrectAnswers = 0;
const totalNumberOfQuestions = 6;

let i = 0;
const speed = 300;
const text = "Do you know me?"

// Set the array of objects that include both questions and answers 
const questions = [
    { question: "What is my first name?", correctAnswer: ["Joshua", "John", "Nike"] },
    { question: "Give at least one of my favorite sports.", correctAnswer: ["Mountain biking", "Football", "Soccer", "Basketball"] },
    { question: "What country was I born in?", correctAnswer: ["Philippines"] },
    { question: "How many furbabies do I have?", correctAnswer: ["Two", "2"] },
    { question: "Which one do I prefer, PC or Mac?", correctAnswer: ["PC"] },
    { question: "Lastly, which one do I prefer, beaches or mountains?", correctAnswer: ["Mountains"] }
];


const quizContainer = document.getElementById("quiz-container");

questions.forEach((questionObj, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.innerHTML = `<p>${questionObj.question}</p><input type="text" id="answer${index}">`;
    quizContainer.appendChild(questionDiv);
});

 
document.getElementById("submit-button").addEventListener("click", function() {
    this.disabled = true;
    questions.forEach((questionObj, index) => {
        const answer = document.getElementById(`answer${index}`).value;

        function  typewriter() {
            if (i === 0) {
                document.getElementById("title").innerHTML = "";
            }
            if (i < text.length) {
                document.getElementById("title").innerHTML += text.charAt(i);
        
                i++;
                setTimeout(typewriter, speed)
            }
        };
        
        typewriter();

        if (Array.isArray(questionObj.correctAnswer)) {
            if (questionObj.correctAnswer.map(a => a.toLowerCase()).includes(answer)) {
                totalCorrectAnswers++;
            }
        } else {
            if (answer.trim().toLowerCase() === questionObj.correctAnswer.toLowerCase()) {
                totalCorrectAnswers++;
            }
        }

 
    });

    const score = Math.round((totalCorrectAnswers / totalNumberOfQuestions) * 100 );
    document.getElementById("result-container").innerHTML = `Alrighty! You got a total of ${totalCorrectAnswers} correct answers! Your score is ${score}%.`;
});

document.getElementById("reset-button").addEventListener("click", function() {
    const inputs = document.querySelectorAll('input[id^="answer"]');
    
    document.getElementById("result-container").innerHTML = `The quiz has been reset. You may try again!`
    inputs.forEach(input => { 
        input.value = '';

    });
    
    let totalCorrectAnswers = 0;
    document.getElementById("submit-button").disabled = false;

    document.getElementById("title").innerHTML = "Alright! Try it again!"
});




