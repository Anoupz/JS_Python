# This is a graph problem.
# We can use a directed graph to represent the names.


import networkx as nx


def find_longest_name_chain(names):
    # create a directed graph
    graph = nx.DiGraph()
    for name in names:
        graph.add_node(name)

    # add directed edges between vertices whose names form a chain
    for i in range(len(names)):
        for j in range(i + 1, len(names)):
            if names[i].last_name == names[j].first_name:
                graph.add_edge(names[i], names[j])

    # find the longest path in the graph
    longest_path = nx.dag_longest_path(graph)

    return len(longest_path)


class Name:
    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name


name_list = [
    ("a", "b"),
    ("b", "c"),
    ("c", "d"),
    ("d", "e"),
    ("x", "y"),
    ("y", "z"),
    ("z", "j"),
    ("j", "k"),
    ("k", "l"),
]

composite_names = []

for first, last in name_list:
    name = Name(first, last)
    composite_names.append(name)


print(find_longest_name_chain(composite_names))
