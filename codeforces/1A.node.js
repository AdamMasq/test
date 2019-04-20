var readline = require('readline');
var  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//rl.question();
rl.question('', (input) => {
    var ans = main(input.split(' '));
    console.log(ans); 
    process.exit();
});
function main(input){
    var m = Number(input[0]);
    var n = Number(input[1]);
    var a = Number(input[2]);
    var ans;
    ans = Math.ceil(m/a)*Math.ceil(n/a);
    return ans;
}
