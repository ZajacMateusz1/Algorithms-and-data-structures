def heapSort(arr):
    for i in range(len(arr) // 2 - 1, -1, -1):
        j = i
        while j > 0:
            parentIndex = (j - 1) // 2
            if arr[parentIndex] >= arr[j]:
                break
            arr[parentIndex], arr[j] = arr[j], arr[parentIndex]
            j = parentIndex
    for i in range(len(arr) - 1, 0, -1):
        arr[0], arr[i] = arr[i], arr[0]
        j = 0
        while j < i:
            left = 2 * j + 1
            right = 2 * j + 2
            if left >= i:
                break
            bigger = left
            if right < i:
                if arr[right] > arr[left]:
                    bigger = right
            if arr[bigger] <= arr[j]:
                break
            arr[bigger], arr[j] = arr[j], arr[bigger]
            j = bigger
    return arr


print(heapSort([10, 20, 15, 30, 40]))
print(heapSort(list(range(100, 0, -1))))
