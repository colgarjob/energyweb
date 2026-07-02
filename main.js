// ============================================
// MENÚ HAMBURGUESA
// ============================================
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('open');
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
        });
    });
}

// ============================================
// BÚSQUEDA EN HERO (demo)
// ============================================
const searchInput = document.getElementById('heroSearch');
const searchBtn = document.getElementById('searchBtn');

if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', () => {
        performSearch(searchInput.value);
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch(searchInput.value);
        }
    });
}

function performSearch(query) {
    if (!query.trim()) {
        alert('Por favor, escribe un término de búsqueda.');
        return;
    }

    // Redirigir a la página de búsqueda (puedes personalizar)
    window.location.href = `/articulos-recientes.html?q=${encodeURIComponent(query.trim())}`;
}

// ============================================
// MARCADOR ACTIVO EN NAVEGACIÓN
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || (currentPath === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// ============================================
// SCROLL SUAVE PARA ANCLAS (opcional)
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

console.log('🔋 EnergíaWeb cargada correctamente.');

// ============================================
// SISTEMA DE "ME GUSTA" Y FAVORITOS
// ============================================

// Función para dar "me gusta" a un artículo
function likeArticle(articleId) {
    let likes = JSON.parse(localStorage.getItem('likes_' + articleId)) || 0;
    let hasLiked = JSON.parse(localStorage.getItem('hasLiked_' + articleId)) || false;
    
    if (hasLiked) {
        alert('❌ Ya has dado "me gusta" a este artículo.');
        return;
    }
    
    likes++;
    localStorage.setItem('likes_' + articleId, likes);
    localStorage.setItem('hasLiked_' + articleId, true);
    
    document.getElementById('like-count-' + articleId).innerHTML = likes;
    document.getElementById('like-btn-' + articleId).style.color = 'var(--secondary)';
    document.getElementById('like-btn-' + articleId).innerHTML = '❤️ Me gusta';
    
    // Efecto de animación
    document.getElementById('like-btn-' + articleId).style.transform = 'scale(1.2)';
    setTimeout(() => {
        document.getElementById('like-btn-' + articleId).style.transform = 'scale(1)';
    }, 300);
}

// Función para guardar artículo como favorito
function toggleFavorito(articleId, articleTitle, articleUrl) {
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const index = favoritos.findIndex(f => f.id === articleId);
    
    if (index !== -1) {
        favoritos.splice(index, 1);
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
        document.getElementById('fav-btn-' + articleId).innerHTML = '⭐ Guardar artículo';
        document.getElementById('fav-btn-' + articleId).style.color = 'var(--text-muted)';
        showNotification('❌ Artículo eliminado de favoritos');
    } else {
        favoritos.push({ id: articleId, title: articleTitle, url: articleUrl });
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
        document.getElementById('fav-btn-' + articleId).innerHTML = '⭐ Guardado';
        document.getElementById('fav-btn-' + articleId).style.color = 'var(--secondary)';
        showNotification('✅ Artículo guardado en favoritos');
    }
}

// Función para mostrar notificaciones
function showNotification(message) {
    const existing = document.querySelector('.notification-toast');
    if (existing) existing.remove();
    
    const toast = document.createElement('div');
    toast.className = 'notification-toast';
    toast.innerHTML = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        color: var(--text-light);
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: var(--shadow);
        z-index: 9999;
        animation: slideIn 0.3s ease;
        max-width: 350px;
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// Añadir estilo para la notificación
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Función para cargar el estado inicial de "me gusta" y favoritos
function loadArticleState(articleId) {
    // Cargar "me gusta"
    const likes = JSON.parse(localStorage.getItem('likes_' + articleId)) || 0;
    const hasLiked = JSON.parse(localStorage.getItem('hasLiked_' + articleId)) || false;
    
    const likeCountEl = document.getElementById('like-count-' + articleId);
    const likeBtnEl = document.getElementById('like-btn-' + articleId);
    
    if (likeCountEl) likeCountEl.innerHTML = likes;
    if (likeBtnEl && hasLiked) {
        likeBtnEl.innerHTML = '❤️ Me gusta';
        likeBtnEl.style.color = 'var(--secondary)';
    }
    
    // Cargar favoritos
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const isFavorito = favoritos.some(f => f.id === articleId);
    const favBtnEl = document.getElementById('fav-btn-' + articleId);
    
    if (favBtnEl && isFavorito) {
        favBtnEl.innerHTML = '⭐ Guardado';
        favBtnEl.style.color = 'var(--secondary)';
    }
}

// Cargar estado al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    const articleId = document.querySelector('meta[name="article-id"]')?.content || 'default';
    loadArticleState(articleId);
});

// ============================================
// MODO OSCURO/CLARO
// ============================================
const themeToggle = document.getElementById('themeToggle');

if (themeToggle) {
    // Cargar preferencia guardada
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        themeToggle.innerHTML = '🌙 Modo oscuro';
    } else {
        themeToggle.innerHTML = '☀️ Modo claro';
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        themeToggle.innerHTML = isLight ? '🌙 Modo oscuro' : '☀️ Modo claro';
    });
}

// ============================================
// SISTEMA DE IDIOMAS
// ============================================
const translations = {
    es: {
        title: '⚡ EnergíaWeb - Tu portal sobre los tipos de energía',
        welcome: '🔬 La energía que mueve el universo',
        searchPlaceholder: 'Buscar artículo...',
        categories: 'Explora por categorías',
        // ... todas las traducciones
    },
    en: {
        title: '⚡ EnergyWeb - Your portal about energy types',
        welcome: '🔬 The energy that moves the universe',
        searchPlaceholder: 'Search article...',
        categories: 'Explore by categories',
        // ... todas las traducciones
    }
};

// Detectar idioma del navegador
function detectLanguage() {
    const lang = navigator.language || navigator.userLanguage;
    return lang.startsWith('es') ? 'es' : 'en';
}

// Cargar traducciones
function loadTranslations(lang) {
    const t = translations[lang] || translations.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.innerHTML = t[key];
    });
}

// Aplicar al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    const lang = detectLanguage();
    loadTranslations(lang);
});