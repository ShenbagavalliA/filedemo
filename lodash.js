const _ = require('lodash');
function multipleArray(array){
    return _.reduce(array,(result,num) => result * num, 1);

}
console.log(multipleArray([2,3,4]));