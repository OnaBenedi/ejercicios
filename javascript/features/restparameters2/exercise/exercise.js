function sum(...nums) {
    result = 0;

    for(let num of nums){
        result += num
    }
    return result;
}

console.log(sum(1, 2, 3, 4, 5));