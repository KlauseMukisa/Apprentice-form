<?php
require_once 'db_connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get data from POST request
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    // Prepare an insert statement
    $sql = "INSERT INTO apprentices (first_name, last_name, email, phone, password) VALUES (?, ?, ?, ?, ?)";

    if ($stmt = getDbConnection()->prepare($sql)) {
        $stmt->bind_param("sssss", $firstName, $lastName, $email, $phone, $password);

        if ($stmt->execute()) {
            echo "Registration successful!";
        } else {
            echo "ERROR: Could not execute query: $sql. " . getDbConnection()->error;
        }

        // Close statement
        $stmt->close();
    } else {
        echo "ERROR: Could not prepare query: $sql. " . getDbConnection()->error;
    }

    // Close connection
    getDbConnection()->close();
}
?>
