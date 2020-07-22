function now(){
    var dt = new Date()
    return dt.getTime();
}

function send_request(url){
    var s = document.createElement("script");
    // s.id = "sev_req";
    s.src = url;
   if(document.body.appendChild(s)){
       return true;
   }else{
       return false;
   }
}

function log(message){
    console.log(message);
}