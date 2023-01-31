def isNumberFriend(a: int, b: int):
    if a == 0 or b == 0:
        return False
    sum = 0
    for i in range(1, a):
        if a % i == 0:
            sum += i
    return sum == b


print(isNumberFriend(220, 284))
