var menuItems = document.getElementsByClassName("scroll");
var learnMoreButton = document.getElementById("learn-more");

function scroll(element){
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start' 
    });
}

function goToAbout(){
    scroll(document.getElementById("about"));
}

function sendMail() {
    var link = "mailto:guilhermeguerra403@gmail.com"
             + "?cc=" + escape(document.getElementById('email').value)
             + "&subject=" + escape(document.getElementById('assunto').value)
             + "&body=" + escape(document.getElementById('mensagem').value);

    window.location.href = link;
}

for(let i=0;i<menuItems.length;i++){
    let element = menuItems.item(i);
    element.addEventListener("click", function(e){
        e.preventDefault();
        let scrollTo = element.getAttribute("ppt");
        scroll(document.getElementById(scrollTo));
    }, false);
}