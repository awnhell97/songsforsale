window.addEventListener('load', function() {

    var expanded = !window.pageYOffset > 0;

    expand();

    window.addEventListener("scroll", expand);

    function expand() {
        if(!expanded && window.pageYOffset > 0) {
            expanded = true;
            document.getElementById("topBar").style.height = "50px";
            document.getElementById("barLink").style.lineHeight = "50px";
            document.getElementById("topBar").style.background = "white";
            document.getElementById("barLink").style.color = "black";
        } else if(expanded && window.pageYOffset === 0) {
            expanded = false;
            document.getElementById("topBar").style.height = "70px";
            document.getElementById("barLink").style.lineHeight = "70px";
            document.getElementById("topBar").style.background = "";
            document.getElementById("barLink").style.color = "white";
        }
    }

});