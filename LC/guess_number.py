def guessNumber(self, n: int) -> int:

    r = n+1
    l = 1
    while (r >= l):
        mid = l+(r-l)//2
        if guess(mid) == 0:
            return mid
        elif guess(mid) == -1:
            r = mid-1
        else:
            l = mid+1
