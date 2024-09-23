<?php
    session_start();
    $db_hostname = "127.0.0.1";
    $db_username = "root";
    $db_password = "";
    $db_name = "test";

    $conn = mysqli_connect($db_hostname, $db_username, $db_password, $db_name);
    if (!$conn) {
        echo "Connection failed: " . mysqli_connect_error();
        exit;
    }

    $rollno=$_POST['rollno'];
    $password=$_POST['password'];

    $sql = "SELECT * FROM users WHERE rollno='$rollno' AND password='$password'";

    $result = mysqli_query($conn, $sql);
    if (!$result) {
        echo "Error: " . mysqli_error($conn);
        exit;
    }

    $row = mysqli_fetch_assoc($result);
    if ($row){
        echo "Welcome " . $row['name'] . "<br/>";

    $_SESSION['id'] = $row['id'];
    $_SESSION['name'] = $row['name'];

    //setcookie("user_id", $row['id'],time() + 3600);
    //setcookie("name", $row['name'], time()+ 3600);
        ?>
        <a href="dashboard.php"> Click here</a>
        <?php
    }
     else {
        echo "Login Failed<br/>";
    }

    mysqli_close($conn);
?>