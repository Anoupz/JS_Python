"""
  Find the two numbers who's sum is the total
"""
"""
  define a function with two parameters
  loop thru the array and store the diff in the dict and 
  if dict has the value return the diff and the value  
"""


def find_sum(list, total):
    result = {}
    for value in list:
        diff = total - value
        if diff in result:
            return [result[diff], value]
        else:
            result[value] = value


def find_sum_index(list, total):
    result = {}
    for i, value in enumerate(list):
        diff = total - value
        if diff in result:
            return [result.get(diff), i]
        else:
            result[value] = i


my_list = [2, 4, 5, 6]
total = 9

print(f" find the value : {find_sum(my_list, total)}")
print("find the sum indexes", find_sum_index(my_list, total))
