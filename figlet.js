const figlet = require('figlet');
function createAsciiArt(text){
    figlet(text,(err,data) => {
        if(err){
            console.log('Something went wrong');
            console.dir(err);
            return;
        }
        console.log(data);
    });
}
createAsciiArt('npm');
