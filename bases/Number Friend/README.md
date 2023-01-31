# Números amigos
## Logica
Los números amigos son aquellos que es igual a la suma de los múltiplos del otro número
### Ejemplo
```py
220 es divisible entre (1,2,4,5,10,11,20,22,44,55,110)
1 + 2 + 4 + 5 + 10 + 11 + 20 + 22 + 44 + 55 + 110 = 284
entonces 220 es amigo de 284
```

## Ejemplo en JS

```js
/**
 * @param {number} a
 * @param {number} b
 */
function isNumberFriend(a, b) {
  if (a === 0 || b === 0) {
    return false;
  }
  let sum = 0;
  for (let i = 0; i < a; i++) {
    if (a % i === 0) {
      sum += i;
    }
  }
  return sum === b;
}
```

## Ejemplo en Python

```py
def isNumberFriend(a: int, b: int):
    if a == 0 or b == 0:
        return False
    sum = 0
    for i in range(1, a):
        if a % i == 0:
            sum += i
    return sum == b
```