let score = 0;

document.getElementById("question").innerText =
    "Which language is used for web pages?";

document.getElementById("option1").innerText = "HTML";
document.getElementById("option2").innerText = "Python";
document.getElementById("option3").innerText = "Java";

function checkAnswer(answer) {

    if(answer === "a") {
        score++;
        alert("Correct Answer!");
    }

    else {
        alert("Wrong Answer!");
    }

    document.getElementById("score").innerText =
        "Your Score: " + score;
}