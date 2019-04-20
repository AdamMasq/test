var input = readline().split(' ');
var m = Number(input[0]);
var n = Number(input[1]);
var a = Number(input[2]);
var ans;
ans = Math.ceil(m/a)*Math.ceil(n/a);
print(ans);