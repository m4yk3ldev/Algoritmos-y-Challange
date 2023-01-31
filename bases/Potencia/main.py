def pow(a: int, b: int):
    if b == 0:
        return 1
    if b == 1:
        return a
    for i in range(a):
        a *= a
    return a


print(pow(2, 3))
