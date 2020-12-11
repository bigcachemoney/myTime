import "./styles/index.scss";

    // var data = [2, 4, 8, 10];
    // var pie = d3.pie()
    // console.log(pie(data))


var slider = document.getElementById("ranger");
var output = document.getElementById("value");

output.innerHTML = slider.value;
slider.oninput = function(){
  output.innerHTML = this.value;
}

slider.addEventListener("mousemove", function(){
  var value = slider.value;
})