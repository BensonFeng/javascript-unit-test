import { it, expect } from "vitest";
import { add } from "./math";

it("should summarize all number values in an array", () => {
  //Arrange
  const numbers = [1, 2, 3];

  //Act
  const result = add(numbers);

  //Assert
  const expectedResult = numbers.reduceRight(
    (prevValue, curValue) => prevValue + curValue
  );
  expect(result).toBe(expectedResult);
});
