/* ============================================================
   Tema Bengkel PDF
   Berkas kecil ini dimuat di <head> setiap halaman, SEBELUM gaya.css, supaya
   tema sudah terpasang saat halaman pertama kali digambar (tidak berkedip
   dari tema bawaan).

   Tema dipilih otomatis secara acak setiap kali situs dikunjungi. Selama
   kunjungan itu (satu tab peramban), semua halaman memakai tema yang sama,
   dan kunjungan berikutnya diusahakan mendapat banner yang berbeda.

   Warna dan gambar tiap tema ada di gaya.css, bagian "Tema".
   Menambah tema: unggah bannernya, tambahkan satu baris di DAFTAR, lalu buat
   blok :root[data-tema="id-nya"] di gaya.css. Tema baru langsung ikut diundi.
   ============================================================ */
(function () {
  "use strict";

  var KUNCI_SESI = "bengkel-tema-sesi";        // tema kunjungan yang sedang berjalan
  var KUNCI_TERAKHIR = "bengkel-tema-terakhir"; // tema kunjungan sebelumnya
  var BAWAAN = "pelabuhan";

  // gambar: uraian banner untuk pembaca layar.
  var DAFTAR = [
    { id: "pelabuhan", nama: "Pelabuhan Senja",
      gambar: "Pemandangan teluk saat matahari terbenam dengan perbukitan, gedung kota, dermaga, kilang, dan kapal" },
    { id: "hutan", nama: "Hutan Hujan",
      gambar: "Hutan hujan berkabut di tepi sungai saat matahari terbit, dengan orang utan di dahan pohon" },
    { id: "mangrove", nama: "Mangrove",
      gambar: "Jembatan kayu dan pondok di hutan mangrove saat senja, dengan bekantan di dahan dan kilang di kejauhan" }
  ];

  function cari(id) {
    for (var i = 0; i < DAFTAR.length; i++) if (DAFTAR[i].id === id) return DAFTAR[i];
    return null;
  }

  // Penyimpanan bisa ditolak (mode privat, kuki diblokir); tema tetap jalan.
  function baca(tempat, kunci) {
    try { return window[tempat].getItem(kunci); } catch (e) { return null; }
  }
  function tulis(tempat, kunci, nilai) {
    try { window[tempat].setItem(kunci, nilai); } catch (e) { /* abaikan */ }
  }

  function undi() {
    var terakhir = baca("localStorage", KUNCI_TERAKHIR);
    var calon = DAFTAR.filter(function (t) { return t.id !== terakhir; });
    if (!calon.length) calon = DAFTAR;
    return calon[Math.floor(Math.random() * calon.length)].id;
  }

  // Memasang tema pada <html>. Tema bawaan tidak memakai atribut sama sekali.
  function pasang(id) {
    var tema = cari(id) || cari(BAWAAN);
    var akar = document.documentElement;
    if (tema.id === BAWAAN) akar.removeAttribute("data-tema");
    else akar.setAttribute("data-tema", tema.id);
    // Uraian gambar banner di beranda ikut berganti.
    var gambar = document.querySelector("[data-banner-tema]");
    if (gambar) gambar.setAttribute("aria-label", tema.gambar);
    return tema;
  }

  var id = baca("sessionStorage", KUNCI_SESI);
  if (!cari(id)) {
    id = undi();
    tulis("sessionStorage", KUNCI_SESI, id);
    tulis("localStorage", KUNCI_TERAKHIR, id);
  }
  var kini = pasang(id);

  window.Tema = {
    daftar: DAFTAR,
    kini: function () { return kini.id; },
    // Dipanggil sekali setelah halaman selesai dimuat, agar uraian gambar ikut terpasang.
    segarkan: function () { kini = pasang(kini.id); }
  };
})();
