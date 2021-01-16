// AND lógico (&&)

var a1 = true && true       // t && t retorna true
var a2 = true && false      // t && f retorna false
var a3 = false && true      // f && t retorna false
var a4 = false && (3 == 4)  // f && f retorna false
var a5 = 'Cat' && 'Dog'     // t && t retorna Dog
var a6 = false && 'Cat'     // f && t retorna false
var a7 = 'Dog' && false     // t && f retorna false

// OU lógico (||)
exp1 || exp2

var o1 = true || true           // t || t retorna true
var o2 = false || true          // f || t retorna true
var o3 = true || false          // t || f retorna true
var o4 = false || (3 == 4)      // f || f retorna false
var o5 = 'Cat' || 'Dog'         // t || t retorna Cat
var o6 = false || 'Cat'         // f || t retorna Cat 
var o7 = 'Cat' || false         // t || f retorna cat

// NOT lógico (!)
!exp1

var n1 = !true      // retorna false
var n2 = !false     // retorna true
var n3 = !'Cat'     // retorna false