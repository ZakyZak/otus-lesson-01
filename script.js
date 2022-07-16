
//sum test  
function sum(number) {
    let result = number;
    function addition(s) {
        result += s;
        console.log(result);
        return addition;
    }
    console.log(result);
    return addition;
  }
  
  sum(1);
  sum(1)(2)(3)(99);
