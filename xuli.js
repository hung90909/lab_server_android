exports.myDateTime = function () {
  return Date();
};

exports.tinhTong = function (a, b) {
  let tong = a + b;
  return tong;
};
exports.showinfor = function (mess) {
  if (typeof mess == 'string' || mess instanceof String) {
    return "Thong tin in ra la: " + mess.toUpperCase();
  }
  else {
    return "khong co thong tin in ra";
  }
}
exports.nhavien = function (ten, manv) { //object constructor 
  this.ten = ten;
  this.manv = manv;

  this.getInfor = function (){
    return `${this.ten} - ${this.manv} ${this.getLuong()} \n`;
  }
  this.getLuong = function () {
   return 9 + Math.floor( Math.random() * 10);
  }
}