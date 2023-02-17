function login() {
    //Create request object 
    email = document.getElementById("email").value;
    password = document.getElementById("pass").value;
    let request = new XMLHttpRequest();

    //Create event handler that specifies what should happen when server responds
    request.onload = () => {
        //Check HTTP status code
        if (request.status === 200) {
            alert(request.responseText)
            //Add data from server to page
            readpass(request.responseText, password);
        }
        else
            alert("Error communicating with server: " + request.status);
    };

    //Set up request and send it
    request.open("POST", "../php/login.php");
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send("email=" + email +
        "&pass=" + password);
}

//checks credentials 
function readpass(jsoncustomer, jsonpassword) {
    //Convert JSON to array of product objects
    alert(JSON.parse(jsoncustomer))
    let result = JSON.parse(jsoncustomer);

    if (result.fname == undefined) {
        alert("Incorrect Email or Password.")
    } else {
        if (result.password.toString() == jsonpassword) {
            window.location.href = "../HTML/home.html";
        } else {
            alert("Incorrect Password");
        }
    }
}