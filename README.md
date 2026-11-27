# DevTree · Frontend

Interfaz web de DevTree, una plataforma para reunir tus redes sociales en un solo enlace público.

API: [deploy_devtree_backend](https://github.com/rubendlpz/deploy_devtree_backend)

## Funcionalidades

- Registro e inicio de sesión
- Consulta de disponibilidad del nombre de usuario (*handle*)
- Edición de handle, descripción e imagen de perfil
- Enlaces para Facebook, GitHub, Instagram, X, YouTube, TikTok, Twitch y LinkedIn
- Activación de enlaces y orden mediante arrastrar y soltar
- Página pública de cada usuario en `/:handle`

## Tecnologías

React 19 · TypeScript · Vite · Tailwind CSS 4 · TanStack Query · React Router · React Hook Form · dnd-kit · Axios · Sonner

## Instalación

Requisitos: Node.js 24 y el [backend](https://github.com/rubendlpz/deploy_devtree_backend) en ejecución.

```bash
git clone https://github.com/rubendlpz/deploy_devtree_frontend.git
cd deploy_devtree_frontend
npm install
```

Crea el archivo `.env.local`:

```env
VITE_API_URL=http://localhost:4000
```

Inicia el servidor de desarrollo en `http://localhost:5173`:

```bash
npm run dev
```

### Con Docker (entorno de desarrollo)

```bash
docker compose up --build
```

## Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Verificación de tipos y compilación |
| `npm run preview` | Vista previa de la compilación |
| `npm run lint` | Análisis con ESLint |

## Rutas

| Ruta | Pantalla |
|---|---|
| `/` | Inicio y búsqueda de handle |
| `/auth/register` | Registro |
| `/auth/login` | Inicio de sesión |
| `/admin` | Gestión de enlaces |
| `/admin/profile` | Edición del perfil |
| `/:handle` | Perfil público |

## Estructura

```
src/
├── api/          # Llamadas a la API
├── components/   # Componentes reutilizables
├── config/       # Cliente Axios
├── data/         # Redes sociales disponibles
├── layouts/      # Diseños de autenticación y administración
├── types/        # Tipos de TypeScript
├── utils/        # Utilidades
└── views/        # Pantallas
```

## Autor

Rubén López · [@rubendlpz](https://github.com/rubendlpz)
