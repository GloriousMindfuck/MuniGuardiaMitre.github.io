/**
 * Funciones principales para la plataforma de senderos de Guardia Mitre
 * Mobile-first y optimizado para QR
 */

// Configuración global
const CONFIG = {
    GOOGLE_SHEETS_URL: 'https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID', // Reemplazar con ID real
    GOOGLE_FORMS_URL: 'https://docs.google.com/forms/d/YOUR_FORM_ID', // Reemplazar con ID real
    MAP_CENTER: [-40.7833, -64.2667], // Coordenadas aproximadas de Guardia Mitre
    MAP_ZOOM: 13,
    SENDEROS: [
        {
            id: 'sendero-1',
            nombre: 'Sendero del Río',
            distancia: 2.5,
            dificultad: 'baja',
            tiempoEstimado: 45,
            descripcion: 'Recorrido costero con vistas al río Negro',
            coordenadas: [[-40.7833, -64.2667], [-40.7845, -64.2689], [-40.7867, -64.2701]]
        },
        {
            id: 'sendero-2', 
            nombre: 'Sendero de la Selva',
            distancia: 4.2,
            dificultad: 'media',
            tiempoEstimado: 90,
            descripcion: 'Inmersión en la vegetación nativa del lugar',
            coordenadas: [[-40.7850, -64.2650], [-40.7870, -64.2670], [-40.7890, -64.2690]]
        },
        {
            id: 'sendero-3',
            nombre: 'Sendero de las Cumbres',
            distancia: 6.8,
            dificultad: 'alta',
            tiempoEstimado: 150,
            descripcion: 'Desafiante ascenso con vistas panorámicas',
            coordenadas: [[-40.7820, -64.2640], [-40.7840, -64.2660], [-40.7880, -64.2700]]
        }
    ]
};

/**
 * Utilidades generales
 */
