# Issue: Setup Get All And Get Product By Id Endpoint

## Ringkasan
Lakukan setup endpoint untuk mengambil seluruh data produk dan mengambil detail produk berdasarkan `id` dengan pola arsitektur MVC dan format response yang konsisten.

## Tujuan
- Menyediakan endpoint untuk mengambil semua data produk.
- Menyediakan endpoint untuk mengambil data produk berdasarkan `id`.
- Menerapkan pemisahan tanggung jawab sesuai pola MVC.
- Menjaga implementasi tetap sesuai instruksi dan tidak melewati scope.

## Scope Pekerjaan
### 1. Gunakan Pola MVC
- Implementasi harus mengikuti pola MVC.
- Tempatkan logic sesuai direktori yang sudah disediakan:
  - `controllers`
  - `models`
  - `routes`
- Pastikan tanggung jawab setiap layer tetap terpisah dengan jelas.

### 2. Setup Endpoint Get All
- Buat endpoint `GET /product`.
- Endpoint ini hanya fokus untuk mengambil seluruh data produk.

### 3. Setup Endpoint Get By Id
- Buat endpoint `GET /product/{id}`.
- Endpoint ini hanya fokus untuk mengambil data produk berdasarkan `id`.

### 4. Setup Validasi
- Jika tidak ada seluruh data pada endpoint get all, maka response harus `404 not found`.
- Jika tidak ada data produk berdasarkan `id` pada endpoint get by id, maka response harus `404 not found`.
- Pastikan validasi dilakukan sebelum response sukses dikirim.

### 5. Setup Response Success
- Jika data berhasil diambil, gunakan response sukses dengan struktur:

```json
{
  "status": "success",
  "message": "Product successfully fetched!",
  "data": "data produk"
}
```

### 6. Setup Response Not Found
- Jika data tidak ditemukan, gunakan response:

```json
{
  "status": "not-found",
  "message": "product not found"
}
```

### 7. Setup Response Internal Error
- Jika terjadi masalah server atau database, gunakan response internal server error yang konsisten dan relevan dengan kondisi yang terjadi.

## Hasil Akhir yang Diharapkan
- Endpoint `GET /product` tersedia untuk mengambil seluruh produk.
- Endpoint `GET /product/{id}` tersedia untuk mengambil detail produk berdasarkan `id`.
- Struktur implementasi mengikuti pola MVC.
- Response sukses, not found, dan internal error memiliki format yang konsisten.
- Implementasi tetap sederhana, fokus, dan sesuai scope.

## Batasan Scope
- Kerjakan hanya sesuai instruksi endpoint get all dan get by id produk.
- Jangan menambahkan autentikasi, pagination, filtering, insert, update, delete, atau fitur lain di luar scope ini.
- Jangan memperluas arsitektur di luar kebutuhan endpoint get produk.

## Catatan
- Dokumen ini bersifat high level.
- Detail teknis query data, validasi `id`, penanganan data kosong, dan integrasi database akan dikerjakan pada tahap implementasi.
- Prioritaskan implementasi yang mudah dipahami oleh junior programmer atau AI model biaya rendah.
