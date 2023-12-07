const arr = [12,89,56,76,90]

function toLinearSearch (arr, val) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === val) {
            return i;
        }
    }
    return -1
}

const foundAt = toLinearSearch(arr, 76)
console.log(foundAt);
