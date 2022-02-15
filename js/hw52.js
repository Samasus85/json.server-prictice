// 1-------------------
const string = 'alex, denis,victory';
let array = string.split(',')
console.log(array)



// 2-----------------------
const summary = () => {
    let str = '123';
    let arr = str.split('');

    let result = arr.reduce(function (sum, el) {
        return +sum + +el;
    }, 0);
    console.log(result)
}
summary();