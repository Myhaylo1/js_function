/**
 *
 * @param {number} x
 * @returns {boolean}
 */
function isAdult(x)
{
  return x>=16;
}
console.log('isAdult(20)=',isAdult(20));
console.log('isAdult(4)=',isAdult(4));

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {boolean} a%b=0
 */
function checkMultiplicity(a,b)
{
  return (a%b)===0;
}
console.log('checkMultiplicity(25,5)=',checkMultiplicity(25,5));
console.log('checkMultiplicity(15,3)=',checkMultiplicity(15,3));
console.log('checkMultiplicity(15,5)=',checkMultiplicity(15,5));
console.log('checkMultiplicity(15,4)=',checkMultiplicity(15,4));

/**
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {boolean} (a+b)>c
 */
function triangle(a,b,c)
{
  return (((a+b)>c) && ((a+c)>b) && ((c+b)>a));
}
console.log('triangle(3,4,5)=',triangle(3,4,5));
console.log('triangle(3,4,9)=',triangle(3,4,9));

function squareRhombus(i,d1,d2)
{
  switch (Number(i))
  {
    case 1: return(Number(d1)*Number(d2)/2);
    case 2: return((Number(d1)**2)*Math.sin(d2));
  }
}
console.log('squareRhombus(1,2,3)=3=',squareRhombus(1,2,3));
console.log('squareRhombus(2,1,pi/2)=3=',squareRhombus(1,2,Math.PI/2));
