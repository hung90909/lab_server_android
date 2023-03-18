var http = require('http');
var fs = require('fs');
var untils = require('./xuli.js');
var sv = require('./student.js');
http.createServer(function (req, res) {
  fs.readFile('myda.json', function (err, data) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // var nv1 = new untils.nhavien("Nguyen van hung", "nv3421");
    var sv1 = new sv.Student("Nguyen Van Hung", "PH25605");
    // var arrNV = [];
    var arrSV = [];
    arrSV.push(sv1);
    arrSV.push(new sv.Student("Nguyen Van Hung", "PH25605"));
    arrSV.push(new sv.Student("Nguyen Van  Quan", "PH25605"));
    arrSV.push(new sv.Student("Nguyen Van Lam", "PH25605"));
    for (var i = 0; i < arrSV.length; i++) {
      var sv = arrSV.at(i);
      res.write(sv.getInfor() + "\n");
    }
    // arrNV.push(nv1);
    // arrNV.push(new untils.nhavien("Bui hon quan", "nv334"));
    // arrNV.push(new untils.nhavien("Bui hon quan", "nv334"));
    // arrNV.push(new untils.nhavien("Bui hon quan", "nv334"));
    // for (var i = 0; i < arrNV.length; i++) {
    //   var nv = arrNV.at(i);
    //   res.write(nv.getInfor() + "\n");
    // }
    // arr2 = arrNV.filter((nv) => {
    //   return (nv.ten != "Nguyen van hung");
    // })
  
    // res.write("lis su khi xoa \n");
    // arr2.forEach((nv) => {
    //   res.write(nv.getInfor() + "\n");
    // })
    // res.write(nv1.getInfor());

    // res.write(sv1.getInfor());
    return res.end();
  });
}).listen(8000);