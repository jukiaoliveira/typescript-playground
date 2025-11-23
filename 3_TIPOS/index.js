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
