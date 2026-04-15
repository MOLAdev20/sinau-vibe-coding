# Issue: Setup Project Backend API

## Ringkasan
Buat setup awal project backend API dengan stack Node.js, Express.js, MySQL, Prisma ORM, dan JWT untuk akses endpoint sensitif.

## Tujuan
- Menyediakan fondasi project backend yang rapi dan siap dikembangkan.
- Menggunakan pola MVC agar codebase mudah dipahami dan dipelihara.
- Menyiapkan struktur `src/*` sebagai pusat source code utama.
- Menyediakan autentikasi berbasis JWT untuk endpoint yang membutuhkan proteksi.

## Stack
- Bahasa pemrograman: JavaScript
- Runtime: Node.js
- Framework: Express.js
- Database: MySQL
- ORM: Prisma ORM
- Authentication: JWT

## Ketentuan Umum
- Seluruh source code utama berada di dalam folder `src/`.
- Gunakan pola MVC secara umum.
- Gunakan naming convention `camelCase`.
- Gunakan nama variabel, file, dan function yang singkat namun tetap bermakna dalam bahasa Inggris.
- Fokus pada setup awal, belum masuk ke implementasi fitur bisnis.

## Struktur Folder yang Diinginkan
```txt
src/
  config/
  controllers/
  middlewares/
  models/
  routes/
  services/
  utils/
  app.js
  server.js
```

## Scope Pekerjaan
### 1. Setup Project
- Inisialisasi project backend berbasis Node.js.
- Menyiapkan struktur folder utama sesuai pola MVC.
- Menyiapkan file entry point untuk aplikasi dan server.

### 2. Integrasi Database
- Menyiapkan koneksi project ke MySQL.
- Menyiapkan Prisma sebagai ORM utama.
- Menyediakan fondasi konfigurasi database yang siap digunakan untuk pengembangan berikutnya.

### 3. Authentication
- Menyiapkan dasar penggunaan JWT.
- Menyediakan konsep middleware untuk endpoint yang bersifat sensitif.
- Endpoint yang wajib diproteksi nantinya mencakup operasi data seperti `get`, `insert`, `update`, dan `delete` sesuai kebutuhan aplikasi.

### 4. Routing dan Layer MVC
- Menyiapkan pemisahan tanggung jawab antara route, controller, model, dan middleware.
- Menjaga agar logic bisnis tidak bercampur dengan layer route.

## Output yang Diharapkan
- Project backend sudah terbentuk dan bisa dijalankan.
- Struktur folder mengikuti pola MVC.
- Koneksi dasar MySQL dan Prisma sudah disiapkan.
- JWT sudah tersedia sebagai fondasi proteksi endpoint.
- Codebase berada di `src/*` dan konsisten dengan naming convention yang disepakati.

## Catatan
- Dokumentasi ini hanya untuk setup awal.
- Implementasi detail fitur, validasi kompleks, dan business logic akan dikerjakan setelah fondasi project selesai.
- Prioritaskan pendekatan yang sederhana, bersih, dan mudah dipahami oleh junior programmer atau AI model biaya rendah.
