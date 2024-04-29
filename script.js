document.addEventListener("DOMContentLoaded", function() {
    // Lakukan permintaan AJAX untuk mengambil data JSON
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Parse JSON yang diterima
            var data = JSON.parse(this.responseText);

            // Tampilkan informasi toko
            document.getElementById("nama-toko").textContent = data.toko;
            document.getElementById("pengarang").textContent = data.pengarang;
            document.getElementById("alamat").textContent = data.alamat;

            // Tampilkan daftar buku dalam tabel
            var daftarBuku = document.getElementById("daftar-buku");
            data.koleksi_buku.forEach(function(buku) {
                var row = daftarBuku.insertRow();
                row.insertCell(0).textContent = buku.judul;
                row.insertCell(1).textContent = buku.kategori;
                row.insertCell(2).textContent = buku.harga;
            });
        }
    };
    xhr.open("GET", "toko_buku.json", true);
    xhr.send();
});
