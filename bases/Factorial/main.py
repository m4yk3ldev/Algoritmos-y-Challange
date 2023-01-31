def Factorial(a: int):
    if a == 0:
        return 1
    value = 1
    for i in range(a):
        value *= i + 1
    return value


print(Factorial(10))
