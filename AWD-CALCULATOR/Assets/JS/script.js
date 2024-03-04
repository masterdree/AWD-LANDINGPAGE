window.onload = function () {
    var buttons = document.querySelectorAll('#calculator span');
    var operators = ['+', '-', 'x', '÷'];
    var decimalAdded = false;

    for(var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function(e) {
            var input = document.querySelector('.result p');
            var inputVal = input.innerHTML;
            var btnVal = this.innerHTML;

            if(btnVal == 'AC') {
                input.innerHTML = '';
                decimalAdded = false;
            }
            else if(btnVal == '=') {
                var equation = inputVal;
                var lastChar = equation[equation.length - 1];

                equation = equation.replace(/x/g, '*').replace(/÷/g, '/');

                if(operators.indexOf(lastChar) > -1 || lastChar == '.')
                    equation = equation.replace(/.$/, '');

                if(equation)
                    input.innerHTML = eval(equation);

                decimalAdded = false;
            }
            else if(btnVal == 'DEL') {
                input.innerHTML = inputVal.substring(0, inputVal.length - 1);
            }
            else if(operators.indexOf(btnVal) > -1) {
                var lastChar = inputVal[inputVal.length - 1];

                if(inputVal != '' && operators.indexOf(lastChar) == -1) 
                    input.innerHTML += btnVal;

                else if(inputVal == '' && btnVal == '-') 
                    input.innerHTML += btnVal;

                if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
                    input.innerHTML = inputVal.replace(/.$/, btnVal);
                }

                decimalAdded = false;
            }
            else if(btnVal == '.') {
                if(!decimalAdded) {
                    input.innerHTML += btnVal;
                    decimalAdded = true;
                }
            }
            else {
                input.innerHTML += btnVal;
            }

            e.preventDefault();
        } 
    }
}

buttons.forEach(button => {
    button.addEventListener('mousedown', function() {
        this.style.transform = 'scale(0.95)';
    });
    button.addEventListener('mouseup', function() {
        this.style.transform = 'scale(1)';
    });
    button.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});