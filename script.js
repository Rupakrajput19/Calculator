function press(N) {
    
    var res = (document.forms.display.value += N);
  }

  function pressClear(N) {                         // clear all display
    var res = (document.forms.display.value = N);

    if (res == "clear") {
      document.forms.display.value = "";
    }
  }

  function pressEval(N) {
   var res =document.forms.display.value = eval(document.forms.display.value)
 
  }