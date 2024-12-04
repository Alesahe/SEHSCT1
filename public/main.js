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
    mytime=setTimeout('displayDateTime()',refresh)
}

function displayDateTime() {
    var currDate = new Date();
    document.getElementById("datetime").innerHTML = currDate.toDateString() + " | " + currDate.toLocaleTimeString();
    updateDT();
}

// toggles the addition of the dropdown bar and button change MONTHS ONLY
$(document).ready(function(){
    $(".month").click(function(){
        $("")
        $(this).siblings().slideDown("slow");
        $(this).addClass('dropCal');
    });
});

// toggles the addition of the dropdown bar and button change
$(document).ready(function(){
    $(".calEntry").click(function(){
        $(this).siblings().slideDown("slow");
        $(this).addClass('dropCal');
    });
});

// closes the dropdown menu and reverts the button style if the user clicks outside of it
window.onclick = function(event) {
    if ((!event.target.matches('.dropbtn') && !event.target.matches('.dropdown-content') && !event.target.matches(".dropdown")) || (event.target.style.opacity==1)) { // 
        $(".dropdown-content").hide();
        $(".dropbtn").removeClass('dropCal');
    } else if (event.target.matches('.dropbtn')){
        $(event.target).parent().siblings().children(".dropdown-content").hide();
        $(event.target).parent().siblings().children(".calEntry").removeClass("dropCal");
    } else if (event.target.matches(".dropdown-content")){
        $(event.target).children().children(".dropdown-content").hide();
        $(event.target).children().children(".calEntry").removeClass("dropCal");
    } else if (event.target.matches(".dropdown") && event.target.parentElement.matches(".dropdown-content")){
        $(event.target).children(".dropdown-content").hide();
        $(event.target).children(".calEntry").removeClass("dropCal");
        $(event.target).siblings(".dropdown").children(".dropdown-content").hide();
        $(event.target).siblings(".dropdown").children(".calEntry").removeClass("dropCal");
    } else {
        console.log(event.target);
    }
}
// search stuff 

// const db =  new sqlite3.Database(".database/events.db");

// document.getElementById("searchInput").addEventListener("keyup", function () {
//     console.log(db.all("SELECT * FROM events"));
//     console.log(document.getElementById("searchInput"));
// });

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(".database/events.db");
var row;

db.get("SELECT date FROM events", function() {
    console.log(row.date);
    // console.log(row.open_minut);
    // row = row.open_hour;
    callback(row);
});

function callback(row) {
    console.log("R:" + row);
}