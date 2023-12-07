// selection sort


function selectionSort (arr) {
    for (let i = 0; i < arr.length-1; i++) {
        let minIndex = i;
        for(let j = i+1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    return arr;
}

const array = [90,34,12,56,121,78,211];
console.log(selectionSort(array))

