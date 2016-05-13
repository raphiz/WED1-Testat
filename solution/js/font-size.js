document.getElementById('font-slider').addEventListener('change', function(event){
    var value = event.target.value/15;
    document.getElementById('font-size').value = Math.round(value * 10) / 10 ;
    document.body.style.fontSize = value + "rem";
});
