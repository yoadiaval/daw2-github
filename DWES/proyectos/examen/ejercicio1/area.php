
<?php
define("PI", 3.1416);
function area($r, $h){
    $l = generatriz($r,$h);
    return PI*$r*($r+$l);
}

function generatriz($r,$h){
 return pow(pow($r,2)+pow($h,2),0.5);
}
?>