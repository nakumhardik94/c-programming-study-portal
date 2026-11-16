// ============================================================================
// MANIPAL UNIVERSITY JAIPUR - UNIVERSITY END TERM EXAMINATION PAPER (JAN 2024)
// Course: Programming and Problem-Solving Using C (CA6105) | Max Marks: 80
// ============================================================================

const EXAM_PAPER_2_DATA = {
    "examInfo": {
        "id": "paper2",
        "title": "University End Term Examination Paper (80 Marks)",
        "institution": "Manipal University Jaipur",
        "faculty": "Faculty of Science, School of Basic Sciences",
        "department": "Department of Computer Applications",
        "program": "Master of Computer Applications (MCA)",
        "session": "Odd Semester End Term Examination, January 2024",
        "courseCode": "CA6105",
        "courseTitle": "Programming and Problem-Solving Using C",
        "semester": "Semester: I",
        "time": "03 Hours (180 Mins)",
        "maxMarks": 80,
        "instructions": [
            "All questions are compulsory across Sections A, B, C, and D.",
            "Missing data, if any, may be assumed suitably.",
            "Calculations and algorithms must be clearly shown.",
            "Calculator is allowed / not allowed per invigilator instruction."
        ],
        "paperPhoto": "assets/paper2_question_paper.jpg"
    },
    "sections": [
        {
            "id": "sec-a",
            "name": "SECTION A",
            "desc": "SHORT ANSWER CONCEPTS (5 QUESTIONS × 2 MARKS = 10 MARKS)",
            "totalMarks": 10,
            "questions": [
                {
                    "num": "Q A1",
                    "marks": 2,
                    "co": "CO3",
                    "q": "Define an array.",
                    "a": "**1. Formal Definition:**\nAn **array** is a derived, homogeneous, and contiguous linear data structure in C that stores a fixed-size sequential collection of elements of the same data type under a single variable identifier.\n\n**2. Key Characteristics:**\n* **Homogeneous:** Every element in the array shares the identical data type (e.g. all `int`, all `float`).\n* **Contiguous Allocation:** Elements occupy consecutive memory locations:\n  $$\\text{Address}(arr[i]) = \\text{Base Address} + (i \\times \\text{sizeof}(\\text{datatype}))$$\n* **Index-Based Direct Access:** Zero-indexed ($0$ to $N - 1$), allowing instant $O(1)$ constant-time random access.\n\n**3. Syntax & Example:**\n```c\nint marks[5] = {85, 92, 78, 90, 88}; // 1D array of 5 integers\n```"
                },
                {
                    "num": "Q A2",
                    "marks": 2,
                    "co": "CO1",
                    "q": "Explain the requirement of an algorithm.",
                    "a": "**1. Definition of Algorithm:**\nAn **algorithm** is a finite, ordered sequence of unambiguous, well-defined computational instructions designed to transform valid input data into the desired output.\n\n**2. Key Requirements & Significance in Software Development:**\n1. **Language-Independent Blueprint:** Serves as the logical architectural foundation prior to coding, decoupling problem-solving logic from language-specific syntax rules.\n2. **Complexity Analysis & Efficiency:** Allows programmers to analyze and compare Time Complexity and Space Complexity (Big-$O$ notation) to select the optimal approach before allocating resources.\n3. **Error Reduction & Debugging:** Provides a clear path to verify correctness through manual desk checks (dry runs), drastically reducing algorithmic and runtime bugs.\n4. **Maintainability & Portability:** Once an algorithm is established, it can be seamlessly translated into any programming language (C, C++, Java, Python)."
                },
                {
                    "num": "Q A3",
                    "marks": 2,
                    "co": "CO1",
                    "q": "Differentiate between variables and identifiers.",
                    "a": "**1. Core Conceptual Difference:**\nAn **identifier** is a symbolic name given to any programming entity (such as variables, functions, structures, arrays, or labels). A **variable** is a specific named memory location whose stored value can change during program execution.\n\n*Rule of Thumb: All variables are identifiers, but not all identifiers are variables.*\n\n**2. Comparative Table:**\n\n| Feature | Identifier | Variable |\n| :--- | :--- | :--- |\n| **Definition** | A naming token used to label any user-defined C entity | A designated, named storage location in RAM holding modifiable data |\n| **Scope of Concept** | Broad lexical construct (functions, structs, labels, variables) | Specific data-storage entity defined with a type and address |\n| **Memory Allocation** | Does not allocate storage by itself (e.g. `main`, `struct Point`) | Always allocates memory according to its declared data type |\n| **C Examples** | `calculateSum` (function), `LOOP_START` (label), `Student` | `int count = 10;`, `float total = 95.5;` |"
                },
                {
                    "num": "Q A4",
                    "marks": 2,
                    "co": "CO3",
                    "q": "Explain 'switch-case' statement with syntax.",
                    "a": "**1. Explanation:**\nThe `switch-case` construct is a multi-way selection control statement in C that tests an integral or character expression against a list of constant case labels and branches execution accordingly.\n\n**2. Standard C Syntax:**\n```c\nswitch (expression) {\n    case constant_1:\n        // Statements executed if expression == constant_1\n        break;\n    case constant_2:\n        // Statements executed if expression == constant_2\n        break;\n    default:\n        // Statements executed if no case matches\n}\n```\n\n**3. Essential Rules:**\n* The controlling `expression` must evaluate to an integer (`int`) or character (`char`) type (floating-point numbers are prohibited).\n* Each `case` constant must be a unique compile-time constant.\n* The `break` statement prevents unintentional **fall-through** to consecutive cases."
                },
                {
                    "num": "Q A5",
                    "marks": 2,
                    "co": "CO5",
                    "q": "Explain dynamic memory allocation with syntax.",
                    "a": "**1. Explanation:**\nDynamic Memory Allocation (DMA) is the mechanism in C that enables programs to allocate, resize, or release memory from the **Heap** segment at **runtime** (execution time), eliminating the restriction of fixed compile-time array sizes.\n\n**2. Core Functions & Syntax Table (Defined in `<stdlib.h>`):**\n\n| Function | Standard Prototype / Syntax | Core Operational Purpose |\n| :--- | :--- | :--- |\n| **`malloc()`** | `void* malloc(size_t size);` | Allocates single contiguous block of `size` bytes; holds indeterminate garbage values |\n| **`calloc()`** | `void* calloc(size_t n, size_t size);` | Allocates `n * size` contiguous bytes and automatically initializes all bits to zero (`0`) |\n| **`realloc()`**| `void* realloc(void* ptr, size_t new_size);` | Resizes an existing heap block to `new_size` while preserving existing contents |\n| **`free()`**   | `void free(void* ptr);` | Deallocates heap memory back to the OS to prevent memory leaks |\n\n**3. Syntax Example:**\n```c\nint *arr = (int*) malloc(5 * sizeof(int)); // Allocates space for 5 integers\nif (arr != NULL) {\n    arr[0] = 100;\n    free(arr);   // Releases memory\n    arr = NULL;  // Prevents dangling pointer\n}\n```"
                }
            ]
        },
        {
            "id": "sec-b",
            "name": "SECTION B",
            "desc": "ANALYTICAL & PROGRAMMING QUESTIONS (5 QUESTIONS × 6 MARKS = 30 MARKS)",
            "totalMarks": 30,
            "questions": [
                {
                    "num": "Q B1",
                    "marks": 6,
                    "co": "CO3",
                    "q": "Explain while loop. Write a program to reverse a given number (E.g. input a number: 2345 the reverse is: 5432).",
                    "a": "**1. Explanation of while Loop:**\nThe `while` loop is an entry-controlled (pre-test) loop construct in C. The test condition is evaluated before entering the loop body.\n* If the condition evaluates to **true** (non-zero), the loop statements execute.\n* If the condition is initially **false** (zero), the loop body is skipped entirely (0 iterations).\n\n**2. Number Reversal Mathematical Algorithm:**\nIn each iteration of the loop:\n1. Extract last digit: `rem = num % 10;`\n2. Append digit to reversed result: `rev = (rev * 10) + rem;`\n3. Truncate last digit: `num = num / 10;`\n4. Repeat until `num == 0`.\n\n**3. Complete Executable C Program:**\n```c\n#include <stdio.h>\n\nint main() {\n    int num, original, rev = 0, rem;\n\n    printf(\"Enter an integer number: \");\n    if (scanf(\"%d\", &num) != 1) {\n        printf(\"Invalid input! Please enter a valid integer.\\n\");\n        return 1;\n    }\n\n    original = num;\n\n    // Handle negative numbers\n    int is_negative = 0;\n    if (num < 0) {\n        is_negative = 1;\n        num = -num;\n    }\n\n    // While loop to reverse the digits\n    while (num > 0) {\n        rem = num % 10;\n        rev = (rev * 10) + rem;\n        num = num / 10;\n    }\n\n    if (is_negative) rev = -rev;\n\n    printf(\"\\nInput number  : %d\\n\", original);\n    printf(\"The reverse is: %d\\n\", rev);\n\n    return 0;\n}\n```\n\n**4. Step-by-Step Execution Trace Table for Input `2345`:**\n\n| Iteration | `num` at Start | `rem = num % 10` | `rev = (rev * 10) + rem` | `num = num / 10` at End |\n| :---: | :---: | :---: | :---: | :---: |\n| **Initial** | `2345` | - | `0` | - |\n| **1** | `2345` | `5` | `(0 * 10) + 5 = 5` | `234` |\n| **2** | `234` | `4` | `(5 * 10) + 4 = 54` | `23` |\n| **3** | `23` | `3` | `(54 * 10) + 3 = 543` | `2` |\n| **4** | `2` | `2` | `(543 * 10) + 2 = 5432` | `0` (Loop Terminates) |\n\n*Final Screen Output:* **`The reverse is: 5432`**"
                },
                {
                    "num": "Q B2",
                    "marks": 6,
                    "co": "CO2",
                    "q": "Explain logical and relational operators in C with examples.",
                    "a": "**1. Relational Operators in C:**\nRelational operators test the relationship (equality, magnitude) between two expressions, returning integer boolean values: `1` for True and `0` for False.\n\n| Operator | Operation Description | C Syntax Example (`a = 10, b = 20`) | Evaluated Result |\n| :---: | :--- | :--- | :---: |\n| `==` | Equal to | `a == b` | `0` (False) |\n| `!=` | Not equal to | `a != b` | `1` (True) |\n| `>` | Greater than | `a > b` | `0` (False) |\n| `<` | Less than | `a < b` | `1` (True) |\n| `>=` | Greater than or equal to | `a >= 10` | `1` (True) |\n| `<=` | Less than or equal to | `b <= 20` | `1` (True) |\n\n---\n\n**2. Logical Operators in C:**\nLogical operators combine or invert relational expressions.\n\n| Operator | Operation Description | Rule of Evaluation | Example (`x = 5, y = 10`) | Result |\n| :---: | :--- | :--- | :--- | :---: |\n| `&&` | Logical AND | Returns `1` if **both** operands are non-zero | `(x < 10) && (y > 5)` | `1` (True) |\n| `\\|\\|` | Logical OR | Returns `1` if **either** operand is non-zero | `(x == 10) \\|\\| (y == 10)` | `1` (True) |\n| `!` | Logical NOT | Inverts boolean state (`!1` = `0`, `!0` = `1`) | `!(x == y)` | `1` (True) |\n\n*Short-Circuit Evaluation:* For `&&`, if the left operand is false (`0`), the right operand is never evaluated. For `||`, if the left operand is true (`1`), the right operand is skipped.\n\n**3. Illustrative Demonstration Program:**\n```c\n#include <stdio.h>\n\nint main() {\n    int a = 10, b = 20;\n\n    printf(\"Relational (a < b)  : %d\\n\", (a < b));         // 1 (True)\n    printf(\"Relational (a == b) : %d\\n\", (a == b));        // 0 (False)\n    printf(\"Logical AND (a < 15 && b > 15): %d\\n\", (a < 15 && b > 15)); // 1 (True)\n    printf(\"Logical NOT !(a == b)         : %d\\n\", !(a == b));          // 1 (True)\n\n    return 0;\n}\n```"
                },
                {
                    "num": "Q B3",
                    "marks": 6,
                    "co": "CO4",
                    "q": "Write a C program to print the Fibonacci series using recursion.",
                    "a": "**1. Mathematical Recurrence Relation:**\n* Base Case 1: $F(0) = 0$\n* Base Case 2: $F(1) = 1$\n* Recursive Step: $F(n) = F(n - 1) + F(n - 2)$ for $n \\ge 2$\n\n**2. Complete C Program:**\n```c\n#include <stdio.h>\n\n// Recursive function generating n-th Fibonacci number\nint fibonacci(int n) {\n    if (n == 0) return 0; // Base Case 1\n    if (n == 1) return 1; // Base Case 2\n    return fibonacci(n - 1) + fibonacci(n - 2); // Recursive Step\n}\n\nint main() {\n    int terms, i;\n\n    printf(\"Enter the number of terms in Fibonacci series: \");\n    if (scanf(\"%d\", &terms) != 1 || terms <= 0) {\n        printf(\"Invalid input! Please enter a positive integer.\\n\");\n        return 1;\n    }\n\n    printf(\"\\nFibonacci Series (%d terms):\\n\", terms);\n    for (i = 0; i < terms; i++) {\n        printf(\"%d \", fibonacci(i));\n    }\n    printf(\"\\n\");\n\n    return 0;\n}\n```\n\n**3. Recursion Execution Tree for $F(3)$:**\n```text\n                  fib(3)\n                /        \\\n            fib(2)       fib(1) -> 1\n           /      \\\n       fib(1)    fib(0)\n         |         |\n         1         0\n```\n*Sample Run:*\nInput: `terms = 7` &rarr; Output: `0 1 1 2 3 5 8`"
                },
                {
                    "num": "Q B4",
                    "marks": 6,
                    "co": "CO3",
                    "q": "Write a C program to print the sum of array elements.",
                    "a": "**1. Algorithmic Approach:**\n* Allocate an array of size $N$.\n* Initialize accumulator variable: `sum = 0`.\n* Iterate through the array using a loop from index `0` to `N - 1`.\n* Add each element to the accumulator: `sum += arr[i]`.\n* Time Complexity: $O(N)$ linear time. Space Complexity: $O(1)$ auxiliary space.\n\n**2. Complete C Program:**\n```c\n#include <stdio.h>\n\nint main() {\n    int n, i, sum = 0;\n\n    printf(\"Enter number of elements: \");\n    if (scanf(\"%d\", &n) != 1 || n <= 0 || n > 100) {\n        printf(\"Invalid size! Enter an integer between 1 and 100.\\n\");\n        return 1;\n    }\n\n    int arr[n];\n    printf(\"Enter %d integers:\\n\", n);\n    for (i = 0; i < n; i++) {\n        printf(\"arr[%d] = \", i);\n        scanf(\"%d\", &arr[i]);\n        sum += arr[i]; // Accumulate sum\n    }\n\n    printf(\"\\nElements entered: \");\n    for (i = 0; i < n; i++) {\n        printf(\"%d \", arr[i]);\n    }\n    printf(\"\\nSum of all array elements = %d\\n\", sum);\n\n    return 0;\n}\n```\n\n**3. Execution Trace Table (Array = `[10, 20, 30, 40, 50]`):**\n\n| Index `i` | Element `arr[i]` | Prior `sum` | Operation | Updated `sum` |\n| :---: | :---: | :---: | :---: | :---: |\n| `0` | `10` | `0` | `0 + 10` | `10` |\n| `1` | `20` | `10` | `10 + 20` | `30` |\n| `2` | `30` | `30` | `30 + 30` | `60` |\n| `3` | `40` | `60` | `60 + 40` | `100` |\n| `4` | `50` | `100` | `100 + 50` | `150` |\n\n*Final Output:* **`Sum of all array elements = 150`**"
                },
                {
                    "num": "Q B5",
                    "marks": 6,
                    "co": "CO4",
                    "q": "Define pointers in C. Write a C program to input and print elements of an array using pointers.",
                    "a": "**1. Definition of Pointer:**\nA **pointer** in C is a derived variable that stores the memory address of another variable.\n* Address-of Operator (`&`): Returns the memory address of a variable.\n* Dereferencing Operator (`*`): Accesses the value stored at the address pointed to by the pointer.\n* Pointer Arithmetic: An array name `arr` is a constant pointer to its first element (`arr == &arr[0]`). Therefore, `*(arr + i)` directly accesses `arr[i]`.\n\n**2. Complete C Program:**\n```c\n#include <stdio.h>\n\nint main() {\n    int n, i;\n\n    printf(\"Enter number of elements in array: \");\n    if (scanf(\"%d\", &n) != 1 || n <= 0 || n > 50) {\n        printf(\"Invalid size!\\n\");\n        return 1;\n    }\n\n    int arr[n];\n    int *ptr = arr; // ptr points to base address &arr[0]\n\n    // Input using pointer arithmetic\n    printf(\"Enter %d integers:\\n\", n);\n    for (i = 0; i < n; i++) {\n        printf(\"Enter element [%d]: \", i);\n        scanf(\"%d\", (ptr + i)); // (ptr + i) is address &arr[i]\n    }\n\n    // Output using pointer dereferencing\n    printf(\"\\nArray Elements Accessed via Pointers:\\n\");\n    printf(\"Index\\tAddress\\t\\tValue\\n\");\n    printf(\"----------------------------------------\\n\");\n    for (i = 0; i < n; i++) {\n        printf(\"[%d]\\t%p\\t%d\\n\", i, (void*)(ptr + i), *(ptr + i));\n    }\n\n    return 0;\n}\n```\n\n**3. Pointer Offset Mapping:**\n```text\nIndex 0: ptr + 0  --> &arr[0]  --> Value: *(ptr + 0)\nIndex 1: ptr + 1  --> &arr[1]  --> Value: *(ptr + 1)\nIndex 2: ptr + 2  --> &arr[2]  --> Value: *(ptr + 2)\n```"
                }
            ]
        },
        {
            "id": "sec-c",
            "name": "SECTION C",
            "desc": "APPLIED DESIGN & CONTROL STRUCTURES (2 QUESTIONS × 10 MARKS = 20 MARKS)",
            "totalMarks": 20,
            "questions": [
                {
                    "num": "Q C1",
                    "marks": 10,
                    "co": "CO5",
                    "q": "Explain the advantages of user-defined functions in C. Write a C program to add, subtract, multiply, and divide two integers using user user-defined type functions.",
                    "a": "**1. Advantages of User-Defined Functions in C:**\n1. **Modularity:** Decomposes complex programs into smaller, isolated, logically manageable functional modules.\n2. **Code Reusability (DRY Principle):** Eliminates redundant code; write the routine once and invoke it from multiple points across the program.\n3. **Independent Testing & Debugging:** Each function can be tested, profiled, and debugged in isolation without side-effects.\n4. **Information Hiding & Abstraction:** Callers only interact with the function's interface (signature and parameters), abstracting away internal execution details.\n5. **Team Collaboration:** Enables multiple developers to author and maintain distinct functions concurrently within large software systems.\n\n**2. Complete C Program:**\n```c\n#include <stdio.h>\n\n// User-Defined Function Prototypes\nint add(int a, int b);\nint subtract(int a, int b);\nlong multiply(int a, int b);\ndouble divide(int a, int b, int *error_flag);\n\nint main() {\n    int num1, num2;\n    int div_error = 0;\n\n    printf(\"==================================================\\n\");\n    printf(\"     ARITHMETIC CALCULATOR (USER FUNCTIONS)       \\n\");\n    printf(\"==================================================\\n\");\n\n    printf(\"Enter first integer : \");\n    scanf(\"%d\", &num1);\n    printf(\"Enter second integer: \");\n    scanf(\"%d\", &num2);\n\n    // Calling the user-defined functions\n    int sum_val = add(num1, num2);\n    int diff_val = subtract(num1, num2);\n    long prod_val = multiply(num1, num2);\n    double quot_val = divide(num1, num2, &div_error);\n\n    // Displaying Results\n    printf(\"\\n---------------- RESULTS ----------------\\n\");\n    printf(\"  Addition       (%d + %d) = %d\\n\", num1, num2, sum_val);\n    printf(\"  Subtraction    (%d - %d) = %d\\n\", num1, num2, diff_val);\n    printf(\"  Multiplication (%d * %d) = %ld\\n\", num1, num2, prod_val);\n\n    if (div_error) {\n        printf(\"  Division       (%d / %d) = ERROR: Division by zero is undefined!\\n\", num1, num2);\n    } else {\n        printf(\"  Division       (%d / %d) = %.4f\\n\", num1, num2, quot_val);\n    }\n    printf(\"-----------------------------------------\\n\");\n\n    return 0;\n}\n\n// Function 1: Addition\nint add(int a, int b) {\n    return a + b;\n}\n\n// Function 2: Subtraction\nint subtract(int a, int b) {\n    return a - b;\n}\n\n// Function 3: Multiplication\nlong multiply(int a, int b) {\n    return (long)a * b;\n}\n\n// Function 4: Division (with zero-division error handling)\ndouble divide(int a, int b, int *error_flag) {\n    if (b == 0) {\n        *error_flag = 1; // Flag division by zero\n        return 0.0;\n    }\n    *error_flag = 0;\n    return (double)a / b;\n}\n```\n\n**3. Execution Verification Table:**\n\n| Test Case | Inputs `num1, num2` | Addition | Subtraction | Multiplication | Division | Notes |\n| :---: | :---: | :---: | :---: | :---: | :---: | :--- |\n| **Normal Input** | `20, 8` | `28` | `12` | `160` | `2.5000` | Accurate floating-point division |\n| **Zero Denominator** | `15, 0` | `15` | `15` | `0` | *Division by zero error* | Gracefully caught via error flag |"
                },
                {
                    "num": "Q C2",
                    "marks": 10,
                    "co": "CO3",
                    "q": "Explain Conditional Statements. Write a C program to find the largest among three numbers.",
                    "a": "**1. Explanation of Conditional Statements:**\nConditional statements are decision-making constructs that control the flow of program execution based on whether a boolean relational condition evaluates to true or false.\n\n**Types of Conditional Constructs in C:**\n1. **Simple `if` Statement:** Executes a block of code only if the specified condition is true.\n2. **`if-else` Statement:** Provides two distinct execution paths: one for true, one for false.\n3. **`else-if` Ladder:** Tests multiple conditions sequentially until one matches.\n4. **Nested `if-else`:** An `if` or `else` block containing another conditional construct inside it.\n5. **Conditional Operator (`?:`):** Ternary inline shortcut: `result = (condition) ? value_if_true : value_if_false;`\n\n**2. Decision Logic for Finding the Largest of Three Numbers:**\nFor numbers $A, B, C$:\n* If $A \\ge B$ and $A \\ge C$, then $A$ is largest.\n* Else if $B \\ge A$ and $B \\ge C$, then $B$ is largest.\n* Otherwise, $C$ is largest.\n\n**3. Complete Executable C Program:**\n```c\n#include <stdio.h>\n\nint main() {\n    double num1, num2, num3, largest;\n\n    printf(\"==================================================\\n\");\n    printf(\"       FIND LARGEST AMONG THREE NUMBERS           \\n\");\n    printf(\"==================================================\\n\");\n\n    printf(\"Enter three numbers separated by spaces: \");\n    if (scanf(\"%lf %lf %lf\", &num1, &num2, &num3) != 3) {\n        printf(\"Invalid input! Please enter three numeric values.\\n\");\n        return 1;\n    }\n\n    // Evaluating conditions using else-if ladder with logical AND (&&)\n    if (num1 >= num2 && num1 >= num3) {\n        largest = num1;\n    } else if (num2 >= num1 && num2 >= num3) {\n        largest = num2;\n    } else {\n        largest = num3;\n    }\n\n    printf(\"\\n---------------- RESULTS ----------------\\n\");\n    printf(\"  First Number  : %.2f\\n\", num1);\n    printf(\"  Second Number : %.2f\\n\", num2);\n    printf(\"  Third Number  : %.2f\\n\", num3);\n    printf(\"  Largest Number: %.2f\\n\", largest);\n    printf(\"-----------------------------------------\\n\");\n\n    return 0;\n}\n```\n\n**4. Decision Truth Matrix Table:**\n\n| Condition `(num1 >= num2)` | Condition `(num1 >= num3)` | Condition `(num2 >= num3)` | Identified Largest Number |\n| :---: | :---: | :---: | :---: |\n| **True** | **True** | *(Bypassed)* | `num1` |\n| **True** | **False** | *(Bypassed)* | `num3` |\n| **False** | *(Bypassed)* | **True** | `num2` |\n| **False** | *(Bypassed)* | **False** | `num3` |"
                }
            ]
        },
        {
            "id": "sec-d",
            "name": "SECTION D",
            "desc": "ADVANCED POINTERS & BITWISE ARCHITECTURE (2 QUESTIONS × 10 MARKS = 20 MARKS)",
            "totalMarks": 20,
            "questions": [
                {
                    "num": "Q D1",
                    "marks": 10,
                    "co": "CO4",
                    "q": "Differentiate between function call by value and call by reference. Write a program to swap two numbers using a function call by reference.",
                    "a": "**1. Comprehensive Comparison Table:**\n\n| Analytical Parameter | Call by Value | Call by Reference (via Pointers) |\n| :--- | :--- | :--- |\n| **Parameter Passing** | Passes a **copy** of actual arguments | Passes the **memory address** (`&var`) of actual arguments |\n| **Memory Allocation** | Formal parameters occupy separate stack memory | Formal parameters are pointers referencing caller's memory |\n| **Modification Scope** | Changes made inside function **do not affect** original caller variables | Changes made via `*ptr` **permanently modify** caller variables |\n| **Function Signature** | Normal data types: `void func(int x);` | Pointer types: `void func(int *x);` |\n| **Return Capability** | Can return only a single value via `return` | Can modify and effectively 'return' multiple values |\n| **Memory Overhead** | Higher memory overhead when passing large structs | Highly efficient: passes only pointer-sized addresses (4 or 8 bytes) |\n\n**2. Swapping Mechanism (Call by Reference):**\n* The caller passes memory addresses: `swap(&a, &b);`\n* The function receives them into pointer variables: `swap(int *x, int *y)`\n* Dereferencing allows direct memory manipulation:\n  1. `temp = *x;`\n  2. `*x = *y;`\n  3. `*y = temp;`\n\n**3. Complete C Program:**\n```c\n#include <stdio.h>\n\n// Function prototype for call-by-reference swap\nvoid swap(int *x, int *y);\n\nint main() {\n    int a, b;\n\n    printf(\"Enter value of a: \");\n    scanf(\"%d\", &a);\n    printf(\"Enter value of b: \");\n    scanf(\"%d\", &b);\n\n    printf(\"\\n--- BEFORE SWAPPING (in main) ---\\n\");\n    printf(\"a = %d (Address: %p)\\n\", a, (void*)&a);\n    printf(\"b = %d (Address: %p)\\n\", b, (void*)&b);\n\n    // Call by Reference: passing addresses\n    swap(&a, &b);\n\n    printf(\"\\n--- AFTER SWAPPING (in main) ---\\n\");\n    printf(\"a = %d (Address: %p)\\n\", a, (void*)&a);\n    printf(\"b = %d (Address: %p)\\n\", b, (void*)&b);\n\n    return 0;\n}\n\n// Function definition modifying memory directly\nvoid swap(int *x, int *y) {\n    int temp;\n    temp = *x;   // Store value at address x\n    *x = *y;     // Assign value at address y to address x\n    *y = temp;   // Assign temp to address y\n}\n```\n\n**4. Memory State Trace Table:**\n\n| Step | State | Memory `&a` | Memory `&b` | Pointer `x` | Pointer `y` | `temp` | Action |\n| :---: | :--- | :---: | :---: | :---: | :---: | :---: | :--- |\n| **1** | Start in `main` | `10` | `20` | - | - | - | Initial values |\n| **2** | `temp = *x;` | `10` | `20` | `&a` | `&b` | `10` | Copied `a` into `temp` |\n| **3** | `*x = *y;` | `20` | `20` | `&a` | `&b` | `10` | `*x` overwritten with `20` |\n| **4** | `*y = temp;` | `20` | `10` | `&a` | `&b` | `10` | `*y` overwritten with `10` |\n| **5** | Return to `main`| **`20`** | **`10`** | - | - | - | **Swapped permanently!** |"
                },
                {
                    "num": "Q D2",
                    "marks": 10,
                    "co": "CO2",
                    "q": "Write a C program to perform all the bitwise operations by taking inputs.",
                    "a": "**1. Summary of All 6 Bitwise Operators in C:**\n\n| Operator | Symbol | Operation Name | Bit-Level Rule | Mathematical Shortcut |\n| :---: | :---: | :--- | :--- | :--- |\n| **AND** | `&` | Bitwise AND | Bit is `1` if both bits are `1` | Bit masking |\n| **OR** | `\\|` | Bitwise OR | Bit is `1` if either bit is `1` | Bit setting |\n| **XOR** | `^` | Bitwise Exclusive-OR | Bit is `1` if bits differ; `0` if same | Bit toggling |\n| **NOT** | `~` | Bitwise NOT (1's Compl.)| Inverts every bit (`0` &rarr; `1`, `1` &rarr; `0`) | `-(n + 1)` |\n| **Left Shift** | `<<`| Bitwise Left Shift | Shifts bits left by k positions | n × 2ᵏ |\n| **Right Shift**| `>>`| Bitwise Right Shift| Shifts bits right by k positions | ⌊n / 2ᵏ⌋ |\n\n**2. Complete C Program:**\n```c\n#include <stdio.h>\n\n// Helper function to print 8-bit binary representation\nvoid printBinary8(unsigned char val) {\n    for (int i = 7; i >= 0; i--) {\n        printf(\"%d\", (val >> i) & 1);\n        if (i == 4) printf(\" \");\n    }\n}\n\nint main() {\n    unsigned char a, b;\n    int shifts;\n\n    printf(\"====================================================\\n\");\n    printf(\"         ALL C BITWISE OPERATIONS DEMONSTRATOR      \\n\");\n    printf(\"====================================================\\n\");\n\n    printf(\"Enter first integer A  (0 - 255): \");\n    scanf(\"%hhu\", &a);\n    printf(\"Enter second integer B (0 - 255): \");\n    scanf(\"%hhu\", &b);\n    printf(\"Enter shift positions (e.g., 1 or 2): \");\n    scanf(\"%d\", &shifts);\n\n    printf(\"\\n--- BINARY INPUTS ---\\n\");\n    printf(\"  A = %3u | Binary: \", a); printBinary8(a); printf(\"\\n\");\n    printf(\"  B = %3u | Binary: \", b); printBinary8(b); printf(\"\\n\");\n    printf(\"----------------------------------------------------\\n\");\n\n    // 1. Bitwise AND (&)\n    unsigned char and_res = a & b;\n    printf(\"  1. Bitwise AND  (A & B) : %3u | Binary: \", and_res);\n    printBinary8(and_res);\n    printf(\"\\n\");\n\n    // 2. Bitwise OR (|)\n    unsigned char or_res = a | b;\n    printf(\"  2. Bitwise OR   (A | B) : %3u | Binary: \", or_res);\n    printBinary8(or_res);\n    printf(\"\\n\");\n\n    // 3. Bitwise XOR (^)\n    unsigned char xor_res = a ^ b;\n    printf(\"  3. Bitwise XOR  (A ^ B) : %3u | Binary: \", xor_res);\n    printBinary8(xor_res);\n    printf(\"\\n\");\n\n    // 4. Bitwise NOT (~)\n    unsigned char not_a = (unsigned char)(~a);\n    unsigned char not_b = (unsigned char)(~b);\n    printf(\"  4. Bitwise NOT  (~A)    : %3u | Binary: \", not_a);\n    printBinary8(not_a);\n    printf(\"\\n\");\n    printf(\"     Bitwise NOT  (~B)    : %3u | Binary: \", not_b);\n    printBinary8(not_b);\n    printf(\"\\n\");\n\n    // 5. Left Shift (<<)\n    unsigned char lshift_a = (unsigned char)(a << shifts);\n    printf(\"  5. Left Shift   (A << %d): %3u | Multiply: A * 2^%d\\n\", shifts, lshift_a, shifts);\n\n    // 6. Right Shift (>>)\n    unsigned char rshift_a = (unsigned char)(a >> shifts);\n    printf(\"  6. Right Shift  (A >> %d): %3u | Divide  : A / 2^%d\\n\", shifts, rshift_a, shifts);\n\n    printf(\"====================================================\\n\");\n\n    return 0;\n}\n```\n\n**3. Bitwise Evaluation Trace Table for `A = 12 (0000 1100)` and `B = 5 (0000 0101)` with `shifts = 1`:**\n\n| Operation | C Expression | Binary Calculation | Decimal Result | Mathematical Rule |\n| :--- | :---: | :---: | :---: | :--- |\n| **Input A** | `a` | `0000 1100` | `12` | Base operand |\n| **Input B** | `b` | `0000 0101` | `5` | Base operand |\n| **Bitwise AND** | `a & b` | `0000 0100` | `4` | 12 & 5 = 4 |\n| **Bitwise OR** | `a \\| b` | `0000 1101` | `13` | 12 \\| 5 = 13 |\n| **Bitwise XOR** | `a ^ b` | `0000 1001` | `9` | 12 ^ 5 = 9 |\n| **Bitwise NOT** | `~a` (8-bit) | `1111 0011` | `243` | Inverts all bits |\n| **Left Shift** | `a << 1` | `0001 1000` | `24` | 12 × 2¹ = 24 |\n| **Right Shift** | `a >> 1` | `0000 0110` | `6` | 12 / 2¹ = 6 |"
                }
            ]
        }
    ]
};

if (typeof module !== 'undefined') {
    module.exports = EXAM_PAPER_2_DATA;
}
