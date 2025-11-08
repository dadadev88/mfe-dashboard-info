Contexto del Problema: Imagina que estamos construyendo un dashboard financiero para nuestros usuarios. Uno de los requerimientos es mostrar un widget que combine información del clima en su ciudad con el precio actual de Bitcoin, para que puedan ver datos relevantes de un solo vistazo. Tu tarea es construir el BFF y, opcionalmente, el componente visual para esta funcionalidad.

### 1. Requerimiento Principal: Backend-for-Frontend (BFF)
El objetivo principal es crear un servicio BFF que sirva como intermediario entre el frontend y dos APIs externas.
APIs a consumir:
- 1. API del Clima: Utiliza una API gratuita como OpenWeatherMap o WeatherAPI. Deberás registrarte para obtener una API key gratuita.
- 2. API de Precio de Bitcoin: Usa un endpoint público como el de CoinGecko o CoinDesk.

Tarea:
- Crea un único endpoint en tu BFF
- Internamente, tu servicio debe:
  - 1. Llamar a la API del clima con la ubicación proporcionada.
  - 2. Llamar a la API de Bitcoin para obtener el precio actual en USD.
- El endpoint debe combinar y transformar las respuestas en una única estructura JSON simplificada.

### 2. Requerimiento: construir una arquitectura escalable con Micro Frontends (MFE) o con una arquitectura propuesta por el desarrollador.

Se debe crear una arquitectura escalable frontend, se pide crear el scaffolding para que múltiples equipos puedan trabajar sobre ella, por lo tanto la arquitectura ha ser escalable, tanto a nivel de código y proyecto, así como también a nivel de infraestructura, por ejemplo considerar costos y explicar por se tomaron las decisiones.

### 3. Uso de Inteligencia Artificial (IA)
Está permitido y fomentado el uso de herramientas de IA generativa (como ChatGPT, GitHub Copilot, etc.) para asistir en esta prueba. Consideramos que el uso eficiente de la IA es una habilidad moderna y valiosa.
Requerimiento para la evaluación del uso de IA:
- En el archivo README.md de tu repositorio, crea una sección llamada "Registro de Prompts de IA".
- En esta sección, debes documentar los prompts usados por el usuario. Se evaluará:
  - La claridad y efectividad de tus prompts.
  - Tu capacidad para refinar y adaptar las sugerencias de la IA en lugar de solo copiar y pegar.
  - Cómo utilizaste la IA para acelerar tareas o explorar soluciones.
  - LLM Utilizados y ¿por que se utilizaron?

### 4. Criterios de Evaluación
- Calidad del Código: Código limpio, legible y bien estructurado.
- Diseño y Arquitectura: La elección de la estructura del proyecto.
- Manejo de Errores: Cómo tu BFF maneja fallos en las llamadas a las APIs externas (ej. timeouts, errores 4xx/5xx).
- Pruebas (Testing)(Opcional): La inclusión de pruebas unitarias o de integración es un plus muy valorado.
- Documentación: Un README.md claro que explique cómo instalar dependencias y ejecutar el proyecto.
- Uso de IA: La calidad y la estrategia detrás de los prompts utilizados.


Realizar hasta donde alcance el tiempo y si se quiere agregar algo aparte de lo recomendado y requerido por el ejercicio se cuenta con total libertad de hacerlo, pero esto deberá ser explicado.