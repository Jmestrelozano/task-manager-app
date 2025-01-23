```markdown
# Proyecto Next.js - Gestión de Tareas

Este proyecto es una aplicación de gestión de tareas construida con **Next.js**, **TypeScript**, **Tailwind CSS**, **Zustand** para la gestión de estado, **NextAuth** para autenticación, **React Hook Form** para formularios y **Axios** para las llamadas a la API. Además, se implementaron pruebas utilizando **Jest** y **React Testing Library**.

## Requisitos previos

Asegúrate de tener instalados los siguientes programas en tu máquina:

- Node.js (preferiblemente la última versión LTS)
- npm o yarn (gestor de paquetes)

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone <url-del-repositorio>
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd nombre-del-proyecto
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Ejecuta el proyecto en modo desarrollo:

   ```bash
   npm run dev
   ```

   Esto iniciará la aplicación en `http://localhost:3000`.

## Estructura del Proyecto

- **/pages**: Contiene las páginas principales del proyecto.
- **/components**: Componentes reutilizables de la interfaz de usuario.
- **/services**: Servicios con Axios para interactuar con el backend.
- **/db**: Lógica de negocio y almacenamiento simulado de tareas.
- **/hooks**: Custom hooks que encapsulan lógica reutilizable.
- **/store**: Implementación de Zustand para la gestión del estado global.

## Endpoints

Los siguientes son los endpoints disponibles para interactuar con el backend:

### `GET /api/tasks`

Obtiene la lista de todas las tareas.

**Respuesta Exitosa:**
```json
[
  {
    "_id": "1",
    "title": "Tarea 1",
    "description": "Descripción de la tarea 1",
    "stage": "pendiente",
    "priority": "alta",
    "date": "2025-01-23T00:00:00.000Z",
    "createdAt": "2025-01-23T00:00:00.000Z",
    "updatedAt": "2025-01-23T00:00:00.000Z"
  }
]
```

### `POST /api/tasks`

Crea una nueva tarea.

**Cuerpo de la solicitud:**
```json
{
  "title": "Tarea nueva",
  "description": "Descripción de la nueva tarea",
  "stage": "pendiente",
  "priority": "alta",
  "date": "2025-01-23T00:00:00.000Z"
}
```

**Respuesta Exitosa:**
```json
{
  "_id": "2",
  "title": "Tarea nueva",
  "description": "Descripción de la nueva tarea",
  "stage": "pendiente",
  "priority": "alta",
  "date": "2025-01-23T00:00:00.000Z",
  "createdAt": "2025-01-23T00:00:00.000Z",
  "updatedAt": "2025-01-23T00:00:00.000Z"
}
```

### `PUT /api/tasks/:id`

Actualiza una tarea existente.

**Cuerpo de la solicitud:**
```json
{
  "title": "Tarea actualizada",
  "description": "Descripción de la tarea actualizada",
  "stage": "completada",
  "priority": "media",
  "date": "2025-01-23T00:00:00.000Z"
}
```

**Respuesta Exitosa:**
```json
{
  "_id": "1",
  "title": "Tarea actualizada",
  "description": "Descripción de la tarea actualizada",
  "stage": "completada",
  "priority": "media",
  "date": "2025-01-23T00:00:00.000Z",
  "createdAt": "2025-01-23T00:00:00.000Z",
  "updatedAt": "2025-01-23T00:00:00.000Z"
}
```

### `DELETE /api/tasks/:id`

Elimina una tarea existente.

**Respuesta Exitosa:**
```json
[
  {
    "_id": "2",
    "title": "Tarea nueva",
    "description": "Descripción de la nueva tarea",
    "stage": "pendiente",
    "priority": "alta",
    "date": "2025-01-23T00:00:00.000Z",
    "createdAt": "2025-01-23T00:00:00.000Z",
    "updatedAt": "2025-01-23T00:00:00.000Z"
  }
]
```

## Autenticación

El proyecto utiliza **NextAuth** para gestionar la autenticación. Puedes iniciar sesión con las siguientes credenciales:

- **Correo Electrónico**: `user@example.com`
- **Contraseña**: `password123`

## Tecnologías Utilizadas

