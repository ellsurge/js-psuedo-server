
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
        this.dbn = dbname;
        this.dbu = db_uname;
        this.dbp = dbpass;
        this.hdbn = MD5(dbname);
        this.hdbu = MD5(db_uname);
        this.hdbp = MD5(dbpass);

    }
    create_table(name, fields){

        var table_arr  = $.ajax({
            url: '../db/'+this.hdbn+'.json',
            dataType: 'json',
            type: 'get',
            catch: 'false',
            success: (data)=>{
                // var table = JSON.prase(data);
                var rn = this.hdbn
                console.log(rn);
                // var m = "name";
                console.log(data.Data);

                function chk(m){
                    return m.table_name == name;
                }
                if (data.Data.findIndex(chk) <0 ){
                     var index  = data.Data.findIndex(chk);
                    // log(fields);
                    if(send_request(server_url+"?mod=mktbl&name="+name+"&data="+fields+"&dbname="+this.hdbn)){
                                log("table "+name+" added succesfully");
            
                            }else{
                                log("could not make db")
                                // break;
                            }

                }else{
                    log("table aready exists")
                };

            //    if(!data.row.includes(h_name)){
            //     if(send_request(server_url+"?mod=mkdb&name="+h_name)){
            //         log("database "+name+" files created");

            //     }else{
            //         log("could not make db")
            //         // break;
            //     }
            //     if(send_request(server_url+"?mod=regdb&data="+h_name+"&uname="+h_uname+"&pword="+h_pword)){
            //         log("database "+name+" registration success");

            //     }else{
            //         log("could not register db");
            //         // break;
            //     }
            //    }else{
            //        log("database already exists");
            //     //    break;
            //    }

            }
            
        })

    }
}
