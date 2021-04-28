// Anweisungen direkt in einer JS-Datei werden im globalen Gültigkeitsbereich ausgeführt
var y = 4;
// Vorsicht: var-Variablen ignorieren Gültigkeitsbereiche

// neue Gültigkeitsbereiche werden mit geschw. Klammern angelegt
{
    let z = 6;
}
// console.log(z); // Uncaught ReferenceError: z is not defined at js-intro.js:10
// Das heißt, Funktionen und Objekte sind neue Gültigkeitsbereiche




/* Es gibt bei allen Programmiersachen 2 Stellen: Definitionsstelle und Aufrufstelle */

// Variablen: Definition
var x = 2;

// Variablen: Aufruf
console.log('x :>> ', x);


// Funktionen brauchen wir, um den Zeitpunkt ihrer Ausführung selber zu definieren, und wenn wir man die gleichen Codezeilen mehrmals ausführen möchte.
// Funktionen: Definition

function myFunction() {
    console.log('myFunction wurde aufgerufen');
}
// Funktionen: Aufruf
// myFunction();


// Objekte: Definition
var myObject = {
    prop1: 4,
    prop2: 5,
    objektMethode: function () {
        this.prop1 = 44;
    }
}

// Objekte: Aufruf:
// das ganze Objekte:
console.log('myObject :>> ', myObject);
// nur ein Member
console.log('myObject.prop1 :>> ', myObject.prop1);
// eine Methode aufrufen
myObject.objektMethode();
// prüfen, ob Methode ausgeführt wurde:
console.log('myObject.prop1 :>> ', myObject.prop1);
