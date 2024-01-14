document.addEventListener("DOMContentLoaded", function() {
    // Get the audio element

    // Get the elements for interaction
    var nob = document.getElementById("No");
    var sib = document.getElementById("Si");

    nob.addEventListener("click", function() {
        let alto = random(1, 10);
        let ancho = random(1, 10);
        console.log(alto, ancho);
        nob.style.gridRow = alto;
        nob.style.gridColumn = ancho;
    });

    sib.addEventListener("click", function() {
        var audio = new Audio('foto/tuconel.mp3');
        audio.play();
        document.getElementById("p").removeAttribute("hidden");
        console.log("click");
        document.getElementById("1").style.color = "transparent";
        document.getElementById("Si").style.display = "none";
        document.getElementById("No").style.display = "none";
    });
});

function random(min, max) {
    let numero = Math.floor(Math.random() * (max - min + 1) + min);
    return numero;
}
