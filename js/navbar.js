// 🧭 NAVBAR UNIVERSAL
// Este archivo genera el navbar automáticamente en todas las páginas

document.addEventListener('DOMContentLoaded', function() {
    // Obtener la página actual
    const currentPage = window.location.pathname. split('/').pop() || 'index. html';
    
    // Definir los enlaces del navbar
    const navLinks = [
        { href: 'index. html', text: 'Redes Sociales' },
        { href: 'animes.html', text: 'Animes' }
        // 🔮 Añade más páginas aquí en el futuro: 
        // { href: 'proyectos.html', text: 'Proyectos' },
        // { href: 'sobre-mi.html', text: 'Sobre Mí' },
    ];
    
    // Crear el HTML del navbar
    const navHTML = `
        <nav class="navbar">
            <a href="index.html" class="navbar-logo">HUIJIE LIN</a>
            <ul class="navbar-links">
                ${navLinks. map(link => `
                    <li>
                        <a href="${link.href}" class="${currentPage === link.href ? 'active' : ''}">
                            ${link.text}
                        </a>
                    </li>
                `).join('')}
            </ul>
        </nav>
    `;
    
    // Insertar el navbar al principio del body
    document.body.insertAdjacentHTML('afterbegin', navHTML);
});
