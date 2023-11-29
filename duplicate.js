function
removeDuplicates(inputString){
    let result = '';
    for (let char of inputString){
        if(result.indexOf(char) === -1){
            result+=char;
        }
    }
    return result;
}
let originalString = "Blockckckuih";
let stringWithoutDuplicates = removeDuplicates(originalString);
console.log(stringWithoutDuplicates);