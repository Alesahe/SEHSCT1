// define global variables yay
const notifBtn = document.getElementById("enableNotifs");
const d  = new Date();
let lastSent;
let currDate = d.getDate();
let currMonth = d.getMonth();

// when notifBtn is clicked, make the popup at the top work
function askNotifPermission() {
    function handlePermission(permission) {
        const msg = document.querySelector(".msg");
        
        // browser stores information regardless
        if (!Reflect.has(Notification, "permission")) {
            Notification.permission = permission;
        }

        // Set the button to shown or hidden, depending on what the user answers
        if (Notification.permission === "denied" || Notification.permission === "default") {
            msg.style.display = "block";
            msg.textContent = "Your notifications are turned off.";
        } else {
            msg.textContent = "You have already enabled notifications."
            notifBtn.style.display = "none";
        }
    };
    
    // Check if the browser supports notifications
    if (Reflect.has(window, "Notification")) {
        if (checkNotifPromise()) {
            Notification.requestPermission().then(handlePermission);
            } else {
            Notification.requestPermission(handlePermission);
            }
    } else {
        console.log("This browser does not support notifications.");
    }
};

function checkNotifPromise() {
    try {
        Notification.requestPermission().then();
    } catch(err) {
        return false;
    }
    return true;
};

notifBtn.addEventListener("click", askNotifPermission);

// converts numerical date to words as stored in the database
function convertDate (date){
    months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    return months[date];
}

// asynchronous functions
(async () => {    
        // // show an error message
    // check notification permission
    let granted = false;

    if (Notification.permission === "granted") {
        granted = true;
    } else if (Notification.permission !== "denied") {
        let permission = await Notification.requestPermission();
        granted = permission === "granted" ? true : false;
    }

    // create and show the notification
    const showNotification = (title) => {
        const newNotif = new Notification(`${title}`, {
            body: "placeholder text",
            icon: "../favicon.png",
            vibrate: true
        });

        // close the notification after 10 seconds
        setTimeout(() => {
            newNotif.close();
        }, 10 * 1000);

        // navigate to a URL
        newNotif.addEventListener("click", () => {
            window.open("http://127.0.0.1:5500/calendar", "_blank");
        });
    }

    // post request for dates of things
    if (lastSent!=currDate){
        lastSent=currDate;
        await fetch("/notifDates", {
            method: "POST",
            body: JSON.stringify ({
                cDate: currDate,
                cMonth: convertDate(currMonth)
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(async function(response){
            if(!response.ok){
                throw new Error("notif response invalid ;-;");
            };
            const dates = await response.json();
            for (let i = 0; i<dates.length; i++) showNotification(dates);
            return await response;
        })
    }
})();