let increase = 0;
let decrease = 1500;


var incrementBOX = document.getElementById("increment")
var decrementBOX = document.getElementById("decrement")
const tap = document.getElementById("bigDevCoin")

setInterval(()=>{ 
    decrementBOX.innerHTML = decrease++
    if(decrementBOX.innerHTML == 1500 ){
        decrease = 1500
    // decrementBOX.innerHTML = 
    }
    
}, 1000)
                            
tap.addEventListener("click", (e) => {
    // console.log(e.target);
    incrementBOX.innerHTML = increase++
    decrementBOX.innerHTML = decrease--
    if (decrease === 0) {
      decrease = 1
    }
});




// tap.style.display = 'none';
// tap.style.display = 'block';
// tap.style.setProperty("font-size", "12px");











