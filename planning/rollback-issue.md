# Issue: Rollback Setup Scope

## Ringkasan
Lakukan rollback terhadap bagian implementasi yang sudah melewati scope instruksi awal. Scope project saat ini hanya sebatas setup awal project dan setup database project.

## Latar Belakang
- Instruksi awal hanya meminta fondasi project backend.
- Instruksi database hanya meminta setup koneksi dan struktur database.
- Implementasi yang sudah masuk ke layer aplikasi dan fitur non-setup perlu dikembalikan agar tetap sesuai ruang lingkup pekerjaan.

## Tujuan
- Mengembalikan codebase agar tetap sesuai scope setup.
- Menyisakan hanya bagian yang relevan dengan koneksi dan setup database.
- Menghapus komponen yang sudah masuk ke area fitur aplikasi atau data yang belum diminta.

## Scope Rollback
### 1. Rollback File di `src/*`
- Hapus seluruh file di dalam `src/*` yang tidak berhubungan langsung dengan setup database.
- Pertahankan hanya struktur atau file yang memang dibutuhkan untuk memastikan database sudah terhubung.
- Jangan menambahkan fitur baru selama proses rollback.

### 2. Rollback Struktur Aplikasi Non-Setup
- Hapus komponen yang sudah masuk ke layer aplikasi seperti route, controller, service, middleware, util, atau logic lain yang belum diperlukan pada tahap setup.
- Pastikan hasil akhir tetap sederhana dan fokus pada fondasi project.

### 3. Rollback Tabel `user`
- Hapus tabel penyimpanan `user` dari setup database.
- Hapus juga referensi model, schema, atau code yang masih berkaitan dengan data `user`.
- Pastikan hanya struktur database yang benar-benar diminta yang tersisa.

## Hasil Akhir yang Diharapkan
- Folder `src/*` hanya menyisakan bagian yang diperlukan untuk setup database.
- Seluruh file non-setup sudah dibersihkan.
- Tabel `user` dan seluruh referensinya sudah dihapus.
- Struktur project kembali selaras dengan instruksi awal: setup project dan setup database saja.

## Batasan
- Jangan menambahkan fitur autentikasi, endpoint API, business logic, atau CRUD application layer terlebih dahulu. Ingat pada scope instruksi!.
- Jangan memperluas scope di luar kebutuhan rollback ini.
- Tetap gunakan pendekatan yang mudah dipahami oleh junior programmer atau AI model biaya rendah.

## Catatan
- Dokumen ini bersifat high level.
- Detail teknis penghapusan file, penyesuaian schema, dan sinkronisasi migrasi akan dikerjakan saat implementasi rollback dilakukan.
