// Left Rotation
function main(k, n, a) {
    let rotations = k % n;

    while (rotations > 0) {
        a.push(a.shift());
        rotations -= 1;
    }
    console.log(a.toString().split(",").join(" "));
}



// Make Anagram
function main() {
    var a = readLine();
    var b = readLine();

    let arrA = a.split("");
    let arrB = b.split("");
    
    
    let store = {}
    
    arrA.forEach( letter => {
        if ( !store[letter] ) {
            store[letter] = 1
        } else {
            store[letter] -= 1
        }
    })
    
    arrB.forEach( letter => {
        if ( !store[letter] ) {
            store[letter] = 1
        } else {
            store[letter] -= 1
        }
    });
    
    arrS = Object.values(store);
    
    let counter = 0
    arrS.forEach( num => {
        if (num != 0) {
            counter += Math.abs(num)
        }
    });
    
    return counter
}