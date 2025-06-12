# 💻 Pendidikan Ilmu Komputer

Sebuah platform edukasi Ilmu Komputer interaktif yang dirancang untuk menyediakan materi pembelajaran, kursus online, dan artikel terkini seputar dunia teknologi. Dilengkapi dengan desain modern, animasi visual, dan panel otentikasi.

## ✨ Fitur Unggulan

*   **Antarmuka Pengguna Modern & Interaktif:** Dibuat dengan Tailwind CSS dan efek gradien yang menarik, serta animasi `reveal-on-scroll` untuk pengalaman pengguna yang dinamis.
*   **Desain Responsif:** Tampilan yang optimal di berbagai perangkat, dari desktop hingga mobile, didukung dengan menu burger yang animasi.
*   **Sistem Autentikasi Sederhana:** Dilengkapi panel login dan registrasi sebagai gerbang masuk ke konten utama website.
    *   **Login Default:**
        *   **Username:** `user`
        *   **Password:** `user123`
    *   *(Catatan: Autentikasi ini bersifat **client-side saja** dan **TIDAK AMAN** untuk lingkungan produksi. Hanya untuk tujuan demo fungsionalitas.)*
*   **Transisi Login/Registrasi yang Menarik:** Panel otentikasi dilengkapi dengan gradien latar belakang yang hidup, efek bayangan yang halus, ikon input field, dan animasi transisi antara panel login dan registrasi.
*   **Struktur Kode Modular:** Kode dibagi ke dalam file-file terpisah (HTML parsial, CSS, JavaScript) untuk keterbacaan, pemeliharaan, dan skalabilitas yang lebih baik.
*   **Pemuatan Konten Dinamis:** Setelah berhasil login, konten utama website (navbar, setiap bagian, dan footer) dimuat secara dinamis ke halaman, memastikan pengalaman loading yang cepat pada halaman login.
*   **Materi Pembelajaran Komprehensif:** Menampilkan beragam topik ilmu komputer seperti Pemrograman Dasar, Struktur Data & Algoritma, Jaringan Komputer, Sistem Operasi, Keamanan Siber, dan Kecerdasan Buatan.
*   **Kursus Online Interaktif:** Gambaran kursus dengan indikator progress dan tautan ke video pembelajaran eksternal.
*   **Bagian Blog:** Berisi artikel tentang tips belajar pemrograman, tren teknologi, dan persiapan karir.
*   **Bagian Kontak:** Formulir kontak dan informasi detail kontak.

## 🚀 Teknologi yang Digunakan

*   **HTML5:** Struktur dasar halaman web.
*   **CSS3:** Penataan gaya dan animasi.
*   **JavaScript:** Interaktivitas halaman, logika autentikasi, dan pemuatan konten dinamis.
*   **Tailwind CSS:** Framework CSS utility-first untuk mempercepat styling dan memastikan desain konsisten.
*   **Font Awesome:** Menyediakan berbagai ikon untuk mempercantik antarmuka.

## 🏁 Cara Memulai

Untuk menjalankan proyek ini di lingkungan lokal Anda, ikuti langkah-langkah berikut:

1.  **Struktur Folder:** Pastikan struktur folder proyek Anda sama dengan berikut:
    ```
    .
    ├── index.html
    ├── css/
    │   └── style.css
    ├── js/
    │   ├── auth.js
    │   └── main.js
    └── templates/
        ├── navbar.html
        ├── footer.html
        └── sections/
            ├── home.html
            ├── about.html
            ├── materials.html
            ├── courses.html
            ├── blog.html
            └── contact.html
    ```
2.  **Clone Repository (Opsional, jika ini ada di Git):**
    ```bash
    git clone <URL_REPOSITORI_ANDA>
    cd <nama_folder_proyek>
    ```
    Atau cukup buat file-file di atas secara manual jika ini belum ada di repositori Git.
3.  **Buka di Browser:** Buka file `index.html` langsung di browser web favorit Anda.
    `file:///path/to/your/project/index.html`

## 🕹️ Penggunaan

1.  **Halaman Autentikasi:** Saat Anda membuka `index.html`, Anda akan disambut oleh panel login.
    *   Masukkan **Username:** `user` dan **Password:** `user123` untuk login.
    *   Anda juga dapat mengklik "Daftar sekarang" untuk beralih ke panel registrasi (fitur registrasi ini hanya simulasi).
2.  **Konten Website:** Setelah berhasil login, panel autentikasi akan hilang, dan konten utama website akan dimuat dan dianimasikan secara halus.
3.  **Navigasi:** Gunakan bilah navigasi di atas untuk beralih antara bagian-bagian website (Beranda, Tentang Kami, Materi Pembelajaran, dll.) dengan smooth scroll.
4.  **Logout:** Tombol "Logout" tersedia di navbar (versi desktop dan mobile) untuk kembali ke halaman login.

## ⚠️ Catatan Penting

*   **Autentikasi Client-Side:** Fitur login dan registrasi ini sepenuhnya diimplementasikan di sisi klien (menggunakan JavaScript sederhana). Ini **tidak aman** untuk aplikasi nyata karena kredensial tidak divalidasi oleh server dan tidak ada manajemen sesi yang sebenarnya. Dalam lingkungan produksi, Anda harus selalu mengimplementasikan backend untuk menangani otentikasi dengan aman.
*   **Pemuatan Dinamis:** Konten utama website dimuat menggunakan JavaScript `fetch` API. Pastikan Anda menjalankan ini dari server lokal (misalnya, dengan VS Code Live Server Extension) jika ada masalah dengan pembatasan CORS (Cross-Origin Resource Sharing) saat membuka langsung dari file sistem. Namun, browser modern seringkali mendukung `file://` untuk `fetch` antar file lokal.

## 🤝 Kontribusi

Jika Anda memiliki ide untuk meningkatkan proyek ini, Anda sangat dipersilakan untuk berkontribusi. Silakan fork repositori, buat branch baru, dan ajukan pull request dengan deskripsi perubahan Anda.

## 📄 Lisensi

Proyek ini dilisensikan di bawah [Sebutkan Lisensi Anda, misal MIT License] - lihat file [LICENSE.md (jika ada)] untuk detail lebih lanjut.

---

Selamat menjelajahi "Pendidikan Ilmu Komputer"!