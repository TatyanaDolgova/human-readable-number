module.exports = function toReadable (number) {
  let result = '';
  let str = number.toString();
  let arr = Array.from(str);
  let hundreds = Math.floor(number / 100);
  let tens = Math.floor((number % 100) / 10);
  let unit = number % 10;

  if(number === 0) {
    result = 'zero';
    return result;
  }

  function numberToString (num) {
    switch(num) {
      case 1:
        return ' one';
      case 2:
        return ' two';
      case 3:
        return ' three';
      case 4: 
        return ' four';
      case 5:
        return ' five';
      case 6:
        return ' six';
      case 7:
        return ' seven';
      case 8:
        return ' eight';
      case 9:
        return ' nine';  
      case 0:
        return '';           
    }
  }

  function numberToStringTens (num) {
    switch(num) {
      
      case 2:
        return ' twenty';
      case 3:
        return ' thirty';
      case 4: 
        return ' forty';
      case 5:
        return ' fifty';
      case 6:
        return ' sixty';
      case 7:
        return ' seventy';
      case 8:
        return ' eighty';
      case 9:
        return ' ninety';            
    }
  }

  let strHundreds = numberToString(hundreds);
  let strTens = numberToStringTens(tens);
  let strUnit = numberToString(unit);

  if(tens === 0) {
    strTens = '';
  }

  if(tens === 1) {
    
  }

  if(arr.length === 3) {
    result = `${strHundreds.slice(1)} hundred${strTens}${strUnit}`;
  }

  if(arr.length === 2) {
    result = `${strTens}${strUnit}`;
  }
  
  if(arr.lenth === 1) {
    result = `${strUnit}`;
  }

  return result.trim();
};

