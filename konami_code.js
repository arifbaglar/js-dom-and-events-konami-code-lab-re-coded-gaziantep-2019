const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index=0;
function init(e) {
  
  document.addEventListener('keydown', arif);
  
  const key = parseInt(e.which);
 
  if (key === code[index]) {console.log(key)
    index++;
 
    if (index === code.length) {
      alert("tebrikler!");
 
      index = 0;
    }
  } else {
    index = 0;
  }

}

