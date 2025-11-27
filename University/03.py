import random


# Moja przerobiona klasa do mierzenia z pierwszych zajęć
class IterationComplexity:
    def __init__(self, algorithm, testData, isRandomTest):
        self.algorithm = algorithm
        self.averageIterations = 0
        self.iterationResults = []
        self.stdDeviation = 0
        self.relativeError = 0
        self.testData = testData
        self.isRandomTest = isRandomTest

    def computeAverageIterations(self):
        self.averageIterations = sum(self.iterationResults) / len(self.iterationResults)
        print("Average iterations:", round(self.averageIterations, 2))

    def computeStdDeviation(self):
        n = len(self.iterationResults)
        if n <= 1:
            print("Not enough data for standard deviation")
            return

        total = 0.0
        for i in range(n):
            diff = self.iterationResults[i] - self.averageIterations
            total += diff**2
        self.stdDeviation = (total / (n - 1)) ** 0.5

        print("Standard deviation:", round(self.stdDeviation, 2))

    def computeRelativeError(self):
        self.relativeError = (self.stdDeviation / self.averageIterations) * 100
        print(f"Relative error: {round(self.relativeError, 2)}%")

    def runTests(self):
        for n in self.testData:
            for j in range(100):
                if self.isRandomTest:
                    tab = list(random.randint(0, 10000) for _ in range(n))
                else:
                    tab = list(range(n, 0, -1))
                counter = {"value": 0}
                self.algorithm(counter, tab, 0)
                self.iterationResults.append(counter["value"])
            self.computeAverageIterations()
            self.computeStdDeviation()
            self.computeRelativeError()
            self.iterationResults = []


# Metoda do ustawiania elementów listy względem pivota i zwracania jego pozycji
def pivotHelper(counter, tab, start, end):
    pivot = tab[start]
    i = start + 1
    j = end
    while i <= j:
        counter["value"] += 1
        if tab[i] <= pivot:
            i += 1
        elif tab[j] > pivot:
            j -= 1
        else:
            tab[i], tab[j] = tab[j], tab[i]
            i += 1
            j -= 1
    tab[start], tab[j] = tab[j], tab[start]
    return j


# Rekurencyjny QuickSort
def quickSort(counter, tab, start=0, end=None):
    if end == None:
        end = len(tab) - 1
    if start < end:
        pivotIndex = pivotHelper(counter, tab, start, end)
        quickSort(counter, tab, start, pivotIndex - 1)
        quickSort(counter, tab, pivotIndex + 1, end)
    return tab


z = IterationComplexity(quickSort, [100, 1000], True)
y = IterationComplexity(quickSort, [100, 500], False)
print("Random:")
z.runTests()
print("Reversed:")
y.runTests()

# Złożoność czasowa:
# - Najlepszy przypadek: O(n log n) - log n wynika z liczby poziomów podziału, a n z tego, że na każdym poziomie algorytm przechodzi przez tablicę.
# - Średni przypadek: O(n log n) - log n wynika z liczby poziomów podziału, a n z tego, że na każdym poziomie algorytm przechodzi przez całą tablicę.
# - Najgorszy przypadek: O(n²) - występuje, gdy pivot jest wybierany bardzo niekorzystnie, np. gdy bierzemy pierwszy element, a tablica jest posortowana malejąco.


# Złożoność pamięciowa:
# - Pamięć pomocnicza: O(1). - Tylko zmienne pomocnicze
# - Pamięć stosu: średnio O(log n), w najgorszym przypadku O(n) - głębokość rekurencji zależy od tego, jak pivot dzieli tablicę.
