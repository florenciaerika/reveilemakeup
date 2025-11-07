// === INTERAKSI SEDERHANA ===

// Saat tombol CTA diklik, arahkan ke halaman produk
document.querySelector('.cta-btn').addEventListener('click', () => {
    alert('Ayo, temukan produk favoritmu di halaman Shop 💕');
    window.location.href = "#"; // ganti dengan link halaman produk kamu
});

// Efek hover tambahan (contoh animasi ringan)
const catCards = document.querySelectorAll('.cat-card');
catCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.boxShadow = "0 4px 10px rgba(183,110,121,0.2)";
    });
    card.addEventListener('mouseout', () => {
        card.style.boxShadow = "none";
    });
});
