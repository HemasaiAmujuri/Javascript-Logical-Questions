function Outer(){
    let count = 0;
    function inner(){
        count++;
        console.log(count);
    }
    return inner
}

const fn = Outer();
fn();
fn();
fn();