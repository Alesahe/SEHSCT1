    // import {addCal, addMonth} from "main.js"; // import necessary functions from main.js

const searchBI = document.getElementById("searchInput");

// post request
searchBI.addEventListener("keyup", async function(event) {
    clearTable();
    if (event.key!="Enter" && searchBI.value!=""){
        // console.log(JSON.stringify({search:searchBI.value}));
        await fetch("/performsearch", {
            method: "POST",
            body: JSON.stringify ({
                search: searchBI.value
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(async function(response){
            if(!response.ok){
                throw new Error("response invalid ;-;");
            };
            const validEntries = await response.json();
            displayResults(validEntries);

            return await response;
        })
    }
});

//other functions
function displayResults(validEntries) {
    //make table visible
    document.getElementById("potentialSearchResults").style.display = "table";

    // loop through array of arrays of events
    // console.log(Math.min(validEntries.length, 6))
    for (let i=0; i<Math.min(validEntries.length, 6); i++){
        const tableBody = document.getElementById("potentialSearchResults").getElementsByTagName("tbody")[0];  
        
        // create new row
        const newRow = tableBody.insertRow(); 
        
        // create new cells within the rows and add information into cells to display
        const newCell = newRow.insertCell(0);
        // newCell.innerHTML = `<a href="../calendar#j1" class="anchor-link" onclick="jumpToAnchor('` + validEntries[i][1] + `', '` + validEntries[i][3] + `')">` +validEntries[i][0] + ` ` + validEntries[i][1] + ` ` + validEntries[i][2] + `</a>`;
        newCell.innerHTML = `<a href="../calendar#` + validEntries[i][3] + `" class="anchor-link" onclick="jumpToAnchor('` + validEntries[i][1] + `', '` + validEntries[i][3] + `')">` +validEntries[i][0] + ` ` + validEntries[i][1] + ` ` + validEntries[i][2] + `</a>`;
        console.log(newCell.innerHTML);
    }
}

function clearTable(){
    const table = document.getElementById("potentialSearchResults");
    
    // total number of rows in the table
    const totalRows = table.rows.length;
    
    //deletes all rows
    for (let i=totalRows; i>0; i--) table.deleteRow(i-1);

    //makes it invisible
    document.getElementById("potentialSearchResults").style.display = "none";
}

// functions, from main.js
// toggles the addition of the dropdown bar and button change MONTHS ONLY
function addMonth(clicked){
    $(document).ready(function(){
        // revert other (all) month dropdown bar
        $(".month").removeClass('dropCal');

        // add dropdown and change style of pressed bar
        $(clicked).siblings().slideDown("slow");
        $(clicked).addClass('dropCal');

        //get rid of timeout revert if this is pressed
        clearTimeout(pause);
    });
}

    // addition of  dropdown bar and button change
function addCal(clicked){
    $(document).ready(function(){
        $(clicked).siblings().slideDown("slow");
        $(clicked).addClass('dropCal');
        
        //get rid of timeout revert if this is pressed
        clearTimeout(pause);
    });
}

// callign above functions through anchor links in the search retuls
function jumpToAnchor(month, elemID) {
    // load anchor links
    $(document).ready(function(){
        $(".dropdown-content").hide();
        $(".dropbtn").removeClass('dropCal');
    });
    addMonth(document.getElementById(month));
    addCal(document.getElementById(elemID));
};

// jump to calendar tab
function redirectCal(){
    const redirect = "http://127.0.0.1:5500/calendar";
    const absURL = new URL(redirect, window.location.href);
    window.location.href = absURL.href;
}

function searchSb(){
    window.location.href = "/calendar";

    // $(document).ready(function(){
    //     $(document.getElementById("potentialSearchResults")).children(".tbody").firstChild.click();
    // });
    // console.log("here");
}