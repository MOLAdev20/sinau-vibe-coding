# Issue: Setup Authorization Middleware

## Ringkasan
Lakukan setup middleware authorization untuk melindungi seluruh endpoint `/product/*` menggunakan token JWT melalui header `Authorization: Bearer <token>`.

## Tujuan
- Menambahkan lapisan proteksi untuk seluruh resource produk.
- Memastikan hanya request yang membawa token valid yang dapat mengakses endpoint `/product/*`.
- Menjaga implementasi tetap sederhana, jelas, dan sesuai scope.

## Scope Pekerjaan
### 1. Setup Middleware Authorization
- Buat middleware authorization khusus untuk proteksi endpoint produk.
- Middleware ini harus diterapkan ke seluruh endpoint dengan prefix `/product/*`.
- Middleware hanya fokus pada validasi akses, bukan business logic lain.

### 2. Gunakan JWT
- Gunakan JWT sebagai mekanisme token authorization.
- Token dikirim melalui header:

```txt
Authorization: Bearer <token>
```

- Middleware harus membaca dan memvalidasi token dari format tersebut.

### 3. Response Authorized
- Jika token valid dan akses diizinkan, request diteruskan ke proses berikutnya.
- Dalam konteks high level, hasilnya adalah:

```json
{
  "next()": true
}
```

### 4. Response Unauthorized
- Jika token tidak ada, format header salah, atau token tidak valid, gunakan response unauthorized:

```json
{
  "status": "unauthorized",
  "message": "you don't have access to resources"
}
```

## Hasil Akhir yang Diharapkan
- Seluruh endpoint `/product/*` sudah terlindungi oleh middleware authorization.
- Request dengan token JWT valid dapat diteruskan.
- Request tanpa token atau token tidak valid akan ditolak dengan response unauthorized yang konsisten.

## Batasan Scope
- Kerjakan hanya sesuai instruksi proteksi authorization middleware untuk `/product/*`.
- Jangan menambahkan login, refresh token, role management, atau fitur autentikasi lain di luar scope ini.
- Jangan memperluas implementasi di luar kebutuhan middleware authorization.

## Catatan
- Dokumen ini bersifat high level.
- Detail teknis pembuatan token, verifikasi token, secret key, dan integrasi middleware akan dikerjakan pada tahap implementasi.
- Prioritaskan implementasi yang mudah dipahami oleh junior programmer atau AI model biaya rendah.
