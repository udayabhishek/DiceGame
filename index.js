
document.querySelector("h1").addEventListener("click", function() {
    var dice1Num = Math.floor(Math.random() * 6) + 1;
    var dice2Num = Math.floor(Math.random() * 6) + 1;

    var image1Name = "images/dice" + dice1Num + ".png";
    var image2Name = "images/dice" + dice2Num + ".png";

    //compare score
    if (dice1Num > dice2Num) {
        document.querySelector("h1").innerHTML = "👑 Player 1 wins";
    } else if (dice1Num < dice2Num) {
        document.querySelector("h1").innerHTML = "Player 2 wins 👑";
    } else {
        document.querySelector("h1").innerHTML = "draw";
    }

    //change dice image as per number
    document.querySelector(".img1").setAttribute("src", image1Name);
    document.querySelector(".img2").setAttribute("src", image2Name);
}) 

