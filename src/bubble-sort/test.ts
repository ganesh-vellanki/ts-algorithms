import { getConsolePrintMessage } from "../utilities";
import { bubbleSort } from "./main";

describe('bubble sort test suite', () => {
    test('test case #1', () => {
        // Arrange
        const inputArr = [2, 1];
        console.log(getConsolePrintMessage(inputArr));

        // Action
        const result = bubbleSort(inputArr);
        console.log(getConsolePrintMessage(inputArr, true));

        // Assert
        expect(result.length).toBeGreaterThan(0);
        expect(result[0]).toEqual(1);
        expect(result[result.length - 1]).toEqual(2);
    });

    test('test case #2', () => {
        // Arrange
        const inputArr = [2, 1, -1, -2, -8, 8, 10, 5, 4, 6, 12, 10, 19];
        console.log(getConsolePrintMessage(inputArr));

        // Action
        const result = bubbleSort(inputArr);
        console.log(getConsolePrintMessage(inputArr, true));

        // Assert
        expect(result.length).toBeGreaterThan(0);
        expect(result[0]).toEqual(-8);
        expect(result[result.length - 1]).toEqual(19);
    });
});
