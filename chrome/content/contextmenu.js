// FluidinfoLink provides a link to the object browser.
infomaniac.FluidinfoLink = function() {};

// Open the object browser in a new tab and make it active.
infomaniac.FluidinfoLink.prototype.onClick = function() {
    var document = window.gBrowser.contentDocument;
    var link = encodeURIComponent(document.location.href);
    var targetURL = 'https://fluidinfo.com/about/#!/' + link;
    window.gBrowser.selectedTab = window.gBrowser.addTab(targetURL);
};


// Popup shows up a popup notification.
infomaniac.Popup = function() {};

// Handle a popup request.
infomaniac.Popup.prototype.onClick = function() {
    var image = document.createElement('image');
    image.setAttribute('src', 'chrome://infomaniac/skin/fluidinfo-16x16.png');
    image.style.cssText = 'padding-left: 4px; padding-right: 4px;';

    var p = document.createElement('p');
    p.textContent = '3 comments fom your friends';

    var container = document.createElement('bbox');
    container.style.cssText = 'padding-top: 4px; padding-bottom: 4px;';
    container.appendChild(image);
    container.appendChild(p);

    var notificationBox = gBrowser.getNotificationBox();
    notificationBox.appendChild(container);
};


// Initialize the extension.
infomaniac.load = function() {
    if (infomaniac.contextLink === undefined) {
        infomaniac.contextLink = new infomaniac.FluidinfoLink();
    }

    if (infomaniac.popup == undefined) {
        infomaniac.popup = new infomaniac.Popup();
    }
};

window.addEventListener("popupshowing", infomaniac.load);
