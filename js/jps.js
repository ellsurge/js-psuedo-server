
const server_url = "http://localhost:2020";
class DB{
    
    mk(name, uname, pword){
        var h_name = MD5(name);
        var h_uname = MD5(uname);
        var h_pword = MD5(pword);
        var list  = $.ajax({
            url: '../db/db_list.json',
            dataType: 'json',
            type: 'get',
            catch: 'false',
            success: (data)=>{
               if(!data.row.includes(h_name)){
                if(send_request(server_url+"?mod=mkdb&name="+h_name)){
                    log("database "+name+" files created");

                }else{
                    log("could not make db")
                    // break;
                }
                if(send_request(server_url+"?mod=regdb&data="+h_name+"&uname="+h_uname+"&pword="+h_pword)){
                    log("database "+name+" registration success");

                }else{
                    log("could not register db");
                    // break;
                }
               }else{
                   log("database already exists");
                //    break;
               }

            }
            
        })

    }

    delete(name){
        var h_name = MD5(name)
        var list  = $.ajax({
            url: '../db/db_list.json',
            dataType: 'json',
            type: 'get',
            catch: 'false',
            success: (data)=>{
               if(data.row.includes(h_name)){
                if(send_request(server_url+"?mod=delldb&name="+h_name)){
                    log("database "+name+" files deleted");

                }else{
                    log("could not delete db")
                }
                if(send_request(server_url+"?mod=unregdb&data="+h_name)){
                    log("database "+name+" unregistered");

                }else{
                    log("could not unregister db");
                }

               }else{
                   log("database does not exist");
               }

            }
            
        })
    }

    table
}

class conn{
    constructor (dbname, db_uname, dbpass){
        
    }
}
