import time
class ZlozonoscObliczeniowaIteracje:
    def __init__(self, algorytm):
        self.algorytm = algorytm
        self.sredniaLiczbaIteracji = 0
        self.wynikiIteracji = []
        self.wynikOdchylenieStandardowe = 0
        self.wynikBladWzgledny = 0

    def sredniaArtmetycznaIteracje(self, liczbaWywolan=10):
        self.wynikiIteracji = []
        for i in range(liczbaWywolan):
            self.wynikiIteracji.append(self.algorytm(5, 300))
        self.sredniaLiczbaIteracji = sum(self.wynikiIteracji) / len(self.wynikiIteracji)
        print("Średnia liczba iteracji:", self.sredniaLiczbaIteracji)

    def odchylenieStandardoweIteracje(self):
        n = len(self.wynikiIteracji)
        if n <= 1:
            print("Za mało danych do odchylenia standardowego")
            return

        suma = 0.0
        for i in range(n):
            roznica = self.wynikiIteracji[i] - self.sredniaLiczbaIteracji
            suma += (roznica ** 2)
        self.wynikOdchylenieStandardowe = (suma / (n - 1))**(1/2)

        print("Odchylenie standardowe dla iteracji:", self.wynikOdchylenieStandardowe)

    def bladWzglednyIteracje(self):
        self.wynikBladWzgledny = (self.wynikOdchylenieStandardowe / self.sredniaLiczbaIteracji) * 100
        print(f"Błąd względny: {self.wynikBladWzgledny}%")
class ZlozonoscObliczeniowaCzas:
    def __init__(self,algorytm):
        self.algorytm = algorytm
        self.sredniCzasWykonania = 0
        self.wynikiPomiaruCzasu = []
        self.wynikOdchylenieStandardowe = 0
        self.wynikBladWzgledny = 0
    def sredniaArtmetycznaCzas(self, liczbaWywolan=10):
        for i in range(liczbaWywolan+1):
            t1 = time.perf_counter_ns()
            self.algorytm(5, 300)
            t2 = time.perf_counter_ns()
            self.wynikiPomiaruCzasu.append(t2-t1)
        self.sredniCzasWykonania = sum(self.wynikiPomiaruCzasu) / len(self.wynikiPomiaruCzasu)
        print("Średni czas wykonania:", self.sredniCzasWykonania, "[ns]")
    def odchylenieStandardoweCzas(self):
        n = len(self.wynikiPomiaruCzasu)
        if n <=1:
            print("Za mało danych do odchylenia standardowego")
            return
        suma = 0.0
        for i in range(n):
            roznica = self.wynikiPomiaruCzasu[i] - self.sredniCzasWykonania
            suma+=(roznica**2)
        self.wynikOdchylenieStandardowe = (suma / ( n - 1 ))**(1/2)
        print("Odchylenie standardowe dla czasu:", self.wynikOdchylenieStandardowe, "[ns]")
    def bladWzglednyCzas(self):
        self.wynikBladWzgledny = (self.wynikOdchylenieStandardowe / self.sredniCzasWykonania) * 100
        print(f"Błąd względny: {self.wynikBladWzgledny}%")
def algorytm(x,y):
    suma = 0
    for i in range(x):
        for j in range(y):
            suma+=1
    return suma
z = ZlozonoscObliczeniowaIteracje(algorytm)
z.sredniaArtmetycznaIteracje()
z.odchylenieStandardoweIteracje()
z.bladWzglednyIteracje()
x = ZlozonoscObliczeniowaCzas(algorytm)
x.sredniaArtmetycznaCzas()
x.odchylenieStandardoweCzas()
x.bladWzglednyCzas()