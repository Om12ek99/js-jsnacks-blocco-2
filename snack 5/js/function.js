
function headKiller(arrayHead) {
    let result = [];
    for (let i = 1; i < arrayHead.length; i++) {
        const curElem = arrayHead[i];
        result += ` ${curElem}`;
    }
    console.log(result);
    return result;
}
