$(document).ready(function () {
    function getAdvice() {
        var URL = "https://api.adviceslip.com/advice";
        $.getJSON(URL, function (data) {
            console.log(data);
            parseData(data.slip);
        });
    }
    function parseData(data) {
        let id = data.id;
        let advice = data.advice;
        updateDOM(id, advice);
    }
    function updateDOM(id, advice) {
        $('#id').html(id);
        $('#advice').html('&ldquo;' + advice + '&rdquo;');
    }
    getAdvice();
    const button = document.querySelector(".button")
    button.addEventListener('click', () => {
        getAdvice();
        console.log("button pressed");
    });
    const body = document.querySelector("body")

    const theme1 = document.querySelector("#clr1")
    const theme3 = document.querySelector("#clr3")
    const theme2 = document.querySelector("#clr2")

    theme3.addEventListener('click', () => {
        console.log("test")
        body.classList.remove("test1")
        body.classList.remove("test2")
        body.classList.add("test3")
        theme1.classList.remove("selected")
        theme2.classList.remove("selected")
        theme3.classList.add("selected")
    })

    theme1.addEventListener('click', () => {
        console.log("test")
        body.classList.remove("test2")
        body.classList.remove("test3")
        body.classList.add("test1")
        theme2.classList.remove("selected")
        theme3.classList.remove("selected")
        theme1.classList.add("selected")
    })

    theme2.addEventListener('click', () => {
        console.log("test")
        body.classList.remove("test1")
        body.classList.remove("test3")
        body.classList.add("test2")
        theme1.classList.remove("selected")
        theme3.classList.remove("selected")
        theme2.classList.add("selected")
    })
}); 
