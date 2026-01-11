// Złożoność:
// - hash
// Czas: O(1) - Pętla wywoła się maksymalnie 100 razy, nie będzie to rosło wraz ze zmianą inputów.
// Pamięć: O(1) - Tylko zmienne pomocnicze
// - set
// Czas:
//  -Średnio: O(1)
//  -Najgorzej: O(n) – gdy wiele elementów w jednym bucket (kolizje).
// Pamięć: O(1) - Tylko zmienne pomocnicze
// - get
// Czas:
//  -Średnio: O(1)
//  -Najgorzej: O(n) – gdy wiele elementów w jednym bucket (kolizje).
// Pamięć: O(1) - Tylko zmienne pomocnicze
// - values
// Czas: O(n^2) - Przechodzę po wszystkich elementach i dla każego sprawdzam, czy nie jest duplikatem.
// Pamięć: O(n) - Nowa tablica na elementy.
// - keys
// Czas: O(n) - Przechodze po wszystkich elementach.
// Pamięć: O(n) - Nowa tablica na elementy.
class HashTable {
    size;
    keyMap;
    constructor(size = 53) {
        this.size = size;
        this.keyMap = new Array(size);
    }
    hash(key) {
        let total = 0;
        const primeNumber = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            const value = key[i].charCodeAt(0) - 96;
            total = (total * primeNumber + value) % this.keyMap.length;
        }
        return total;
    }
    set(key, value) {
        const index = this.hash(key);
        const newElement = [key, value];
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        else {
            const bucket = this.keyMap[index];
            for (const element of bucket) {
                if (element[0] === key) {
                    element[1] = value;
                    return;
                }
            }
        }
        this.keyMap[index].push(newElement);
    }
    get(key) {
        const index = this.hash(key);
        const bucket = this.keyMap[index];
        if (!bucket)
            return undefined;
        for (const element of bucket) {
            if (element[0] === key)
                return element[1];
        }
        return undefined;
    }
    values() {
        const answer = [];
        for (const bucket of this.keyMap) {
            if (bucket) {
                for (const element of bucket) {
                    if (!answer.includes(element[1])) {
                        answer.push(element[1]);
                    }
                }
            }
        }
        return answer;
    }
    keys() {
        const answer = [];
        for (const bucket of this.keyMap) {
            if (bucket) {
                for (const element of bucket) {
                    answer.push(element[0]);
                }
            }
        }
        return answer;
    }
}
const hashTable = new HashTable();
hashTable.set("hash", 1);
hashTable.set("hash", 2);
hashTable.set("hash", 4);
hashTable.set("sahh", 7);
hashTable.set("table", 10);
hashTable.set("tablee", 10);
hashTable.set("hashTable", 21);
console.log(hashTable.get("hash"));
console.log(hashTable.get("table"));
console.log(hashTable.get("tablee"));
console.log(hashTable.get("sahh"));
console.log(hashTable.get("hashTable"));
console.log(hashTable.get("hashTableeeeeeeee"));
console.log(hashTable.values());
console.log(hashTable.keys());
export {};
