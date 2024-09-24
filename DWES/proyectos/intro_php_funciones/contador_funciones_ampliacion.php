<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
    function cuenta(){

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

    cuenta(40,30,2);
    ?>
</body>
</html>