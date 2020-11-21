/**
 * Bubbles sort function.
 * @param inputArr input array.
 * @returns sorted order.
 */
export function bubbleSort(inputArr: number[]): number[] {

    for (let i = 0; i < inputArr.length; ++i) {
        for (let j = i+1; j < inputArr.length; ++j) {
            if (inputArr[i] > inputArr[j]) {
                const temp = inputArr[i];
                inputArr[i] = inputArr[j];
                inputArr[j] = temp;
            }
        }
    }

    return inputArr;
}