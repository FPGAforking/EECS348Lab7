function color_switch() {
    var BR = document.getElementById("BR").value;
    var BG = document.getElementById("BG").value;
    var BB = document.getElementById("BB").value;
    var bw = document.getElementById("border_width").value;
    var bgR = document.getElementById("bgR").value;
    var bgG = document.getElementById("bgG").value;
    var bgB = document.getElementById("bgB").value;

    var tag = document.getElementById("pgph");
    tag.style.borderColor = `rgb(${BR},${BG},${BB})`;
    tag.style.borderWidth = bw;
    tag.style.backgroundColor = `rgb(${bgR},${bgG},${bgB})`;
}

