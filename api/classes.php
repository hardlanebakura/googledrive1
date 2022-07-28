<?php

    class User {

        public $email;
        public $username;
        public $password;

        function __construct($user) {

            $this->email = $user["email"];

        }

    }

?>