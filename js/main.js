window.addEventListener('load', function() {

    var expanded = false;

    window.addEventListener("scroll", function() {
        if(!expanded && window.pageYOffset > 0) {
            expanded = true;
            document.getElementById("topBar").style.height = "100px";
        } else if(expanded && window.pageYOffset === 0) {
            expanded = false;
            document.getElementById("topBar").style.height = "70px";
        }
    });

});