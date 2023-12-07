// works in sorted array only
// also think that array is coming in the order by desc or asce

function binarySearch(arr, val) {
  if (arr.length === 0) return;
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid] > val) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

const arr = [7, 7, 6, 5, 4, 3, 2, 1];

const foundAt = binarySearch(arr, 7);
console.log(foundAt);
