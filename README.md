# CODEa UNI - React Native Coding Challenge - Star Wars App

Hola! Este es un coding challenge para CODEa UNI, realice el desarrollo de una aplicación de Star Wars usando React Native y la api de SWAPI.

## Tecnologias y herramientas utilizadas

- React Native CLI
- TypeScript
- Redux Toolkit
- React Navigation
- React Native Vector Icons
- React Native Safe Area Context
- SWAPI API: https://swapi.py4e.com/

## Estructura de la aplicación

La aplicación se divide en dos pantallas principales:

- **HomeScreen**: Presenta una lista de películas, planetas y personajes.
- **SearchScreen**: Permite buscar personajes por nombre.

Para visualizar detalles de cada contenido:

- **ContentDetailsScreen**: Presenta detalles de una película, planeta o personaje.

## Inicialización en modo desarrollo (debug mode)

Primero asegurate de realizar la correcta configuracion de React Native CLI: https://reactnative.dev/docs/set-up-your-environment

Para inicializar la aplicación, primero debes clonar el repositorio utilizando la terminal con `git clone https://github.com/facumm1/star-wars-app.git` y luego entrar en la carpeta raíz del proyecto con `cd star-wars-app`.

Luego instala las dependencias necesarias con `yarn install`.

Una vez finalizada la instalación, para correr la aplicación en tu emulador o movil android, debes correr `yarn android` en la carpeta raíz del proyecto.

## Generación de un APK

Para generar un APK, a traves de la terminal y desde la carpeta raiz, debes ingresar a la carpeta android con `cd android` y luego correr el comando `./gradlew assembleRelease` para generar el APK.

La ruta donde se generara el archivo APK es `app/build/outputs/apk/release/apk-release.apk`. Puedes cambiar libremente el nombre del archivo si lo deseas pero no su formato.

## Utilización de la aplicación

**Pantalla principal**
En la pantalla principal, podrás ver una lista de películas, planetas o personajes. Puedes cambiar el contenido que se muestra utlizando los botones de selección en la parte superior de la pantalla.

Presionando las imagenes, podras ver más detalles sobre la película, planeta o personaje seleccionada.

Tambien puedes consultar el texto de introduccion de la película o las apariciones en ciertas peliculas de los personajes.

Algunas imagenes de ejemplo:

[https://i.imgur.com/l6ZJhbF]
[https://i.imgur.com/E25OGjt] [https://i.imgur.com/ZltsZ2x]
[https://i.imgur.com/X5hkLpK] [https://i.imgur.com/6hDwePk]

**Pantalla de búsqueda**
En la pantalla de búsqueda, puedes buscar personajes por su nombre. Recuerda que para iniciar la busqueda debes escribir al menos 3 caracteres.

Tambien puedes consultar por las apariciones de un personaje en ciertas películas.

Algunas imagenes de ejemplo:

[https://i.imgur.com/4iLkgAs] [https://i.imgur.com/yeK0eWy]
[https://i.imgur.com/6hDwePk]
