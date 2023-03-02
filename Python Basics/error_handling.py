"""
    Error handling in Python
"""


try:
    age = int(input("What is your age? : "))
    print(age)
except:
    print("Please enter a number")
