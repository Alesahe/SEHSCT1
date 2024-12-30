// service worker code from https://blog.heroku.com/how-to-make-progressive-web-app
if (!navigator.serviceWorker.controller) {
    navigator.serviceWorker.register("/sw.js").then(function(reg) {
        console.log("Service worker has been registered for scope: " + reg.scope);
    });
}