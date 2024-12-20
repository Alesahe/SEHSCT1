// export {addCal, addMonth}; // export the following functions (to searchBar.js)

//redirect links with /calendar in front
const currURL = new URL(window.location.href).pathname;
// console.log(currURL);

const toRedirect = {
    index: "https://127.0.0.1:5500/",
    dashboard: "https://127.0.0.1:5500/dashboard",
    recent: "https://127.0.0.1:5500/recent",
    calendar: "https://127.0.0.1:5500/calendar"
};

const tab = () => {
    if (currURL=="https://127.0.0.1:5500/calendar/") return "index";
    else if (currURL=="https://127.0.0.1:5500/calendar/dashboard") return "dashboard";
    else if (currURL=="https://127.0.0.1:5500/calendar/recent") return "recent";
    else if (currURL.includes("https://127.0.0.1:5500/calendar/calendar")) return "calendar";
    return null;
};

const redirect = () => {
    let os = tab();
    // console.log(os);
    if (os in toRedirect) {
        location.replace(toRedirect[os]);
    }
};

redirect();

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

$(document).ready(function(){
    // toggles the addition of the dropdown bar and button change MONTHS ONLY
    function addMonth(clicked){
        // revert other (all) month dropdown bar
        $(".month").removeClass('dropCal');

        // add dropdown and change style of pressed bar
        $(clicked).siblings().slideDown("slow");
        $(clicked).addClass('dropCal');

        //get rid of timeout revert if this is pressed
        clearTimeout(pause);
    }
    
    // calls above function when element of "month" class is called
    $(".month").click(function() {
        addMonth(this);
    });

    // addition of  dropdown bar and button change
    function addCal(clicked){
        $(clicked).siblings().slideDown("slow");
        $(clicked).addClass('dropCal');
        
        //get rid of timeout revert if this is pressed
        clearTimeout(pause);
    }
    
    // calls above function when element of "calEntry" class is called
    $(".calEntry").click(function() {
        addCal(this);
        // console.log(this);
    });
});

// closes the dropdown menu and reverts the button style if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.matches('.dropdown-content') && !event.target.matches(".dropdown") && !event.target.matches(".anchor-link")) { // || (event.target.style.opacity==1)
        $(document).ready(function(){
            $(".dropdown-content").slideUp("slow");
        });
        pause = setTimeout(function(){
            $(".dropbtn").removeClass('dropCal');
        }, 600);
        // console.log(event.target);
    } else if (event.target.matches('.dropbtn')){
        $(document).ready(function(){
            $(event.target).parent().siblings().children(".dropdown-content").slideUp("slow");
        }); 
        pause = setTimeout(function(){
            $(event.target).parent().siblings().children(".calEntry").removeClass("dropCal");
        }, 600);
        // console.log("two");
    } else if (event.target.matches(".dropdown-content")){
        $(document).ready(function(){
            $(event.target).children().children(".dropdown-content").slideUp("slow");
        });
        pause = setTimeout(function(){
            $(event.target).children().children(".calEntry").removeClass("dropCal");
        }, 600);
        // console.log("three");
    } else if (event.target.matches(".dropdown") && event.target.parentElement.matches(".dropdown-content")){
        $(document).ready(function(){
            $(event.target).children(".dropdown-content").slideUp("slow");
            $(event.target).siblings(".dropdown").children(".dropdown-content").slideUp("slow");
        }); 
        pause = setTimeout(function(){
            $(event.target).children(".calEntry").removeClass("dropCal");
            $(event.target).siblings(".dropdown").children(".calEntry").removeClass("dropCal");
        }, 600);
        // console.log("four");
    }
}