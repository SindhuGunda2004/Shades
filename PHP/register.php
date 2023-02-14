<?php

//Include libraries
require __DIR__ . '/vendor/autoload.php';
    
//Create instance of MongoDB client
$mongoClient = (new MongoDB\Client);

//Select a database
$db = $mongoClient->shadesDB;

//Select a collection 
$collection = $db->Customers;

//Extract the data that was sent to the server
$fname= filter_input(INPUT_POST, 'fname', FILTER_SANITIZE_STRING);
$lname= filter_input(INPUT_POST, 'lname', FILTER_SANITIZE_STRING);
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_STRING);
$phno= filter_input(INPUT_POST, 'phno', FILTER_SANITIZE_STRING);
$password = filter_input(INPUT_POST, 'password', FILTER_SANITIZE_STRING);
$phno = filter_input(INPUT_POST, 'phno', FILTER_SANITIZE_STRING);

//Convert to PHP array
$dataArray = [
    "name" => $name, 
    "email" => $email, 
    "password" => $password,
    "phno" => $phno
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