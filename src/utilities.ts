export function getConsolePrintMessage(inputArr: number[], isOutput?: boolean) {
    return (isOutput ? 'output: ' : 'input: ') + inputArr;
}