# Números perfectos
## Logica
Los números perfectos son aquellos es igual a la suma de sus divisores.

### Ejemplo
```python
 6 = 1+2+3
 (1*2*3) = 1+2+3
```

## Ejemplo en JS
```js
/**
 * @param {number} n
 */
function isNumberPerfect(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      sum += i;
      console.log(i);
    }
  }
  return n === sum;
}
```

## Ejemplo en Python
```python
def isNumberPerfect(n: int):
    sum = 0
    for i in range(1, n):
        if n % i == 0:
            sum += i
    return sum == n
```

