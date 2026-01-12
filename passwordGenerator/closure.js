
let b=70
function greet(){
    let a=20
    // console.log(a);
    // console.log(b); // iska scope bhi bahar h but bahar se andar propogate kar sakte h

    function meet(){
        
        console.log(a);
        
    }
    return meet;
    
    
}
const num = greet()
console.log(num); //output-[Function: meet]
num() //output - 20

//console.log(a) // ye a k scope k bahar h isiliye print nhi ho sakta h andar se bahar propogate nhi ho sakta h