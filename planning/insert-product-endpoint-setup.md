# Issue: Setup Insert Product Endpoint

## Ringkasan
Lakukan setup endpoint untuk menambahkan data produk baru melalui `POST /product/` dengan validasi request dan format response yang konsisten.

## Tujuan
- Menyediakan endpoint input produk yang sederhana dan jelas.
- Memastikan request yang masuk tervalidasi sebelum diproses.
- Menjaga response API konsisten untuk kondisi sukses maupun error.
- Menjaga implementasi tetap sesuai instruksi dan tidak melewati scope.

## Scope Pekerjaan
### 1. Setup Endpoint
- Buat endpoint `POST /product/`.
- Endpoint ini hanya fokus untuk menerima dan menyimpan data produk baru.
- Jangan menambahkan fitur lain di luar kebutuhan endpoint input produk.

### 2. Setup Request Body
- Gunakan request body dengan struktur utama:

```json
{
  "title": "Laptop Macbook Pro M1",
  "price": 120000.00,
  "stock": 12
}
```

- Field `description` dapat disiapkan sebagai field opsional.

### 3. Setup Validasi Request
- Terapkan validasi request dengan aturan berikut:
  - `title`: string, minimum 3 karakter, maksimum 255 karakter, wajib diisi
  - `price`: numerik, wajib diisi
  - `stock`: numerik, wajib diisi
  - `description`: opsional
- Jika validasi gagal, request tidak boleh diteruskan ke proses penyimpanan data.

### 4. Setup Response Success
- Jika data berhasil ditambahkan, gunakan response sukses dengan struktur:

```json
{
  "status": "success",
  "message": "New product successfully added!",
  "data": "data yang diinput"
}
```

### 5. Setup Response Error
- Jika terjadi error validasi, error server, error database, atau gangguan jaringan, gunakan struktur response error yang konsisten:

```json
{
  "status": "error",
  "message": "error request validation | internal server error | network error"
}
```

- Gunakan penanda error yang relevan seperti:
  - `validation-error`
  - `internal-error`
  - `network-error`

## Hasil Akhir yang Diharapkan
- Endpoint `POST /product/` tersedia dan dapat digunakan untuk input produk.
- Validasi request berjalan sesuai aturan yang ditentukan.
- Response sukses dan error memiliki format yang konsisten.
- Implementasi tetap sederhana, fokus, dan sesuai scope.

## Batasan Scope
- Kerjakan hanya sesuai instruksi endpoint input produk.
- Jangan menambahkan autentikasi, pagination, filtering, update, delete, atau fitur lain di luar scope ini.
- Jangan memperluas arsitektur atau business logic di luar kebutuhan endpoint insert produk.

## Catatan
- Dokumen ini bersifat high level.
- Detail teknis validasi, handler, service, dan integrasi database akan dikerjakan pada tahap implementasi.
- Prioritaskan implementasi yang mudah dipahami oleh junior programmer atau AI model biaya rendah.
