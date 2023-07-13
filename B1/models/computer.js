var computerArray = [];

function createComputer() {
    var mayTinh = {
        // các thuộc tính của đối tượng máy tính
        tenMaytinh: "",
        dungLuongRam: "",
        dungLuongOCung: "",
        giaMayTinh: "",
    };

    // lấy dữ liệu người dùng nhập vào
    mayTinh.tenMaytinh = document.getElementById('computerName').value;
    mayTinh.dungLuongRam = document.getElementById('computerRam').value * 1;
    mayTinh.dungLuongOCung = document.getElementById('computerStorage').value * 1;
    mayTinh.giaMayTinh = document.getElementById('computerPrice').value * 1;

    // thêm đối tượng vào mảng
    computerArray.push(mayTinh);
    console.log(computerArray);

    // hiển thị danh sách máy tính
    hienThiArray();
}

function hienThiArray() {
    var value = document.getElementById('computerList');
    var content = ""; // khởi tạo nội dung HTML là một chuỗi rỗng
    for (var i = 0; i < computerArray.length; i++) {
        var mayTinh = computerArray[i];
        // thêm nội dung HTML cho một hàng vào biến content
        content += `
            <tr>
                <td>${i + 1}</td>
                <td>${mayTinh.tenMaytinh}</td>
                <td>${mayTinh.dungLuongRam} </td>
                <td>${mayTinh.dungLuongOCung} </td>
                <td>${mayTinh.giaMayTinh.toLocaleString()} VND</td>
            </tr>
        `;
    }
    value.innerHTML = content; // gán nội dung HTML cho phần tử thân bảng
}