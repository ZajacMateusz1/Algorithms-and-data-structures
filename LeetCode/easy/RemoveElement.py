# https://leetcode.com/problems/remove-element/description/

# Złożoność:
# Czas: O(n) - Jedna iteracja
# Pamięć: O(1) - Tylko zmienne pomocnicze


# Moja implementacja:
def removeElement(nums: list[int], val: int) -> int:
    i = 0
    j = len(nums) - 1
    k = 0
    while i <= j:
        if nums[i] == val:
            if nums[j] != val:
                nums[i], nums[j] = nums[j], nums[i]
                i += 1
                k += 1
            else:
                j -= 1
        else:
            i += 1
            k += 1
    return k


print(removeElement([3, 2, 2, 3], 3))  # nums = [2, 2, _, _]
print(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))  # nums = [0, 1, 4, 0, 3, _, _, _]
