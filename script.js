var numbers = document.querySelectorAll('.num'),
    operations = document.querySelectorAll(".ops"),
    dec = document.getElementById("dec"),
    c = document.getElementById("c"),
    resultBtn = document.getElementById("result"),
    display = document.getElementById("inputNum"),
    curNum = 0,
    newNum = false, //if input a new number 'true'
    memoryOperation = "";


//event's
for(var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    number.addEventListener("click", function(e) {
        numPress(e.target.textContent);
    })
}; //if elem not the only one (for)


for(var i = 0; i < operations.length; i++) {
    var oper = operations[i];
    oper.addEventListener("click", function(e) {
        operation(e.target.textContent);
    });
}

dec.addEventListener("click", decimal);
    
c.addEventListener("click", clear);
    

//function of input a number
function numPress(number) {
    if(newNum) {
        display.value = number;
        newNum = false;
    } else {
        if(display.value == 0) {
            display.value = number;
        } else {
            display.value += number;
        };
    };
};


//all operations
function operation(op) {
   var localOp = display.value;

    if (newNum && memoryOperation !== "=") {
        display.value = curNum; //save the oper here
    } else {
        newNum = true;
        if (memoryOperation == "+") {
            curNum += parseFloat(localOp);
        } else if (memoryOperation == "-") {
            curNum -= parseFloat(localOp);
        } else if (memoryOperation == "*") {
            curNum *= parseFloat(localOp);
        } else if (memoryOperation == "/") {
            curNum /= parseFloat(localOp);
        } else {
            curNum = parseFloat(localOp);
        };
        display.value = curNum;
        memoryOperation = op;
    };
};


//decimal
function decimal() {
    var localDecimal = display.value;

    if (newNum) {
        localDecimal = "0.";
        newNum = false;
    } else {
        if (localDecimal.indexOf(".") == -1) {
            localDecimal += "."
        };
    };
    display.value = localDecimal;
};


//clear function
function clear() {
    display.value = "0";
    newNum = true;
    curNum = 0;
    memoryOperation = "";
};

