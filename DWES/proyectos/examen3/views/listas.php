<?php
if($matriculas !== []){
    foreach ($matriculas as $matricula) { ?>
       <li>

       <?php 
        echo $matricula['nia'] ." - " . $matricula['nombre']." ". $matricula['apellidos'] ." - ".$matricula['asignatura'] . " (". $matricula['anyo'].")" ;
        ?>
        <button class="eliminar-matricula" <?php echo "onclick=eliminarMatricula(".$matricula['codigo'].")" ?> >Eliminar</button>
       </li>
    <?php }
}else{ ?>
        <li>No hay matrículas que mostrar</li>
<?php }

?>
