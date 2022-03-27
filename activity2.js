function back() {
    wincow.location = "activity_1.html";
}
function getScore()
{
    score = localstorage.getItem("score");
    document.getElementById("update").innerHTML = "<h1>Score: " + score +"</h1>";
}