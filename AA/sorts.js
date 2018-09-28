let input = [4, 3, 1, 5, 2];

// Bubble sort

// Merge sort
function mergeSort(input) {
    if (input.length <= 1) {
        return input;
    }

    let mid = Math.floor(input.length / 2);
    let left = mergeSort(input.slice(0, mid));
    let right = mergeSort(input.slice(mid, input.length));

    return merge(left, right);
}

function merge(left, right) {
    // console.log('left: ', left, 'right: ', right);
    let res = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] > right[0]) {
            res.push(right.shift());
        } else {
            res.push(left.shift());
        }
    }

    if (left.length > 0) {
        res = res.concat(left);
    } else if (right.length > 0) {
        res = res.concat(right);
    }

    return res;
}

console.log(mergeSort(input));
// Quick Sort

// Binary Search