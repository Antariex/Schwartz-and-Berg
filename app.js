let bip = null;

window.addEventListener('beforeinstallprompt', event => {
event.preventDefault();
bip = event;
});

document.addEventListener('DOMContentLoaded', event => {
    document.querySelector("#instalation button").addEventListener('click', event => {
        if (bip) {
            bip.prompt();
        };
    });
});

let registrationSW;
        navigator.serviceWorker.register('/sw.js').then(registration => {
            registrationSW = registration;
        });

        //navigator.serviceWorker.ready.then(registration => {});

        navigator.storage.persist();