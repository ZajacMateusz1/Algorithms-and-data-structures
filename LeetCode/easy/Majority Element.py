# Given an array nums of size n, return the majority element.

# The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

# Example 1:

# Input: nums = [3,2,3]
# Output: 3
# Example 2:

# Input: nums = [2,2,1,1,1,2,2]
# Output: 2

# Follow-up: Could you solve the problem in linear time and in O(1) space?

# Jeżeli element największy występuje więcej niż n/2 razy, to oznacza, że mogę użyc algorytmu Boyera–Moore’a.
# Ustalam kandydata na element nums[0], jeśli kolejny element == kandydat to dodaję 1, jeśli nie to odejmuję, a jeśli licznik == 0 to zmieniam kandydata.

def majorityElement(nums: list[int]) -> int:
    candidate = nums[0]
    counter = 1
    for i in range(1,len(nums)):
        if nums[i] == candidate:
            counter+=1
        elif nums[i] != candidate and counter == 0:
            candidate = nums[i]
        else: counter-=1
    return candidate

majorityElement([2,2,1,1,1,2,2])