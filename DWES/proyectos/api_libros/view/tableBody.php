
<tr>
    <?php 
     foreach ($libros as $libro) { ?>
        <tr>
        <td colspan="4"><?php echo $libro['autor']?></td>    
        </tr>
    <?php }
    ?>
    <td colspan="4">Hay datos para mostrar</td>
</tr>
