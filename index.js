let pcNumber
let attempts = []
attemptsCounter = 0
maxguesses = 10
audio = document.getElementById("acerto")

function newGame(){
    window.location.reload()
}

function initialization() {
    pcNumber = Math.floor(Math.random() * 100 + 1)
    console.log(pcNumber)
}

function compareNumbers() {
    const playerNumber = Number(document.getElementById("inputBox").value)
    attempts.push(" " + playerNumber)
    document.getElementById("guesses").innerHTML = attempts

    if (attemptsCounter < 10) {
        if (playerNumber > pcNumber) {
            document.getElementById("textOutput").innerHTML = "Your number is too high"
            document.getElementById("inputBox").value = ""
            attemptsCounter++
            document.getElementById("attempts").innerHTML = attemptsCounter
        }
        else if (playerNumber < pcNumber) {
            document.getElementById("textOutput").innerHTML = "Your number is too low"
            document.getElementById("inputBox").value = ""
            attemptsCounter++
            document.getElementById("attempts").innerHTML = attemptsCounter
        }
        else {
            document.getElementById("textOutput").innerHTML = "You're goddamn right!"
            attemptsCounter++
            document.getElementById("attempts").innerHTML = attemptsCounter
            document.getElementById("inputBox").setAttribute("Readonly", "Readonly")
            audio.play()
            document.querySelector("main").style.backgroundImage = "url(img.jpg)"
            document.querySelector("main").style.backgroundRepeat = "no-repeat"
            document.querySelector("main").style.backgroundSize = "cover"
            document.querySelector("main").style.color = "#fff";
        }
    }else{
        document.getElementById("textOutput").innerHTML = `You lose! The computer number was ${pcNumber}`
        document.getElementById("inputBox").setAttribute("Readonly", "Readonly")
    }
}