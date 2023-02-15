<?php

//Include libraries
require __DIR__ . '/vendor/autoload.php';
    
//Create instance of MongoDB client
$mongoClient = (new MongoDB\Client);

//Select a database
$db = $mongoClient->shadesDB;

//Select a collection 
$collection = $db->customer;

//Get name and address strings - need to filter input to reduce chances of SQL injection etc.
$fname = filter_input(INPUT_POST, 'fname', FILTER_SANITIZE_STRING);
$lname = filter_input(INPUT_POST, 'lname', FILTER_SANITIZE_STRING);
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_STRING);
$phno = filter_input(INPUT_POST, 'phno', FILTER_SANITIZE_STRING);
$address = filter_input(INPUT_POST, 'address', FILTER_SANITIZE_STRING);
$password = filter_input(INPUT_POST, 'pass', FILTER_SANITIZE_STRING);
$confirmPassword = filter_input(INPUT_POST, 'cpass', FILTER_SANITIZE_STRING);


$dataArray = [
    "fname" => $fname,
    "lname" => $lname, 
    "email" => $email, 
    "phno" => $phno,
    "address" => $address,
    "pass" => $password,
    "cpass" => $confirmPassword
    
 ];

//Add the new product to the database
$insertResult = $collection->insertOne($dataArray);
    
//Echo result back to user
if($insertResult->getInsertedCount()==1){
    echo 'Customer added.';
    echo ' New document id: ' . $insertResult->getInsertedId();
}
else {
    echo 'Error adding customer';
}
?>