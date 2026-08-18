const firstNumberElement: HTMLElement | null =
    document.getElementById("firstNumber");

const secondNumberElement: HTMLElement | null =
    document.getElementById("secondNumber");

const operationElement: HTMLElement | null =
    document.getElementById("operation");

const calculateButton: HTMLElement | null =
    document.getElementById("calculate");

const resultElement: HTMLElement | null =
    document.getElementById("result");


function calculate(
    a: number,
    b: number,
    operation: string
): number {
    switch (operation) {
        case "sum":
            return a + b;

        case "subtract":
            return a - b;

        case "multiply":
            return a * b;

        case "divide":
            return a / b;

        default:
            return 0;
    }
}


calculateButton?.addEventListener("click", function (): void {

    const firstInput: HTMLInputElement =
        firstNumberElement as HTMLInputElement;

    const secondInput: HTMLInputElement =
        secondNumberElement as HTMLInputElement;

    const operationSelect: HTMLSelectElement =
        operationElement as HTMLSelectElement;

    const resultOutput: HTMLElement =
        resultElement as HTMLElement;


    const firstValue: string = firstInput.value;
    const secondValue: string = secondInput.value;

    const firstNumber: number = Number(firstValue);
    const secondNumber: number = Number(secondValue);

    const operation: string = operationSelect.value;


    const result: number =
        calculate(firstNumber, secondNumber, operation);


    resultOutput.innerHTML = String(result);
});
