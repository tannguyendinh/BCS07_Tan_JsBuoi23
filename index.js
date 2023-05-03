console.log("test thôi")


//! bt1 tính lương 

function tinhLuong (){
    var luongMotNgay = document.getElementById("luongMotNgay").value *1;

    var soNgayLam= document.getElementById("soNgayLam").value *1;

    console.log("Lương Một Ngày", luongMotNgay );
    console.log("Số Ngày Làm", soNgayLam );

    var tongLuong = luongMotNgay * soNgayLam;
    console.log(tongLuong)

    var tienLuongVnd = tongLuong.toLocaleString('vn-VN',{ style: 'currency', currency: 'VND' })

    document.querySelector(".card-footer").innerHTML = "Tiền Lương Của Bạn Tháng Này Là: " + tienLuongVnd;
}

document.querySelector(".btn-success").onclick = tinhLuong;


//! bt2 

function giaTriTrungBinh (){
    var num1 =document.getElementById("num1").value *1;
    var num2 =document.getElementById("num2").value *1;
    var num3 =document.getElementById("num3").value *1;
    var num4 =document.getElementById("num4").value *1;
    var num5 =document.getElementById("num5").value *1;

    var giaTriTrungBinh = (num1 + num2 + num3 + num4 + num5) / 5;

    document.querySelector (".gttb").innerHTML = "Giá Trị Trung Bình Của 5 Số Là: " + giaTriTrungBinh;
}

document.querySelector(".tinh_tb").onclick = giaTriTrungBinh;

//! BT3 ĐỔi Tiền Đô

const giaDoLa = 23500;

function tinhTienDoLa (){
    var soTienMuonDoi = document.getElementById("soTienMuonDoi").value *1;

    console.log("Số Tiền Muốn Đổi", soTienMuonDoi );
    

    var soTienDaDoi = soTienMuonDoi * giaDoLa;

    var quyDoiNgoaiTe = soTienDaDoi.toLocaleString('vn-VN',{ style: 'currency', currency: 'VND' })

    
    
    document.querySelector(".doitiendo").innerHTML = "Số Tiền Bạn Đổi Được Là " + quyDoiNgoaiTe;

}

document.querySelector(".btn3").onclick = tinhTienDoLa;


//! BÀI TẬP 4 Tính diện tích, chu vi hình chữ nhật 

function dienTichChuVi (){
    var chieuDai = document.getElementById("chieuDai").value *1;
    var chieuRong = document.getElementById("chieuRong").value *1;

    console.log("Chiều Dài", chieuDai);
    console.log("chiều Rộng", chieuRong);

    var dienTich = chieuDai * chieuRong ;
    // console.log(chieuDai * chieuRong);
    var chuVi = (chieuDai + chieuRong) * 2;

    document.querySelector(".dientich_chuvi").innerHTML = "Diện Tích Là: "  + dienTich + " ; Chu Vi Là: " + chuVi ;
}

document.querySelector(".nutdairong").onclick = dienTichChuVi;


//! bài tập 5 Tính Tổng Hai Kí Số

function tong () {
    // Nhập số có hai chữ số từ người dùng
    var haiKySo = document.getElementById("haiKySo").value *1;

    // Tách lấy chữ số hàng đơn vị và chữ số hàng chục
    var donVi = haiKySo % 10;
    console.log("dv", donVi);
    var hangChuc = Math.floor (haiKySo / 10);
    console.log("hang chuc", hangChuc);

    // Tính tổng của hai chữ số
    var tongKySo = donVi + hangChuc;

    // In kết quả ra màn hình
    document.getElementById("kyso").innerHTML ="Tổng 2 Kí Số của " + haiKySo + " là: " + tongKySo ;
}

document.querySelector(".nutxong").onclick = tong;



