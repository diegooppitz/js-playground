# DPK01 - Implementation 05
- Create a function that can revert a string.

## Function Definitions
- `isValueValid(value)`: Checks if `value` is a non-null string.
- `reverseString(inputString)`: Reverses the string if valid; otherwise returns "Invalid input".

## Test Cases
### Test Case 1: Valid String Input
- **Input**: 'Hello'
  1. Call `reverseString('Hello')`.
  2. Inside `reverseString`, `isValueValid('Hello')` verifies the string is non-null and of type 'string'.
  3. `inputString.split('').reverse().join('')` processes to return 'olleH'.
     - **Step 1: `inputString.split('')`**
       - **Action**: Splits the input string into an array of individual characters.
       - **Example**: For 'Hello', this step converts it to `['H', 'e', 'l', 'l', 'o']`.
     - **Step 2: `.reverse()`**
       - **Action**: Reverses the order of elements in the array.
       - **Example**: The array `['H', 'e', 'l', 'l', 'o']` becomes `['o', 'l', 'l', 'e', 'H']`.
     - **Step 3: `.join('')`**
       - **Action**: Joins the elements of the reversed array back into a single string.
       - **Example**: 'olleH'.
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
