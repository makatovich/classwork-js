function sum (a,b)
{
    let result = a+b;
    console.log(result);
    return result;
}



let minus =function (a,b){
    let result =a - b;
    console.log(result);
}

let multiplication = (a,b) => {
  let result = a * b;
  console.log(result);
  return result;
 }



let totalPrice = sum( 23,40);
let totalMultiplication = multiplication (10,3)

 console.log(totalPrice);

 console.log(totalMultiplication);

 sum (3,6)
 minus (9,7)
 multiplication (5,6)