# Multiplicar sin multiplicar

## Lógica
La multiplicación es una suma recurrente , o sea que la multiplicación de a *b es igual a la suma de (a+a) b veces.

### Ejemplo

```
2*3 = 2+2+2

```

### Ejemplo en JS

```js
/**
 * @param {number} a
 * @param {number} b
 */
function Multiply(a, b) {
  let value = 0;
  for (let i = 0; i < a; i++) {
    value += b;
  }
  return value;
}
```