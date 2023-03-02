"""
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
"""


def reverseString(s) -> None:
    """
    Do not return anything, modify s in-place instead.
    """
    half_len = len(s) / 2
    for i, c in enumerate(s):
        if i < half_len:
            s[i], s[length - 1] = s[length - 1], s[i]
            length -= 1
    print(s)


s1 = ["h", "e", "l", "l", "o"]
s2 = ["h", "e", "l", "l", "o", "s"]

reverseString(s1)
reverseString(s2)
reverseString(["1", "2"])
