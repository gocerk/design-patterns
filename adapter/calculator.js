// the legacy code for Calculator class

// class Calculator {
//     operataion(a, b, operation) {
//         switch(operation) {
//             case 'add':
//                 return a + b;
//                 break;
            
//             case 'sub':
//                 return a - b;
//                 break;

//             case 'mul':
//                 return a * b;
//                 break;

//             case 'div':
//                 return a / b;
//                 break;
//         }
//     }
// }

// The new code for Calculator class
class Calculator {
    add(a, b) {
        return a + b;
    }

    sub(a, b) {
        return a - b;
    }

    mul(a, b) {
        return a * b;
    }

    div(a, b) {
        return a / b;
    }
}

module.exports = Calculator;