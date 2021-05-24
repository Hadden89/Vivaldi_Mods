// Tnx to Luetage who originally did this for me ^^ --  https://github.com/luetage
// Quite EXPERIMENTAL. Still have to refine this 

(function () {

function style() {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.id = 'mvVivbtn';
    style.innerHTML = `
	#browser.native #header {display: none !important;}
	:not(.native) #header {display: block !important;}
	.vivaldi {position: relative;}
	.native .vivaldi {margin-top: 5px;} 
	:not(.native) .vivaldi {margin-top: 2px;}
	.native:not(.tabs-top) .burger-icon {margin-top: 2px; margin-right: -5px;}
	`;
    document.getElementsByTagName('head')[0].appendChild(style);
};

function mvVivbtn() {
        style();
        var btn = document.querySelector(".vivaldi");
        btn.setAttribute('tabindex', '-1');
        var bar = document.querySelector(".UrlBar.toolbar.toolbar-mainbar.toolbar-large");
        var div = document.createElement('div');
        div.classList.add('button-toolbar');
        bar.insertBefore(div, bar.firstChild);
        div.appendChild(btn);
    }

setTimeout(function wait() {
    const browser = document.getElementById('browser');
    if (browser) {
          mvVivbtn();
    }
    else {
         setTimeout(wait, 300);
    }
});

})();