import re


def is_palindrome(s):
    # Write your code here
    # Tip: You may use the code template provided
    # in the two_pointers.py file
    s = re.sub(r"[\W_]", "", s).lower()
    left = 0
    right = len(s) - 1
    while left < right:
        if s[left] != s[right]:
            return False
        else:
            left += 1
            right -= 1
    return True


print(is_palindrome("kayak"))
print(is_palindrome("ab_a"))
