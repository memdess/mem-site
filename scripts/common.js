function randomInt(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

function randomElem(array) {
    return array[randomInt(0, array.length - 1)];
}