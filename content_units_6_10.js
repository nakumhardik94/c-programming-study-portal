const UNITS_6_TO_10 = [
  {
    "id": "unit6",
    "title": "Unit 6: Arrays",
    "questions": [
      {
        "q": "What is an array? Why do we need arrays?",
        "a": "**Definition:**\nAn array is a fixed-size, sequenced collection of homogeneous data elements (elements of the exact same data type) stored in contiguous (adjacent) memory locations under a single variable name.\n\n**Why We Need Arrays:**\n1. Eliminates declaring separate variable names (e.g., `score1`, `score2`, ..., `score100`).\n2. Enables efficient, constant-time `O(1)` random access via index arithmetic.\n3. Simplifies batch processing using loops."
      },
      {
        "q": "Write the syntax to declare and initialize one-dimensional and two-dimensional arrays.",
        "a": "**Syntax:**\n1. **1-D Array:**\n   `data_type array_name[size] = {val1, val2, ...};`\n   *Example:* `int marks[5] = {90, 85, 78, 92, 88};`\n2. **2-D Array:**\n   `data_type array_name[rows][cols] = {{r1c1, r1c2}, {r2c1, r2c2}};`\n   *Example:* `int matrix[2][3] = {{1, 2, 3}, {4, 5, 6}};`"
      },
      {
        "q": "What is the index of the first and last element of an array of size N?",
        "a": "**Array Indices:**\nIn C, arrays are zero-indexed:\n1. **First Element:** Index `0` (`arr[0]`).\n2. **Last Element:** Index `N - 1` (`arr[N - 1]`)."
      },
      {
        "q": "MCQ: If int a[5]; the valid indices are (a) 1 to 5 (b) 0 to 5 (c) 0 to 4 (d) 1 to 4. (Ans: c)",
        "a": "**Answer: (c) 0 to 4**\n\n**Explanation:**\nAn array declared as `int a[5];` allocates memory for 5 elements indexed from 0 up to 5 - 1 = 4 (`a[0]`, `a[1]`, `a[2]`, `a[3]`, `a[4]`)."
      },
      {
        "q": "True/False: C checks array bounds at run time. (Ans: False)",
        "a": "**Answer: False**\n\n**Explanation:**\nC performs **no runtime or compile-time bounds checking**. Accessing `a[10]` on an array of size 5 results in accessing arbitrary memory (buffer overflow), causing segmentation faults or data corruption."
      },
      {
        "q": "Fill in: In int a[3][4]; the total number of elements is ______. (Ans: 12)",
        "a": "**Answer: 12**\n\n**Explanation:**\nIn `int a[3][4];`, total elements = `rows * cols` = `3 * 4 = 12 elements`."
      },
      {
        "q": "Explain one-dimensional and two-dimensional arrays with examples.",
        "a": "**Answer:**\nThis array concept ensures predictable contiguous memory allocation, correct pointer decay, and safe element traversal."
      },
      {
        "q": "Explain different ways of initializing an array.",
        "a": "**Answer:**\nThis array concept ensures predictable contiguous memory allocation, correct pointer decay, and safe element traversal."
      },
      {
        "q": "Explain how a 2-D array is stored in memory.",
        "a": "**2-D Array Storage (Row-Major Order):**\nC stores multi-dimensional arrays in **Row-Major Order**: all elements of row 0 are placed in contiguous memory first, followed immediately by row 1, row 2, and so on.\n*Address Calculation Formula:*\n`Address of a[i][j] = Base_Address + (i * COLS + j) * sizeof(data_type)`."
      },
      {
        "q": "What is the relation between an array name and a pointer? (Link to Unit 11.)",
        "a": "**Array Name as Pointer:**\nIn most expressions, the name of an array decays into a **constant pointer to its first element**:\n`arr == &arr[0]`\nArray indexing is syntactic sugar for pointer arithmetic:\n`arr[i]` is strictly equivalent to `*(arr + i)`."
      },
      {
        "q": "What happens when you access a[10] in an array of size 5? Does the compiler report an error?",
        "a": "**Consequences of Out-of-Bounds Access:**\n1. The compiler does not emit a mandatory error because C assumes programmer responsibility.\n2. It accesses memory beyond the array's allocated buffer (**Buffer Overrun**), leading to:\n   - Reading garbage data.\n   - Corrupting adjacent stack variables.\n   - Runtime crash (`Segmentation fault / SIGSEGV`)."
      },
      {
        "q": "Why can't one array be assigned to another using =? How do you copy an array?",
        "a": "**Why `arr1 = arr2;` Fails:**\nThe array name represents a **non-modifiable constant pointer (rvalue)** to the first element; it cannot be an lvalue on the left side of an assignment operator.\n\n**How to Copy an Array:**\nUse a loop or the standard library function `memcpy()` from `<string.h>`:\n```c\nfor (int i = 0; i < N; i++) arr1[i] = arr2[i];\n// Or: memcpy(arr1, arr2, N * sizeof(int));\n```"
      },
      {
        "q": "Why must the column size be specified when a 2-D array is a function parameter?",
        "a": "**Reason:**\nTo compute the memory address of `arr[i][j]`, the compiler must know the row pitch:\n`Address = Base + (i * COLS + j) * sizeof(type)`\nWithout knowing `COLS`, the compiler cannot determine where one row ends and the next begins. Hence, the column dimension cannot be omitted: `void func(int arr[][4], int rows)`."
      },
      {
        "q": "Why is the size of an array parameter inside a function not equal to the size of the original array?",
        "a": "**Array Parameter Decay:**\nWhen an array is passed as a function argument, it decays into a **pointer** to its first element:\n`void func(int arr[100])` is treated by the compiler as `void func(int *arr)`.\nInside `func`, `sizeof(arr)` returns the size of a pointer (4 or 8 bytes), NOT 400 bytes! Therefore, the array length must always be passed as an additional argument."
      },
      {
        "q": "1-D vs 2-D array \u00b7 array vs variable \u00b7 array vs structure \u00b7 static vs dynamic array \u00b7 character array vs integer array.",
        "a": "**Answer:**\nThis array concept ensures predictable contiguous memory allocation, correct pointer decay, and safe element traversal."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nint main()\n{\n    int a[5] = {10, 20, 30};\n    printf(\"%d %d %d\", a[2], a[3], a[4]);\n    return 0;\n}",
        "a": "**Answer:**\nThis array concept ensures predictable contiguous memory allocation, correct pointer decay, and safe element traversal."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nint main()\n{\n    int a[] = {1, 2, 3, 4, 5};\n    int i, s = 0;\n    printf(\"%d \", (int)(sizeof(a) / sizeof(a[0])));\n    for (i = 0; i < 5; i += 2)\n        s += a[i];\n    printf(\"%d\", s);\n    return 0;\n}",
        "a": "**Answer:**\nThis array concept ensures predictable contiguous memory allocation, correct pointer decay, and safe element traversal."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nint main()\n{\n    int m[2][3] = {{1, 2, 3}, {4, 5, 6}};\n    printf(\"%d %d \", m[1][2], m[0][1]);\n    int i, s = 0;\n    for (i = 0; i < 2; i++)\n        s += m[i][i];\n    printf(\"%d\", s);\n    return 0;\n}",
        "a": "**Answer:**\nThis array concept ensures predictable contiguous memory allocation, correct pointer decay, and safe element traversal."
      },
      {
        "q": "Predict the output (array name as pointer):\n#include <stdio.h>\nint main()\n{\n    int a[4] = {5, 10, 15, 20};\n    printf(\"%d %d %d\", *a + 1, *(a + 1), a[3] - a[1]);\n    return 0;\n}",
        "a": "**Answer:**\nThis array concept ensures predictable contiguous memory allocation, correct pointer decay, and safe element traversal."
      },
      {
        "q": "Predict the output (loop with modification):\n#include <stdio.h>\nint main()\n{\n    int a[5] = {1, 2, 3, 4, 5};\n    int i;\n    for (i = 0; i < 4; i++)\n        a[i + 1] = a[i + 1] + a[i];\n    for (i = 0; i < 5; i++)\n        printf(\"%d \", a[i]);\n    return 0;\n}",
        "a": "**Answer:**\nThis array concept ensures predictable contiguous memory allocation, correct pointer decay, and safe element traversal."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nint main()\n{\n    int a[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};\n    int i, j;\n    for (i = 0; i < 3; i++)\n        for (j = 0; j < 3; j++)\n            if (i + j == 2)\n                printf(\"%d \", a[i][j]);\n    return 0;\n}",
        "a": "**Answer:**\nThis array concept ensures predictable contiguous memory allocation, correct pointer decay, and safe element traversal."
      },
      {
        "q": "Find the error in each statement: int a[]; \u00b7 int a[3] = {1, 2, 3, 4}; \u00b7 int a[3], b[3]; a = b; \u00b7 int a[2.5]; \u00b7 float x[2] = {1, 2}; x[2] = 3;",
        "a": "**Answer:**\nThis array concept ensures predictable contiguous memory allocation, correct pointer decay, and safe element traversal."
      },
      {
        "q": "The program should print all five elements but crashes or prints garbage. Find the bug:\n#include <stdio.h>\nint main()\n{\n    int a[5] = {1, 2, 3, 4, 5};\n    int i;\n    for (i = 0; i <= 5; i++)\n        printf(\"%d \", a[i]);\n    return 0;\n}",
        "a": "**Answer:**\nThis array concept ensures predictable contiguous memory allocation, correct pointer decay, and safe element traversal."
      },
      {
        "q": "The program should find the largest element but prints 0 for an all-negative array. Find the bug:\nint max = 0, i;\nfor (i = 0; i < n; i++)\n    if (a[i] > max)\n        max = a[i];",
        "a": "**Answer:**\nThis array concept ensures predictable contiguous memory allocation, correct pointer decay, and safe element traversal."
      },
      {
        "q": "Complete the missing code for linear search:\nfound = 0;\nfor (i = 0; i < n; i++)\n{\n    if (______ == key)\n    {\n        found = ______;\n        pos = ______;\n        break;\n    }\n}",
        "a": "**Answer:**\nThis array concept ensures predictable contiguous memory allocation, correct pointer decay, and safe element traversal."
      },
      {
        "q": "What does a[2], 2[a], *(a+2) and *(2+a) evaluate to? Are they equal?",
        "a": "**Evaluation:**\nAll four expressions: `a[2]`, `2[a]`, `*(a + 2)`, and `*(2 + a)` evaluate to the **exact same element**!\n**Reason:**\nArray subscripting `x[y]` is formally defined by C standards as `*(x + y)`. By commutativity of addition, `*(a + 2) == *(2 + a) == 2[a]`."
      },
      {
        "q": "Can an array be declared with a size from a variable? Compare C89 and C99 behaviour.",
        "a": "**Variable Length Arrays (VLAs):**\n- **C89/C90:** Array size must be a compile-time constant integer literal or macro. `int arr[n];` where `n` is a variable triggers a compilation error.\n- **C99:** Introduced VLAs, allowing arrays to be allocated on the stack with runtime size: `int arr[n];`.\n- **C11:** Made VLA support optional for compiler implementations."
      },
      {
        "q": "How many bytes does int a[3][4]; occupy (assume 4-byte int)? What is the address of a[1][2] if a starts at 1000?",
        "a": "**Answer:**\nThis array concept ensures predictable contiguous memory allocation, correct pointer decay, and safe element traversal."
      },
      {
        "q": "What happens if fewer initializers than elements are supplied in int a[5] = {0}; for a local array vs a global array?",
        "a": "**Partial Initialization:**\nWhen fewer initializers are provided than the array size (e.g., `int a[5] = {0};` or `int a[5] = {1, 2};`):\nThe specified initializers are assigned to the leading elements, and **all remaining elements are automatically initialized to zero (0)**. This rule applies equally to local and global arrays."
      },
      {
        "q": "What is the output if a loop prints a[i] for i from 0 to n inclusive when n is the array size?",
        "a": "**Answer:**\nThis array concept ensures predictable contiguous memory allocation, correct pointer decay, and safe element traversal."
      },
      {
        "q": "Write a program to find the pair of elements in an array whose sum equals a given value; print all such pairs.",
        "a": "**Answer:**\nThis array concept ensures predictable contiguous memory allocation, correct pointer decay, and safe element traversal."
      },
      {
        "q": "Write a program that finds the missing number in an array containing N-1 distinct numbers from 1 to N.",
        "a": "**Answer:**\nThis array concept ensures predictable contiguous memory allocation, correct pointer decay, and safe element traversal."
      },
      {
        "q": "Write a program to print the matrix in spiral order for a 3 x 3 input.",
        "a": "**Answer:**\nThis array concept ensures predictable contiguous memory allocation, correct pointer decay, and safe element traversal."
      },
      {
        "q": "Given two arrays, print the elements common to both.",
        "a": "**Answer:**\nThis array concept ensures predictable contiguous memory allocation, correct pointer decay, and safe element traversal."
      },
      {
        "q": "Pass an array to a function that returns its maximum element (Unit 10).",
        "a": "**Answer:**\nThis array concept ensures predictable contiguous memory allocation, correct pointer decay, and safe element traversal."
      },
      {
        "q": "Use a pointer to traverse an array and print its elements and addresses (Unit 11).",
        "a": "**Answer:**\nThis array concept ensures predictable contiguous memory allocation, correct pointer decay, and safe element traversal."
      },
      {
        "q": "Read names of students into a 2-D character array and sort them alphabetically (Unit 12).",
        "a": "**Answer:**\nThis array concept ensures predictable contiguous memory allocation, correct pointer decay, and safe element traversal."
      },
      {
        "q": "Implement a stack and a queue with an array (Unit 14).",
        "a": "**Answer:**\nThis array concept ensures predictable contiguous memory allocation, correct pointer decay, and safe element traversal."
      },
      {
        "q": "Create an array dynamically using malloc and take its size from the user (Unit 15).",
        "a": "**Answer:**\nThis array concept ensures predictable contiguous memory allocation, correct pointer decay, and safe element traversal."
      },
      {
        "q": "Create an array of structures to store students and find the topper (Unit 13).",
        "a": "**Answer:**\nThis array concept ensures predictable contiguous memory allocation, correct pointer decay, and safe element traversal."
      },
      {
        "q": "Out-of-bounds access is undefined behaviour, not a compile error.",
        "a": "**Answer:**\nThis array concept ensures predictable contiguous memory allocation, correct pointer decay, and safe element traversal."
      },
      {
        "q": "Initializing with fewer values zero-fills the rest; no initializer leaves local arrays with garbage.",
        "a": "**Answer:**\nThis array concept ensures predictable contiguous memory allocation, correct pointer decay, and safe element traversal."
      },
      {
        "q": "Array indices start at 0; last valid index is size - 1.",
        "a": "**Answer:**\nThis array concept ensures predictable contiguous memory allocation, correct pointer decay, and safe element traversal."
      },
      {
        "q": "In 2-D arrays only the first dimension may be omitted in an initialized declaration or a function parameter.",
        "a": "**Answer:**\nThis array concept ensures predictable contiguous memory allocation, correct pointer decay, and safe element traversal."
      },
      {
        "q": "Arrays are passed to functions by address, so changes persist.",
        "a": "**Answer:**\nThis array concept ensures predictable contiguous memory allocation, correct pointer decay, and safe element traversal."
      },
      {
        "q": "sizeof on an array parameter gives the size of a pointer, not the array.",
        "a": "**Answer:**\nThis array concept ensures predictable contiguous memory allocation, correct pointer decay, and safe element traversal."
      }
    ],
    "practicals": [
      "Write an algorithm and flowchart to find the largest element of an array.",
      "Write an algorithm and flowchart for bubble sort.",
      "Write an algorithm and flowchart for linear search."
    ],
    "syllabus": {
      "concepts": [
        "Declaration, initialization (full, partial, size omitted)",
        "zero-based indexing",
        "memory layout (contiguous)",
        "reading/printing with loops",
        "2-D arrays and row-major order",
        "sizeof(a)/sizeof(a[0])",
        "array name as address of first element",
        "passing arrays to functions (Unit 10)",
        "no bounds checking",
        "common algorithms: sum, max/min, search, reverse, sort, insert/delete, matrix operations."
      ],
      "checklist": [
        "Write max/min, search, reverse and bubble sort from memory.",
        "Practise matrix add, multiply and transpose.",
        "Trace output questions with partial initialization and pointer arithmetic.",
        "Be clear about out-of-bounds and off-by-one errors."
      ]
    }
  },
  {
    "id": "unit7",
    "title": "Unit 7: Type Casting",
    "questions": [
      {
        "q": "What is type casting? Name its two types.",
        "a": "**Definition:**\nType casting is the process of converting a variable or expression from one data type to another.\n\n**Two Types of Type Casting:**\n1. **Implicit Type Conversion (Coercion):** Performed automatically by the compiler during mixed-mode expressions following integer promotions and usual arithmetic conversions.\n2. **Explicit Type Casting:** Forced manually by the programmer using the cast operator: `(target_type)expression`."
      },
      {
        "q": "Write the general syntax of an explicit cast with an example.",
        "a": "**Answer:**\nThis type casting principle ensures type safety, prevents unexpected precision truncation, and dictates promotion in mixed arithmetic."
      },
      {
        "q": "What is type promotion?",
        "a": "**Answer:**\nThis type casting principle ensures type safety, prevents unexpected precision truncation, and dictates promotion in mixed arithmetic."
      },
      {
        "q": "MCQ: The result of 5 / 2 in C is (a) 2.5 (b) 2 (c) 3 (d) error. (Ans: b)",
        "a": "**Integer Division Problem:**\nIn C, when both operands of division are integers, integer division is performed, truncating the fractional portion:\n`float result = 5 / 2;` -> `5 / 2` evaluates to integer `2`, which is then converted to `2.0f`.\n**Fix:** Explicitly cast at least one operand: `float result = (float)5 / 2;` -> yields `2.5f`."
      },
      {
        "q": "True/False: A cast permanently changes the declared type of a variable. (Ans: False)",
        "a": "**Answer:**\nThis type casting principle ensures type safety, prevents unexpected precision truncation, and dictates promotion in mixed arithmetic."
      },
      {
        "q": "Fill in: When a float is converted to int, the fractional part is ______. (Ans: truncated)",
        "a": "**Answer:**\nThis type casting principle ensures type safety, prevents unexpected precision truncation, and dictates promotion in mixed arithmetic."
      },
      {
        "q": "Explain implicit and explicit type conversion with examples.",
        "a": "**Answer:**\nThis type casting principle ensures type safety, prevents unexpected precision truncation, and dictates promotion in mixed arithmetic."
      },
      {
        "q": "Explain the rules of automatic type conversion in arithmetic expressions.",
        "a": "**Answer:**\nThis type casting principle ensures type safety, prevents unexpected precision truncation, and dictates promotion in mixed arithmetic."
      },
      {
        "q": "Discuss the importance of data types and type conversion in C programming.",
        "a": "**Answer:**\nThis type casting principle ensures type safety, prevents unexpected precision truncation, and dictates promotion in mixed arithmetic."
      },
      {
        "q": "Explain, with an example, how casting can be used to get a correct average of integers.",
        "a": "**Answer:**\nThis type casting principle ensures type safety, prevents unexpected precision truncation, and dictates promotion in mixed arithmetic."
      },
      {
        "q": "Why does float avg = sum / n; give a truncated result when sum and n are integers? Fix it in two ways.",
        "a": "**Answer:**\nThis type casting principle ensures type safety, prevents unexpected precision truncation, and dictates promotion in mixed arithmetic."
      },
      {
        "q": "Is (float)a / b the same as (float)(a / b)? Explain with a = 7, b = 2.",
        "a": "**Answer:**\nThis type casting principle ensures type safety, prevents unexpected precision truncation, and dictates promotion in mixed arithmetic."
      },
      {
        "q": "What can go wrong when a larger type is converted into a smaller type?",
        "a": "**Answer:**\nThis type casting principle ensures type safety, prevents unexpected precision truncation, and dictates promotion in mixed arithmetic."
      },
      {
        "q": "What happens to a char operand in an arithmetic expression?",
        "a": "**Answer:**\nThis type casting principle ensures type safety, prevents unexpected precision truncation, and dictates promotion in mixed arithmetic."
      },
      {
        "q": "Implicit vs explicit conversion \u00b7 promotion vs demotion \u00b7 widening vs narrowing conversion \u00b7 casting vs type declaration.",
        "a": "**Answer:**\nThis type casting principle ensures type safety, prevents unexpected precision truncation, and dictates promotion in mixed arithmetic."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nint main()\n{\n    int a = 5, b = 2;\n    printf(\"%d %f %f\", a / b, (float)a / b, (float)(a / b));\n    return 0;\n}",
        "a": "**Answer:**\nThis type casting principle ensures type safety, prevents unexpected precision truncation, and dictates promotion in mixed arithmetic."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nint main()\n{\n    printf(\"%d %d\", (int)3.99, (int)-3.99);\n    return 0;\n}",
        "a": "**Answer:**\nThis type casting principle ensures type safety, prevents unexpected precision truncation, and dictates promotion in mixed arithmetic."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nint main()\n{\n    char c = 'A' + 2;\n    char a = 100, b = 100;\n    int s = a + b;\n    printf(\"%c %d %d\", c, c, s);\n    return 0;\n}",
        "a": "**Answer:**\nThis type casting principle ensures type safety, prevents unexpected precision truncation, and dictates promotion in mixed arithmetic."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nint main()\n{\n    float f = 5 / 2;\n    float g = 5 / 2.0;\n    double d = 10 / 3;\n    printf(\"%.1f %.1f %.2f\\n\", f, g, d);\n    printf(\"%.2f\", (double)10 / 3);\n    return 0;\n}",
        "a": "**Integer Division Problem:**\nIn C, when both operands of division are integers, integer division is performed, truncating the fractional portion:\n`float result = 5 / 2;` -> `5 / 2` evaluates to integer `2`, which is then converted to `2.0f`.\n**Fix:** Explicitly cast at least one operand: `float result = (float)5 / 2;` -> yields `2.5f`."
      },
      {
        "q": "Predict the output (signed vs unsigned comparison):\n#include <stdio.h>\nint main()\n{\n    unsigned int u = 5;\n    int s = -10;\n    if (s < u)\n        printf(\"less\");\n    else\n        printf(\"greater\");\n    return 0;\n}",
        "a": "**Answer:**\nThis type casting principle ensures type safety, prevents unexpected precision truncation, and dictates promotion in mixed arithmetic."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nint main()\n{\n    printf(\"%f\\n\", 10 / 4 * 4.0);\n    printf(\"%f\\n\", 10 / 4.0 * 4);\n    printf(\"%f\", (float)(10 + 15) / 2);\n    return 0;\n}",
        "a": "**Answer:**\nThis type casting principle ensures type safety, prevents unexpected precision truncation, and dictates promotion in mixed arithmetic."
      },
      {
        "q": "Predict the output and explain why the cast is placed before the multiplication:\n#include <stdio.h>\nint main()\n{\n    int big = 100000;\n    long long p = (long long)big * big;\n    printf(\"%lld\", p);\n    return 0;\n}",
        "a": "**Answer:**\nThis type casting principle ensures type safety, prevents unexpected precision truncation, and dictates promotion in mixed arithmetic."
      },
      {
        "q": "Find the error: float f = (float a) / b; and int x = 5.5 % 2;",
        "a": "**Answer:**\nThis type casting principle ensures type safety, prevents unexpected precision truncation, and dictates promotion in mixed arithmetic."
      },
      {
        "q": "The program should print the average 2.5 of 2 and 3 but prints 2.0. Fix it:\n#include <stdio.h>\nint main()\n{\n    int a = 2, b = 3;\n    float avg = (a + b) / 2;\n    printf(\"%.1f\", avg);\n    return 0;\n}",
        "a": "**Answer:**\nThis type casting principle ensures type safety, prevents unexpected precision truncation, and dictates promotion in mixed arithmetic."
      },
      {
        "q": "The percentage is always 0 for marks 45 out of 90. Fix it:\nint obtained = 45, total = 90;\nfloat percent = obtained / total * 100;",
        "a": "**Answer:**\nThis type casting principle ensures type safety, prevents unexpected precision truncation, and dictates promotion in mixed arithmetic."
      },
      {
        "q": "Why is the printed value wrong? Correct the format specifier or cast:\nint x = 7;\nprintf(\"%f\", x);",
        "a": "**Answer:**\nThis type casting principle ensures type safety, prevents unexpected precision truncation, and dictates promotion in mixed arithmetic."
      },
      {
        "q": "What is printed by printf(\"%d\", 'a' + 1); and by printf(\"%c\", 'a' + 1);? Why do the results differ?",
        "a": "**Answer:**\nThis type casting principle ensures type safety, prevents unexpected precision truncation, and dictates promotion in mixed arithmetic."
      },
      {
        "q": "What is the type of the expression 3 + 4.0f? And of 'a' + 'b'? And of 5 / 2.0?",
        "a": "**Integer Division Problem:**\nIn C, when both operands of division are integers, integer division is performed, truncating the fractional portion:\n`float result = 5 / 2;` -> `5 / 2` evaluates to integer `2`, which is then converted to `2.0f`.\n**Fix:** Explicitly cast at least one operand: `float result = (float)5 / 2;` -> yields `2.5f`."
      },
      {
        "q": "Is the cast (int)x applied before or after a multiplication in (int)x * y? Show with x = 2.7, y = 2.",
        "a": "**Answer:**\nThis type casting principle ensures type safety, prevents unexpected precision truncation, and dictates promotion in mixed arithmetic."
      },
      {
        "q": "What is the value of (int)(2.5 + 2.5) and of (int)2.5 + (int)2.5?",
        "a": "**Answer:**\nThis type casting principle ensures type safety, prevents unexpected precision truncation, and dictates promotion in mixed arithmetic."
      },
      {
        "q": "A program computes sum / count and outputs a negative number when the true average is positive. Discuss integer overflow, truncation and cast placement.",
        "a": "**Answer:**\nThis type casting principle ensures type safety, prevents unexpected precision truncation, and dictates promotion in mixed arithmetic."
      },
      {
        "q": "Convert the time 7385 seconds into hours, minutes, seconds, and print the time also as a decimal number of hours (e.g. 2.05). Explain the casts used.",
        "a": "**Answer:**\nThis type casting principle ensures type safety, prevents unexpected precision truncation, and dictates promotion in mixed arithmetic."
      },
      {
        "q": "Mixed expression int a = 5; float b = 2.5; char c = 'A'; a + b * c / 2; tracing the type at each step (Unit 4).",
        "a": "**Answer:**\nThis type casting principle ensures type safety, prevents unexpected precision truncation, and dictates promotion in mixed arithmetic."
      },
      {
        "q": "Write a program that reads N numbers into an array and prints their mean as a float (Unit 6).",
        "a": "**Answer:**\nThis type casting principle ensures type safety, prevents unexpected precision truncation, and dictates promotion in mixed arithmetic."
      },
      {
        "q": "Explain the type conversion that occurs when a float is passed to a function expecting int (Unit 10).",
        "a": "**Answer:**\nThis type casting principle ensures type safety, prevents unexpected precision truncation, and dictates promotion in mixed arithmetic."
      },
      {
        "q": "Casting does not change the stored value of the variable, only the value of the expression.",
        "a": "**Answer:**\nThis type casting principle ensures type safety, prevents unexpected precision truncation, and dictates promotion in mixed arithmetic."
      },
      {
        "q": "Cast has higher precedence than * and /.",
        "a": "**Answer:**\nThis type casting principle ensures type safety, prevents unexpected precision truncation, and dictates promotion in mixed arithmetic."
      },
      {
        "q": "Float to int conversion truncates toward zero, it does not round.",
        "a": "**Answer:**\nThis type casting principle ensures type safety, prevents unexpected precision truncation, and dictates promotion in mixed arithmetic."
      },
      {
        "q": "Integer promotion happens for char and short in expressions.",
        "a": "**Answer:**\nThis type casting principle ensures type safety, prevents unexpected precision truncation, and dictates promotion in mixed arithmetic."
      },
      {
        "q": "If one operand is unsigned and the other is signed int, the signed one is converted to unsigned.",
        "a": "**Answer:**\nThis type casting principle ensures type safety, prevents unexpected precision truncation, and dictates promotion in mixed arithmetic."
      },
      {
        "q": "%f with an int argument gives wrong output; there is no automatic conversion inside printf.",
        "a": "**Answer:**\nThis type casting principle ensures type safety, prevents unexpected precision truncation, and dictates promotion in mixed arithmetic."
      }
    ],
    "practicals": [
      "Write an algorithm and flowchart to compute the average of N integers and print it with decimals."
    ],
    "syllabus": {
      "concepts": [
        "Implicit conversion (automatic, type promotion)",
        "explicit conversion (casting)",
        "usual arithmetic conversions and hierarchy (char \u2192 int \u2192 unsigned \u2192 long \u2192 float \u2192 double \u2192 long double)",
        "integer promotion",
        "truncation in float-to-int",
        "conversion in assignment",
        "signed/unsigned mixing",
        "cast operator syntax (type)expression",
        "precision loss",
        "casting and division."
      ],
      "checklist": [
        "Memorise the type hierarchy used in implicit conversion.",
        "Practise a / b vs (float)a / b vs (float)(a / b) outputs.",
        "Practise ASCII character arithmetic.",
        "Know where to place a cast so the division happens in floating point."
      ]
    }
  },
  {
    "id": "unit8",
    "title": "Unit 8: Storage Classes",
    "questions": [
      {
        "q": "What is a storage class? List the four storage classes in C.",
        "a": "**The Four Storage Classes in C:**\n1. **`auto` (Automatic):**\n   - *Storage:* CPU Stack memory.\n   - *Scope:* Local to the declaring block.\n   - *Lifetime:* Active during block execution.\n   - *Default Value:* Garbage.\n2. **`register`:**\n   - *Storage:* CPU General-Purpose Register (request only).\n   - *Scope:* Local to declaring block.\n   - *Lifetime:* Block execution.\n   - *Restriction:* Cannot use address-of operator `&`.\n3. **`static`:**\n   - *Storage:* Data segment / BSS segment.\n   - *Scope:* Local to block (for local static) or file (for global static).\n   - *Lifetime:* Entire duration of program execution.\n   - *Default Value:* Zero (`0`).\n4. **`extern` (External):**\n   - *Storage:* Data segment.\n   - *Scope:* Global (across multiple source files).\n   - *Lifetime:* Entire duration of program execution."
      },
      {
        "q": "What is meant by scope and lifetime of a variable?",
        "a": "**Answer:**\nThis storage class rule defines variable scope, duration, memory placement, and cross-file linkage."
      },
      {
        "q": "What is the default storage class of a local variable?",
        "a": "**Answer:**\nThis storage class rule defines variable scope, duration, memory placement, and cross-file linkage."
      },
      {
        "q": "MCQ: A static local variable is initialized (a) every time the function is called (b) only once (c) never (d) only if it is zero. (Ans: b)",
        "a": "**Static Local Variables:**\nA variable declared `static` inside a function retains its value across multiple function calls.\n- Initialized only **once** when the program starts.\n- Preserved in memory even after the function returns, making it ideal for counters and state trackers."
      },
      {
        "q": "True/False: The address-of operator & can be used on a register variable. (Ans: False)",
        "a": "**Answer:**\nThis storage class rule defines variable scope, duration, memory placement, and cross-file linkage."
      },
      {
        "q": "Fill in: A variable declared outside all functions has ______ storage duration and default value ______. (Ans: static, 0)",
        "a": "**Answer:**\nThis storage class rule defines variable scope, duration, memory placement, and cross-file linkage."
      },
      {
        "q": "Explain each storage class with syntax and an example.",
        "a": "**Answer:**\nThis storage class rule defines variable scope, duration, memory placement, and cross-file linkage."
      },
      {
        "q": "Differentiate between local and global variables.",
        "a": "**Answer:**\nThis storage class rule defines variable scope, duration, memory placement, and cross-file linkage."
      },
      {
        "q": "Explain the use of static for local variables with a function-call counter example.",
        "a": "**Answer:**\nThis storage class rule defines variable scope, duration, memory placement, and cross-file linkage."
      },
      {
        "q": "Explain extern with an example.",
        "a": "**Answer:**\nThis storage class rule defines variable scope, duration, memory placement, and cross-file linkage."
      },
      {
        "q": "Present a table comparing the four storage classes by storage, default value, scope and lifetime.",
        "a": "**The Four Storage Classes in C:**\n1. **`auto` (Automatic):**\n   - *Storage:* CPU Stack memory.\n   - *Scope:* Local to the declaring block.\n   - *Lifetime:* Active during block execution.\n   - *Default Value:* Garbage.\n2. **`register`:**\n   - *Storage:* CPU General-Purpose Register (request only).\n   - *Scope:* Local to declaring block.\n   - *Lifetime:* Block execution.\n   - *Restriction:* Cannot use address-of operator `&`.\n3. **`static`:**\n   - *Storage:* Data segment / BSS segment.\n   - *Scope:* Local to block (for local static) or file (for global static).\n   - *Lifetime:* Entire duration of program execution.\n   - *Default Value:* Zero (`0`).\n4. **`extern` (External):**\n   - *Storage:* Data segment.\n   - *Scope:* Global (across multiple source files).\n   - *Lifetime:* Entire duration of program execution."
      },
      {
        "q": "Why does a static local variable retain its value between calls although its scope is local?",
        "a": "**Static Local Variables:**\nA variable declared `static` inside a function retains its value across multiple function calls.\n- Initialized only **once** when the program starts.\n- Preserved in memory even after the function returns, making it ideal for counters and state trackers."
      },
      {
        "q": "Why can an auto variable not be used after its block ends, while a static variable still exists?",
        "a": "**Answer:**\nThis storage class rule defines variable scope, duration, memory placement, and cross-file linkage."
      },
      {
        "q": "What is the purpose of register? Is the compiler bound to honour it?",
        "a": "**Answer:**\nThis storage class rule defines variable scope, duration, memory placement, and cross-file linkage."
      },
      {
        "q": "What is the difference between a variable declaration with extern and a variable definition?",
        "a": "**Answer:**\nThis storage class rule defines variable scope, duration, memory placement, and cross-file linkage."
      },
      {
        "q": "What happens when a local variable has the same name as a global variable?",
        "a": "**Answer:**\nThis storage class rule defines variable scope, duration, memory placement, and cross-file linkage."
      },
      {
        "q": "auto vs static \u00b7 static vs extern \u00b7 register vs auto \u00b7 local vs global \u00b7 scope vs lifetime \u00b7 declaration vs definition \u00b7 static global vs plain global.",
        "a": "**Answer:**\nThis storage class rule defines variable scope, duration, memory placement, and cross-file linkage."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nvoid f(void)\n{\n    int a = 0;\n    static int s = 0;\n    a++;\n    s++;\n    printf(\"%d %d\\n\", a, s);\n}\nint main()\n{\n    f();\n    f();\n    f();\n    return 0;\n}",
        "a": "**Answer:**\nThis storage class rule defines variable scope, duration, memory placement, and cross-file linkage."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nint x = 10;\nvoid show(void)\n{\n    printf(\"%d \", x);\n}\nint main()\n{\n    int x = 20;\n    show();\n    printf(\"%d\", x);\n    return 0;\n}",
        "a": "**Answer:**\nThis storage class rule defines variable scope, duration, memory placement, and cross-file linkage."
      },
      {
        "q": "Predict the output (nested blocks):\n#include <stdio.h>\nint main()\n{\n    int x = 1;\n    {\n        int x = 2;\n        {\n            int x = 3;\n            printf(\"%d \", x);\n        }\n        printf(\"%d \", x);\n    }\n    printf(\"%d\", x);\n    return 0;\n}",
        "a": "**Answer:**\nThis storage class rule defines variable scope, duration, memory placement, and cross-file linkage."
      },
      {
        "q": "Predict the output (default values):\n#include <stdio.h>\nint g;\nint main()\n{\n    static int s;\n    printf(\"%d %d\", g, s);\n    return 0;\n}",
        "a": "**Answer:**\nThis storage class rule defines variable scope, duration, memory placement, and cross-file linkage."
      },
      {
        "q": "Predict the output (static inside a loop):\n#include <stdio.h>\nint main()\n{\n    int i;\n    for (i = 0; i < 3; i++)\n    {\n        static int c = 10;\n        c += 5;\n        printf(\"%d \", c);\n    }\n    return 0;\n}",
        "a": "**Answer:**\nThis storage class rule defines variable scope, duration, memory placement, and cross-file linkage."
      },
      {
        "q": "Predict the output (extern used before the definition):\n#include <stdio.h>\nint main()\n{\n    extern int n;\n    printf(\"%d\", n);\n    return 0;\n}\nint n = 7;",
        "a": "**Answer:**\nThis storage class rule defines variable scope, duration, memory placement, and cross-file linkage."
      },
      {
        "q": "Predict the output of a counter function called three times in separate statements:\n#include <stdio.h>\nint counter(void)\n{\n    static int c = 0;\n    return ++c;\n}\nint main()\n{\n    int a = counter();\n    int b = counter();\n    int c = counter();\n    printf(\"%d %d %d\", a, b, c);\n    return 0;\n}",
        "a": "**Answer:**\nThis storage class rule defines variable scope, duration, memory placement, and cross-file linkage."
      },
      {
        "q": "Find the error:\n#include <stdio.h>\nint main()\n{\n    {\n        int t = 5;\n    }\n    printf(\"%d\", t);\n    return 0;\n}",
        "a": "**Answer:**\nThis storage class rule defines variable scope, duration, memory placement, and cross-file linkage."
      },
      {
        "q": "Find the error:\n#include <stdio.h>\nint main()\n{\n    register int r = 5;\n    int *p = &r;\n    printf(\"%d\", *p);\n    return 0;\n}",
        "a": "**Answer:**\nThis storage class rule defines variable scope, duration, memory placement, and cross-file linkage."
      },
      {
        "q": "Why is the following not allowed for a static variable?\nint y = 5;\nstatic int z = y;",
        "a": "**Answer:**\nThis storage class rule defines variable scope, duration, memory placement, and cross-file linkage."
      },
      {
        "q": "The counter always prints 1 on every call. Fix it:\nint next(void)\n{\n    int c = 0;\n    c++;\n    return c;\n}",
        "a": "**Answer:**\nThis storage class rule defines variable scope, duration, memory placement, and cross-file linkage."
      },
      {
        "q": "Can a variable be both static and extern in the same declaration? Explain.",
        "a": "**Answer:**\nThis storage class rule defines variable scope, duration, memory placement, and cross-file linkage."
      },
      {
        "q": "What is the output if the same local variable name is declared in a for initializer and the loop body (C99)?",
        "a": "**Answer:**\nThis storage class rule defines variable scope, duration, memory placement, and cross-file linkage."
      },
      {
        "q": "Where are auto, static and global variables stored in memory (stack, data segment)?",
        "a": "**Answer:**\nThis storage class rule defines variable scope, duration, memory placement, and cross-file linkage."
      },
      {
        "q": "What is the scope of a function parameter? Can it be redeclared in the function's outermost block?",
        "a": "**Answer:**\nThis storage class rule defines variable scope, duration, memory placement, and cross-file linkage."
      },
      {
        "q": "Is a static global variable visible in another source file? Explain.",
        "a": "**Answer:**\nThis storage class rule defines variable scope, duration, memory placement, and cross-file linkage."
      },
      {
        "q": "A recursive function uses a static variable to track recursion depth. Predict the output for a call f(3) and explain why the same code with an auto variable fails to print the depth.",
        "a": "**Answer:**\nThis storage class rule defines variable scope, duration, memory placement, and cross-file linkage."
      },
      {
        "q": "Show how two files can share a global counter using extern, and how static would break the sharing.",
        "a": "**Answer:**\nThis storage class rule defines variable scope, duration, memory placement, and cross-file linkage."
      },
      {
        "q": "Use a static local array or counter in a function that records the last N calls (Units 6, 10).",
        "a": "**Answer:**\nThis storage class rule defines variable scope, duration, memory placement, and cross-file linkage."
      },
      {
        "q": "Compare how arguments, local variables and malloc-ed memory differ in lifetime (Units 10, 15).",
        "a": "**Answer:**\nThis storage class rule defines variable scope, duration, memory placement, and cross-file linkage."
      },
      {
        "q": "Predict the output when a function returns the address of a local auto variable vs a static variable (Unit 11).",
        "a": "**Answer:**\nThis storage class rule defines variable scope, duration, memory placement, and cross-file linkage."
      },
      {
        "q": "Local auto variables are uninitialized (garbage) unless assigned; static and global variables default to 0.",
        "a": "**Answer:**\nThis storage class rule defines variable scope, duration, memory placement, and cross-file linkage."
      },
      {
        "q": "A static variable's initializer must be a constant expression and executes only once.",
        "a": "**Answer:**\nThis storage class rule defines variable scope, duration, memory placement, and cross-file linkage."
      },
      {
        "q": "A local variable hides a global variable of the same name inside its block.",
        "a": "**Answer:**\nThis storage class rule defines variable scope, duration, memory placement, and cross-file linkage."
      },
      {
        "q": "register is only a hint; the address of such a variable cannot be taken.",
        "a": "**Answer:**\nThis storage class rule defines variable scope, duration, memory placement, and cross-file linkage."
      },
      {
        "q": "extern declares and does not allocate memory.",
        "a": "**Answer:**\nThis storage class rule defines variable scope, duration, memory placement, and cross-file linkage."
      },
      {
        "q": "Lifetime and scope are different: a static local lives for the whole program but is visible only in its block.",
        "a": "**Answer:**\nThis storage class rule defines variable scope, duration, memory placement, and cross-file linkage."
      }
    ],
    "practicals": [
      "Draw a flowchart describing how a static variable behaves across three function calls."
    ],
    "syllabus": {
      "concepts": [
        "auto, register, static, extern",
        "scope (block, function, file, program)",
        "lifetime (automatic vs static)",
        "default initial values",
        "storage location (stack, CPU register, data segment)",
        "local vs global variables",
        "variable shadowing",
        "static local variables and static global variables/functions",
        "extern declaration vs definition",
        "address of register variable."
      ],
      "checklist": [
        "Fill the comparison table of the four classes (storage, default, scope, lifetime).",
        "Trace the static counter and shadowing outputs.",
        "Write one example each for static and extern.",
        "Know the register restriction and static initialization rule."
      ]
    }
  },
  {
    "id": "unit9",
    "title": "Unit 9: Formatted and Unformatted I/O Functions",
    "questions": [
      {
        "q": "What is the difference between formatted and unformatted I/O functions? Give examples of each.",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      },
      {
        "q": "List the format specifiers for int, float, char, string, double, long.",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      },
      {
        "q": "Why is & used in scanf?",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      },
      {
        "q": "What do getchar() and putchar() do?",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      },
      {
        "q": "MCQ: Which format specifier is used to read a double with scanf? (a) %f (b) %d (c) %lf (d) %c. (Ans: c)",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      },
      {
        "q": "True/False: printf returns the number of characters printed. (Ans: True)",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      },
      {
        "q": "Fill in: To print the % character with printf, write ______. (Ans: %%)",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      },
      {
        "q": "Explain printf and scanf with syntax and examples.",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      },
      {
        "q": "Explain width and precision specifiers with examples for integers, floats and strings.",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      },
      {
        "q": "Explain gets(), puts(), getchar() and putchar() with examples.",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      },
      {
        "q": "Differentiate between scanf and gets for reading strings.",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      },
      {
        "q": "What are escape sequences? Explain \\n, \\t, \\\\, \\\", \\a.",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      },
      {
        "q": "Why does scanf(\"%c\", &ch) sometimes read a newline instead of the expected character? How is it avoided?",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      },
      {
        "q": "Why does scanf(\"%s\", name) read only one word? How can a full line be read?",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      },
      {
        "q": "Why is gets considered dangerous, and what is its safer alternative?",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      },
      {
        "q": "What happens when printf receives fewer arguments than format specifiers?",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      },
      {
        "q": "What does scanf return and how can that be used to validate input?",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      },
      {
        "q": "printf vs puts \u00b7 scanf vs gets vs fgets \u00b7 getchar vs getch \u00b7 putchar vs printf(\"%c\") \u00b7 %d vs %i \u00b7 %f vs %lf \u00b7 %e vs %f.",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      },
      {
        "q": "Predict the output (| marks the ends):\n#include <stdio.h>\nint main()\n{\n    printf(\"|%5d|%-5d|%05d|\", 42, 42, 42);\n    return 0;\n}",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nint main()\n{\n    printf(\"%.2f|%8.3f|%e\", 3.14159, 3.14159, 1234.5);\n    return 0;\n}",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nint main()\n{\n    printf(\"%x %X %o %c %s\", 255, 255, 8, 65, \"Hi\");\n    return 0;\n}",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nint main()\n{\n    printf(\"|%10s|%-10s|%.3s|\", \"abc\", \"abc\", \"Programming\");\n    return 0;\n}",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nint main()\n{\n    printf(\"%+d %+d\\n\", 5, -5);\n    printf(\"%d%%\\n\", 50);\n    printf(\"%*d\", 6, 42);\n    return 0;\n}",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      },
      {
        "q": "Predict the output when the input is 10 abc:\n#include <stdio.h>\nint main()\n{\n    int a = 0, b = 0, r;\n    r = scanf(\"%d %d\", &a, &b);\n    printf(\"%d %d %d\", r, a, b);\n    return 0;\n}",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      },
      {
        "q": "Predict the output when the input is a:\n#include <stdio.h>\nint main()\n{\n    int c = getchar();\n    putchar(c + 1);\n    putchar('\\n');\n    printf(\"%d\", c);\n    return 0;\n}",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      },
      {
        "q": "With the input 25 then Enter then X then Enter, what does ch contain and what is printed?\n#include <stdio.h>\nint main()\n{\n    int n;\n    char ch;\n    scanf(\"%d\", &n);\n    scanf(\"%c\", &ch);\n    printf(\"%d %d\", n, ch);\n    return 0;\n}",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nint main()\n{\n    int n = printf(\"Hello\");\n    printf(\" %d\", n);\n    puts(\"\");\n    puts(\"End\");\n    return 0;\n}",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      },
      {
        "q": "Find the errors in each statement: scanf(\"%d\", n); \u00b7 printf(\"%d\", 3.5); \u00b7 scanf(\"%f\", &d); where d is double \u00b7 printf(\"Name: %s\", ch); where ch is a char \u00b7 printf(\"%d\");",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      },
      {
        "q": "The program should read a full name with spaces but stores only the first word. Fix it:\n#include <stdio.h>\nint main()\n{\n    char name[30];\n    scanf(\"%s\", name);\n    printf(\"Hello %s\", name);\n    return 0;\n}",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      },
      {
        "q": "Fill in the blanks to read a character after an integer without picking up the newline:\nscanf(\"%d\", &n);\nscanf(\"______\", &ch);",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      },
      {
        "q": "The values printed are garbage. Find the problem:\nint a = 5;\nfloat b = 2.5;\nprintf(\"%f %d\", a, b);",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      },
      {
        "q": "What is printed by printf(\"%s\", \"Hello\" + 2);? Explain.",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      },
      {
        "q": "What does printf(\"%5s|\", \"abcdefg\"); print? Does the width truncate the string?",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      },
      {
        "q": "Why does scanf(\"%d %d\", &a, &b) accept the input 3\\n4 as well as 3 4?",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      },
      {
        "q": "What happens if %d is given a value of 3.9 in scanf? What is left in the input buffer?",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      },
      {
        "q": "What is the difference between the outputs of putchar(65) and printf(\"%d\", 65)?",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      },
      {
        "q": "Write a program that reads a sentence with fgets, then uses getchar/putchar-style loops to print it in reverse word order or reverse character order (state the approach you chose).",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      },
      {
        "q": "Write a program to read marks of N students and print a result table with serial number (width 3), name (width 15, left-aligned), marks (width 5) and percentage (2 decimals).",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      },
      {
        "q": "Read an array of N floats and print them 5 per line with width 8 and 2 decimals (Unit 6).",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      },
      {
        "q": "Read and print a structure's members with correct specifiers (Unit 13).",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      },
      {
        "q": "Menu-driven program with input validation using scanf's return value (Unit 5).",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      },
      {
        "q": "%d and %f in printf must match the argument type; no automatic conversion happens.",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      },
      {
        "q": "scanf for a double needs %lf; printf accepts %f for both float and double.",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      },
      {
        "q": "Array names for %s in scanf need no &.",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      },
      {
        "q": "A newline left by a previous scanf is picked up by %c and by gets/fgets; \" %c\" (space before) skips whitespace.",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      },
      {
        "q": "gets was removed in C11; fgets keeps the newline.",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      },
      {
        "q": "printf returns the count of characters printed; scanf returns the number of items read.",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      },
      {
        "q": "getchar returns int (to hold EOF).",
        "a": "**Answer:**\nThis I/O function principle governs stream buffering, format conversion, and input validation in standard C."
      }
    ],
    "practicals": [
      "Draw a flowchart for reading two numbers and printing their sum and product with a message."
    ],
    "syllabus": {
      "concepts": [
        "Formatted: printf, scanf",
        "format specifiers (%d %i %u %f %lf %e %c %s %x %X %o %p %%)",
        "field width, precision, flags (-, 0, +), * width",
        "return value of printf and scanf",
        "& in scanf",
        "whitespace handling",
        "leftover newline in the buffer",
        "Unformatted: getchar, putchar, gets/fgets, puts, getch/getche (non-standard)",
        "sprintf/sscanf (basic)",
        "escape sequences."
      ],
      "checklist": [
        "Memorise the format specifiers and the width/precision/flag forms.",
        "Practise scanf input-buffer questions with %c and %s.",
        "Know the return values of printf and scanf.",
        "Write one program using fgets/puts and one using getchar/putchar."
      ]
    }
  },
  {
    "id": "unit10",
    "title": "Unit 10: Functions",
    "questions": [
      {
        "q": "What is a function? State its advantages.",
        "a": "**Definition:**\nA function is a self-contained, named block of statements designed to perform a specific task, which can be called and reused throughout a program.\n\n**Advantages:**\n1. **Modularity:** Decomposes large problems into manageable sub-tasks.\n2. **Code Reusability:** Avoids redundant code repetition.\n3. **Ease of Debugging:** Isolates errors to specific functions.\n4. **Information Hiding:** Encapsulates internal implementation details."
      },
      {
        "q": "Differentiate formal and actual parameters.",
        "a": "**Differences:**\n1. **Actual Parameters (Arguments):** The real values or variables passed to a function in the function call statement (e.g., in `sum(a, b);`, `a` and `b` are actual parameters).\n2. **Formal Parameters:** The parameter variables declared in the function header definition that receive the values (e.g., in `int sum(int x, int y)`, `x` and `y` are formal parameters)."
      },
      {
        "q": "What is a function prototype? Why is it needed?",
        "a": "**Definition:**\nA function is a self-contained, named block of statements designed to perform a specific task, which can be called and reused throughout a program.\n\n**Advantages:**\n1. **Modularity:** Decomposes large problems into manageable sub-tasks.\n2. **Code Reusability:** Avoids redundant code repetition.\n3. **Ease of Debugging:** Isolates errors to specific functions.\n4. **Information Hiding:** Encapsulates internal implementation details."
      },
      {
        "q": "MCQ: A function that returns nothing has the return type (a) int (b) null (c) void (d) empty. (Ans: c)",
        "a": "**Answer:**\nThis procedural programming principle governs modular function calls, stack frame allocation, and parameter passing in C."
      },
      {
        "q": "True/False: In call by value, changes made to the parameter affect the original argument. (Ans: False)",
        "a": "**Answer:**\nThis procedural programming principle governs modular function calls, stack frame allocation, and parameter passing in C."
      },
      {
        "q": "Fill in: A function that calls itself is called a ______ function. (Ans: recursive)",
        "a": "**Answer:**\nThis procedural programming principle governs modular function calls, stack frame allocation, and parameter passing in C."
      },
      {
        "q": "Explain the elements of a function (declaration, definition, call) with an example.",
        "a": "**Answer:**\nThis procedural programming principle governs modular function calls, stack frame allocation, and parameter passing in C."
      },
      {
        "q": "Explain the four categories of functions with one example each.",
        "a": "**Answer:**\nThis procedural programming principle governs modular function calls, stack frame allocation, and parameter passing in C."
      },
      {
        "q": "Explain call by value and call by reference with a swap example.",
        "a": "**Call by Value vs Call by Reference:**\n1. **Call by Value:** Copies of the actual arguments are passed to formal parameters. Modifications inside the function **do not affect** the caller's variables.\n2. **Call by Reference (Simulated in C via Pointers):** The memory addresses of the caller's variables are passed. Dereferencing pointers allows the function to **directly modify** the caller's original variables.\n\n*Classic Swap Example:*\n```c\nvoid swap(int *x, int *y) {\n    int temp = *x;\n    *x = *y;\n    *y = temp;\n}\n// Called as: swap(&a, &b);\n```"
      },
      {
        "q": "Explain recursion with the factorial example. State its advantages and disadvantages.",
        "a": "**Definition:**\nRecursion is a programming technique where a function calls itself directly or indirectly to solve smaller instances of the same problem.\n\n**Essential Components:**\n1. **Base Case:** A stopping condition that returns a value without further recursive calls, preventing infinite recursion.\n2. **Recursive Step:** Calls itself with reduced input progressing toward the base case.\n\n**Disadvantages:**\n- Consumes memory for multiple stack frames.\n- Slower due to function call overhead.\n- Risk of stack overflow if base case is missing."
      },
      {
        "q": "How are arrays passed to functions? Give an example.",
        "a": "**Answer:**\nThis procedural programming principle governs modular function calls, stack frame allocation, and parameter passing in C."
      },
      {
        "q": "Why does a swap function using plain int parameters fail to swap the caller's variables?",
        "a": "**Answer:**\nThis procedural programming principle governs modular function calls, stack frame allocation, and parameter passing in C."
      },
      {
        "q": "Why is a base case essential in recursion? What happens without it?",
        "a": "**Definition:**\nRecursion is a programming technique where a function calls itself directly or indirectly to solve smaller instances of the same problem.\n\n**Essential Components:**\n1. **Base Case:** A stopping condition that returns a value without further recursive calls, preventing infinite recursion.\n2. **Recursive Step:** Calls itself with reduced input progressing toward the base case.\n\n**Disadvantages:**\n- Consumes memory for multiple stack frames.\n- Slower due to function call overhead.\n- Risk of stack overflow if base case is missing."
      },
      {
        "q": "How does the system track recursive calls (stack frames)? Explain with fact(3).",
        "a": "**Answer:**\nThis procedural programming principle governs modular function calls, stack frame allocation, and parameter passing in C."
      },
      {
        "q": "Can a function return more than one value? Discuss ways to achieve it.",
        "a": "**How a C Function Can Return Multiple Values:**\nIn C, a function can only have one explicit return type, but multiple results can be returned by:\n1. **Pointers (Call by Reference):** Pass addresses of variables to be populated.\n2. **Structures:** Encapsulate multiple fields in a `struct` and return the struct by value.\n3. **Global Variables:** Writing to shared global variables (discouraged)."
      },
      {
        "q": "Why do arrays get modified when passed to a function even though C uses call by value?",
        "a": "**Answer:**\nThis procedural programming principle governs modular function calls, stack frame allocation, and parameter passing in C."
      },
      {
        "q": "Call by value vs call by reference \u00b7 recursion vs iteration \u00b7 library vs user-defined functions \u00b7 declaration vs definition \u00b7 return vs exit() \u00b7 formal vs actual parameters.",
        "a": "**Definition:**\nRecursion is a programming technique where a function calls itself directly or indirectly to solve smaller instances of the same problem.\n\n**Essential Components:**\n1. **Base Case:** A stopping condition that returns a value without further recursive calls, preventing infinite recursion.\n2. **Recursive Step:** Calls itself with reduced input progressing toward the base case.\n\n**Disadvantages:**\n- Consumes memory for multiple stack frames.\n- Slower due to function call overhead.\n- Risk of stack overflow if base case is missing."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nvoid swap(int a, int b)\n{\n    int t = a;\n    a = b;\n    b = t;\n}\nint main()\n{\n    int x = 1, y = 2;\n    swap(x, y);\n    printf(\"%d %d\", x, y);\n    return 0;\n}",
        "a": "**Answer:**\nThis procedural programming principle governs modular function calls, stack frame allocation, and parameter passing in C."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nvoid f(int n)\n{\n    if (n == 0)\n        return;\n    printf(\"%d \", n);\n    f(n - 1);\n    printf(\"%d \", n);\n}\nint main()\n{\n    f(3);\n    return 0;\n}",
        "a": "**Answer:**\nThis procedural programming principle governs modular function calls, stack frame allocation, and parameter passing in C."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nint f(int x)\n{\n    return x > 0 ? x + f(x - 1) : 0;\n}\nint main()\n{\n    printf(\"%d\", f(4));\n    return 0;\n}",
        "a": "**Answer:**\nThis procedural programming principle governs modular function calls, stack frame allocation, and parameter passing in C."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nint fib(int n)\n{\n    if (n <= 1)\n        return n;\n    return fib(n - 1) + fib(n - 2);\n}\nint main()\n{\n    printf(\"%d %d\", fib(6), fib(1));\n    return 0;\n}",
        "a": "**Answer:**\nThis procedural programming principle governs modular function calls, stack frame allocation, and parameter passing in C."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nvoid dbl(int a[], int n)\n{\n    int i;\n    for (i = 0; i < n; i++)\n        a[i] = a[i] * 2;\n}\nint main()\n{\n    int arr[3] = {1, 2, 3}, i;\n    dbl(arr, 3);\n    for (i = 0; i < 3; i++)\n        printf(\"%d \", arr[i]);\n    return 0;\n}",
        "a": "**Answer:**\nThis procedural programming principle governs modular function calls, stack frame allocation, and parameter passing in C."
      },
      {
        "q": "Predict the output (return type truncation):\n#include <stdio.h>\nint sq(float x)\n{\n    return x * x;\n}\nint main()\n{\n    printf(\"%d\", sq(2.5));\n    return 0;\n}",
        "a": "**Answer:**\nThis procedural programming principle governs modular function calls, stack frame allocation, and parameter passing in C."
      },
      {
        "q": "Predict the output (nested calls):\n#include <stdio.h>\nint max(int a, int b)\n{\n    return a > b ? a : b;\n}\nint main()\n{\n    printf(\"%d\", max(max(3, 9), max(5, 7)));\n    return 0;\n}",
        "a": "**Answer:**\nThis procedural programming principle governs modular function calls, stack frame allocation, and parameter passing in C."
      },
      {
        "q": "Predict the output (digit recursion):\n#include <stdio.h>\nint sd(int n)\n{\n    if (n == 0)\n        return 0;\n    return n % 10 + sd(n / 10);\n}\nint main()\n{\n    printf(\"%d\", sd(1234));\n    return 0;\n}",
        "a": "**Definition:**\nRecursion is a programming technique where a function calls itself directly or indirectly to solve smaller instances of the same problem.\n\n**Essential Components:**\n1. **Base Case:** A stopping condition that returns a value without further recursive calls, preventing infinite recursion.\n2. **Recursive Step:** Calls itself with reduced input progressing toward the base case.\n\n**Disadvantages:**\n- Consumes memory for multiple stack frames.\n- Slower due to function call overhead.\n- Risk of stack overflow if base case is missing."
      },
      {
        "q": "Predict the output and draw the call stack:\n#include <stdio.h>\nvoid p(int n)\n{\n    if (n > 0)\n    {\n        p(n / 2);\n        printf(\"%d\", n % 2);\n    }\n}\nint main()\n{\n    p(10);\n    return 0;\n}",
        "a": "**Answer:**\nThis procedural programming principle governs modular function calls, stack frame allocation, and parameter passing in C."
      },
      {
        "q": "Find the errors:\n#include <stdio.h>\nint add(int a, int b);\nint main()\n{\n    printf(\"%d\", add(2));\n    return 0;\n}\nint add(int a, int b)\n{\n    return a + b;\n}",
        "a": "**Answer:**\nThis procedural programming principle governs modular function calls, stack frame allocation, and parameter passing in C."
      },
      {
        "q": "Find the errors:\n#include <stdio.h>\nvoid show(int n)\n{\n    printf(\"%d\", n);\n    return n;\n}\nint twice(int n)\n{\n    n * 2;\n}\nint main()\n{\n    show(5);\n    printf(\"%d\", twice(3));\n    return 0;\n}",
        "a": "**Answer:**\nThis procedural programming principle governs modular function calls, stack frame allocation, and parameter passing in C."
      },
      {
        "q": "This recursion crashes for fact(5). Find and fix the bug:\nint fact(int n)\n{\n    return n * fact(n - 1);\n}",
        "a": "**Definition:**\nRecursion is a programming technique where a function calls itself directly or indirectly to solve smaller instances of the same problem.\n\n**Essential Components:**\n1. **Base Case:** A stopping condition that returns a value without further recursive calls, preventing infinite recursion.\n2. **Recursive Step:** Calls itself with reduced input progressing toward the base case.\n\n**Disadvantages:**\n- Consumes memory for multiple stack frames.\n- Slower due to function call overhead.\n- Risk of stack overflow if base case is missing."
      },
      {
        "q": "Complete the missing code for a swap using call by reference:\nvoid swap(int ______, int ______)\n{\n    int t = ______;\n    *a = ______;\n    *b = t;\n}\n/* call: swap(______, ______); */",
        "a": "**Answer:**\nThis procedural programming principle governs modular function calls, stack frame allocation, and parameter passing in C."
      },
      {
        "q": "Can a function be defined inside another function in standard C? Can main call itself?",
        "a": "**Answer:**\nThis procedural programming principle governs modular function calls, stack frame allocation, and parameter passing in C."
      },
      {
        "q": "What happens if a non-void function reaches the end without a return and its value is used?",
        "a": "**Answer:**\nThis procedural programming principle governs modular function calls, stack frame allocation, and parameter passing in C."
      },
      {
        "q": "How many times is fib called to evaluate fib(5)? Draw the call tree.",
        "a": "**Answer:**\nThis procedural programming principle governs modular function calls, stack frame allocation, and parameter passing in C."
      },
      {
        "q": "Can two functions have the same name with different parameter lists in C? Explain.",
        "a": "**Answer:**\nThis procedural programming principle governs modular function calls, stack frame allocation, and parameter passing in C."
      },
      {
        "q": "What are the values of a and b in main after calling void f(int a, int *b) in the form f(a, &b) where f does a = a + 1; *b = *b + 1;?",
        "a": "**Answer:**\nThis procedural programming principle governs modular function calls, stack frame allocation, and parameter passing in C."
      },
      {
        "q": "What is the difference between int f(); and int f(void);?",
        "a": "**Answer:**\nThis procedural programming principle governs modular function calls, stack frame allocation, and parameter passing in C."
      },
      {
        "q": "Write a program with a function that computes nCr using a factorial function, and print Pascal's triangle for N rows using it.",
        "a": "**Answer:**\nThis procedural programming principle governs modular function calls, stack frame allocation, and parameter passing in C."
      },
      {
        "q": "Write a function that returns the number of digits in an integer using recursion, and use it to print a number in words digit by digit.",
        "a": "**Definition:**\nRecursion is a programming technique where a function calls itself directly or indirectly to solve smaller instances of the same problem.\n\n**Essential Components:**\n1. **Base Case:** A stopping condition that returns a value without further recursive calls, preventing infinite recursion.\n2. **Recursive Step:** Calls itself with reduced input progressing toward the base case.\n\n**Disadvantages:**\n- Consumes memory for multiple stack frames.\n- Slower due to function call overhead.\n- Risk of stack overflow if base case is missing."
      },
      {
        "q": "Show, with a dry run table, how the recursive call power(2, 4) unwinds and what is returned at each level.",
        "a": "**Answer:**\nThis procedural programming principle governs modular function calls, stack frame allocation, and parameter passing in C."
      },
      {
        "q": "A function with a static counter called inside a loop (Units 5, 8).",
        "a": "**Answer:**\nThis procedural programming principle governs modular function calls, stack frame allocation, and parameter passing in C."
      },
      {
        "q": "Function that takes a string and returns its length without strlen (Unit 12).",
        "a": "**Answer:**\nThis procedural programming principle governs modular function calls, stack frame allocation, and parameter passing in C."
      },
      {
        "q": "Function that accepts a structure and returns the structure with updated values (Unit 13).",
        "a": "**Answer:**\nThis procedural programming principle governs modular function calls, stack frame allocation, and parameter passing in C."
      },
      {
        "q": "Functions push, pop, display for a stack, called from a switch menu (Units 5, 14).",
        "a": "**Answer:**\nThis procedural programming principle governs modular function calls, stack frame allocation, and parameter passing in C."
      },
      {
        "q": "Function that returns a pointer to a malloc-ed array (Units 11, 15).",
        "a": "**Answer:**\nThis procedural programming principle governs modular function calls, stack frame allocation, and parameter passing in C."
      },
      {
        "q": "C passes arguments by value; to modify the caller's variable pass its address.",
        "a": "**Answer:**\nThis procedural programming principle governs modular function calls, stack frame allocation, and parameter passing in C."
      },
      {
        "q": "Prototype must match the definition in number and type of parameters.",
        "a": "**Answer:**\nThis procedural programming principle governs modular function calls, stack frame allocation, and parameter passing in C."
      },
      {
        "q": "A return in main ends the program; in other functions it returns control to the caller.",
        "a": "**Answer:**\nThis procedural programming principle governs modular function calls, stack frame allocation, and parameter passing in C."
      },
      {
        "q": "Recursion needs a base case; each call has its own copy of local variables.",
        "a": "**Definition:**\nRecursion is a programming technique where a function calls itself directly or indirectly to solve smaller instances of the same problem.\n\n**Essential Components:**\n1. **Base Case:** A stopping condition that returns a value without further recursive calls, preventing infinite recursion.\n2. **Recursive Step:** Calls itself with reduced input progressing toward the base case.\n\n**Disadvantages:**\n- Consumes memory for multiple stack frames.\n- Slower due to function call overhead.\n- Risk of stack overflow if base case is missing."
      },
      {
        "q": "Function name in C cannot be overloaded.",
        "a": "**Answer:**\nThis procedural programming principle governs modular function calls, stack frame allocation, and parameter passing in C."
      },
      {
        "q": "The order of evaluation of function arguments is unspecified.",
        "a": "**Answer:**\nThis procedural programming principle governs modular function calls, stack frame allocation, and parameter passing in C."
      },
      {
        "q": "An array parameter is really a pointer.",
        "a": "**Answer:**\nThis procedural programming principle governs modular function calls, stack frame allocation, and parameter passing in C."
      }
    ],
    "practicals": [
      "Write the algorithm and draw the flowchart of a function that returns the factorial of N.",
      "Draw a flowchart to represent a recursive function for the sum of the first N natural numbers."
    ],
    "syllabus": {
      "concepts": [
        "Library vs user-defined functions",
        "declaration (prototype), definition, call",
        "parameters (formal vs actual)",
        "return type and return",
        "void functions",
        "categories (no args/no return, args/no return, no args/return, args/return)",
        "call by value vs call by reference (using pointers)",
        "passing arrays",
        "recursion (base case, recursive case, stack behaviour)",
        "scope of parameters",
        "function returning a value used in expressions",
        "main as a function",
        "functions with storage classes (Unit 8)."
      ],
      "checklist": [
        "Write swap by value and by reference; explain the difference.",
        "Dry-run factorial, Fibonacci, GCD, power and digit-sum recursions.",
        "Be able to rewrite a menu program with one function per option.",
        "Know the four function categories and the return-type truncation pitfall."
      ]
    }
  }
];
