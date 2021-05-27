
/**
 * Bài 1:
 * Sơ đồ 3 khối  
 * Bước 1: Input
 * luongMotNgay, soNgayLam
 * Bước 2: Handle
 * Tạo biến luongMotNgay, soNgayLamViec, luongThucNhan
 * Tính luongThucNhan
 * Bước 3: Output
 * Xuất tiền lương thực nhận
*/
console.log("============================BÀI 1============================");
var luongMotNgay = 100000;
var soNgayLamViec = 23;
var luongThucNhan;

luongThucNhan = luongMotNgay * soNgayLamViec;

console.log(luongThucNhan + " VNĐ");
/**
 * Bài 2: Tính giá trị trung bình
 * B1: Input
 * Giá trị của 5 số thực
 * B2: Handle
 * Tạo biến a, b, c, d, e, giaTriTrungBinh
 * Tính giá trị trung bình: giaTriTrungBinh = (a+b+c+d+e)/5
 * B3: Output
 * Xuất giá trị trung bình
 */
console.log("============================BÀI 2============================");

var a = 1;
var b = 2;
var c = 3;
var d = 4;
var e = 5;
var giaTriTrungBinh;

giaTriTrungBinh = (a + b + c + d + e) / 5;

console.log('Giá trị trung bình: ', giaTriTrungBinh);
/**
 * Bài 3: Quy đổi tiền
 * B1: Input
 * giaTriUSD, soTienQuyDoi
 * B2: Handle
 * Tạo biến giaTriUSD, soTienCanQuyDoi, soTienSauQuyDoi
 * Tính số tiền cần quy đổi: soTienSauQuyDoi = soTienCanQuyDoi * giaTriUSD;
 * B3: Output
 * Số tiền sau quy đổi
 */
console.log("============================BÀI 3============================");

var giaTriUSD = 23500;
var soTienCanQuyDoi = 500000;
var soTienSauQuyDoi;

soTienSauQuyDoi = soTienCanQuyDoi * giaTriUSD;

console.log('Giá trị sau quy đổi: ', soTienSauQuyDoi + ' VNĐ');

/**
 * Bài 4: Tính diện tích, chu vi hình chữ nhật
 * B1: Input
 * chieuDai, chieuRong;
 * B2: Handle
 * Tạo biến chieuDai, chieuRong, dienTich, chuVi
 * Tính diện tích: dienTich = chieuDai * chieuRong;
 * Tính chu vi: dienTich = (chieuDai + chieuRong) * 2;
 * B3: Output
 * Diện tích
 * Chu vi
 */
console.log("============================BÀI 4============================");
var chieuDai = 4;
var chieuRong = 5;
var dienTich;
var chuVi;

dienTich = chieuDai * chieuRong;
chuVi = (chieuDai + chieuRong) * 2;

console.log('Diện tích hình chữ nhật là: ', dienTich);
console.log('Chu vi hình chữ nhật là: ', chuVi);

/**
 * Bài 5: Tính tổng 2 ký số
 * B1: Input
 * haiChuSo;
 * B2: Handle
 * Tạo biến haiChuSo, soHangDV, soHangChuc, ketQua;
 * Tính số hàng đơn vị: soHangDV = haiChuSo%10;
 * Tính số hàng chục: soHangChuc = haiChuSo/10;
 * B3: Output
 * Kết quả tổng hai số
 */
console.log("============================BÀI 5============================");
var haiChuSo = 22;
var soHangDV = haiChuSo % 10;
var soHangChuc = haiChuSo / 10;
var ketQua;

ketQua = parseInt(soHangChuc) + Math.abs(soHangDV);

console.log('Kết quả hai số là: ', ketQua);
