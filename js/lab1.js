//------------------- Javascript LAB 1 ----------------
// Pour tour x>=0

function additionRec(x) { // addoition recursive 
    
    if( x === 0) { // ===
        return 0;
    }else{
        return x + additionRec(x-1);
    }


}


function getFactorielle(x) { // addoition recursive 
    
    if( x === 0) { // ===
        return 1;
    }else{
        return x * getFactorielle(x-1); // n! = n x (n-1)!
    }


}

console.log("---- Lab 1 : Addition ----");
console.log ( additionRec(4) ) ;
console.log ( additionRec(5) ) ;
console.log ( additionRec(10) ) ;

console.log("---- Lab 1 : factorielle ----");
console.log ( "0! = " + getFactorielle(0) ) ; 
console.log ( "1! = " + getFactorielle(1) ) ; 
console.log ( "4! = " + getFactorielle(4) ) ; 
console.log ( "10! = " + getFactorielle(10) ) ; 



/* 
 additionRec(4)
 ( 4 + additionRec(4 - 1) )
 ( 4 + additionRec(  3  ) )
 ( 4 + ( 3 + additionRec(3 - 1) )   )
 ( 4 + ( 3 + additionRec(  2  ) )   )
 ( 4 + ( 3 + ( 2 + additionRec(2 - 1) ) )   )
 ( 4 + ( 3 + ( 2 + additionRec(  1  ) ) )   )
 ( 4 + ( 3 + ( 2 + (1 + additionRec(1 - 1)  ) ) )   )
 ( 4 + ( 3 + ( 2 + (1 + additionRec(  0  )  ) ) )     )
 ( 4 + ( 3 + ( 2 + (1 +         0           ) ) )     )

 => 4 + 3 + 2 + 1 + 0 = 10

 */