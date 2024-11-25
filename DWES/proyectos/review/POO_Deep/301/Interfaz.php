<?php
interface JSerializable{
public function toJson():string;
public function toSerialize():string;
}
?>