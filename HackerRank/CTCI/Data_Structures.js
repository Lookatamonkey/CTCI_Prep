function main(k, n, a) {
    let rotations = k % n;

    while (rotations > 0) {
        a.push(a.shift());
        rotations -= 1;
    }
    console.log(a.toString().split(",").join(" "));
}
