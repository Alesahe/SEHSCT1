// responsive navbar
function resizeNavbar() {
    var x = document.getElementById("topnavbar");
    if (x.className === "topnav") {
        x.className = "responsive topnav";
    } else {
        x.className = "topnav";
    }
}

// displays time and date
function updateDT(){
    var refresh=995; // Refresh rate in milli seconds
    setTimeout('displayDateTime()',refresh)
}

function displayDateTime() {
    var currDate = new Date();
    document.getElementById("datetime").innerHTML = currDate.toDateString() + " | " + currDate.toLocaleTimeString();
    updateDT();
}

// dropdown shenanigans
let pause;

// toggles the addition of the dropdown bar and button change MONTHS ONLY
$(document).ready(function(){
    $(".month").click(function(){
        // revert other (all) month dropdown bar
        $(".month").removeClass('dropCal');

        // add dropdown and change style of pressed bar
        $(this).siblings().slideDown("slow");
        $(this).addClass('dropCal');

        //get rid of timeout revert if this is pressed
        clearTimeout(pause);
    });
});

// addition of  dropdown bar and button change
$(document).ready(function(){
    $(".calEntry").click(function(){
        $(this).siblings().slideDown("slow");
        $(this).addClass('dropCal');
        
        //get rid of timeout revert if this is pressed
        clearTimeout(pause);
    });
});

// closes the dropdown menu and reverts the button style if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.matches('.dropdown-content') && !event.target.matches(".dropdown")) { // || (event.target.style.opacity==1)
        $(document).ready(function(){
            $(".dropdown-content").slideUp("slow");
        });
        pause = setTimeout(function(){
            $(".dropbtn").removeClass('dropCal');
        }, 600);
    } else if (event.target.matches('.dropbtn')){
        $(document).ready(function(){
            $(event.target).parent().siblings().children(".dropdown-content").slideUp("slow");
        }); 
        pause = setTimeout(function(){
            $(event.target).parent().siblings().children(".calEntry").removeClass("dropCal");
        }, 600);
    } else if (event.target.matches(".dropdown-content")){
        $(document).ready(function(){
            $(event.target).children().children(".dropdown-content").slideUp("slow");
        });
        pause = setTimeout(function(){
            $(event.target).children().children(".calEntry").removeClass("dropCal");
        }, 600);
    } else if (event.target.matches(".dropdown") && event.target.parentElement.matches(".dropdown-content")){
        $(document).ready(function(){
            $(event.target).children(".dropdown-content").slideUp("slow");
            $(event.target).siblings(".dropdown").children(".dropdown-content").slideUp("slow");
        }); 
        pause = setTimeout(function(){
            $(event.target).children(".calEntry").removeClass("dropCal");
            $(event.target).siblings(".dropdown").children(".calEntry").removeClass("dropCal");
        }, 600);
    }
}
