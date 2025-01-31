
<tr>
    <?php 
     foreach ($libros as $libro) { ?>
        <tr>
        <td><?php echo $libro['id']?></td>    
        <td><?php echo $libro['titulo']?></td>    
        <td><?php echo $libro['autor']?></td>    
        <td><?php echo $libro['genero']?></td>  
        <td><a <?php echo "onclick=eliminar({$libro['id']})"?>>eliminar</a></td>  
        </tr>
    <?php }
    ?>

</tr>