- **Next.js** (versión más reciente)
- **TypeScript**
- **Tailwind CSS** (para el diseño)
- **React Hook Form** (para gestionar formularios)
- **NextAuth** (para la autenticación)
- **Zustand** (para la gestión de estado global)
- **Axios** (para las solicitudes HTTP)
- **Jest** y **React Testing Library** (para las pruebas)

## Detalles de Implementación

- **Backend**: El backend está gestionado por **Next.js** utilizando API Routes para gestionar las tareas. Estas API permiten crear, obtener, actualizar y eliminar tareas de forma sencilla.
  
- **Autenticación**: Se utilizó **NextAuth** para facilitar el proceso de inicio de sesión. El sistema de autenticación incluye una verificación con credenciales predeterminadas.
  
- **Gestión de Estado**: Se utiliza **Zustand** para almacenar y gestionar el estado de las tareas de manera eficiente y accesible desde cualquier componente.
  
- **Modularización de Componentes**: Los componentes de la interfaz de usuario están modulados para mantener el código organizado y fácil de mantener.

- **Axios**: La lógica de negocio y las llamadas a la API se manejan a través de Axios, separando claramente la lógica de negocio de la interfaz de usuario.

## Pruebas

El proyecto incluye pruebas unitarias y de integración utilizando **Jest** y **React Testing Library**. Las pruebas cubren los componentes y las interacciones con el backend a través de los servicios.

## Estilos

El proyecto utiliza **Tailwind CSS** para los estilos, lo que permite un diseño limpio y responsivo con una configuración mínima.

## Despliegue

El proyecto ha sido desplegado en **Vercel**. Puedes acceder a la versión en producción a través del siguiente enlace:

[Enlace a la aplicación en producción](https://task-manager-app-vi3q.vercel.app/)

## Repositorio

El código fuente del proyecto está disponible en GitHub:

[Repositorio en GitHub](https://github.com/Jmestrelozano/task-manager-app)

## Resultados

A continuación se muestran algunas capturas de pantalla del proyecto en funcionamiento.

### Login

![Login](https://res.cloudinary.com/dwx09pwkr/image/upload/v1737653685/seek/vuhavwku4hnoqvvpz1ri.png)

![Login](https://res.cloudinary.com/dwx09pwkr/image/upload/v1737653685/seek/nev8vne4nlm6ui5phxlt.png)

![login](https://res.cloudinary.com/dwx09pwkr/image/upload/v1737653686/seek/kzndbngxg52fimgoxujp.png)

### Vista de Tareas

![Vista de Tareas](https://res.cloudinary.com/dwx09pwkr/image/upload/v1737653687/seek/tiulas3i2rwuc4orndhu.png)

![Vista de Tareas](https://res.cloudinary.com/dwx09pwkr/image/upload/v1737653685/seek/di4qtwymqli6yrhjpk56.png)

### Filtrado de Tareas

![Filtrado de Tareas](https://res.cloudinary.com/dwx09pwkr/image/upload/v1737653686/seek/d4hzrhtaoxfplkx4tlfd.png)

![Filtrado de Tareas](https://res.cloudinary.com/dwx09pwkr/image/upload/v1737653686/seek/za9ga4wap5huwqi6iebn.png)

### Formulario de Creación de Tareas

![Formulario de Creación de Tareas](https://res.cloudinary.com/dwx09pwkr/image/upload/v1737653686/seek/ktmwzfjsmdj5hnk64gm7.png)

### Modal de Edición de Tareas

![Modal de Edición de Tareas](https://res.cloudinary.com/dwx09pwkr/image/upload/v1737653784/seek/itmat0fvyoqbzdrjcwls.png)

### Modal de Eliminacion de Tareas

![Modal de Eliminacion de Tareas](https://res.cloudinary.com/dwx09pwkr/image/upload/v1737653686/seek/fhfhtbzocldb3o9i2bev.png)

![Modal de Eliminacion de Tareas](https://res.cloudinary.com/dwx09pwkr/image/upload/v1737653686/seek/flwgjojfqqicx6phfczl.png)

> Las imágenes de arriba muestran cómo se ve el proyecto en diferentes etapas.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar el proyecto, por favor crea un "Pull Request" con tus cambios.

## Licencia

Este proyecto está bajo la licencia MIT.
```