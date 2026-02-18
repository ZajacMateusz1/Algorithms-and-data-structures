# https://leetcode.com/problems/3sum/description/

# Złożoność:
# Czas: O(n^2) - Najpierw sortuję i potem sprawdzam zagnieżdzoną pętlą, ale ostatecznie i tak wyjdzie n^2.
# Pamięć: O(1) - Nie liczę odpowiedzi


# Po sprawdzeniu odpowiedzi:
def threeSum(nums: list[int]) -> list[list[int]]:
    nums.sort()
    answer = []
    for l in range(0, len(nums) - 2):
        if l > 0 and nums[l - 1] == nums[l]:
            continue
        i, j = l + 1, len(nums) - 1
        while i < j:
            if nums[l] + nums[i] + nums[j] == 0:
                answer.append([nums[l], nums[i], nums[j]])
                i += 1
                j -= 1
                while i < j and nums[i - 1] == nums[i]:
                    i += 1
            elif nums[l] + nums[i] + nums[j] > 0:
                j -= 1
            else:
                i += 1
    return answer


print(threeSum([-1, 0, 1, 2, -1, -1, -4]))  # [[-1,-1,2],[-1,0,1]]
print(threeSum([0, 1, 1]))  # []
print(threeSum([0, 0, 0]))  # [[0,0,0]]
print(threeSum([-100, -70, -60, 110, 120, 130, 160]))  # [[-100,-60,160],[-70,-60,130]]
print(threeSum([1, 2, 0, 1, 0, 0, 0, 0]))  # [[0,0,0]]
print(
    threeSum([2, -3, 0, -2, -5, -5, -4, 1, 2, -2, 2, 0, 2, -4, 5, 5, -10])
)  # [[-10,5,5],[-5,0,5],[-4,2,2],[-3,-2,5],[-3,1,2],[-2,0,2]]
