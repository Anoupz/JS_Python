"""You can use this class to represent how classy someone
or something is.
"Classy" is interchangable with "fancy".
If you add fancy-looking items, you will increase
your "classiness".
Create a function in "Classy" that takes a string as
input and adds it to the "items" list.
Another method should calculate the "classiness"
value based on the items.
The following items have classiness points associated
with them:
"tophat" = 2
"bowtie" = 4
"monocle" = 5
Everything else has 0 points.
Use the test cases below to guide you!"""


class Classy(object):
    def __init__(self):
        self.items = []
        self.classyItems = ["tophat", "bowtie", "monocle"]

    def addItem(self, value):
        self.items.append(value)

    def getClassiness(self):
        totalClassiness = 0
        for value in self.items:
            if value == "tophat":
                totalClassiness += 2
            elif value == "bowtie":
                totalClassiness += 4
            elif value == "monocle":
                totalClassiness += 5

        return totalClassiness


# Test cases
classy = Classy()

# Should be 0
print(classy.getClassiness())

classy.addItem("tophat")
# Should be 2
print(classy.getClassiness())

classy.addItem("bowtie")
classy.addItem("jacket")
classy.addItem("monocle")
# Should be 11
print(classy.getClassiness())

classy.addItem("bowtie")
# Should be 15
print(classy.getClassiness())
