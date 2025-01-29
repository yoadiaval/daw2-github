function ajaxCall(method, url, data){
 return new Promise((resolve,reject)=>{
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.onload=()=>{
        if(xhr.status ==200 && xhr.readyState == 4){

        }else{
            
        }
    } 
 });   

}