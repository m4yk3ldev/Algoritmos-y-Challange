def solution(m):
    r = len(m)
    c = len(m[0])
    ans = []
    for i in range(1, r-1):
        row = []
        for j in range(1, c-1):
            row.append(sum([m[i+k][j+l] for k in [-1, 0, 1]
                       for l in [-1, 0, 1]])//9)
        ans.append(row)
    return ans
