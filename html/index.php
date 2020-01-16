<?php

    if ($_POST) {

        $email = $_POST['email'];

        $name = $_POST['name'];
        $phone = $_POST['phone'];
        $content = $_POST['message'];

        $subject = 'You Got An Email From ' . $name;

        $headers = 'From: '. $name . "\r\n" . 'Reply-To: '. $email . "\r\n";

        $message =  "Name: " . $name . "\r\n" . "Phone: " . $phone . "\r\n" . "Email: " . $email . "\r\n" . "Message: " . $content;


        mail($email, $subject, $message);


    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
    <form action="index.php" method="post">
        <input name="email" placeholder="Send to email">
        <br>
        <input name="name" placeholder="User name">
        <br>
        <input name="phone" placeholder="User Phone" type="number">
        <br>
        <input name="message" placeholder="User Message">
        <br>
        <input type="submit" value="send">
    </form>

</body>
</html>

