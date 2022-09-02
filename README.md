En este desafío debes crear una función que usando fetch haga llamadas a APIS  y debe contar las siguientes características:

- Realice la transformación a JSON
- Solo permitir hacer peticiones GET
- Recibir como parámetro de entrado un string que será la URL
- Validar que una URL seá correcta, si no lo es debe lanzar un error con el mensaje "Invalid URL"
- Si la URL tiene el formato correcto pero no existe debería lanzar un error con el mensaje "Something was wrong"

La solución debería tener un input como el siguiente:

Input

```js
fetchData('https://api.escuelajs.co/api/v1/categories'); // return data in json
fetchData('----'); // Error: Invalid URL
fetchData('https://domain-a.com/api-1'); // Error: Something was wrong
```
