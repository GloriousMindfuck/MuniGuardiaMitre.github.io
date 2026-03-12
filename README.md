# 🏞️ Senderos de Guardia Mitre - Plataforma Web Interactiva

Una plataforma web ligera, gratuita y mobile-first para acompañar los senderos turísticos de Guardia Mitre (Río Negro, Argentina). La web es accesible mediante códigos QR colocados en el inicio de los senderos y funciona sin necesidad de aplicaciones externas.

## 🎯 Objetivo

Crear una experiencia digital que complemente los senderos físicos permitiendo a los visitantes:

- Ver mapas interactivos de los recorridos
- Registrar sus tiempos de caminata
- Comparar resultados en un ranking público
- Identificar flora y fauna del lugar
- Aprender sobre el ecosistema local
- Interactuar con el sendero mediante QR

## 🌟 Características Principales

### 📱 Diseño Mobile-First
- Optimizado para dispositivos móviles
- Botones grandes para fácil uso en exteriores
- Carga rápida en conexiones móviles
- Diseño minimalista con colores institucionales celestes

### 🗺️ Mapa Interactivo
- Visualización de senderos con Leaflet y OpenStreetMap
- Marcadores para puntos de interés
- Estacionamientos y servicios
- Navegación GPS con Google Maps

### ⏱️ Sistema de Ranking
- Registro de tiempos por sendero
- Ranking público ordenado por tiempo
- Integración con Google Sheets
- Actualización automática cada 15 minutos

### 🌿 Flora y Fauna
- Catálogo de especies locales
- Información sobre especies nativas e introducidas
- Integración con PlantNet para identificación de plantas
- Integración con iNaturalist para registro de observaciones

### 📸 Galería de Fotos
- Subida de fotos directamente desde el navegador
- Organización por sendero
- Visualización en cuadrícula responsiva
- Almacenamiento local en el dispositivo

### 📊 Gestión de Datos
- Uso de Google Sheets como base de datos
- Sin backend complejo requerido
- Fácil mantenimiento por personal municipal
- Exportación de datos en formato CSV

## 🏗️ Arquitectura del Sitio

```
index.html              # Página principal
├── css/
│   └── estilos.css     # Estilos globales mobile-first
├── js/
│   └── main.js         # Funciones compartidas y configuración
├── senderos/
│   └── index.html      # Página de senderos con descripciones
├── mapa/
│   └── index.html      # Mapa interactivo con Leaflet
├── tiempos/
│   └── index.html      # Registro de tiempos
├── ranking/
│   └── index.html      # Ranking público
├── flora/
│   └── index.html      # Flora y fauna con integraciones
└── galeria/
    └── index.html      # Galería de fotos comunitaria
```

## 🎨 Diseño y Colores

### Paleta de Colores
- **Azul Institucional**: `#0EA5E9` - Elementos principales (celeste municipal)
- **Azul Oscuro**: `#0284C7` - Mapas y navegación
- **Naranja Acción**: `#F59E0B` - Botones de registro
- **Naranja Ranking**: `#F97316` - Trofeos y podios

### Principios de Diseño
- Mobile-first y responsive
- Colores institucionales celestes
- Botones grandes para uso con una mano
- Alto contraste para visibilidad en exteriores
- Tipografía Inter para mejor legibilidad

## 🔧 Tecnologías Utilizadas

### Frontend
- **HTML5 + CSS3 + JavaScript** Vanilla
- **Tailwind CSS** para estilos rápidos y responsivos
- **Font Awesome** para iconos
- **Google Fonts** (Inter) para tipografía

### Mapas y Visualización
- **Leaflet.js** para mapas interactivos
- **OpenStreetMap** como capa base
- **Google Maps** para navegación GPS

### Integraciones Externas
- **Google Sheets** para almacenamiento de datos
- **Google Forms** para captura de información
- **PlantNet API** para identificación de plantas
- **iNaturalist API** para registro de observaciones
- **Almacenamiento Local** para galería de fotos

## 📋 Configuración de Google Sheets

