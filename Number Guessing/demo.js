//selecting input box and paragraph

var guessnumber =document.getElementById("guessnumber")
var result=document.getElementById("result")
var score = document.getElementById("score")
var retry = document.getElementById("retry")
var randomNumber = Math.floor(Math.random() * 10) + 1
var totalscore = 10

function check()
{
    var enterednumber = guessnumber.value 
    if(randomNumber==enterednumber)
    {
        console.log("Right")
        result.textContent = "Right"
        alert("YOU WON....")
    }
    else{
        totalscore = totalscore - 1
        Score.textContent = "Score:" + totalscore
        result.textContent = "Wrong"

        if (totalscore <= 0) 
    {
            alert("Game Over! You have no more points.")
    }
}
}