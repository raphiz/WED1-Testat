/**
 * core
 */
clearVariables();

function calculate(left, operator, right) {
    var result = "Invalid calculation";

    switch(operator) {
        case "+":
            resultoutputseInt(left) + parseInt(right);
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
    left = 0;
    right = 0;
    operator = "";
    currentVal = "";
}

/**
 * UI
 */
$(document).ready(function() {

    var output = $("#output");
    var input = $("#input");
    var currentVal = "";
    output.val("Welcome");

    $(".number").on('click', function () {
        if(output.val() == "Welcome") {
            output.val("");
        }

        input.append(this.value);
        currentVal += this.value;
    });

    $(".operator").on('click', function () {
        if(operator === "") {
            operator = this.value;
            left = currentVal;

            output.append(left + " " + operator);
            input.val("");
            currentVal = "";
        } else {
            operator = this.value;

            var content = output.val();
            var endSize = content.length -1;
            var result = content.substring(0, endSize);

            output.val(result + operator);
        }
    });

    $("#key-c").on('click', function () {
        input.val("");
        output.val("");
        currentVal = "";
        clearVariables();
    });

    $("#key-equals").on('click', function () {
        if(left !== "") {
            right = currentVal;

            currentVal = calculate(left, operator, right);

            input.val(currentVal);
            output.val("");

            clearVariables();
        } else {
            output.val("Invalid Calculation");
        }
    });
});
