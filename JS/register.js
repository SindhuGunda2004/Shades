function register() {
    //Create request object
    let request = new XMLHttpRequest();

    //Create event handler that specifies what should happen when server responds
    request.onload = () => {
        //Check HTTP status code
        if (request.status === 200) {
            //Get data from server
            let responseData = request.responseText;

            // telling the user that they are registered and redirecting them to login page. 
            alert("User registered, now you can login to your account");
            window.location.replace("../HTML/login.html");
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
    let usrEmail = document.getElementById("email").value;
    let usrPhone = document.getElementById("phno").value;
    let usrAddress = document.getElementById("address").value;
    let usrPassword = document.getElementById("pass").value;
    let usrCPassword = document.getElementById("cpass").value;

    function passwordStrength(){

        // this object has the special characters, letters everything that is necessary for a strong password
        var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

        // comparing user inputted password with the condition for strong password
        if (mediumRegex.test(usrPassword) == true){
            return true; 
        }
        else{
            return false; 
        }
    }

    function validateEmail() {

        // variable to store emailID
        var emailID = usrEmail;
        // getting posotion of @ from user input 
        atpos = emailID.indexOf("@");
        // getting position of . from the user input 
        dotpos = emailID.lastIndexOf(".");
        
        // checking if @ and . is there in the email and if there is it in a valid position
        if (atpos < 1 || ( dotpos - atpos < 2 )) {

            // if the condition evaluates to false then alert pops up 
            alert("Please enter correct email ID");
            usrEmail.focus() ;
            return false;
        }
        return( true );
    }

    // checking if the user has entered first name 
    if (usrFirstName == "") {
        alert("First name field cannot be empty");
        usrFirstName.focus() ;
        return false;
    }

    // checking if the user has entered last name
    else if (usrLastName == ""){
        alert("Last name field cannot be empty");
        usrLastName.focus() ;
        return false;
    }

    // checking if the user has entered email and if user has entered a valid email
    else if (usrEmail == "" || validateEmail() == false){
        alert("Email field cannot be empty");
        usrEmail.focus() ;
        return false;       
    }

    // checking if the user has entered a password
    else if (usrPassword == ""){
        alert("Password field cannot be empty");
        usrPassword.focus() ;
        return false;
    }

    // checking if the user has entered confirm passowrd field as well 
    else if (usrCPassword == ""){
        alert("Confirm Password field cannot be empty");
        usrCPassword.focus() ;
        return false;
    }

    // checking if the user has entered same passowrd in both the fields that is password and confirm password 
    else if (usrPassword != usrCPassword){
        alert("Your password is not matching");
        return false;
    }

    // checking if the user has entered same password in both the fields and also the password is strong 
    else if ((usrPassword == usrCPassword) && passwordStrength() == false){
        alert("Please type a strong password");
        return false; 
    }
    else if (usrEmail){

    }

    // if all the conditions are satisfied then the user is stored in the local storage
    else{
        //Send request
    request.send("fname=" + usrFirstName + "&lname=" + usrLastName + "&email=" + usrEmail 
    + "&phno=" + usrPhone  + "&address=" + usrAddress + "&pass=" + usrPassword + "&cpass=" + usrCPassword);
    return true;
    }   
}
