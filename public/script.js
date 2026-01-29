let currentRole = null;
let userCoords = { lat: null, lng: null };

// Start
document.addEventListener('DOMContentLoaded', () => {
    // Hidden initially
});

function selectRole(role) {
    currentRole = role;
    document.getElementById('role-selection').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';

    // UI adjustment
    const roleTag = document.getElementById('role-tag');
    roleTag.innerText = role;

    document.getElementById('btn-add-book').style.display = role === 'admin' ? 'flex' : 'none';
    document.getElementById('user-geo-info').style.display = role === 'user' ? 'flex' : 'none';

    setupTableHeader();
    fetchBooks();
    if (role === 'user') detectLocation();
}

function backToRoleSelection() {
    document.getElementById('role-selection').style.display = 'flex';
    document.getElementById('dashboard').style.display = 'none';
}

function detectLocation() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(pos => {
            userCoords.lat = pos.coords.latitude;
            userCoords.lng = pos.coords.longitude;
            document.getElementById('location-display').innerText = `${userCoords.lat.toFixed(4)}, ${userCoords.lng.toFixed(4)}`;
        }, err => {
            document.getElementById('location-display').innerText = "Lokasi tidak tersedia";
        });
    }
}

function setupTableHeader() {
    const head = document.getElementById('table-head');
    if (currentRole === 'admin') {
        head.innerHTML = `
            <th>Judul Buku</th>
            <th>Penulis</th>
            <th>Stok</th>
            <th>Status</th>
            <th>Aksi</th>
        `;
    } else {
        head.innerHTML = `
            <th>Judul Buku</th>
            <th>Penulis</th>
            <th>Stok Tersedia</th>
            <th>Status</th>
            <th>Tindakan</th>
        `;
    }
}

async function fetchBooks() {
    try {
        const res = await fetch('/api/books');
        const books = await res.json();
        renderTable(books);
    } catch (err) {
        showToast('Gagal memuat data buku', 'error');
    }
}

function renderTable(books) {
    const body = document.getElementById('book-table-body');
    body.innerHTML = books.map(book => {
        const isReady = book.stock > 0;
        return `
            <tr>
                <td><strong>${book.title}</strong></td>
                <td>${book.author}</td>
                <td>${book.stock}</td>
                <td>
                    <span class="stock-badge ${isReady ? 'ready' : 'empty'}">
                        ${isReady ? 'Tersedia' : 'Kosong'}
                    </span>
                </td>
                <td class="action-icons">
                    ${currentRole === 'admin' ? `
                        <button class="action-btn edit" onclick="editBook(${book.id})"><i class="fas fa-edit"></i></button>
                        <button class="action-btn delete" onclick="deleteBook(${book.id})"><i class="fas fa-trash"></i></button>
                    ` : `
                        <button class="btn-yellow" style="padding: 0.4rem 1rem; font-size: 0.8rem;" 
                                onclick="borrowBook(${book.id})" ${!isReady ? 'disabled' : ''}>
                            <i class="fas fa-hand-holding"></i> Pinjam
                        </button>
                    `}
                </td>
            </tr>
        `;
    }).join('') || '<tr><td colspan="5" style="text-align:center; padding: 2rem;">Tidak ada buku.</td></tr>';
}

// Modal Logic
function openModal(book = null) {
    const modal = document.getElementById('book-modal');
    const title = document.querySelector('.modal-header h3');
    const form = document.getElementById('book-form');

    if (book) {
        title.innerText = 'Edit Buku';
        document.getElementById('book-id').value = book.id;
        document.getElementById('title').value = book.title;
        document.getElementById('author').value = book.author;
        document.getElementById('stock').value = book.stock;
    } else {
        title.innerText = 'Tambah Buku Baru';
        form.reset();
        document.getElementById('book-id').value = '';
    }

    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('book-modal').style.display = 'none';
}

// APIs
document.getElementById('book-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = document.getElementById('book-id').value;
    const data = {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        stock: parseInt(document.getElementById('stock').value)
    };

    const method = id ? 'PUT' : 'POST';
    const url = id ? `/api/books/${id}` : '/api/books';

    try {
        const res = await fetch(url, {
            method: method,
            headers: { 'Content-Type': 'application/json', 'x-user-role': 'admin' },
            body: JSON.stringify(data)
        });

        if (res.ok) {
            showToast(id ? 'Buku berhasil diupdate' : 'Buku berhasil ditambahkan');
            closeModal();
            fetchBooks();
        }
    } catch (err) {
        showToast('Gagal menyimpan buku', 'error');
    }
});

async function editBook(id) {
    try {
        const res = await fetch(`/api/books/${id}`);
        const book = await res.json();
        openModal(book);
    } catch (err) {
        showToast('Gagal memuat data buku', 'error');
    }
}

async function borrowBook(id) {
    if (!userCoords.lat) return showToast('Harap aktifkan lokasi Anda!', 'error');

    try {
        const res = await fetch('/api/borrow', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-user-role': 'user',
                'x-user-id': 1 // Simulated
            },
            body: JSON.stringify({ bookId: id, latitude: userCoords.lat, longitude: userCoords.lng })
        });

        if (res.ok) {
            showToast('Berhasil meminjam buku!');
            fetchBooks();
        } else {
            const err = await res.json();
            showToast(err.message, 'error');
        }
    } catch (err) {
        showToast('Terjadi kesalahan sistem', 'error');
    }
}

async function deleteBook(id) {
    if (!confirm('Apakah Anda yakin ingin menghapus buku ini?')) return;
    try {
        const res = await fetch(`/api/books/${id}`, {
            method: 'DELETE',
            headers: { 'x-user-role': 'admin' }
        });
        if (res.ok) {
            showToast('Buku dihapus');
            fetchBooks();
        }
    } catch (err) {
        showToast('Gagal menghapus buku', 'error');
    }
}

function showToast(msg) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = msg;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// Search Logic
document.getElementById('search-input').addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase();
    const rows = document.querySelectorAll('#book-table-body tr');
    rows.forEach(row => {
        const title = row.cells[0].innerText.toLowerCase();
        row.style.display = title.includes(val) ? '' : 'none';
    });
});
