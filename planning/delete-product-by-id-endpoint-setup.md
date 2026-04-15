# Issue: Setup Delete Product By Id Endpoint

## Ringkasan
Lakukan setup endpoint untuk menghapus data produk berdasarkan `id` melalui `DELETE /product/{id}` dengan pola arsitektur MVC dan format response yang konsisten.

## Tujuan
- Menyediakan endpoint hapus produk yang jelas dan mudah dipahami.
- Menerapkan pemisahan tanggung jawab sesuai pola MVC.
- Memastikan validasi dasar dijalankan sebelum proses hapus data.
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
- Buat endpoint `DELETE /product/{id}`.
- Endpoint ini hanya fokus untuk menghapus data produk berdasarkan `id`.
- Jangan menambahkan fitur lain di luar kebutuhan hapus produk.

### 3. Setup Validasi
- Jika tidak ada `id`, maka response harus `bad request`.
- Jika tidak ada data produk berdasarkan `id`, maka response harus `404 not found`.
- Pastikan validasi dilakukan sebelum proses penghapusan dijalankan.

### 4. Setup Response Success
- Jika data berhasil dihapus, gunakan response sukses dengan struktur:

```json
{
  "status": "success",
  "message": "Product successfully deleted!"
}
```

### 5. Setup Response Error
- Jika terjadi error validasi, data tidak ditemukan, error server, error database, atau gangguan jaringan, gunakan response error yang konsisten dan relevan dengan kondisi yang terjadi.
- Gunakan format response error yang mengikuti kebutuhan kondisi:

```json
{
  "status": "error",
  "message": "error message (based on condition explain above)"
}
```

- Status dan message harus menyesuaikan kondisi error, misalnya:
  - bad request saat `id` tidak valid atau tidak ada
  - not found saat data produk tidak ditemukan
  - internal error saat terjadi masalah server atau database
  - network error saat terjadi gangguan koneksi

## Hasil Akhir yang Diharapkan
- Endpoint `DELETE /product/{id}` tersedia dan dapat digunakan untuk menghapus produk.
- Struktur implementasi mengikuti pola MVC.
- Validasi `id` dan pengecekan data tersedia berjalan sesuai kebutuhan.
- Response sukses dan error memiliki format yang konsisten.
- Implementasi tetap sederhana, fokus, dan sesuai scope.

## Batasan Scope
- Kerjakan hanya sesuai instruksi endpoint hapus produk.
- Jangan menambahkan autentikasi, pagination, filtering, insert, update, atau fitur lain di luar scope ini.
- Jangan memperluas arsitektur di luar kebutuhan endpoint delete produk.

## Catatan
- Dokumen ini bersifat high level.
- Detail teknis validasi `id`, query delete, penanganan not found, dan integrasi database akan dikerjakan pada tahap implementasi.
- Prioritaskan implementasi yang mudah dipahami oleh junior programmer atau AI model biaya rendah.
