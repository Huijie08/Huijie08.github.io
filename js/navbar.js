// ============================================
// 🧭 NAVBAR UNIVERSAL - Huijie Lin Portfolio
// ============================================
// Este script carga el navbar dinámicamente en todas las páginas
// Para añadir una nueva página, solo modifica el array 'navLinks'

(function() {
    'use strict';
    
    // 📝 CONFIGURACIÓN DEL NAVBAR
    const navConfig = {
        logoText: 'HUIJIE LIN',
        logoLink: 'index.html',
        // Lista de links del navbar - Añade o modifica aquí para actualizar todas las páginas
        navLinks: [
            { text: 'Home', href: 'index.html', id: 'home' },
            { text: 'Redes Sociales', href: 'redes-sociales.html', id: 'redes-sociales' },
            { text: 'Animes', href: 'animes.html', id: 'animes' },
            { text: 'HuijieGPT', href: 'huijiegpt.html', id: 'huijiegpt' }
        ]
    };
    
    // 🎨 ESTILOS DEL NAVBAR (inline para no depender de CSS externo)
    const navbarStyles = `
        <style id="navbar-styles">
            .navbar {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                background: rgba(10, 10, 10, 0.95);
                backdrop-filter: blur(10px);
                border-bottom: 1px solid #2a2a2a;
                padding: 15px 40px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                z-index: 1000;
                box-sizing: border-box;
            }
            
            .navbar-logo {
                font-size: 1.5rem;
                font-weight: 700;
                color: #ffffff;
                text-decoration: none;
                letter-spacing: 2px;
                transition: color 0.3s ease;
            }
            
            .navbar-logo:hover {
                color: #e63946;
            }
            
            .navbar-links {
                display: flex;
                gap: 30px;
                align-items: center;
            }
            
            .navbar-links a {
                color: #888888;
                text-decoration: none;
                font-size: 1rem;
                font-weight: 500;
                position: relative;
                transition: color 0.3s ease;
            }
            
            .navbar-links a::after {
                content: '';
                position: absolute;
                bottom: -5px;
                left: 0;
                width: 0;
                height: 2px;
                background-color: #e63946;
                transition: width 0.3s ease;
            }
            
            .navbar-links a:hover {
                color: #ffffff;
            }
            
            .navbar-links a:hover::after {
                width: 100%;
            }
            
            .navbar-links a.active {
                color: #ffffff;
            }
            
            .navbar-links a.active::after {
                width: 100%;
            }
            
            /* 📱 RESPONSIVE */
            @media (max-width: 768px) {
                .navbar {
                    padding: 15px 20px;
                }
                
                .navbar-logo {
                    font-size: 1.2rem;
                }
                
                .navbar-links {
                    gap: 15px;
                }
                
                .navbar-links a {
                    font-size: 0.9rem;
                }
            }
            
            @media (max-width: 500px) {
                .navbar-links {
                    gap: 10px;
                }
                
                .navbar-links a {
                    font-size: 0.8rem;
                }
            }
        </style>
    `;
    
    // 🏗️ FUNCIÓN PARA CREAR EL HTML DEL NAVBAR
    function createNavbarHTML() {
        const currentPage = getCurrentPage();
        
        const linksHTML = navConfig.navLinks.map(link => {
            const isActive = currentPage === link.id ? 'active' : '';
            return `<a href="${link.href}" class="${isActive}">${link.text}</a>`;
        }).join('');
        
        return `
            ${navbarStyles}
            <nav class="navbar">
                <a href="${navConfig.logoLink}" class="navbar-logo">${navConfig.logoText}</a>
                <div class="navbar-links">
                    ${linksHTML}
                </div>
            </nav>
        `;
    }
    
    // 🔍 FUNCIÓN PARA DETECTAR LA PÁGINA ACTUAL
    function getCurrentPage() {
        const path = window.location.pathname;
        const page = path.split('/').pop() || 'index.html';
        
        // Mapear nombres de archivo a IDs
        const pageMap = {
            'index.html': 'home',
            '': 'home',
            'redes-sociales.html': 'redes-sociales',
            'animes.html': 'animes',
            'huijiegpt.html': 'huijiegpt'
        };
        
        return pageMap[page] || 'home';
    }
    
    // 🚀 FUNCIÓN PARA INSERTAR EL NAVBAR EN EL DOM
    function insertNavbar() {
        // Buscar si ya existe un navbar
        const existingNavbar = document.querySelector('.navbar');
        const existingStyles = document.getElementById('navbar-styles');
        
        // Remover navbar y estilos existentes si los hay
        if (existingNavbar) {
            existingNavbar.remove();
        }
        if (existingStyles) {
            existingStyles.remove();
        }
        
        // Crear elemento temporal para parsear el HTML
        const temp = document.createElement('div');
        temp.innerHTML = createNavbarHTML();
        
        // Insertar estilos en el head
        const styles = temp.querySelector('#navbar-styles');
        if (styles) {
            document.head.appendChild(styles);
        }
        
        // Insertar navbar al inicio del body
        const navbar = temp.querySelector('.navbar');
        if (navbar) {
            document.body.insertBefore(navbar, document.body.firstChild);
        }
        
        // Asegurar que el body tenga padding-top para no cubrir contenido
        if (!document.body.style.paddingTop) {
            document.body.style.paddingTop = '70px';
        }
    }
    
    // ⚡ INICIALIZAR CUANDO EL DOM ESTÉ LISTO
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', insertNavbar);
    } else {
        insertNavbar();
    }
    
    // 🔄 EXPONER FUNCIÓN GLOBAL PARA ACTUALIZAR EL NAVBAR
    window.updateNavbar = insertNavbar;
    
})();
