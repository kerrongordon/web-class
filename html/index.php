<?php

    if ($_POST) {

        $to = $_POST['sendto'];

        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $content = $_POST['message'];

        $subject = 'You Got An Email From ' . $name;

        $message =  "Name: " . $name . "\n" . "Phone: " . $phone . "\n" . "Email: " . $email . "\n" . "Message: " . $content;


        mail($to, $subject, $message);


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
        <input name="sendto" placeholder="Send to email">
        <input name="name" placeholder="User name">
        <input name="email" placeholder="User Email">
        <input name="phone" placeholder="User Phone" type="number">
        <input name="message" placeholder="User Message">
        <input type="submit" value="send">
    </form>

</body>
</html>

