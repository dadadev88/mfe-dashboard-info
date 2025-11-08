## MFE

### Componentes
- Crea dentro del MF <NOMBRE_DEL_MF> una interfaz en modo de widget para mostrar información relacionada <INFORMACION_DEL_WIDGET>, usa TailwindCSS para los estilos (no lo instales ya que lo tengo importado desde CDM mediante HTML)
- En el MFE shell implementa el hook useDashboard para obtener los datos de Crypto y Wheather

### Implementación de pruebas
- Implementemos pruebas unitarias, para esto comencemos con el proyecto mfe-dashboard-shell, configura Jest con ReactTestingLibrary
- Implementa prueba unitaria al hook useDashboard, considera que hay una llamada asyncrona (fecth) la cual debemos mockear para evitar realizar una petición HTTP.
- Implementa prueba unitaria al componente WidgetDashboard. Crea el archivo de test en el mismo directorio que el componente
- El tests cuando isLoanding es false, no me está funcionando. Si veo en la consola que se renderiza los elementos con data-testid esperado pero el test no
