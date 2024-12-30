// define global variables yay
const notifBtn = document.getElementById("enableNotifs");
const msg = document.querySelector(".msg");
const d  = new Date();
let lastSent = localStorage.getItem("lastSent");
let currDate = d.getDate();
let currMonth = d.getMonth();

// adapt notification settings screen based on notification permissions
if (Notification.permission === "granted"){
    msg.textContent = "You have already enabled notifications."
    notifBtn.style.display = "none";
} else if (Notification.permission === "denied"){
    msg.style.display = "block";
    msg.textContent = "Your notifications are turned off.";
    notifBtn.style.display = "none";
}

// when notifBtn is clicked, add popup at the top asking for permission
// code of this function adapted from  https://github.com/mdn/dom-examples/tree/main/to-do-notifications 
function askNotifPermission() {
    function handlePermission(permission) {
        // browser stores information regardless
        if (!Reflect.has(Notification, "permission")) {
            Notification.permission = permission;
        }

        // adapt notification settings screen based on notification permissions
        if (Notification.permission === "denied") {
            msg.style.display = "block";
            msg.textContent = "Your notifications are turned off.";
            notifBtn.style.display = "none";
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

// code of this function adapted from  https://github.com/mdn/dom-examples/tree/main/to-do-notifications 
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
    // check notification permission
    let granted = false;

    if (Notification.permission === "granted") {
        granted = true;
    } else if (Notification.permission !== "denied") {
        let permission = await Notification.requestPermission();
        granted = permission === "granted" ? true : false;
    }

    // create and show the notification
    const showNotification = (info) => {
        const newNotif = new Notification(`${info[2]}`, {
            body: info[0] + " " + info[1] + ": " + info[3],
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
        localStorage.setItem("lastSent", currDate);
        lastSent = localStorage.getItem("lastSent");
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
            for (let i = 0; i<dates.length; i++) showNotification(dates[i]);
            return await response;
        })
    }
})();