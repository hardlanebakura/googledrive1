<?php 

    require_once("Database.php");
    require_once("classes.php");
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
    header('Content-Type: application/json');

    function add_data_to_db($data) {

        $db = new db();
        $query = "INSERT INTO users (email, username, password) VALUES (?, ?, ?)";
        $db->query($query, $data["email"], $data["username"], $data["password"]);
        $db->close();

    }

    add_data_to_db(json_decode(file_get_contents('php://input'), true));
    

?>