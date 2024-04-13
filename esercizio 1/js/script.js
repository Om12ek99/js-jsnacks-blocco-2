
function arrayGenesis(arrayGen) {
    const voidArray = [];
    for (let i = 0; i < arrayGen; i++) {
        console.log("--------------------");
        for (let j = 0; j < 10; j++) {
            voidArray.push = Math.floor(Math.random() * 100) + 1;
            console.log(voidArray);
        }
    }
    return voidArray;
}

arrayGenesis(userNumber);