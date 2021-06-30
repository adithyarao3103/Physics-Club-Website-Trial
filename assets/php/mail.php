<?php
$name = $_POST['name'];
$email = $_POST['email'];
$institute = $_POST['institute'];
$department = $_POST['department'];
$message = $_POST['message'];
$formcontent=" From: $name \n Institute: $institute \n Department: $department \n Message: $message";
$recipient = "adithyarao3132001@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>