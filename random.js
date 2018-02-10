const one = () => {
    console.log("one");
    return true;
};

const two = () => {
    console.log("two");
    return false;
};

function test() {
    if ( one() || two() ) { 
        console.log("hi"); 
    }
}