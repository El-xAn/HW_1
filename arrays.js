function arraysMin(numbers) {

    for(let i = 1; i < numbers.length; i++) {
        if (numbers[0] > numbers[i]) {
            numbers[0] = numbers[i];
        }
    }
         return numbers[0];
}



function arraysMax(numbers) {

    for(let i = 1; i < numbers.length; i++) {
        if (numbers[0] < numbers[i]) {
            numbers[0] = numbers[i];
        }
    }
         return numbers[0];
}



function indexOfArraysMin(numbers) {
    let index;
    for(let i = 1; i < numbers.length; i++) {
        if (numbers[0] > numbers[i]) {
            numbers[0] = numbers[i];
            index = i;
        }
    }
         return index;
}





function indexOfArraysMax(numbers) {
    let index;
    for(let i = 1; i < numbers.length; i++) {
        if (numbers[0] < numbers[i]) {
            numbers[0] = numbers[i];
            index = i;
        }
    }
         return index;
}




function sumOfUnevenElems(numbers) {

    for(let i = 3; i < numbers.length; i += 2) {
        numbers[1] += numbers[i];
    }
         return numbers[1];
}






function revers(numbers) {
let temp ;
    for (let j = numbers.length - 1; j > 0; j--) {
        console.log(numbers[j]);
    }
}




function countUnevenElems(numbers) {
    let index = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 != 0) {
            index++;
        }
    }
    return index;
}





function sortingBubble(numbers) {
    let temp;

    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] > numbers[j]) {
                temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
    }

     for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
     }
}

sortingBubble([6, 3, 9, 0, -6, 31, -64]);