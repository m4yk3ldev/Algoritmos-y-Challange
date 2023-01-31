# Resta sin restar

## Logica
Para hacer esta operación, primero hay que tener en cuanta que la resta es cuando uno le quita un valor a otro numero.

### Ejemplo

Si tenemos 5 manzanas y regalamos 2 manzanas nos quedan 3 manzanas.

```js

5-3 = 2

```

### Ejemplo en JS

```js
/**
 * @param {number} a
 * @param {number} b
 */
function sub(a, b) {
  let value = 0;
  while (a > b) {
    b++;
    value++;
  }
  return value;
}
```

### Ejemplo en Python
```python
def sub(a: int, b: int):
    value = 0
    while a > b:
        b += 1
        value += 1
    return value
```