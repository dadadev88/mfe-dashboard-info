## Contexto


## Componentes
> Crea dentro del MF <NOMBRE_DEL_MF> una interfaz en modo de widget para mostrar información relacionada <INFORMACION_DEL_WIDGET>, usa TailwindCSS para los estilos (no lo instales ya que lo tengo importado desde CDM mediante HTML)

## BFF

### Generación de proyecto
Crea una nueva carpeta en el root llamada be-dashboard, en este proyecto crearemos una API Rest usando Express. Ordena el proyecto usando una arquitectura hexagonal sencilla, donde crearas tendremos como pricipales entidades Crypto y Wheather, para cada una de estas crea:
- Repositorio (interface y implementacion)
- Servicio (interface y implementacion)
- Controlador (interface y implementacion)

Consideraciones:
- Usa TypeScript
- Validaciones usando yup
- Crea variables de entornos para manejar las URLs y claves de las APIs externas (dotenv)
- Implementa manejo de errores con try catch