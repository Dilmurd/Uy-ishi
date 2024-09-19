// // 1-masala
// {
// function foo(arr){
//     if (arr.length % 2 !== 0) {
//         let i = Math.floor(arr.length / 2) 
//         let result = arr[i]
//         return result
//     }else{
//         let i = (arr.length / 2)
//         let result = (arr[i] + arr[i - 1] ) / 2
//         return result
//     }
// }
// }
// console.log(foo([1,2,3,4]));

// // 2-masala
// function primeNumber(n){
//     let count = 0
//     for(i = 0; i <= n; i++){
//         if(n % i == 0){
//             count++
//         }
//     }
//     if(count == 2){
//         return `${n} tub son` 
//     }else{
//         return `${n} tub son emas`
//     }    
// }
// console.log(primeNumber(7));

// 3-masala
// {
// let n = 8
// let k = 0
// while(n >= 2){
//     n = n / 2
//     k++
// }
// console.log(k);
// }

// 4-masala
// {
//     function foo(n){
//         let count = 0
//         for(let i = 1; i < n; i++){
//             if(n % i === 0){
//                 count += i
//             }
//         }
//         if(n === count){
//             return `${n} mukammal son`
//         }else{
//             return `${n} mukammal son emas`
//         }
//     }
//     console.log(foo(496));
    
// }

// 5-masala
// {
//     function foo(n){
//         let arr = Array.from(String(n), Number)
//         let count = 0
//         for (let i = 1; i <= arr.length; i++){
//             count++
//         }
//         return count
//     }
//     console.log(foo(23));
// }

// 6-masala
// {
//     function foo(str){
//         let splt = str.split(" ")
//         let count = 0
//         for(let i = 0; i < splt.length; i++)
//             if(splt[i].includes("a") || splt[i].includes("A")){
//                 count++
//             }
//         return count
//     }
//     console.log(foo("Assalomu aleykum dunya"));
// }
// 7-masala
// {
//     function foo(string) {
//         let soz = string.split(' ');
//         let boo = soz[0];
        
//         for (let i = 1; i < soz.length; i++) {
//             if (soz[i].length < boo.length) {
//                 boo = soz[i];
//             }
//         }
        
//         return boo;
//     }
//     console.log(`${foo ("mening ismim laylo")} sozi eng kichik so'z`);
// }
// 8-masala
// {
//     function foo(n){
//         if(typeof n === "number"){
//             return `Son`
//         }
//         else if(typeof n === "string"){
//             return `String`
//         }
//         else{
//             return 
//         }
//     }
//     console.log(foo(777));
// }
// 9-masala
// {
//     function foo(str){
//         let result = str.split("").reverse("").join("")
//         return result
//     }
//     console.log(foo("salom dunyo"));
// }
// 10-masala
// {
//     function foo(str){
//         let count = 0
//         let num = "123456789"
//         for (let i = 0; i < str.length; i++){
//             if(num.includes(str[i])){
//                 count++
//             }
//         }
//         return count
//     }
//     console.log(foo("salom 77 maktab"));
// }
// 11-masala
//     {
//     function foo(string) {
//         let soz = string.split(' ');
//         let boo = soz[0];
        
//         for (let i = 1; i < soz.length; i++) {
//             if (soz[i].length > boo.length) {
//                 boo = soz[i];
//             }
//         }
        
//         return boo;
//     }
//     console.log(`${foo ("mening ismim laylo")} sozi eng katta so'z`);
// }

