var diemVatLy = parseFloat(prompt("Nhập điểm Vật lý:"));
var diemHoaHoc = parseFloat(prompt("Nhập điểm Hóa học:"));
var diemSinhHoc = parseFloat(prompt("Nhập điểm Sinh học:"));
var tongDiem = diemVatLy + diemHoaHoc + diemSinhHoc;
var diemTrungBinh = tongDiem / 3;
console.log("Tổng: " + tongDiem);
console.log("trung bình: " + diemTrungBinh.toFixed(2));