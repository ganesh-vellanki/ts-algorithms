import { bubbleSort } from "./main";

describe('bubble sort test', () => {
    test('test case #1', () => {
        // Arrange
        const inputArr = [2, 1];
        console.log(inputArr);

        // Action
        const result = bubbleSort(inputArr);

        // Assert
        expect(result).not.toBeNull();
        expect(result.length).toEqual(2);
        expect(result[0]).toEqual(1);
        expect(result[1]).toEqual(2);
        console.log(inputArr);
    });
});
