function myFunction() {
    var x = document.getElementById("myNav");
    if (x.className === "navBar") {
        x.className += " responsive";
    } else {
        x.className = "navBar";
    }
}