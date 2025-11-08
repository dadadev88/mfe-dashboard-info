## Requisitos
- Node (v18+)
- NPM

## Instalación ambiente local
- Ingresar a la carpeta de cada proyecto y ejecutar el siguiente comando:
  - Instalar dependencias
  ```bash
  npm install
  ```
  - Clonar archivo de variables de entorno:
  ```bash
  cp environments/.local.env.example environments/.local.env
  ```
  - Opcional, configurar variables de entorno en el archivo environments/.local.env.
  - Iniciar el servidor:
  ```bash
  npm run dev
  ```
- Repetir el proceso para cada proyecto.

## Arquitectura del proyecto
- El proyecto consta de 3 micro-frontends ejecutandose en React.
  - `mfe-dashboard-shell`: Shell o contenedor donde se muestra un dashboard con widgets.
  - `mfe-crypto-widget`: Widget que muestra información sobre criptomonedas.
  - `mfe-wheather-widget`: Widget que muestra información sobre el clima.
- Cada micro-frontend tiene su propia carpeta y su propio archivo de variables de entorno.
- La shell se encarga de cargar los widgets (remotes) en el dashboard, mediante la configuración de un archivo de `<ENVIRONMENT_APP>.manifest.json`, donde se debe definir el nombre del widget (module) y la URL del remoteEntry.js. Ejemplo:
  ```json
  {
    "module": "myModule", // nombre del remote
    "remoteEntryUrl": "http://localhost:3002/remoteEntry.js"
  }
  ```
- Los entornos requieren 2 archivos, donde `ENVIRONMENT_APP` es la varirable de entorno del sistema, por ejemplo ejecutando `export ENVIRONMENT_APP=local && webpack-dev-server --config webpack.config.js --mode development`:
  - `<ENVIRONMENT_APP>.manifest.json`: archivo que define los widgets (remotes) que se cargarán en el dashboard.
  - `<ENVIRONMENT_APP>.env`: archivo que define las variables de entorno.
