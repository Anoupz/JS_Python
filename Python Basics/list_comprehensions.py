"""
    List comprehensions are a way to quickly create a list with Python.
"""

my_name = "Anoop"

my_list = [char for char in my_name]

print(my_list)

my_list2 = [num for num in range(0, 100)]
print(my_list2)

my_list3 = [num for num in range(0, 100) if num % 2 == 0]

print("Even numbers:")

print(my_list3)


print("set comprehension")


"""
 Set comprehensions are a unique way to quickly create a set with Python.
"""

my_set = {char for char in "hello"}
print(my_set)

"""
    Dictionary comprehensions are a unique way to quickly create a dictionary with Python.
"""

print("Dictionary comprehension")

simple_dict = {"a": 1, "b": 2}
my_dict = {key: value**2 for key, value in simple_dict.items() if value % 2 == 0}

print(my_dict)


"""
    make a list as a dictionary
"""

my_dict = {num: num * 2 for num in [1, 2, 3]}

print(my_dict)


"""
    example to find the duplicates in the list
"""

some_list = ["a", "b", "c", "b", "d", "m", "n", "n"]

duplicates = list(set([x for x in some_list if some_list.count(x) > 1]))

print(duplicates)
