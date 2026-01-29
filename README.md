
# Library System - Dokumentasi Aplikasi

Sistem manajemen perpustakaan modern dengan fitur manajemen buku dan validasi peminjaman. Aplikasi ini dibangun menggunakan Node.js, Express, MySQL.
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
<img width="1254" height="255" alt="image" src="https://github.com/user-attachments/assets/909c7d9a-e5a4-4cb5-a841-3f649246a584" />

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

<img width="1919" height="1009" alt="image" src="https://github.com/user-attachments/assets/03bc7b23-0145-42e5-9a06-3c7a1325bfdf" />

---

## Antarmuka Pengguna

### Dashboard
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/69ac3d30-5ddf-4551-9862-db3861bdb53e" />

### 1. Admin 

Dashboard untuk mengelola data buku dan memantau stok secara visual.

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/e68425b7-5dff-47be-9ee8-e5a5bb2ea8a5" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/91193885-f560-46ab-925f-efaad27a089a" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/190d5f36-f4f0-4d30-bdb2-fc26e2d2bbc8" />


### 2. User 

Tampilan sisi peminjam untuk melihat koleksi buku yang tersedia.
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/51d7c61b-c8b2-41c5-94ec-384cb1ac06f3" />

---
## DATABASE

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/c1b4ea18-af43-4acc-b611-32e7f68458ea" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/e385bd1d-f7a2-4d99-9618-4863de286966" />


