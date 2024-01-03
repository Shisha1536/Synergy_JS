const a = 5;
const b = 7;

function squareOfSum(x,y) {
    console.log (`squareOfSum ${x**2+2*x*y+y**2}`);
}
squareOfSum(a,b);
 let squareOfSum_2 = (x, y) => console.log (`squareOfSum_2 ${Math.pow(x+y, 2)}`);
 squareOfSum_2(a, b);