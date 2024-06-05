# DPK01 - Implementation 10
- Create a function that can revert a string using an array to collect characters, without using native JavaScript methods like `join()`.

## Function Definitions
- `isValueValid(value)`: Checks if `value` is a non-null string.
- `reverseString(inputString)`: Reverses the string if valid using an array; otherwise returns "Invalid input".

## Test Cases

### Test Case 1: Valid String Input
- **Input**: 'Hello'
  1. Call `reverseString('Hello')`.
  2. Inside `reverseString`, `isValueValid('Hello')` verifies the string is non-null and of type 'string'.
  3. `reverseString` method:
     - **Step 1: Initialize an array `characters`**
       - **Action**: Create an empty array to store characters in reverse order.
       - **Example**: `characters` = `[]`.
     - **Step 2: Loop through `inputString` from start to end**
       - **Action**: Loop starts from the first character to the last.
       - **Process**: For each iteration, calculate the reverse index and assign the character at this index.
         - Calculation of reverse index: `reverseIndex = input.length - 1 - i`.
       - **Example**: `['o', 'l', 'l', 'e', 'H']`.
     - **Step 3: Build the reversed string**
       - **Action**: Manually construct a string from the array elements.
       - **Example**:'olleH'.
  4. Output 'olleH'.

### Test Case 2: Non-string Input
- **Input**: 123
  1. Call `reverseString(123)`.
  2. Inside `reverseString`, `isValueValid(123)` identifies input is not a string.
     - **Action**: Checks the type of the input value.
     - **Process**:
       - Uses the `typeof` operator on `value`.
       - `typeof 123` returns `'number'`.
       - Compares result with `'string'`.
       - Evaluation results in `false` because `123` is a number, not a string.
     - **Result**: Returns `false` indicating the input is invalid.
  3. Output 'Invalid input'.
