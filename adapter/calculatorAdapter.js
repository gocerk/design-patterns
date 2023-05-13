const Calculator = require('./calculator');

class CalculatorAdapter {
    operation(a, b, operation) {
        const calculator = new Calculator();
        switch(operation) {
            case 'add':
                return calculator.add(a, b);
                break;
            
            case 'sub':
                return calculator.sub(a, b);
                break;

            case 'mul':
                return calculator.mul(a, b);
                break;

            case 'div':
                return calculator.div(a, b);
                break;
        }
    }
}

module.exports = CalculatorAdapter;