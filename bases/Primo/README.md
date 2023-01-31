# Números Primos
## Logica
Los números primos son los números que solo son divisibles entre el y 1

### Ejemplo
```
7 = 7 * 1
```

### Ejemplo en JS

```js
/**
 * @param {number} n
 */
function isPrimo(n) {
  if (n % 2 == 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
```

### Ejemplo en Python
```python
import math

def isPrime(n: int):
    if n % 2 == 0:
        return False
    for i in range(3, int(math.sqrt(n)) + 1):
        if n % i == 0:
            return False
    return True

```

