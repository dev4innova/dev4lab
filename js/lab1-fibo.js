
//------------------- Javascript LAB 1 : Sequence de Fibonacci  ----------------
// Pour tour x>=0
// Fibonacci numbers F0 = 0, F1 = 1,  Fn = Fn-1 + Fn-2
function getFibo(x) { // addoition recursive 
    
    if( x === 0) { // F0 = 0,
        return 0;

    }else if( x === 1 ){ // F1 = 1
        return 1;

    }else{ // Fn = Fn-1 + Fn-2
        return getFibo(x-1) + getFibo(x-2);
    }


}

console.log("--- Fibo --- " ) ;
console.log("Fibo 0 = " + getFibo(0) ) ;
console.log("Fibo 1 = " + getFibo(1) ) ;
console.log("Fibo 2 = " + getFibo(2) ) ;
console.log("Fibo 7 = " + getFibo(7) ) ;
console.log("Fibo 14 = " + getFibo(14) ) ;
