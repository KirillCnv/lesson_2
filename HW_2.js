let item_1 = 5;
let item_2 = 3;
let item_3 = item_1 + item_2;
let item_4 = "Yolochka";
let item_5 = item_3;
let item_6 = 15;
let item_6_type = typeof(item_6);
let item_7 = String(item_6);
let item_7_type = typeof(item_7);

console.log(item_1)
console.log(item_2)
console.log(item_3)
console.log(item_4)
console.log(item_3 + item_4)
console.log(item_3 * item_4)
console.log(item_6_type)
console.log("item_6 == " + item_6_type)
console.log("item_6_type == " + item_6_type)
console.log("item_7 == " + item_7_type)
console.log("item_7_type == " + item_7_type)

let age_1 = 10;
let age_2 = 18;
let age_3 = 60;

// if(age_1 < age_2){
//     console.log("You don’t have access cause your age is"  + age_1 +  "Its less then")
// }
// else if(age_1 >=  age_2 && age_1 <  age_3){
//     console.log("Welcome  !")
// }
// else if(age_1  > age_3){
//     console.log("Keep calm and look Culture channel")
// } else {
//     console.log("Technical work")
// }





// HW_1* 
// Задания с разным количеством звездочек:)
// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

// const checkAge = function(age){
// if(age < age_2){
//     console.log("You don’t have access cause your age is"  + age +  "Its less then")
// }
// else if(age >=  age_2 && age_1 <  age_3){
//     console.log("Welcome  !")
// }
// else if(age > age_3){
//     console.log("Keep calm and look Culture channel")
// } else {
//     console.log("Technical work")
// }
// }

// checkAge(65)

// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

// const checkAge = function(age){
//     // age = Number(age)
//     // console.log(typeof age)
//     // if (!isNaN(age)) {
//     // if (Number(age)) {
//         if (+age) {
//         if(age < age_2){
//             console.log("You don’t have access cause your age is"   + age +   "Its less then" + age_2)
//         }
//         else if(age >=  age_2 && age <  age_3){
//             console.log("Welcome  !")
//         }
//         else if(age > age_3){
//             console.log("Keep calm and look Culture channel")
//         } else {
//             console.log("Technical work")
//         }
// } else { console.log('not valid')}
// }
//  checkAge(18)
//  checkAge('22asasas')
  
    

// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
// const checkAge = function(age){
//     // age = Number(age)
//     // console.log(typeof age)
//     // if (!isNaN(age)) {
//     // if (Number(age)) {
//         if (+age) {
//         if(age < age_2){
//             console.log("You don’t have access cause your age is"   + age +   "Its less then" + age_2)
//         }
//         else if(age >=  age_2 && age <  age_3){
//             console.log("Welcome  !")
//         }
//         else if(age > age_3){
//             console.log("Keep calm and look Culture channel")
//         } else {
//             console.log("Technical work")
//         }
// } else { console.log('not valid')}
// }
//  checkAge(18)
//  checkAge('22asasas')

// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке

const checkAge = function(age){
    // age = Number(age)
    // console.log(typeof age)
    // if (!isNaN(age)) {
    // if (Number(age)) {
        if (+age) {
        if(age < age_2){
            console.log("You don’t have access cause your age is"   + age +   "Its less then" + age_2)
        }
        else if(age >=  age_2 && age <  age_3){
            console.log("Welcome  !")
        }
        else if(age > age_3){
            console.log("Keep calm and look Culture channel")
        } else {
            console.log("Technical work")
        }
} else { console.log('not valid')}
}
 checkAge(18)
 checkAge('22asasas')

 let agePrompt = prompt('ВВедите возраст')
 checkAge(agePrompt)