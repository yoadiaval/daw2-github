<?php
 function cuenta_inc_dec(){

    $a = func_get_arg(0);
    $b = func_get_arg(1);
     
    if(func_num_args() == 3){
        $salto = func_get_arg(2);
     }else{
        $salto = 1;
     } 

   if($a > $b){
        for($i = $a; $i >= $b; $i -= $salto ){
            echo $i;
            if($i != $b){
                echo ", ";
            }
        }
    }else{
        for($i = $a; $i <= $b; $i += $salto){
            echo $i;
            if($i != $b){
                echo ", ";
            }
        }
    }
}

function cuenta($a, $b){
    if($a > $b){
        for($i = $a; $i >= $b; $i--){
            echo $i;
            if($i != $b){
                echo ", ";
            }
        }
    }else{
        for($i = $a; $i <= $b; $i++){
            echo $i;
            if($i != $b){
                echo ", ";
            }
        }
    }
}

function calculaDescuento($precio, $descuento = 0){
    return $precio - $descuento * $precio/100;
} //Incluido en archivo "descuento.php" 

function intercambia(&$a, &$b,){
    $c = $a;
    $a = $b;
    $b = $c; 
    }
?>