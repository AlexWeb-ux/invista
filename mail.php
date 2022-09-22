<?php
  $to = "team.seo.moon@gmail.com";	
  $from = "team.seo.moon@gmail.com";
  $subject = "Письмо с сайта";
  $message = "Имя пользователя: ".$_POST['name']." \n Телефон пользователя: ".$_POST['phone']." \n Email: ".$_POST['email'];
  $boundary = md5(date('r', time()));
  $headers = "MIME-Version: 1.0\r\n"; 
  $headers .= "From: " . $from . "\r\n";
  $headers .= "Reply-To: " . $from . "\r\n";
  $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";
  mail($to, $subject, $message, $headers);

?>