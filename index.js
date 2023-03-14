let pcNumber
let attempts = []
attemptsCounter = 0
maxguesses = 10

function newGame(){
    window.location.reload()
}

function initialization() {
    pcNumber = Math.floor(Math.random() * 100 + 1)
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
        }
    }else{
        document.getElementById("textOutput").innerHTML = `You lose! The computer number was ${pcNumber}`
        document.getElementById("inputBox").setAttribute("Readonly", "Readonly")
    }
}