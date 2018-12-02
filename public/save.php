<?php
    echo("<script type='text/javascript'>alert('inside php');</script>";)
    $fp = fopen('lectures.json', 'w');
    fwrite($fp, json_encode($_POST['lectures']));
    fclose($fp);
?>