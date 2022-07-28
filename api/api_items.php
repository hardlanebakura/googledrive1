<?php

    require_once("Database.php");

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
    header('Content-Type: application/json');

    function api_items() {

        $db = new db();
        $users = $db->query("SELECT * FROM users")->fetchAll();

        print_r(json_encode($users));

    }

    api_items();

?>