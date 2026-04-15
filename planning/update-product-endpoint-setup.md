# Issue: Setup Update Product Endpoint

## Ringkasan
Lakukan setup endpoint untuk mengubah data produk berdasarkan `id` melalui `PUT /product/{id}` dengan pola arsitektur MVC dan format response yang konsisten.

## Tujuan
- Menyediakan endpoint update produk yang jelas dan mudah dipahami.
- Menerapkan pemisahan tanggung jawab sesuai pola MVC.
- Memastikan request tervalidasi sebelum proses update dijalankan.
- Menjaga implementasi tetap sesuai instruksi dan tidak melewati scope.

## Scope Pekerjaan
### 1. Gunakan Pola MVC
- Implementasi harus mengikuti pola MVC.
- Tempatkan logic sesuai direktori yang sudah disediakan:
  - `controllers`
  - `models`
  - `routes`
- Pastikan tanggung jawab setiap layer tetap terpisah dengan jelas.

### 2. Setup Endpoint
- Buat endpoint `PUT /product/{id}`.
- Endpoint ini hanya fokus untuk mengubah data produk berdasarkan `id`.
- Jangan menambahkan fitur lain di luar kebutuhan update produk.

### 3. Setup Request Body
- Gunakan request body dengan struktur utama:

```json
{
  "title": "Laptop Macbook Pro M1",
  "price": 120000.00,
  "stock": 12
}
```

- Field `description` dapat disiapkan sebagai field opsional.

### 4. Setup Validasi Request
- Terapkan validasi request dengan aturan berikut:
  - `title`: string, minimum 3 karakter, maksimum 255 karakter, wajib diisi
  - `price`: numerik, wajib diisi
  - `stock`: numerik, wajib diisi
  - `description`: opsional
- Pastikan validasi dilakukan sebelum proses update data dijalankan.
- Jika validasi gagal, request tidak boleh diteruskan ke proses update.

### 5. Setup Response Success
- Jika data berhasil diperbarui, gunakan response sukses dengan struktur:

```json
{
  "status": "success",
  "message": "New product successfully edited!",
  "data": "data yang diedit"
}
```

### 6. Setup Response Error
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
- Endpoint `PUT /product/{id}` tersedia dan dapat digunakan untuk update produk.
- Struktur implementasi mengikuti pola MVC.
- Validasi request berjalan sesuai aturan yang ditentukan.
- Response sukses dan error memiliki format yang konsisten.
- Implementasi tetap sederhana, fokus, dan sesuai scope.

## Batasan Scope
- Kerjakan hanya sesuai instruksi endpoint update produk.
- Jangan menambahkan autentikasi, pagination, filtering, delete, insert endpoint baru, atau fitur lain di luar scope ini.
- Jangan memperluas arsitektur di luar kebutuhan endpoint update produk.

## Catatan
- Dokumen ini bersifat high level.
- Detail teknis validasi, query update, penanganan `id`, dan integrasi database akan dikerjakan pada tahap implementasi.
- Prioritaskan implementasi yang mudah dipahami oleh junior programmer atau AI model biaya rendah.
