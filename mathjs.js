const math = require('mathjs');
function calculateExpression(expression){
    return math.evaluate(expression);
}
console.log(calculateExpression('2*3+5'));