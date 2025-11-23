"use strict";
// 1 - arrays
let numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);
// numbers = "teste"
const nomes = ["Julia", "Vitória"];
// nomes.push(4)
// 2 - outra sintaxe array
const nums = [100, 200, 300];
nums.push(400);
console.log(nums);
// nums.push("teste")
console.log(nums[0]);
// 3 - any
const arr1 = [1, "teste", true, [], { nome: "Julia" }];
console.log(arr1);
arr1.push([1, 2, 3]);
console.log(arr1);
// 4 - parâmetros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
// soma("4", "5")
// 5 - retorno de função
function greeting(name) {
    return `Olá ${name}`;
}
console.log(greeting("Julia"));
// 6 - função anonima
setTimeout(function () {
    const sallary = 1000;
    // console.log(parseFloat(sallary))
    // console.log(sallary)
}, 2000);
// 7 - tipos de objeto
function passCoordinates(coord) {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}
const objCoord = { x: 329, y: 84.2 };
passCoordinates(objCoord);
// passCoordinates({nome: 1, sobrenome: 2})
const pessoaObj = { nome: "Julia", surname: "Oliveira" };
// 8 - props opcionais
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    if (c) {
        console.log("C: " + c);
    }
}
showNumbers(1, 2, 3);
// showNumbers(4, 5)
// 9 - validando argumento opcional
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`;
    }
    return `Olá, ${firstName}, tudo bem?`;
}
console.log(advancedGreeting("Julia", "Oliveira"));
console.log(advancedGreeting("Vitória"));
// 10 - union type (exclusivo do typescript)
function showBalance(balance) {
    console.log(`O saldo da conta é R$${balance}`);
}
showBalance(100);
showBalance("500");
// showBalance(true)
const arr2 = [100, "teste", true];
console.log(arr2);
// 11 - avançando em union types
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado!";
    }
    return `A função do usuário é: ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showId(id) {
    console.log(`O ID é: ${id}`);
}
showId(1);
showId("200");
showId(123456);
function showCoords(obj) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(coordObj);
const somePerson = { name: "Julia", age: 26 };
console.log(somePerson);
// type personType = {
//     age: number
// }
// 15 - literal types
let test;
test = "testando";
console.log(test);
function showDirection(direction) {
    console.log(`A direção é: ${direction}`);
}
showDirection("center");
// showDirection("top")
