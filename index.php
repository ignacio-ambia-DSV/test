<?php
    // echo bin2hex(random_bytes(8)); // 20
    // echo hash('sha256', random_bytes(32)); //40
    $pwd = password_hash('bambooes1998.bamboo.',PASSWORD_DEFAULT); // 255
    print($pwd);

    if($hola) {
        echo 'cumple';
    }else{
        echo 'no cumple';
    }

    if(1){
        echo 'One is truthy';
        
    }