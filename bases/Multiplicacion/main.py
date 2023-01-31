def multiply(a: int, b: int):
    value = 0
    for i in range(b):
        value += a
    return value


print(multiply(5, 2))
