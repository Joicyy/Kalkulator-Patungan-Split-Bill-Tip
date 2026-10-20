function hitungPatungan() {
    // ambil nilai dari input
    let tagihan = document.getElementById('totalTagihan').value;
    let tip = document.getElementById('persenTip').value;
    let orang = document.getElementById('jumlahOrang').value;

    // validasi sederhana
    if (tagihan === "" || tagihan <= 0) {
        alert("Isi total tagihan dengan benar!");
        return;
    }

    if (orang === "" || orang <= 0) {
        alert("Jumlah orang minimal 1!");
        return;
    }

    // ubah ke tipe data angka
    let totalBill = parseFloat(tagihan);
    let persenTip = parseFloat(tip) || 0; // kalo tip kosong dianggap 0
    let totalOrang = parseInt(orang);

    // hitung total tagihan + tip
    let nominalTip = totalBill * (persenTip / 100);
    let totalSemua = totalBill + nominalTip;

    // bagi rata dan bulatkan ke atas biar gak kurang bayar
    let bayarMasingMasing = Math.ceil(totalSemua / totalOrang);

    // format angka ke rupiah sederhana
    let formatRupiah = "Rp " + bayarMasingMasing.toLocaleString('id-ID');

    // tampilkan hasil ke layar
    document.getElementById('nominalPerOrang').innerText = formatRupiah;
    document.getElementById('hasilBox').style.display = 'block';
}

// jalankan fungsi kalo tombol enter ditekan
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        hitungPatungan();
    }
});