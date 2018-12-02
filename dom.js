function getRandColorElem() {
 var black=Math.floor(Math.random() * 255);
 var red=Math.floor(Math.random() * 255);
 var gray=Math.floor(Math.random() * 255);
 return '#' + black.toString(16) + red.toString(16) + gray.toString(16);
}

window.onload = function() {
 for (var n = 20; n>= 1; n--) {
   const domDiv = document.createElement('div');
      domDiv.style.width = "50px";
      domDiv.style.height = "50px";
      domDiv.style.margin = "10px";
      domDiv.style.backgroundColor = getRandColorElem();
      domDiv.innerText = n;
    document.body.append(domDiv);
    }
}

