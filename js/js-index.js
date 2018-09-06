var megaMenu = document.getElementById("overlay");
var ham_layer = document.getElementsByClassName('ham-layer');
var toggle = false;
var click = false;

function toggleHamMenu() {
    if (toggle == false) {
        document.getElementById('top_bun').style.top = "11px";
        document.getElementById('top_bun').style.transform = "rotate(45deg)";
        document.getElementById('meat').style.opacity = "0";
        document.getElementById('bottom_bun').style.top = "-11px";
        document.getElementById('bottom_bun').style.transform = "rotate(-45deg)";

        for (var i = 0; i < ham_layer.length; i++) {
            ham_layer[i].style.backgroundColor = "black";
        }
        toggle = true;
        megaMenu.style.height = "100vh";
    } else {
        document.getElementById('top_bun').style.top = "-0.05px";
        document.getElementById('top_bun').style.transform = "rotate(0deg)";
        document.getElementById('meat').style.opacity = "100";
        document.getElementById('bottom_bun').style.top = "0.05px";
        document.getElementById('bottom_bun').style.transform = "rotate(0deg)";

        for (var i = 0; i < ham_layer.length; i++) {
            ham_layer[i].style.backgroundColor = "white";
        }
        toggle = false;
        megaMenu.style.height = "0vh"
    }
}

function toggleHelp(){
    if (click == false) {
        document.getElementById('finish').style.display = "block";
        click = true;
    } else {
        document.getElementById('finish').style.display = "none";
        click = false;
    }
}


$(document).ready(function() {
    $(".Click").click(function(e) {
        $(".Click").hide();
    });
});