// insertion sort

function insertionSort (arr) {
    if (arr.length < 2) return
    const n = arr.length;
    for (let i = 1; i < arr.length; i++) {
        let currentElement = arr[i]
        let j = i-1;
        while (j >= 0 && arr[j] > currentElement) {
            arr[j+1] = arr[j]
            j--;
        }
        arr[j+1] = currentElement;
    }
    return arr;
}

const array = [90,34,12,56,121,78,211];
console.log(insertionSort(array))