const Utils = {
    // Detectar si es dispositivo móvil
    isMobile: function() {
        return window.innerWidth <= 768;
    },

    // Mostrar notificaciones toast
    showToast: function(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 animate-fadeIn`;
        
        const colors = {
            success: 'bg-green-500 text-white',
            error: 'bg-red-500 text-white',
            warning: 'bg-yellow-500 text-black',
            info: 'bg-blue-500 text-white'
        };
        
        toast.className += ` ${colors[type] || colors.info}`;
        toast.innerHTML = `
            <div class="flex items-center">
                <span>${message}</span>
                <button onclick="this.parentElement.parentElement.remove()" class="ml-2">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        document.body.appendChild(toast);
        
        // Auto-remover después de 5 segundos
        setTimeout(() => {
            if (toast.parentElement) {
                toast.remove();
            }
        }, 5000);
    },

    // Formatear tiempo
    formatTime: function(minutes) {
        if (minutes < 60) {
            return `${minutes} min`;
        } else {
            const hours = Math.floor(minutes / 60);
            const remainingMinutes = minutes % 60;
            return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}min` : `${hours}h`;
        }
    },

    // Formatear distancia
    formatDistance: function(km) {
        if (km < 1) {
            return `${Math.round(km * 1000)}m`;
        } else {
            return `${km.toFixed(1)}km`;
        }
    },

    // Obtener fecha actual en formato YYYY-MM-DD
    getCurrentDate: function() {
        return new Date().toISOString().split('T')[0];
    },

    // Generar ID único
    generateId: function() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
};

/**
 * Gestión de datos locales
 */
const LocalData = {
    // Guardar en localStorage
    save: function(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
            return true;
        } catch (error) {
            console.error('Error guardando en localStorage:', error);
            return false;
        }
    },

    // Obtener de localStorage
    get: function(key) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('Error leyendo de localStorage:', error);
            return null;
        }
    },

    // Eliminar de localStorage
    remove: function(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.error('Error eliminando de localStorage:', error);
            return false;
        }
    }
};

/**
 * Integración con Google Sheets (simulado para desarrollo)
 */
const GoogleSheets = {
    // En producción, esto se conectaría con Google Apps Script
    // Por ahora simulamos con localStorage
    
    // Obtener registros de tiempos
    getTiempos: function() {
        const tiempos = LocalData.get('tiempos-registrados') || [];
        return tiempos.sort((a, b) => a.tiempo - b.tiempo);
    },

    // Guardar nuevo tiempo
    saveTiempo: function(data) {
        const tiempos = this.getTiempos();
        const nuevoTiempo = {
            id: Utils.generateId(),
            nombre: data.nombre,
            sendero: data.sendero,
            tiempo: parseInt(data.tiempo),
            fecha: data.fecha || Utils.getCurrentDate(),
            timestamp: Date.now()
        };
        
        tiempos.push(nuevoTiempo);
        LocalData.save('tiempos-registrados', tiempos);
        
        return nuevoTiempo;
    },

    // Obtener ranking por sendero
    getRankingBySendero: function(senderoId) {
        const tiempos = this.getTiempos();
        return tiempos
            .filter(t => t.sendero === senderoId)
            .slice(0, 10); // Top 10
    }
};

/**
 * Funciones de mapa (placeholder para integración con Leaflet)
 */
const Mapa = {
    // Inicializar mapa
    init: function(mapId, options = {}) {
        // Esta función se implementará en mapa/index.html con Leaflet
        console.log('Inicializando mapa en:', mapId, 'con opciones:', options);
    },

    // Agregar marcador
    addMarker: function(lat, lng, popupContent, options = {}) {
        // Esta función se implementará en mapa/index.html con Leaflet
        console.log('Agregando marcador en:', lat, lng, 'con popup:', popupContent);
    },

    // Dibujar sendero
    drawSendero: function(coordinates, options = {}) {
        // Esta función se implementará en mapa/index.html con Leaflet
        console.log('Dibujando sendero con coordenadas:', coordinates);
    }
};

/**
 * Funciones de QR y compartir
 */
const QR = {
    // Generar código QR (placeholder)
    generate: function(text) {
        console.log('Generando QR para:', text);
        // En producción usar librería como qrcode.js
        return 'qr-placeholder.png';
    },

    // Compartir en redes sociales
    share: function(platform, data) {
        const urls = {
            whatsapp: `https://wa.me/?text=${encodeURIComponent(data.text)}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(data.url)}`,
            twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(data.text)}&url=${encodeURIComponent(data.url)}`
        };
        
        if (urls[platform]) {
            window.open(urls[platform], '_blank', 'width=600,height=400');
        }
    }
};

/**
 * Funciones de flora y fauna
 */
const FloraFauna = {
    // Datos de ejemplo - en producción vendrían de Google Sheets o API
    getEspecies: function() {
        return [
            {
                id: 1,
                nombreComun: 'Arrayán',
                nombreCientifico: 'Luma apiculata',
                tipo: 'flora',
                descripcion: 'Árbol nativo de la región patagónica con flores blancas aromáticas.',
                esNativa: true,
                imagen: '🌳',
                estacion: 'Primavera-Verano'
            },
            {
                id: 2,
                nombreComun: 'Cóndor Andino',
                nombreCientifico: 'Vultur gryphus',
                tipo: 'fauna',
                descripcion: 'Ave rapaz emblemática de los Andes, en peligro de extinción.',
                esNativa: true,
                imagen: '🦅',
                estacion: 'Todo el año'
            },
            {
                id: 3,
                nombreComun: 'Chilco',
                nombreCientifico: 'Fuchsia magellanica',
                tipo: 'flora',
                descripcion: 'Arbusto con flores colgantes de color rojo intenso.',
                esNativa: true,
                imagen: '🌺',
                estacion: 'Verano-Otoño'
            },
            {
                id: 4,
                nombreComun: 'Zorro Gris',
                nombreCientifico: 'Lycalopex griseus',
                tipo: 'fauna',
                descripcion: 'Mamífero carnívoro de tamaño mediano, muy adaptable.',
                esNativa: true,
                imagen: '🦊',
                estacion: 'Todo el año'
            }
        ];
    },

    // Buscar especies
    searchEspecies: function(query) {
        const especies = this.getEspecies();
        const q = query.toLowerCase();
        
        return especies.filter(e => 
            e.nombreComun.toLowerCase().includes(q) ||
            e.nombreCientifico.toLowerCase().includes(q) ||
            e.descripcion.toLowerCase().includes(q)
        );
    },

    // Obtener especie por ID
    getEspecieById: function(id) {
        const especies = this.getEspecies();
        return especies.find(e => e.id === parseInt(id));
    }
};

/**
 * Inicialización general
 */
document.addEventListener('DOMContentLoaded', function() {
    // Actualizar contador de visitas
    const visitas = LocalData.get('visitas') || 0;
    LocalData.save('visitas', visitas + 1);
    
    // Marcar página actual como activa
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && currentPath.includes(href.replace('.html', ''))) {
            link.classList.add('active');
        }
    });
    
    // Agregar clase de animación a elementos
    const animatedElements = document.querySelectorAll('.card, .btn, .sendero-card');
    animatedElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
        element.classList.add('animate-fadeIn');
    });
    
    console.log('Senderos Guardia Mitre - Plataforma iniciada');
});

// Exportar funciones globales
window.SenderosApp = {
    Utils,
    LocalData,
    GoogleSheets,
    Mapa,
    QR,
    FloraFauna,
    CONFIG
};