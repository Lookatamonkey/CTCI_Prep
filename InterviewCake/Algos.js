// Given the array of IDs, which contains many duplicate integers and one unique integer, find the unique integer.
function stoleDrone(arr) {
    let store = {};

    for (let i = 0; i < arr.length; i++) {
        if (store[arr[i]] % 100) {
            store[arr[i] % 100] = !store[arr[i]] % 100;
        } else {
            store[arr[i] % 100] = true;
        }
    }

    let keys = Object.keys(store);
    for (let i = 0; i < keys.length; i++) {
        if (store[keys[i]] === false) {
            return store[keys[i]];
        }
    }
    return null;
}

function deleteNode(linkedList, target) {
    if (node === null) { return null; }
    if (node.value === target) {
        let newNode = node.next;
        node.next = null;
        return newNode; 
    }
    let node = linkedList;
    while (node.next) {
        if (node.next.value === target) {
            let temp = node.next;
            node.next = node.next.next;
            temp.next = null;
        }
    }

    return linkedList;
}


// take a string and opening parenthesis index, and return its closing parenthesis index
function getClosingParen(str, openingParenIdx) {
    let counter = 0;
    let found = false;

    for (let i = openingParenIdx; i < str.length; i++) {
        if (str[i] === "(") {
            counter += 1;
        } else if (str[i] === ")") {
            counter -= 1;
        }
        if (counter === 0) { return i; }
    }

    return null;
}
// console.log(getClosingParen("Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.", 10));

// console.log(getClosingParen("((()()))", 1) === 6);
// function permutation(arr) {
//     if (arr.length === 0) { return []; }

//     let total = [];

//     let last = arr.length - 1;
//     let start = arr.splice(1);
//     console.log(arr);
//     let prev = permutation(arr);
//     for (let i = 0; i < prev.length; i++) {
//         for (let j = 0; j < prev[i].length; j++) {
//             console.log(prev);
//         }
//     }

// }

// permutation([1, 2]) === [[1, 2], [2, 1]];
// permutation([1, 2, 3]) === [[1, 2, 3], [1, 3, 2], [2, 3, 1], [2, 1, 3], [3, 1, 2], [3, 2, 1]];
