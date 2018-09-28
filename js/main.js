window.addEventListener('load', function() {

    var expanded = false;

    window.addEventListener("scroll", function() {
        if(!expanded && window.pageYOffset > 0) {
            expanded = true;
            document.getElementById("topBar").style.height = "50px";
            document.getElementById("barLink").style.lineHeight = "50px";
            document.getElementById("topBar").style.background = "white";
        } else if(expanded && window.pageYOffset === 0) {
            expanded = false;
            document.getElementById("topBar").style.height = "70px";
            document.getElementById("barLink").style.lineHeight = "70px";
            document.getElementById("topBar").style.background = "";
        }
    });

});