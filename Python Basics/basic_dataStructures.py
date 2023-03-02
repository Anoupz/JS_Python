"""
    Basic Data Structures
"""

# int

age = 10
name = "Anoop"
my_list = [1, 2, 3, 4, 5]
my_dict = {"name": "Anoop", "age": 38}
my_tuple = (1, 2, 3, 4)

print(name.capitalize())
print(name.upper())

print(my_list[1])  # will print 2 from index 1

my_list[1] = 3  # will update the value

print(my_tuple[1])  # will print 2 from index 1

"""
    Tuples are immutable    
"""

# my_tuple[1] = 10  # will throw an error

my_dict["name"] = "Anoop Narayanan"  # will update the value
my_dict["address"] = (
    "123 Main St",
    "New York",
    "NY",
    "10001",
)  # will add a new key value pair

print(my_dict)


# Loop thru string
for n in name:
    print(n)

print(age is 10)


def hello():
    print("Hello World")


hello()

# pure functions are functions that do not
#  modify the state of the program or any external variables


def add(a, b):
    return a + b


print(add(1, 2))


"""
    functions with args and kargs
"""


def simple_function(*args, **kargs):
    print(args)
    print(kargs)


simple_function(1, 2, 3, 4, 5, name="Anoop", age=38)


"""
    sorted function
    
"""
data = (1, 2, 3, 4, 5)

print(sorted(data))

dict_data = [{"name": "Anoop", "age": 38}, {"name": "Akila", "age": 35}]

tuple_data = [(3, 4), (1, 2), (5, 6)]

sorted_dict_data = sorted(dict_data, key=lambda x: x["age"])

print(sorted_dict_data)

sorted_tuple_data = sorted(tuple_data, key=lambda x: x[1])
print(sorted_tuple_data)
