//load html befor excut js
window.onload = function () {
  var keys = document.getElementsByTagName('span'),//get result here
     outcome = document.querySelectorAll('.outcome p')[0],// for clear buttom
      clear = document.getElementsByClassName('clear')[0];
  // iterate throught numb
  for (var j = 0; j < keys.length; j += 1) {
    if (keys[j].innerHTML === '=') {
      keys[j].addEventListener("click", calculate(j));
    } else {
      keys[j].addEventListener("click", addVal(j));
    }
  }
  
  clear.onclick = function () {
    outcome.innerHTML = '';
  };  
  // replace the '÷' and 'x' symbols,
      //  JS can't calculate with it. 
  function addVal(j) {
    return function () {
      if (keys[j].innerHTML === '÷') {
         outcome.innerHTML  += '/';
      } else if (keys[j].innerHTML === 'x') {
         outcome.innerHTML  += '*';
      } else {
                    outcome.innerHTML += keys[j].innerHTML;
            }
    };
  }
  
  function calculate(j) {
    return function () {
            var final_out = outcome.innerHTML;

            var toFix = final_out.replace(/\d+/g, function(num){ 
                return parseInt(num, 10);
            });
            
              
      outcome.innerHTML = eval(toFix);
    };
  }
};