// define global variables yay
const notifBtn = document.getElementById("enableNotifs");
const d  = new Date();

// when notifBtn is clicked, make the popup at the top work
function askNotifPermission() {
    function handlePermission(permission) {
        // browser stores information regardless
        if (!Reflect.has(Notification, "permission")) {
            Notification.permission = permission;
        }

        // Set the button to shown or hidden, depending on what the user answers
        if (Notification.permission === "denied" || Notification.permission === "default") {
            const msg = document.querySelector(".msg");
            msg.style.display = "block";
            msg.textContent = "Your notifications are turned off. \n Click on the button below to enable notifications.";
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

(async () => {
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

    // // show an error message
    // const showError = () => {
    //     const error = document.querySelector(".error");
    //     error.style.display = "block";
    //     error.textContent = "Your notifications are turned off. \n Click on the button below to enable notifications.";
    // }

    // check notification permission
    let granted = false;

    if (Notification.permission === "granted") {
        granted = true;
    } else if (Notification.permission !== "denied") {
        let permission = await Notification.requestPermission();
        granted = permission === "granted" ? true : false;
    }

    // show notification or error
    if (d.getDate()==13 && d.getMonth()==11){ // make it so that it checks if is the same as in database
        if (granted) {
            showNotification("meteor shower");
            notifHeading.style.display="none";
            notifBtn.style.display = "none";
        } 
        // else showError();
    } else {
        console.log(d.getDate());
        console.log(d.getMonth());
    }
})();