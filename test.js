var http = require('http');
var url = require('url');
var fs = require('fs'); 


http.createServer((req, res)=>{


    var q = url.parse(req.url, true).query;
    switch (q.mod) {
        case 'regdb':
            fs.readFile('./db/db_list.json', (err, data)=>{
                var l = JSON.parse(data);
                l.row.push(q.data);
                var final = JSON.stringify(l);
                var fs = require('fs');
                fs.writeFile('./db/db_list.json', final, function (err) {
                  if (err) throw err;
                  console.log('database reg --50%');
                });
            })
            fs.readFile('./db/db_details.json', (err, data)=>{
                var l = JSON.parse(data);
                var db_arr = [q.data, q.pword, q.uname]
                l.row.push(db_arr);
                var final = JSON.stringify(l);
                var fs = require('fs');
                fs.writeFile('./db/db_details.json', final, function (err) {
                  if (err) throw err;
                  console.log('database registerd');
                });
            })
            break;

    
            case 'unregdb':
                fs.readFile('./db/db_list.json', (err, data)=>{
                    var l = JSON.parse(data);
                    var rem_index =l.row.indexOf(q.data);
                    l.row.splice(rem_index, 1);
                    var final = JSON.stringify(l);
                    var fs = require('fs');
                    fs.writeFile('./db/db_list.json', final, function (err) {
                      if (err) throw err;
                      console.log('database unregisterd ---50%');
                    });
                    fs.readFile('./db/db_details.json', (err, data)=>{
                        var l2 = JSON.parse(data);
                        l2.row.splice(rem_index, 1);
                        var final2 = JSON.stringify(l2);
                        var fs = require('fs');
                        fs.writeFile('./db/db_details.json', final2, function (err) {
                          if (err) throw err;
                          console.log('database unregisterd -100%');
                        });
                    })
                })

                break;
        case 'mkdb':
            var db_temp = '{ "'+q.name+'": [  ] }';
                    fs.writeFile('./db/'+q.name+'.json', db_temp, function (err) {
                    if (err) throw err;
                    console.log('database created');
                    });
                    break;

        case 'delldb':
                    fs.unlink('./db/'+q.name+'.json', function (err) {
                    if (err) throw err;
                    console.log('database deleted');
                    });
                    break;
            default:
                break;
    }
    res.end()
}).listen(2020)