// in
something in somethingItems

// Arrays
var arvores = new Array('Ninho', 'Algaroba', 'Jurema')
0 in arvores
2 in arvores
4 in arvores
'Ninho' in arvores

'Coco' in arvores

// Objetos predefinidos
'PI' in Math                                // Retorna true
var myString = new String('Code')           
'Linux' in myString                         // Retorna true

// Operadores personalizados
var myCar = { trade: 'Jeep', model: 'Compass', year: '2020' }
'trade' in myCar            // retorna true
'model' in myCar            // retorna true

// instanceof
objeto instanceof tipodeObjeto

var dia = new Date(2021, 01, 16)

if (dia instanceof Date) {
    // code here
}