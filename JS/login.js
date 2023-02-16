//Global variables 
let loggedInStr = "Logged in <button onclick='logout()'>Logout</button>";
let loginStr = document.getElementById("LoginPara").innerHTML;
let request = new XMLHttpRequest();

//Check login when page loads
window.onload = checkLogin;
alert("three");
//Checks whether user is logged in.
function checkLogin(){
    //Create event handler that specifies what should happen when server responds
    request.onload = function(){
        if(request.responseText === "ok"){
            document.getElementById("LoginPara").innerHTML = loggedInStr;
        }
        else{
            console.log(request.responseText);
            document.getElementById("LoginPara").innerHTML  = loginStr;
        }
    };
    //Set up and send request
    request.open("GET", "../PHP/check_login.php");
    request.send();
}

//Attempts to log in user to server
function login(){
    alert("one");
    let request = new XMLHttpRequest();
    //Create event handler that specifies what should happen when server responds
    request.onload = function(){
        alert("two");
        //Check HTTP status code
        if(request.status === 200){
            //Get data from server
            alert("three");
            var responseData = request.responseText;

            //Add data to page
            if(responseData === "ok"){
                // document.getElementById("LoginPara").innerHTML = loggedInStr;
                // document.getElementById("ErrorMessages").innerHTML = "";//Clear error messages
                alert("user logged in");
                alert("ok", request.responseText);
                location.reload();
            }
            else{
                // document.getElementById("ErrorMessages").innerHTML = request.responseText;
                alert("Error");
                alert(request.responseText);
            }
        }
        else{
            // document.getElementById("ErrorMessages").innerHTML = "Error communicating with server";
            alert("Error communicating with server");
        }
    };

    //Extract login data
    let usrEmail = document.getElementById("email").value;
    let usrPassword = document.getElementById("pass").value;
    
    //Set up and send request
    request.open("POST", "../PHP/login.php");
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send("email=" + usrEmail + "&password=" + usrPassword);
}

//Logs the user out.
function logout(){
    //Create event handler that specifies what should happen when server responds
    request.onload = function(){
        checkLogin();
    };
    //Set up and send request
    request.open("GET", "../PHP/logout.php");
    request.send();
}