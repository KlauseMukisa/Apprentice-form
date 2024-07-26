<?php
require_once 'config.php';

// Function to get database connection
function getDbConnection() {
    global $mysqli;
    return $mysqli;
}
?>
