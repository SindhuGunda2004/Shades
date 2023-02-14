
function register() {
    //Create request object 
    let request = new XMLHttpRequest();

    //Create event handler that specifies what should happen when server responds
    request.onload = () => {
        //Check HTTP status code
        if (request.status === 200) {
            //Get data from server
            let responseData = request.responseText;

            //Add data to page
            document.getElementById("ServerResponse").innerHTML = responseData;
        }
        else
            alert("Error communicating with server: " + request.status);
    };

    //Set up request with HTTP method and URL 
    request.open("POST", "../PHP/register.php");
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    //Extract registration data
    let usrFirstName = document.getElementById("fname").value;
    let usrLastName = document.getElementById("lname").value;
    let usrAddress = document.getElementById("address").value;
    let usrPassword = document.getElementById("password").value;

    //Send request
    request.send("fname=" + usrFirstName + "&lname=" + usrLastName + "&address=" + usrAddress + "&password=" + usrPassword);
}
