const DEFAULT_DAY = "Número de día inválido";
export const getDayOfWeekSC = (day) => {
    switch (day) {
        case 1: 
            return "Lunes";
        case 2:
            return "Martes";
        case 3: 
            return "Miércoles";
        case 4:
            return "Jueves";
        case 5:
            return "Viernes";
        case 6:
            return "Sábado";
        case 7:
            return "Domingo";
        default:
            return DEFAULT_DAY;
    }
};

let dayOfWeek = {
    1: "Lunes",
    2: "Martes",
    3: "Miércoles",
    4: "Jueves",
    5: "Viernes",
    6: "Sábado",
    7: "Domingo"
};

export const getDayOfWeekObject = (day) => {

    return dayOfWeek[day] || DEFAULT_DAY;

};


const DEFAULT_OPERARTOR_ERROR = "Operator invalid";

export const simpleCalculatorSC = (operartor, num_1, num_2) => {

    switch (operartor) {
        case "+":
            return num_1 + num_2;
        case "-":
            return num_1 - num_2;
        case "*":
            return num_1 * num_2;
        case "/":
            return num_1 / num_2;
        default:
            return DEFAULT_OPERARTOR_ERROR;
    }
};

let calculatorObject = {
    "+": (num_1, num_2) => num_1 + num_2,
    "-": (num_1, num_2) => num_1 - num_2,
    "*": (num_1, num_2) => num_1 * num_2,
    "/": (num_1, num_2) => num_1 / num_2

};

export const simpleCalculatorObject = (operartor, num_1, num_2) => {

    return calculatorObject[operartor] ? calculatorObject[operartor](num_1, num_2) : DEFAULT_OPERARTOR_ERROR;
};
