// merge sort

function mergeSort (arr) {
    if (arr.length < 2) return arr;
    
    let middle = Math.floor(arr.length/2)
    let firstHalf = arr.slice(0, middle)
    let secondHalf = arr.slice(middle)

    let sortedFirstHalf = mergeSort(firstHalf)
    let sortedSecondHalf = mergeSort(secondHalf)
    return (merge(sortedFirstHalf, sortedSecondHalf))
}

function merge (left, right) {
    const newArr = []
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            newArr.push(left[leftIndex])
            leftIndex++
        } else {
            newArr.push(right[rightIndex]);
            rightIndex++
        }
    }
    return [...newArr, ...left.slice(leftIndex), ...right.slice(rightIndex)]
}


const array = [90,34,12,56,121,78,211];
console.log(mergeSort(array))



