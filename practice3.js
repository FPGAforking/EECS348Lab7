function password() {
    var p1 = document.getElementById("p1").value;
    var p2 = document.getElementById("p2").value;


    if (p1.length < 8) {
        alert("The first password must be longer (at least 8 letters)")
    } else if (p2.length < 8) {
        alert("The first password must be longer (at least 8 letters)")
    } else if (p1 != p2) {
        alert("The passwords do not match")
    } else {
        alert("All good!")
    }
}