### 1. Crear Google Form
1. Ve a [Google Forms](https://forms.google.com)
2. Crea un nuevo formulario con los campos necesarios:
   - Nombre (texto corto)
   - Sendero (menú desplegable)
   - Tiempo (número)
   - Fecha (fecha)
   - Comentarios (párrafo)
3. Envía el formulario al menos una vez para generar la hoja de respuestas
4. Copia el ID del formulario (está en la URL)

### 2. Configurar Google Sheets
1. Abre la hoja de respuestas del formulario
2. Comparte la hoja con permisos de visualización pública
3. Copia el ID de la hoja de cálculo
4. Actualiza el archivo `js/main.js` con estos IDs

### 3. Obtener IDs de campos
1. Inspecciona el formulario con las herramientas de desarrollador
2. Encuentra los IDs de cada campo del formulario
3. Actualiza la configuración en `js/main.js`

## 📱 Integración con QR

### Generación de Códigos QR
Genera códigos QR que apunten a las siguientes URLs:

- **Página principal**: `https://tudominio.com/index.html`
- **Senderos**: `https://tudominio.com/senderos/index.html`
- **Mapa**: `https://tudominio.com/mapa/index.html`
- **Tiempos**: `https://tudominio.com/tiempos/index.html`
- **Ranking**: `https://tudominio.com/ranking/index.html`
- **Flora y Fauna**: `https://tudominio.com/flora/index.html`

### Colocación de QR
Coloca los códigos QR en:
- Carteles informativos al inicio de cada sendero
- Centros de visitantes
- Áreas de descanso
- Puntos de interés destacados

## 📸 Gestión de Fotos

### Cómo agregar fotos
1. Visita la sección "Galería" en el menú principal
2. Haz clic en "Subir Foto"
3. Selecciona una imagen desde tu dispositivo
4. Completa el título y selecciona el sendero correspondiente
5. Opcionalmente agrega tu nombre y una descripción
6. Haz clic en "Subir Foto"

### Características de la galería
- Almacenamiento local en el navegador (no requiere servidor)
- Visualización en cuadrícula responsiva
- Organización por sendero
- Posibilidad de eliminar fotos propias
- Vista ampliada de cada imagen

### Recomendaciones para fotos
- Usar imágenes de máximo 2MB para mejor rendimiento
- Fotos en formato JPG o PNG
- Resolución recomendada: 1200x800px
- Evitar fotos con información personal sensible

## 🚀 Despliegue en GitHub Pages

### 1. Preparar el repositorio
```bash
# Crea un nuevo repositorio en GitHub
# Sube todos los archivos del proyecto
# El nombre del repositorio debe ser: tu-usuario.github.io
```

### 2. Configurar GitHub Pages
1. Ve a Settings > Pages en tu repositorio
2. Selecciona la rama principal (main)
3. Elige la carpeta raíz (/)
4. Guarda los cambios
5. Tu sitio estará disponible en: `https://tu-usuario.github.io`

### Senderos Disponibles
Actualmente hay **2 senderos** disponibles:
1. **Sendero del Río** - 2.5km, 45 minutos, dificultad baja
2. **Sendero del Monte Nativo** - 3.8km, 75 minutos, dificultad media

### 3. Actualizar URLs
Actualiza las URLs en el código con tu nuevo dominio:
```javascript
// En js/main.js
const CONFIG = {
    BASE_URL: 'https://tu-usuario.github.io',
    // ... resto de configuración
};
```

## 📊 Estructura de Datos

### Registro de Tiempos (Google Sheets)
```javascript
{
    nombre: "Juan Pérez",
    sendero: "sendero-rio",
    tiempo: 45, // minutos
    fecha: "2024-03-12",
    clima: "soleado",
    comentarios: "Excelente día para caminar"
}
```

### Especies de Flora y Fauna
```javascript
{
    id: 1,
    nombreComun: "Arrayán",
    nombreCientifico: "Luma apiculata",
    tipo: "flora", // flora o fauna
    descripcion: "Árbol nativo...",
    esNativa: true,
    imagen: "🌳",
    estacion: "Primavera-Verano"
}
```

### Fotos de la Galería
```javascript
{
    id: "foto-1234567890",
    imagen: "data:image/jpeg;base64,/9j/4AAQ...", // Imagen en base64
    titulo: "Atardecer en el Sendero del Río",
    sendero: "sendero-rio",
    nombreUsuario: "María García",
    descripcion: "Un hermoso atardecer capturado en el mirador principal",
    fecha: "12/03/2024",
    fechaISO: "2024-03-12T18:30:00.000Z"
}
```

## 🔒 Seguridad y Privacidad

- Los datos personales se limitan al nombre/apodo del participante
- No se almacenan datos sensibles como emails o teléfonos
- Google Sheets permite control de acceso y auditoría
- Las observaciones de fauna son públicas por naturaleza del proyecto

## 📈 Análisis y Estadísticas

La plataforma genera automáticamente:
- Total de visitas por página
- Tiempos promedio por sendero
- Especies más observadas
- Horas pico de visita
- Distribución por edad y origen (si se captura)

## 🔧 Mantenimiento

### Actualización de Contenidos
- Editar directamente los archivos HTML para cambiar texto
- Modificar `js/main.js` para actualizar configuraciones
- Actualizar CSS para cambios de estilo

### Gestión de Datos
- Acceder a Google Sheets directamente para ver/modificar datos
- Usar filtros y fórmulas para análisis
- Exportar datos para respaldo o análisis externo

### Monitoreo
- Verificar funcionamiento de enlaces externos periódicamente
- Actualizar integraciones con APIs externas
- Revisar estadísticas de uso

## 🤝 Contribuciones

Para contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crea un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Puedes usar, copiar, modificar y distribuir el código libremente.

## 🆘 Soporte

Para soporte técnico:
- Revisa la documentación completa en este README
- Verifica las configuraciones de Google Sheets
- Consulta los logs del navegador para errores de JavaScript
- Asegúrate de que todas las URLs estén correctamente configuradas

## 🌟 Reconocimientos

- Municipio de Guardia Mitre por el proyecto
- Comunidad de código abierto por las librerías utilizadas
- Colaboradores y visitantes que registran sus observaciones

---

## 📸 Gestión de Fotos

### Cómo agregar fotos
1. Visita la sección "Galería" en el menú principal
2. Haz clic en "Subir Foto"
3. Selecciona una imagen desde tu dispositivo
4. Completa el título y selecciona el sendero correspondiente
5. Opcionalmente agrega tu nombre y una descripción
6. Haz clic en "Subir Foto"

### Características de la galería
- Almacenamiento local en el navegador (no requiere servidor)
- Visualización en cuadrícula responsiva
- Organización por sendero
- Posibilidad de eliminar fotos propias
- Vista ampliada de cada imagen

### Recomendaciones para fotos
- Usar imágenes de máximo 2MB para mejor rendimiento
- Fotos en formato JPG o PNG
- Resolución recomendada: 1200x800px
- Evitar fotos con información personal sensible

**¡Disfruta de los senderos de Guardia Mitre!** 🏔️🌿