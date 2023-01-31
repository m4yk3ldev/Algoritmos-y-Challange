# Potencia
La potencia no es mas que una multiplicación recurrente, o sea que `a^b` es igual a:

```python
a^b = a*a -> b veces

```
Ejemplo

```
5^3 = 5*5*5
```

Ejemplo en JS

```js
/**
 * @param {number} a
 * @param {number} b
 */
function Pow(a, b) {
  if (b === 0) return 1;
  if (b === 1) return a;
  for (let i = 1; i < b; i++) {
    a *= a;
  }
  return a;
}
```

Ejemplo en Python

```py
def pow(a: int, b: int):
    if b == 0:
        return 1
    if b == 1:
        return a
    for i in range(a):
        a *= a
    return a
```