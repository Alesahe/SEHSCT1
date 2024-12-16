const searchBI = document.getElementById("searchInput");

// post request
searchBI.addEventListener("keyup", async function(event) {
    clearTable();
    if (event.key!="Enter" && searchBI.value!=""){
        console.log("here!!!");
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

function displayResults(validEntries) {
    //make table visible
    document.getElementById("potentialSearchResults").style.display = "table";

    // loop through array of arrays of events
    for (let i=0; i<Math.min(validEntries.length, 9); i++){
        const tableBody = document.getElementById("potentialSearchResults").getElementsByTagName("tbody")[0];  
        
        // create new row
        const newRow = tableBody.insertRow(); 
        
        // create new cells within the rows and add information into cells to display
        newRow.insertCell(0).textContent = validEntries[i][0] + " " + validEntries[i][1];
        newRow.insertCell(1).textContent = validEntries[i][2];
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