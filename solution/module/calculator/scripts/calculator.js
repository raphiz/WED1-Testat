/**
 * core
 */
function calculate(left, operator, right) {
    var result = 0;

    switch(operator) {
        case "+":
            result = left + right;
            break;
        case "-":
            result = left - right;
            break;
        case "*":
            result = left * right;
            break;
        case "/":
            result = left / right;
            break;
    }

    return result;
}

/**
 * UI
 */
window.addEventListener('load', function() {

    var left = 0;
    var right = 0;

    $(".number").on('click', function () {
        $("#input").append(this.value);
    });

    $(".operator").on('click', function () {
            left = $("#input").val();
        
        
            $("#output").append(left + " " + this.value);
            $("#input").val("");
    });

    $("button").on('click', function () {
        // var value = this.value;
        // alert("Hi, Nikola :) The Value is: " + value);
    });
    
    $("#key-c").on('click', function () {
        $("#input").val("");
        $("#output").val("");
    })
});