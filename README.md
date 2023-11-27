RollingVet

Es una página web realizada con ReactJS de temática veterinaria, podremos administrar pacientes y turnos, darles de alta, editarlos y borraros. En la misma se utilizan herramientas como React Router para manejar las rutas que nos permitan navegar entre las distintas páginas y API externa deployada en Heroku.

✨
Comandos

Cuando se clone este repositorio se deben ejecutar los siguientes comandos:

Para instalar las dependencias
npm i

Para ejecutar nuestra app de react
npm start

------------------------------------------------------------------------------------

FLUJO DE TRABAJO COLABOLADORES:

PASO 1: Hacer Fork del Repositorio:

En GitHub, navega al repositorio principal: https://github.com/tomascesar8/veterinaria-front 

Haz clic en el botón "Fork" en la esquina superior derecha.

*Esto creará una copia del repositorio en tu propia cuenta de GitHub.

PASO 2: Clonar el Repositorio Propio:

Luego, cada miembro del equipo clona su propio fork a su máquina local:

git clone https://github.com/tu_usuario/veterinaria-front.git

*Reemplazar 'tu_usuario' con tu nombre de usuario en GitHub.

PASO 3: Crear una Rama Local para Trabajar:

Entra al directorio del repositorio clonado (cd veterinaria-front)

Crea y cambia a una nueva rama para tu tarea:

git checkout -b nombre_de_tu_rama

PASO 4: Mantener Actualizado el Código Local:

Antes de comenzar a trabajar en su rama, asegúrense de tener la versión más reciente de las ramas main y develop del repositorio principal:

git pull origin develop
git pull origin main

Esto actualiza tu rama local con los cambios más recientes del repositorio principal.

PASO 5: Hacer Cambios Locales:

Trabajá en tu rama local, realizá cambios y commits según sea necesario.


PASO 6: Enviar los cambios al repositorio remoto propio (el fork en GitHub):

Envía tus cambios a tu fork en GitHub

git push origin nombre_de_tu_rama

PASO 7: Crear un Pull Request:

-Ve a tu fork en GitHub.
-Creas un Pull Request desde tu rama hacia la rama `develop` del repositorio principal:
-Completa la información del Pull Request:
*describe tus cambio
*revisa que no haya conflictos
*confirmas el la solicitud pull request.

PASO 8: Actualiza tu Fork con Cambios del Repositorio Principal:

Mantene tu fork actualizado con los cambios del repositorio principal 

git fetch origin
git pull origin develop
git pull origin main


Este enfoque ayuda a prevenir conflictos significativos y asegura que tus contribuciones se basen en la versión más reciente del código del proyecto principal. Es un ciclo que se repite antes de iniciar cada nueva tarea o contribución.
