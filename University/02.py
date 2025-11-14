import random


class ZlozonoscObliczeniowaIteracje:
    def __init__(self, algorytm, daneTestowe):
        self.algorytm = algorytm
        self.sredniaLiczbaIteracji = 0
        self.wynikiIteracji = []
        self.wynikOdchylenieStandardowe = 0
        self.wynikBladWzgledny = 0
        self.daneTestowe = daneTestowe

    def sredniaArtmetycznaIteracje(self):
        self.sredniaLiczbaIteracji = sum(self.wynikiIteracji) / len(self.wynikiIteracji)
        print("Średnia liczba iteracji:", round(self.sredniaLiczbaIteracji, 2))

    def odchylenieStandardoweIteracje(self):
        n = len(self.wynikiIteracji)
        if n <= 1:
            print("Za mało danych do odchylenia standardowego")
            return

        suma = 0.0
        for i in range(n):
            roznica = self.wynikiIteracji[i] - self.sredniaLiczbaIteracji
            suma += roznica**2
        self.wynikOdchylenieStandardowe = (suma / (n - 1)) ** (1 / 2)

        print(
            "Odchylenie standardowe dla iteracji:",
            round(self.wynikOdchylenieStandardowe, 2),
        )

    def bladWzglednyIteracje(self):
        self.wynikBladWzgledny = (
            self.wynikOdchylenieStandardowe / self.sredniaLiczbaIteracji
        ) * 100
        print(f"Błąd względny: {round(self.wynikBladWzgledny,2)}%")

    def testy(self):
        liczbaWywolan = len(self.daneTestowe)
        for i in range(liczbaWywolan):
            tab = list(range(self.daneTestowe[i], 0, -1))
            for j in range(100):
                szukanaLiczba = random.randint(1, self.daneTestowe[i])
                self.wynikiIteracji.append(self.algorytm(tab, szukanaLiczba))
            self.sredniaArtmetycznaIteracje()
            self.odchylenieStandardoweIteracje()
            self.bladWzglednyIteracje()
            self.wynikiIteracji = []


def binarySearchReverseOrder(tab, target):
    start = 0
    end = len(tab) - 1
    i = 0
    while start <= end:
        i += 1
        mid = (start + end) // 2
        if tab[mid] == target:
            return i
        elif tab[mid] > target:
            start = mid + 1
        else:
            end = mid - 1
    return i


z = ZlozonoscObliczeniowaIteracje(
    binarySearchReverseOrder, [1000, 10000, 100000, 1000000]
)
z.testy()
