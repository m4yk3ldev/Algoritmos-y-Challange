# Factorial
## Logica
El factorial de un numero es la multiplicación de todos su succession de números en retroceso
### Ejemplo
```python

factorial(5) = 5 * 4 *3 *2 *1

```

## Ejemplo en JS
```js
/**
 * @param {number} a
 */
function Factorial(a) {
  if (a === 0) return 1;
  let value = 1;
  for (let i = 0; i < a; i++) {
    value *= i + 1;
  }
  return value;
}
```

## Ejemplo en Python

```py
def Factorial(a: int):
    if a == 0:
        return 1
    value = 1
    for i in range(a):
        value *= i + 1
    return value
```