# Ajv
Creación de un servicio web que valide al menos dos JSON diferentes que reciba por dos rutas POST. Para cada ruta: Que devuelva un 200 si el JSON es válido y que devuelva un 400 si el JSON no es válido o por cualquier otro error. 


Este comando inicia el servidor en `localhost` en el puerto `3000`.

## Pruebas con Postman

Para probar las funcionalidades de validación, necesitarás utilizar Postman o cualquier otro cliente de API que permita realizar solicitudes HTTP POST.

1. **Validación de Usuario:**
   - URL: `http://localhost:3000/validateUser`
   - Método: POST
   - Body: Selecciona `raw` y elige `JSON`. Luego, introduce un JSON válido para un usuario. Por ejemplo:
     ```json
     {
       "username": "JohnDoe",
       "age": 30
     }
     ```

2. **Validación de Producto:**
   - URL: `http://localhost:3000/validateProduct`
   - Método: POST
   - Body: Selecciona `raw` y elige `JSON`. Luego, introduce un JSON válido para un producto. Por ejemplo:
     ```json
     {
       "name": "Laptop",
       "price": 999.99
     }
     ```

Envía la solicitud y observa la respuesta. Si el JSON es válido según el esquema correspondiente, recibirás un código de estado HTTP 200. Si no es válido, recibirás un código de estado HTTP 400.

## Notas

- Este proyecto está diseñado solo con fines demostrativos y no debe usarse en producción tal cual.
- Asegúrate de tener Node.js y Postman instalados en tu máquina para probar este proyecto.

