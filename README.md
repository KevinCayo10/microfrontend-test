# Microfrontend Test

Proyecto de referencia para una arquitectura de microfrontends con un backend independiente. Este repositorio contiene tres aplicaciones Angular (shell y remotos), un backend en Node.js/TypeScript y un servidor auxiliar.

## Resumen

- **Propósito:** Ejemplo práctico de integración de microfrontends (MF) con un backend REST, rutas compartidas y despliegue local mediante Docker Compose.
- **Stack principal:** Node.js, TypeScript, Express, Angular, Webpack, Joi (validaciones).

## Estructura del proyecto

Raíz del repositorio:

- `backend/` — API REST en TypeScript (Express). Contiene controladores, servicios, repositorios y validadores.
- `mf-remote/` — Microfrontend remoto (Angular) que expone módulos y componentes para integrarse en la shell.
- `mf-shell/` — Aplicación shell (Angular) que carga microfrontends y gestiona enrutamiento global.
- `server/` — Servidor auxiliar (por ejemplo, para SSR o pruebas de integración).

Estructura relevante (resumida):

backend/ - docker_compose.yml - src/ - application/ - domain/ - insfraestructure/ - adapters/ - persistence/ - validators/

mf-remote/ - src/ - app/ - menus/ (módulo de ejemplo)

mf-shell/ - src/ - app/ (integración de microfrontends)

## Requisitos

- Node.js (v14+ recomendado)
- npm o yarn
- Docker y Docker Compose (opcional, para ejecución con contenedores)

## Instalación (local)

1. Clonar el repositorio

2. Instalar dependencias por cada proyecto:

```bash
# Backend
cd backend && npm install

# Microfrontend remoto
cd ../mf-remote && npm install

# Shell
cd ../mf-shell && npm install

# Server auxiliar (si aplica)
cd ../server && npm install
```

3. Variables de entorno

Cada servicio puede requerir variables en `.env` o configuración en `src/insfraestructure/persistence/loading-env.ts`. Asegúrate de definir la conexión a la base de datos y puertos usados.

## Ejecución

- Ejecutar backend (desarrollo):

```bash
cd backend
npm run dev
```

- Ejecutar microfrontends/Angular (desarrollo):

```bash
cd mf-remote
npm start

cd ../mf-shell
npm start
```

- Ejecutar con Docker Compose (desde `backend/` si está configurado):

```bash
cd backend
docker compose -f docker_compose.yml up --build
```

## Validaciones y utilidades

El proyecto usa `Joi` para validaciones de entrada en el backend. Por ejemplo, `src/insfraestructure/validators/menu.validator.ts` contiene esquemas y middleware para validar `body` y `params`.

## Testing

- Ejecuta los tests unitarios (si existen) desde cada paquete:

```bash
cd backend && npm test
cd mf-remote && npm test
cd mf-shell && npm test
```

## Contribución

1. Abre un issue describiendo el problema o la mejora.
2. Crea una rama con un nombre descriptivo: `feature/descripcion` o `fix/descripcion`.
3. Envía un pull request con descripción clara y pasos para reproducir.

## Buenas prácticas del repo

- Mantener contratos claros entre shell y remotos (API/paths).
- Versionar endpoints y módulos expuestos por microfrontends.
- Centralizar configuración sensible en variables de entorno.

## Contacto

Para dudas o sugerencias, abre un issue o contacta al mantenedor del repositorio.

---

Archivo actualizado automáticamente: este `README.md` provee instrucciones básicas para trabajar y desplegar localmente el ejemplo de microfrontends.
