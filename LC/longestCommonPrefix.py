"""
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

https://leetcode.com/problems/longest-common-prefix/

"""


def longest_common_prefix(strs):
    prefix = ""
    if not strs:
        return prefix

    l = zip(*strs)
    for i in l:
        if len(set(i)) == 1:
            prefix += i[0]
        else:
            break
    return prefix


print(longest_common_prefix(["flower", "flow", "flight"]))

l = list(zip(*["flower", "flow", "flight"]))
print(l)
for i in l:
    print(set(i))
