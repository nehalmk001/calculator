// to display on displaybox

function display(num){
    output.value += num;
}

// to clear 

function clearAll(){
    output.value="";
}

// to =

function evaluvateExp(){
    output.value=eval(output.value);
}

// delect the last item

function removeLast(){
    del=output.value;
    output.value=del.slice(0,-1);
}

// Special case for square root (√)
function squareRoot() {
    var value = parseFloat(output.value);
    if (!isNaN(value)) {
      output.value = Math.sqrt(value);
    } else {
      output.value = "Error";
    }
  }

  // Special case for percentage (%)
function percentage() {
    var value = parseFloat(output.value);
    if (!isNaN(value)) {
      output.value = value / 100;
    } else {
      output.value = "Error";
    }
  }