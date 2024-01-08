
//------------ABOUT-SCRIPT-----------//
let tablinks = document.getElementsByClassName("tab-links")
    let tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link")
        document.getElementById(tabname).classList.add("active-tab")
    }

//------------GOOGLE-SHEET-----------//

const scriptURL = 'https://script.google.com/macros/s/AKfycbzZaH1wXCPoa1d4pLzt2Ru6CCMEI0HsjpefMwth6lvbgHq2Ca0rr4JXpcR1CBGBZYpNXw/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg= document.getElementById("msg")
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },3000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })

//------------SIDE-MENU-----------//


let sidemenu = document.getElementById("sidemenu");

function closemenu(){
    sidemenu.style.left = "-400px";
}
function openmenu(){
    sidemenu.style.left = "0";
}