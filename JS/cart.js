var removebtn = document.getElementsByClassName("removebtn");
console.log(removebtn);
for (let i = 0; i < removebtn.length; i++) {
    var button = removebtn[i];
    button.addEventListener('click', function (e) {
        // the button that user clicks is e.target
        var btnclick = e.target;
        btnclick.parentElement.parentElement.remove();
    })
}

function orderconfirmation(){
    alert("Your order has been confirmed");
}

