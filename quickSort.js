// quick sort

function quickSort (arr) {
    if (arr.length < 2) return arr;
    const pivot = arr[0]
    const left = []
    const right = []


    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}


const array = [90,34,12,56,121,78,211];
console.log(quickSort(array))






