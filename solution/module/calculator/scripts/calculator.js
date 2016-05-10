/**
 * core
 */
var left = 0;
var right = 0;
var operator = "";

function calculate(left, operator, right) {
    var result = "Invalid calculation";

    switch(operator) {
        case "+":
            result = parseInt(left) + parseInt(right);
            break;
        case "-":
            result = parseInt(left) - parseInt(right);
            break;
        case "*":
            result = parseInt(left) * parseInt(right);
            break;
        case "/":
            result = parseInt(left) / parseInt(right);
            break;
    }

    return result;
}

function clearVariables() {
    left = "";
    right = "";
    operator = "";
}

/**
 * UI
 */
window.addEventListener('load', function() {

    $(".output").val("Welcome");

    $(".number").on('click', function () {
        if($(".output").val() == "Welcome") {
            $(".output").val("");
        }

        $("#input").append(this.value);
    });

    $(".operator").on('click', function () {
        if(operator == "") {
            operator = this.value;
            left = $("#input").val();

            $("#output").append(left + " " + operator);
            $("#input").val("");
        } else {
            operator = this.value;

            var content = $(".output").val();
            var endSize = content.length -1;
            var result = content.substring(0, endSize);

            $(".output").val(result + operator);
        }
    });
    
    $("#key-c").on('click', function () {
        $("#input").val("");
        $("#output").val("");
        clearVariables();
    })

    $("#key-equals").on('click', function () {
        if(left != "") {
            right = $("#input").val();

            var result = calculate(left, operator, right);

            $("#input").val(result);
            $("#output").val("");

            clearVariables();
        } else {
            $("#output").val("Invalid Calculation");
        }
    })
});