$(document).ready(function () {
    function getAdvice() {
        var URL = "	https://api.adviceslip.com/advice";
        $.getJSON(URL, function (data) {
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
    });
}); 