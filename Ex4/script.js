let list = document.querySelectorAll("#list li");


//function from stack overflow
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function colorize (item){
    item.addEventListener("click", function() {
        let coleur=getRandomColor();
        this.style.color = coleur;
        }
    );
}

list.forEach(colorize)