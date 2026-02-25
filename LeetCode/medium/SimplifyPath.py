from collections import deque

# https://leetcode.com/problems/simplify-path/description/


# Po sprawdzeniu
def simplifyPath(path: str) -> str:
    stack = deque()
    current = ""
    for char in path + "/":
        if char == "/":
            if current == "" or current == ".":
                pass
            elif current == "..":
                if len(stack):
                    stack.pop()
            else:
                stack.append(current)
            current = ""
        else:
            current += char
    return "/" + "/".join(stack)


print(simplifyPath("/home/"))  # "/home"
print(simplifyPath("/home/////foo/"))  # "/home/foo"
print(simplifyPath("/home/user/Documents/../Pictures"))  # "/home/user/Pictures"
print(simplifyPath("/../"))  # "/"
print(simplifyPath("/.../a/../b/c/../d/./"))  # "/.../b/d"
print(simplifyPath("/"))
print(simplifyPath("/a/./b/../../c/"))  # "/c"
print(simplifyPath("/a//b////c/d//././/.."))  # "/a/b/c"
