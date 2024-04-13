
function arrayPrint(arrayStamp) {
    let itemPrint = "";
    for (let i = 0; i < arrayStamp.length; i++) {
        const curElem = arrayStamp[i];
        itemPrint += curElem

        if (i !== arrayStamp.length -1) {
            itemPrint += ", "
        }
    }
    console.log(itemPrint);
    return itemPrint;
}
