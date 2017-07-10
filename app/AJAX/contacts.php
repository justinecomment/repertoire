<?php

    header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
    header('Access-Control-Allow-Origin: *');

    $service = require('contacts.php');

    $DB_HOST = '127.0.0.1';
    $DB_USER = 'YOUR_LOGIN';
    $DB_PASS = 'YOUR_PASSWORD';
    $DB_NAME = 'apli_repertoire';

    $con= mysqli_connect($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME) or die("Error " . mysqli_error($con));


    if(isset($_GET['apli_repertoire'])){
        $nom = $_POST['nom'];
        $prenom = $_POST['prenom'];
        $email = $_POST['email'];

        $created = time();

        $query="INSERT INTO contacts(nom,prenom,email)  VALUES ('$nom', '$prenom', '$email')";
        $result = $mysqli->query($query) or die($mysqli->error.__LINE__);
        $result = $mysqli->affected_rows;
        echo $json_response = json_encode($result);
    }
    
?>