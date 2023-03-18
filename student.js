module.exports = class Student {
    contructor(ten, masv){
        this.ten = ten;
        this.masv = masv;
    }
    getInfor (){
        return `${this.ten} ${this.masv} - ${this.getDiemTB()}`;
    }
    getDiemTB (){
        // ramdom diem sinh vien tu 5 den 10 , dang so thuc , 1 chu so sau dau phay;
        return (Math.floor(Math.random() * 51) + 50) / 10;
    }
}