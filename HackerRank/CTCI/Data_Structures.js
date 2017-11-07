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

function main() {
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    let magazine = readLine().split(' ');
    let ransom = readLine().split(' ');
    
    let store = {};
    
    for (let i = 0; i < magazine.length; i ++) {
        let word = magazine[i];
        if ( store[word] == undefined) {
            store[word] = 1;        
        } else {
            store[word] += 1;
        }
    }
    
    for (let i = 0; i < ransom.length; i ++) {
        let word = ransom[i];
        if (store[word] === undefined) {
            return console.log("No");
        } else {
            if ( store[word] === 0 ) {
                return console.log("No");
            } else {
                store[word] -= 1;
            }
        }
    }
    
    return console.log("Yes");
}
