def sub(a: int, b: int):
    value = 0
    while a > b:
        b += 1
        value += 1
    return value


print(sub(5, 3))
