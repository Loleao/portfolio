import p1Image from '../../assets/projects/prj1.jpg'
import p2Image from '../../assets/projects/prj2.jpg'

export const projectsData = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "Plataforma CRUD completa con autenticación, carrito de compras y pasarela de pago simulada. Demuestra Full Stack MERN.",
        tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Full Stack'],
        imageUrl: p1Image,
        liveUrl: 'https://ecommerce-live.com',
        githubUrl: 'https://github.com/tu_usuario/ecommerce-repo',
        impact: 'Reducción del 40% en el tiempo de procesamiento de pedidos.',
    },
    {
        id: 2,
        title: "Data Analytics API",
        description: "API REST construida con Python para procesar, transformar y exponer datos de fuentes externas (ETL).",
        tags: ['Python', 'Flask', 'PostgreSQL', 'Data', 'API'],
        imageUrl: p2Image,
        liveUrl: 'https://analytics-api.com/docs',
        githubUrl: 'https://github.com/tu_usuario/data-api-repo',
        impact: 'Mejora en la trazabilidad y disponibilidad de datos históricos.',
    },
    {
        id: 3,
        title: "Serverless URL Shortener",
        description: "Implementación de un acortador de URLs sin servidor utilizando AWS Lambda (Node.js) y DynamoDB. Demuestra conocimiento de arquitectura serverless, despliegue continuo (CI/CD) y gestión de costos en la nube.",
        tags: ['AWS', 'Lambda', 'Node.js', 'DynamoDB', 'Serverless', 'DevOps'],
        imageUrl: p2Image,
        liveUrl: 'https://tu-acortador.aws.com',
        githubUrl: 'https://github.com/tu_usuario/url-shortener-repo',
        impact: 'Logró un 99.99% de tiempo de actividad con costos de infraestructura cercanos a cero para bajo tráfico.',
    },
    {
        id: 4,
        title: "ETL Financial Data Pipeline",
        description: "Sistema de canalización de datos (ETL) que extrae datos financieros de una API, los limpia y transforma con Python (Pandas), y los carga en una base de datos PostgreSQL para análisis de tendencias.",
        tags: ['Python', 'Pandas', 'ETL', 'PostgreSQL', 'Data Engineering'],
        imageUrl: p2Image,
        liveUrl: 'https://dashboard-data-viz.com',
        githubUrl: 'https://github.com/tu_usuario/etl-pipeline-repo',
        impact: 'Automatizó la preparación de informes financieros, reduciendo el tiempo de procesamiento manual en 8 horas semanales.',
    },
    {
        id: 5,
        title: "JWT Authentication Service",
        description: "API de autenticación independiente construida con Express.js y Tokens Web JSON (JWT). Incluye registro, inicio de sesión, refresco de token y rutas protegidas. Demuestra rigor en seguridad de endpoints.",
        tags: ['Node.js', 'Express', 'JWT', 'Seguridad', 'APIs', 'Backend'],
        imageUrl: p2Image,
        liveUrl: 'https://auth-api-docs.com',
        githubUrl: 'https://github.com/tu_usuario/jwt-auth-repo',
        impact: 'Diseñado como microservicio desacoplado para ser consumido por múltiples frontends, garantizando un estándar de seguridad centralizado.',
    },
    {
        id: 6,
        title: "Multi-Step Form Manager",
        description: "Aplicación Full Stack con React y TypeScript para gestionar flujos de trabajo de formularios complejos. Uso de Redux o Context API para el estado global y validación avanzada de datos.",
        tags: ['React', 'TypeScript', 'Node.js', 'Redux/Context', 'Full Stack', 'UX/UI'],
        imageUrl: p2Image,
        liveUrl: 'https://multi-step-form.com',
        githubUrl: 'https://github.com/tu_usuario/multi-form-repo',
        impact: 'Mejoró la tasa de finalización de formularios en un 15% gracias a una UX guiada y validación en tiempo real.',
    },
    {
        id: 7,
        title: "API Performance Cache Layer",
        description: "Implementación de una capa de caché de Redis para reducir la latencia de una API RESTful construida en Node.js/Express. Incluye lógica de expiración de caché y manejo de datos inconsistentes.",
        tags: ['Node.js', 'Express', 'Redis', 'Caching', 'Performance', 'DevOps'],
        imageUrl: p2Image,
        liveUrl: 'https://api-performance-tester.com',
        githubUrl: 'https://github.com/tu_usuario/api-cache-repo',
        impact: 'Redujo la latencia promedio de respuesta de la API de 500ms a 80ms para el 90% de las peticiones repetidas.',
    },
];

const allTags = projectsData.flatMap(project => project.tags);
export const projectFilters = ['Todos', ...new Set(allTags)];