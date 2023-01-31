def isNumberPerfect(n: int):
    sum = 0
    for i in range(1, n):
        if n % i == 0:
            sum += i
    return sum == n


print(isNumberPerfect(6))
