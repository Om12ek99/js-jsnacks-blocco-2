
function findElem(arrayParam, input) {
    let result;
    for (let i = 0; i < arrayToIndex.length; i++) {
        if (arrayParam[i] === input) {
            result =`la posizione è: ${i}`;
            break;
        } else {
            result = -1;
        }
    }
    console.log(result);
    return result;
}
