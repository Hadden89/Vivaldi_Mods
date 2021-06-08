// Move Sync&Trash to Urlfield based on a generic mover
// On testing. Hope it still work fine ^^,

setTimeout(function wait() {
    var sync = document.querySelector(".toolbar.toolbar-tabbar.sync-and-trash-container");
    var toolbar = document.querySelector(".UrlBar.toolbar.toolbar-mainbar.toolbar-large");
    if (toolbar != null) {
        toolbar.appendChild(sync);
    }
    else {
        setTimeout(wait, 500);
    }
}, 500);