<?php
if(isset($_POST['submit']) && $_POST['submit']=='submit'){
    session_start();
    $note = $_POST['note'];
   $file_out = "./data/notes.txt";
   file_put_contents($file_out,json_encode($note));
    header('Location:./../views/dashboard.php');
    exit();
}


?>