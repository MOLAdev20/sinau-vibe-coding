# Issue: Setup Database Project

## Ringkasan
Menyiapkan database project backend dengan nama `sinauvibecoding` dan tabel utama `product` sebagai fondasi data awal aplikasi.

## Tujuan
- Menyediakan struktur database awal yang konsisten untuk proses development.
- Menjadi acuan implementasi database oleh junior programmer atau AI model biaya rendah.
- Menjaga desain database tetap sederhana, jelas, dan mudah dikembangkan.

## Scope Setup
### 1. Setup Database
- Buat database baru dengan nama `sinauvibecoding`.
- Pastikan database siap dipakai oleh backend API project ini.

### 2. Setup Tabel `product`
- Buat tabel `product` sebagai tabel utama untuk data produk.
- Gunakan struktur kolom sesuai kebutuhan berikut:
  - `id` sebagai primary key, auto increment, dan unique.
  - `title` wajib diisi.
  - `price` wajib diisi dengan default `0`.
  - `stock` wajib diisi.
  - `description` bersifat opsional (nullable).
  - `created_at` default ke current timestamp.
  - `updated_at` default ke current timestamp.

## Spesifikasi Data (High Level)
- Nama database: `sinauvibecoding`
- Tabel: `product`
- Tipe data utama:
  - `id`: `int(11)`
  - `title`: `varchar(255)`
  - `price`: `decimal`
  - `stock`: `int`
  - `description`: `text`
  - `created_at`: `timestamp`
  - `updated_at`: `timestamp`

## Kriteria Selesai
- Database `sinauvibecoding` sudah tersedia.
- Tabel `product` sudah tersedia sesuai struktur yang disepakati.
- Constraint penting (`PK`, `auto increment`, `not null`, `default value`) sudah diterapkan.
- Siap dilanjutkan ke tahap integrasi ORM dan migrasi pada backend.

## Catatan
- Dokumen ini hanya untuk perencanaan setup database tahap awal.
- Detail implementasi teknis (script SQL rinci, migrasi, optimasi indeks lanjutan) dibahas pada tahap implementasi.
