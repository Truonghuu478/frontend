var computerArray = [];
function createComputer() {
    var mayTinh = {
        // thuộc tính
        tenMaytinh: "",
        dungLuongRam: "",
        dungLuongOCung: "",
        giaMayTinh: "",
    }

    // lấy dữ liệu ng dùng nhập vào
    mayTinh.tenMaytinh = document.getElementById('computerName').value
    mayTinh.dungLuongRam = document.getElementById('computerRam').value * 1
    mayTinh.dungLuongOCung = document.getElementById('computerStorage').value * 1
    mayTinh.giaMayTinh = document.getElementById('computerPrice').value * 1

    console.log(mayTinh);

}
// tạo 1 mảng để lưu giá trị khi ng dùng nhập

computerArray.push(mayTinh);
console.log(computerArray);

hienThiArray();
function hienThiArray() {
    var value = document.getElementById('computerList').value;
    value.innerHTML = "";
    for (var i = 0; i < computerArray.length; i++) {
        var mayTinh = computerArray[i]
    }



}





