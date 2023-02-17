<?php

//Include libraries
require __DIR__ . '/vendor/autoload.php';
    
// //Create instance of MongoDB client
$mongoClient = (new MongoDB\Client);

// //Select a database
$db = $mongoClient->shadesDB;

// //Select a collection 
$collection = $db->customer;
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_STRING);
$password = filter_input(INPUT_POST, 'pass', FILTER_SANITIZE_STRING);
$criteria = array(
    'email' => $email,
  );

$doc = $collection->findOne(['email' => $email]);
$jsonData = json_encode($doc);

if(!empty($doc)){
    header('Content-Type: application/json');
echo $jsonData;
}
else{
    echo 
    '[
        {
        "email" : "'.$email.'" } ]';
}