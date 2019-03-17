module.exports = function getZerosCount(number, base) {
  // your implementation
  var value = base; 
  var divider = 2; 
  while (value > 1 && divider <= base){ 
    if (value % divider == 0) { 
      value /= divider; 
    } else if (divider == 2) { 
        divider++; 
    } else { 
        divider += 2; 
    } 
    var z = divider; 

    if (value != 1) { 
      var z = value; 
    } 

    if (base % 2 == 0) { 
      var p=0;
      var val=base;
      while ((val /= 2) == parseInt(val)){
        ++p; 
      }
      if (p>=val*2){ 
        var z = 2;
      }
    } 
  } 

  var result = 0; 
  var r = base/z, m = 1; 

  while ( (r = r / z) == parseInt(r) ) { 
    m++; 
  } 
  for (var i = z; i <= number; i += z) { 
    var num = i; 
    while (num % z === 0) { 
      num /= z; 
      result++; 
    } 
  } 
  return Math.floor(result/m); 
}