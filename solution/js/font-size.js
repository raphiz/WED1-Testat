document.getElementById('font-slider').addEventListener('change', function(event){
    var value = event.target.value;
    document.getElementById('font-size').value = value;
    document.body.style.fontSize = value + "px";
    console.log(document.body.style);
});