"""
    custom decorators
"""


import time


def performance(fn):
    def wrapper(*args, **kargs):
        t1 = time.time()
        result = fn(*args, **kargs)
        t2 = time.time()
        print(f"it took {t2-t1} s")
        return result

    return wrapper


@performance
def long_list_loop():
    for i in range(1000000):
        i * 2


long_list_loop()
