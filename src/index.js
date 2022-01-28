
// You should implement your task here.

module.exports = function towelSort (matrix) {

    let arr = [];

    matrix.forEach((val, indx) => {
        arr = arr.concat((!!(indx % 2)) ? val.reverse() : val)
    })

    return arr;
}
