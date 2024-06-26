# AvilaTekPrueba

## Instalación
``` bash
npm install
```
``` bash
crea en el repo el archivo .env para las variables de entorno (fuera de src)
```

En el repositorio se encuentra un archivo .env.example el cual deberás copiar y pegar en el archivo .env  y poner el user y password que creé para que todos puedan entrar

``` bash
MONGO_URL ='mongodb+srv://user:password@prueba0.pey2qxj.mongodb.net/?retryWrites=true&w=majority&appName=Prueba0'
PORT=3050
JWT_SECRET='lalela'
```

y cambiar el user y password. Creé una para que puedan acceder.

Ya después de esto pueden correr la aplicación.

``` bash
npm start
```


user:**avila**

password:**tek**

# Swagger

Luego de poder ejecutar localmente la API, pueden acceder a los endpoints en el swager en  http://localhost:3050/api-docs/ (es el puerto que configuré por defecto).

![image](https://github.com/argotte/AvilaTekPrueba/assets/74399264/08eb1e30-4bcd-49df-bad0-b66a466db06e)

![image](https://github.com/argotte/AvilaTekPrueba/assets/74399264/debd538c-88ed-4cee-a4cf-3ceec6e820aa)

Tal y como lo pide la prueba, los endpoints de orders solo pueden usarse por usuarios autenticados (es decir, al introducir al jwt. Debes registrarte y logear un usuario para tener tu token).
Las úrdenes tienen marcado el timestamp indicando la fecha y hora de cuándo fue realizado.



# Estructura de carpetas
Sigue el patrón de diseño MVC y la estructura de un proyecto Node.js/Express típico.

Modelo: están en la carpeta src/models/ y se comunican con la base de datos.

"Vista": En una aplicación web tradicional, las vistas son las plantillas que se renderizan en el lado del cliente. En este caso, como se trata de una API,  las "vistas" son realmente las respuestas JSON que la API envía.

Controlador: en la carpeta src/controllers/ y definen cómo la aplicación responde a diferentes solicitudes HTTP.

El proyecto sigue una estructura de proyecto Node.js/Express típica:

src/: Contiene todo el código fuente de tu aplicación.

routes/: Define las rutas de tu aplicación.

services/: Contiene la lógica de negocio de la aplicación.

utils/: Contiene funciones de utilidad, como manejadores de errores.

interfaces/: Define las interfaces TypeScript utilizadas en la api.

models/: Define los modelos de datos de tu aplicación.

middleware/: Contiene middleware de Express que puedes usar en tus rutas.

index.ts: Es el punto de entrada de la aplicación.

Se utiliza las variables de entorno para la configuración (como la URL de MongoDB), lo cual es una buena práctica para mantener seguros los datos sensibles. También se usa Swagger para documentar la API, lo cual es una excelente práctica para que sea más fácil de usar y entender.

Como con cualquier elección de diseño, hay trade-offs y puede que no sea la mejor elección para todas las situaciones. En este caso, esta estructura y patrón de diseño son una buena elección para desarrollar una API de manera rápida y facil de mantener. 


