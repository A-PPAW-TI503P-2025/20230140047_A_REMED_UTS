
# Library System - Dokumentasi Aplikasi

Sistem manajemen perpustakaan modern dengan fitur manajemen buku dan validasi peminjaman. Aplikasi ini dibangun menggunakan Node.js, Express, MySQL, dan frontend JavaScript dengan desain warm color palette.

---

## Fitur Utama

* **Manajemen Buku Lengkap**: Operasi CRUD (Create, Read, Update, Delete) untuk koleksi buku.
* **Role-based Access Control**: Pemisahan akses menggunakan header untuk **Admin** dan **User**.

## Penggunaan

* **Backend**: Node.js v22.20.0, Express.js
* **Database**: MySQL (Sequelize ORM)
* **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
* **Testing**: Postman

---

## Dokumentasi API (Tabel)

| Method | Endpoint | Deskripsi | Headers (Auth) | Body Payload (JSON) |
| --- | --- | --- | --- | --- |
| **GET** | `/api/books` | Menampilkan semua buku | - | - |
| **GET** | `/api/books/:id` | Menampilkan detail buku | - | - |
| **POST** | `/api/books` | Menambah buku baru | `x-user-role: admin` | `{"title": "Judul", "author": "Penulis", "stock": 10}` |
| **PUT** | `/api/books/:id` | Mengupdate data buku | `x-user-role: admin` | `{"title": "Judul Baru", "author": "Penulis", "stock": 5}` |
| **DELETE** | `/api/books/:id` | Menghapus buku | `x-user-role: admin` | - |
| **POST** | `/api/borrow` | Meminjam buku & Lokasi | `x-user-role: user`, `x-user-id: [ID_Angka]` | `{"bookId": 1, "latitude": -6.2088, "longitude": 106.8456}` |

---

## API Endpoints (Postman)

* **Key Value** (Headers)
<img width="1338" height="382" alt="image" src="https://github.com/user-attachments/assets/f4c11773-3894-4562-a152-a9b4aef09e1b" />

### 1. Pengujian CRUD Buku (Admin & User)

* **Get All Books** (GET)

<img width="1600" height="820" alt="image" src="https://github.com/user-attachments/assets/a4d8ee1e-93c4-409b-b607-214f9d7e2dcf" />

* **Get Books by ID** (GET)

<img width="1919" height="1010" alt="image" src="https://github.com/user-attachments/assets/813c1847-f575-40cd-a5b4-7dc38987f922" />

* **Create Book** (POST - Admin Only)

<img width="1600" height="850" alt="image" src="https://github.com/user-attachments/assets/a53e03b0-22f8-49fc-a22a-9abd8b524284" />

* **Update Book** (PUT - Admin Only)

<img width="1600" height="850" alt="image" src="https://github.com/user-attachments/assets/6720e11b-402b-4643-9de1-514286790cda" />

* **Delete Book** (DELETE - Admin Only)

<img width="1600" height="849" alt="image" src="https://github.com/user-attachments/assets/cf3f1dd9-ed49-457d-9dd3-232e33cbd163" />

### 2. Pengujian Peminjaman (User)

* **Post Borrow Book** (POST)

<img width="1600" height="849" alt="image" src="https://github.com/user-attachments/assets/ff55ff36-2400-47c3-9a9f-93cb7ff04c96" />

---

## Antarmuka Pengguna

### 1. Admin Dashboard

Dashboard untuk mengelola data buku dan memantau stok secara visual.

<img width="1916" alt="Admin Dashboard 1" src="[https://github.com/user-attachments/assets/efbaf06f-7ca1-4ad0-8d94-9a7160cfb2a9](https://github.com/user-attachments/assets/efbaf06f-7ca1-4ad0-8d94-9a7160cfb2a9)" />
<img width="1904" alt="Admin Dashboard 2" src="[https://github.com/user-attachments/assets/6794cf0a-40ae-4407-80df-271af90a07de](https://github.com/user-attachments/assets/6794cf0a-40ae-4407-80df-271af90a07de)" />

### 2. Form Input Data

Tampilan modal untuk menambah atau mengubah informasi buku.

<img width="1919" alt="Form Modal 1" src="[https://github.com/user-attachments/assets/080778ed-79a4-4ced-b8b5-ea15f2545179](https://github.com/user-attachments/assets/080778ed-79a4-4ced-b8b5-ea15f2545179)" />
<img width="1909" alt="Form Modal 2" src="[https://github.com/user-attachments/assets/0ab122b1-d375-47d4-b26e-06abdb36389d](https://github.com/user-attachments/assets/0ab122b1-d375-47d4-b26e-06abdb36389d)" />

### 3. User Catalog

Tampilan sisi peminjam untuk melihat koleksi buku yang tersedia.

<img width="1904" alt="User View" src="[https://github.com/user-attachments/assets/615b86df-f151-4ab9-a7ec-a7ec98c909a1](https://github.com/user-attachments/assets/615b86df-f151-4ab9-a7ec-a7ec98c909a1)" />

---

