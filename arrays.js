//    let numbers = [] ;
//
//function arraysMin(numbers) {
//
//    for(let i = 1; i < numbers.length; i++) {
//        if (numbers[0] > numbers[i]) {
//            numbers[0] = numbers[i];
//        }
//    }
//         return numbers[0];
//}
//
//console.log(arraysMin([1, 2, 3, 4, -1, 63, 5, 0, 56]));


//    let numbers = [] ;
//
//function arraysMax(numbers) {
//
//    for(let i = 1; i < numbers.length; i++) {
//        if (numbers[0] < numbers[i]) {
//            numbers[0] = numbers[i];
//        }
//    }
//         return numbers[0];
//}
//
//console.log(arraysMax([1, 2, 0, 6, -62]));


//    let numbers = [] ;
//    let index;
//function indexOfArraysMin(numbers) {
//
//    for(let i = 1; i < numbers.length; i++) {
//        if (numbers[0] > numbers[i]) {
//            numbers[0] = numbers[i];
//            index = i;
//        }
//    }
//         return index;
//}
//
//console.log(indexOfArraysMin([1, 2, 3, 4, -1, 63, 5, 0, 56]));


//    let numbers = [] ;
//    let index;
//function indexOfArraysMax(numbers) {
//
//    for(let i = 1; i < numbers.length; i++) {
//        if (numbers[0] < numbers[i]) {
//            numbers[0] = numbers[i];
//            index = i;
//        }
//    }
//         return index;
//}
//
//console.log(indexOfArraysMax([1, 2, 3, 4, -1, 63, 5, 0, 56]));


//    let numbers = [] ;
//
//function sumOfUnevenElems(numbers) {
//
//    for(let i = 3; i < numbers.length; i += 2) {
//        numbers[1] += numbers[i];
//    }
//         return numbers[1];
//}
//
//console.log(sumOfUnevenElems([0, 1, 2, 3, 4, 5, 6, 7]));


//    let numbers = [] ;
//    let temp ;
//function revers(numbers) {
//
//    for (let j = numbers.length - 1; j > 0; j--) {
//        console.log(numbers[j]);
//    }
//}
//
//revers([5, 6, 9, 25, 0, -3, -27]);


//    let numbers = [] ;
//    let index = 0;
//function countUnevenElems(numbers) {
//    for (let i = 0; i < numbers.length; i++) {
//        if (numbers[i] % 2 != 0) {
//            index++;
//        }
//    }
//    return index;
//}
//
//console.log(countUnevenElems([1, 2, 3, 4, 5, 6, 7, 8, 9]));


//    let numbers = [];
//    let temp;
//
//function sortingBubble(numbers) {
//    for (let i = 0; i < numbers.length - 1; i++) {
//        for (let j = i + 1; j < numbers.length; j++) {
//            if (numbers[i] > numbers[j]) {
//                temp = numbers[i];
//                numbers[i] = numbers[j];
//                numbers[j] = temp;
//            }
//        }
//    }
//
//     for (let i = 0; i < numbers.length; i++) {
//        console.log(numbers[i]);
//     }
//}
//
//sortingBubble([6, 3, 9, 0, -6, 31, -64]);