<?php
// Connect to the database
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database_name";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$event_name = $_POST['event_name'];
$event_date = $_POST['event_date'];
$event_location = $_POST['event_location'];

// Insert registration data into the database
$sql = "INSERT INTO events (event_name, event_date, event_location) VALUES ('$event_name', '$event_date', '$event_location')";
if ($conn->query($sql) === TRUE) {
    echo "Registration successful!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>