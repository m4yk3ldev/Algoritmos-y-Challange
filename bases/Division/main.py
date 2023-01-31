def main(a: int, b: int):
    value = 0
    while a >= b:
        value += 1
        a -= b
    return value


if __name__ == '__main__':
    print(main(18, 3))
