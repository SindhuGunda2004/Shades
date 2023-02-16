<?php

//Include libraries
require __DIR__ . '/vendor/autoload.php';
    
//Create instance of MongoDB client
$mongoClient = (new MongoDB\Client);

//Select a database
$db = $mongoClient->shadesDB;

//Select a collection 
$collection = $db->Products;

// Retrieve the last product ID from the collection
$last_product = $collection->findOne([], ['sort' => ['ProductID' => -1]]);
$max_id = isset($last_product['ProductID']) ? $last_product['ProductID'] : 0;

// Assign the next product ID as the maximum ID plus 1
$product_id = $max_id + 1;

// Insert the new product into the collection with the assigned ID
$product = [
  'ProductID' => $product_id,
  'Product_name' => $product_name,
  'description' => $product_description,
  'price' => $product_price
];
$collection->insertOne($product);

?>