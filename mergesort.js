function merge(leftArray, rightArray, ascending) {
    const sortedArray = [];

    while (leftArray.length > 0 && rightArray.length > 0) {
        if (ascending) {
            if (leftArray[0] < rightArray[0]) {
                sortedArray.push(leftArray.shift());
            } else {
                sortedArray.push(rightArray.shift());
            }
        } else {
            if (leftArray[0] > rightArray[0]) {
                sortedArray.push(leftArray.shift());
            } else {
                sortedArray.push(rightArray.shift());
            }
        }
    }

    return sortedArray.concat(leftArray.slice().concat(rightArray.slice()));
}

function mergeSort(arr, ascending = true) {
    if (arr.length <= 1) {
        return arr;
    }

    const midpoint = Math.floor(arr.length / 2);
    const leftArray = mergeSort(arr.slice(0, midpoint), ascending);
    const rightArray = mergeSort(arr.slice(midpoint), ascending);

    return merge(leftArray, rightArray, ascending);
}
