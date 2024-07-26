<?php
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root'); // Change this if your MySQL user is different
define('DB_PASSWORD', '');
define('DB_NAME', 'grow_project'); // Change this to your database name

// Attempt to connect to MySQL database
$mysqli = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

// Check connection
if ($mysqli === false) {
    die("ERROR: Could not connect. " . $mysqli->connect_error);
}
?>
