
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

### 1. Pengujian CRUD Buku (Admin & User)

* **Get All Books** (GET)

<img width="1600" src="[https://github.com/user-attachments/assets/5fe82b15-9a90-4b9f-ac8b-7017a89ae4ec](https://github.com/user-attachments/assets/5fe82b15-9a90-4b9f-ac8b-7017a89ae4ec)" />

* **Create Book** (POST - Admin Only)

<img width="1600" src="[https://github.com/user-attachments/assets/a7c696ec-0219-412a-a1a7-41c0c683a375](https://github.com/user-attachments/assets/a7c696ec-0219-412a-a1a7-41c0c683a375)" />

* **Update Book** (PUT - Admin Only)

<img width="1600" src="[https://github.com/user-attachments/assets/b9571bfd-ef77-4738-86d9-363cf5c81b4c](https://github.com/user-attachments/assets/b9571bfd-ef77-4738-86d9-363cf5c81b4c)" />

* **Delete Book** (DELETE - Admin Only)

<img width="1600" src="[https://github.com/user-attachments/assets/87dcc9e0-6d58-4c13-b249-4fd8f13151c5](https://github.com/user-attachments/assets/87dcc9e0-6d58-4c13-b249-4fd8f13151c5)" />

### 2. Pengujian Peminjaman (User)

* **Post Borrow Book** (POST)

<img width="1600" src="[https://github.com/user-attachments/assets/8ddfc676-c3be-42f2-a645-a42b4fb60f15](https://github.com/user-attachments/assets/8ddfc676-c3be-42f2-a645-a42b4fb60f15)" />

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

