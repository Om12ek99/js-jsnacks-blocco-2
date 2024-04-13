
function lastKiller(arrayEdit) {
    killedArray = [];
    for (let i = 0; i < arrayEdit.length - 1; i++) {
        curElem = arrayEdit[i];
        killedArray += ` ${curElem}`;
    }
    console.log(killedArray);
    return killedArray;
}
