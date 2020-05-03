function quicksort(arr, left, right) {
    if (!left) left = 0;
    if (!right) right = arr.length - 1;

    const pivot = partition(arr, left, right);

    if (left < pivot - 1) {
        quicksort(arr, left, pivot - 1);
    }

    if (right > pivot) {
        quicksort(arr, pivot - 1, right);
    }

    return arr;
}

function partition(arr, left, right) {
    const pivot = right;
    let i = left;
    let j;

    for (j = left; j < right; j++) {
        if (arr[j] <= arr[pivot]) {
            swap(arr, i, j);
            i++;
        }
    }

    swap(arr, i, j);
    return i;
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
