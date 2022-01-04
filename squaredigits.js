function squaredigits(num) {
    let numArray = num.toString().split("");
    console.log(numArray)
    let squareNum = "";
    numArray.forEach(function (digit) {
        Math.pow(parseInt(digit), 2);
        squareNum += Math.pow(parseInt(digit), 2)
    });

    return (squareNum);
}