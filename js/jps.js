
class DB{
    mk(name){
        var h_name = MD5(name)
        var list  = $.ajax({
            url: '../db/db_list.json',
            dataType: 'json',
            type: 'get',
            catch: 'false',
            success: (data)=>{
               if(!data.row.includes(h_name)){
                //    console.log("worked")
                
               }

            }
            
        })
    }
}