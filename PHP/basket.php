<!-- PHP loads product information -->
<?php

//Connect to MongoDB and select database
require __DIR__ . '/vendor/autoload.php';
$mongoClient = (new MongoDB\Client);

$db = $mongoClient->shadesDB;

//Find all products
$products = $db->Products->find();

//Output results onto page
echo '<table>';
echo '<tr><th>Product</th><th>Price</th><th>Quantity</th><th>Total Price</th><th></th></tr>';
foreach ($products as $document) {
    echo '<tr>';
    echo '<td>' . $document["Product_name"] . "</td>";
    echo '<td>' . $document["Price"] . "</td>";
    echo '<td><input type="number"></td>';
    // echo '<td>'. $document[] .'</td>';
    // echo '<td><button onclick=\'addToBasket("' . $document["Product_name"] . '", "' . $document["Price"] . '")\'>';
    echo '<td> <button class="removebtn" onclick="removeProduct()">Remove</button> </td>';
    echo '</tr>';
}
echo '</table>';

?>