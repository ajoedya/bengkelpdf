# Bengkel PDF

Kumpulan perkakas PDF untuk pekerjaan sehari-hari di kantor, buatan KPKNL Balikpapan. Seluruh pengolahan berjalan di peramban pengguna, jadi **berkas tidak pernah diunggah ke server mana pun**.

**Buka situsnya di [ajoedya.github.io/bengkelpdf](https://ajoedya.github.io/bengkelpdf/)**

![Beranda Bengkel PDF](dokumentasi/beranda.jpg)

## Perkakas yang tersedia

| No | Perkakas | Kegunaan |
|---|---|---|
| 01 | [Gabung dan Susun PDF](https://ajoedya.github.io/bengkelpdf/gabung) | Menggabungkan beberapa PDF, mengurutkan, memutar, dan memberi nomor halaman |
| 02 | [Pecah PDF](https://ajoedya.github.io/bengkelpdf/pecah) | Mengambil halaman tertentu atau memisahkan seluruh halaman |
| 03 | [Edit Teks](https://ajoedya.github.io/bengkelpdf/koreksi) | Mengubah teks langsung di halaman dengan gaya huruf aslinya, serta menyisipkan teks, gambar, kotak, elips, garis, dan panah |
| 04 | [Watermark](https://ajoedya.github.io/bengkelpdf/tanda-air) | Membubuhkan tulisan seperti SALINAN atau KONSEP |
| 05 | [PDF dan Gambar](https://ajoedya.github.io/bengkelpdf/gambar) | Mengubah halaman PDF menjadi JPG, atau menyusun gambar menjadi PDF |
| 06 | [PDF ke Word](https://ajoedya.github.io/bengkelpdf/word) | Mengubah PDF menjadi dokumen Word yang bisa disunting, termasuk hasil pindaian lewat OCR |
| 07 | [Penanda TTE](https://ajoedya.github.io/bengkelpdf/penanda) | Membubuhkan penanda tulisan tanda tangan elektronik |
| 08 | [Ubah Ukuran Kertas](https://ajoedya.github.io/bengkelpdf/pengubah-uk) | Menyesuaikan ukuran halaman, misalnya ke A4 atau F4 |
| 09 | [Kompres PDF](https://ajoedya.github.io/bengkelpdf/kompres) | Memperkecil ukuran berkas dengan teks tetap utuh dan bisa dicari |

![Edit Teks](dokumentasi/edit-teks.jpg)

## Privasi

Bengkel PDF adalah situs statis. Pustaka pembaca dan penulis PDF dimuat ke peramban, lalu semua pekerjaan (membaca, menyunting, mengonversi, menyimpan) dikerjakan di komputer pengguna sendiri. Tidak ada server aplikasi, tidak ada akun, dan tidak ada berkas yang dikirim keluar.

Situs hanya memanggil beberapa alamat luar untuk memuat pustaka dan huruf:

| Alamat | Untuk apa |
|---|---|
| `cdnjs.cloudflare.com` | pdf.js, membaca dan menggambar PDF |
| `unpkg.com` | pdf-lib, menulis PDF |
| `cdn.jsdelivr.net` | Tesseract.js, OCR pada PDF ke Word |
| `fonts.googleapis.com` | Huruf Public Sans |

## Tampilan

Setiap kunjungan mendapat salah satu dari enam tema secara acak, masing-masing dengan banner khas Kalimantan Timur, yaitu Pelabuhan Senja, Hutan Hujan, Mangrove, Tongkang Batu Bara, Tepian Kota, dan Kilang. Di beranda, banner menjadi latar penuh kolom kiri. Selama satu kunjungan, semua halaman memakai tema yang sama.

## Untuk pengelola

- Situs diterbitkan dengan GitHub Pages dari cabang `main`, folder akar. Setiap penggabungan ke `main` langsung tayang dalam satu sampai dua menit.
- Tidak ada langkah *build*. Setiap perkakas adalah satu berkas HTML yang berdiri sendiri, ditambah `tema.js`, `gaya.css`, dan `bersama.js` yang dipakai bersama.
- Untuk mencoba di komputer sendiri, jalankan peladen statis apa pun di folder ini, misalnya `python -m http.server`, lalu buka `http://localhost:8000`. Membuka berkas langsung lewat `file://` tidak akan berjalan karena pembatasan peramban.
- Rincian berkas, cara menambah perkakas atau tema, pemeriksaan sebelum menyebarkan, dan hal-hal yang sengaja tidak dibuat ada di [PANDUAN-PENGELOLA.md](PANDUAN-PENGELOLA.md).
