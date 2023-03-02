"""
    Just a scratch pad
"""


def reverseString(s) -> None:
    """
    Do not return anything, modify s in-place instead.
    """
    length = len(s)
    half_len = length / 2
    for i, c in enumerate(s):
        if i < half_len:
            s[i], s[length - 1] = s[length - 1], s[i]
            length -= 1


s = ["h", "e", "l", "l", "o"]
s = ["h", "e", "l", "l", "o", "s"]

reverseString(s)
