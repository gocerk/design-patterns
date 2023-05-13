const CalculatorAdapter = require('./calculatorAdapter');

(() => {
    const calculator = new CalculatorAdapter();
    let res = calculator.operation(1, 2, 'add');

    console.log(res);
})();