# Manipal University Jaipur
## Odd Semester End Term Examination, January 2024
### Faculty of Science, School of Basic Sciences • Department of Computer Applications
**Program:** Master of Computer Applications (MCA) | **Semester:** Semester: I  
**Course Code:** CA6105 | **Course Title:** Programming and Problem-Solving Using C  
**Duration:** 03 Hours (180 Mins) | **Maximum Marks:** 80 Marks  

---

### Examination Instructions:
- All questions are compulsory across Sections A, B, C, and D.
- Missing data, if any, may be assumed suitably.
- Calculations and algorithms must be clearly shown.
- Calculator is allowed / not allowed per invigilator instruction.

---

## SECTION A: SHORT ANSWER CONCEPTS (5 QUESTIONS × 2 MARKS = 10 MARKS)

### Q A1 [2 Marks, CO3]
**Question:**
Define an array.

**Answer:**
**1. Formal Definition:**
An **array** is a derived, homogeneous, and contiguous linear data structure in C that stores a fixed-size sequential collection of elements of the same data type under a single variable identifier.

**2. Key Characteristics:**
* **Homogeneous:** Every element in the array shares the identical data type (e.g. all `int`, all `float`).
* **Contiguous Allocation:** Elements occupy consecutive memory locations:
  $$\text{Address}(arr[i]) = \text{Base Address} + (i \times \text{sizeof}(\text{datatype}))$$
* **Index-Based Direct Access:** Zero-indexed ($0$ to $N - 1$), allowing instant $O(1)$ constant-time random access.

**3. Syntax & Example:**
```c
int marks[5] = {85, 92, 78, 90, 88}; // 1D array of 5 integers
```

---

### Q A2 [2 Marks, CO1]
**Question:**
Explain the requirement of an algorithm.

**Answer:**
**1. Definition of Algorithm:**
An **algorithm** is a finite, ordered sequence of unambiguous, well-defined computational instructions designed to transform valid input data into the desired output.

**2. Key Requirements & Significance in Software Development:**
1. **Language-Independent Blueprint:** Serves as the logical architectural foundation prior to coding, decoupling problem-solving logic from language-specific syntax rules.
2. **Complexity Analysis & Efficiency:** Allows programmers to analyze and compare Time Complexity and Space Complexity (Big-$O$ notation) to select the optimal approach before allocating resources.
3. **Error Reduction & Debugging:** Provides a clear path to verify correctness through manual desk checks (dry runs), drastically reducing algorithmic and runtime bugs.
4. **Maintainability & Portability:** Once an algorithm is established, it can be seamlessly translated into any programming language (C, C++, Java, Python).

---

### Q A3 [2 Marks, CO1]
**Question:**
Differentiate between variables and identifiers.

**Answer:**
**1. Core Conceptual Difference:**
An **identifier** is a symbolic name given to any programming entity (such as variables, functions, structures, arrays, or labels). A **variable** is a specific named memory location whose stored value can change during program execution.

*Rule of Thumb: All variables are identifiers, but not all identifiers are variables.*

**2. Comparative Table:**

| Feature | Identifier | Variable |
| :--- | :--- | :--- |
| **Definition** | A naming token used to label any user-defined C entity | A designated, named storage location in RAM holding modifiable data |
| **Scope of Concept** | Broad lexical construct (functions, structs, labels, variables) | Specific data-storage entity defined with a type and address |
| **Memory Allocation** | Does not allocate storage by itself (e.g. `main`, `struct Point`) | Always allocates memory according to its declared data type |
| **C Examples** | `calculateSum` (function), `LOOP_START` (label), `Student` | `int count = 10;`, `float total = 95.5;` |

---

### Q A4 [2 Marks, CO3]
**Question:**
Explain 'switch-case' statement with syntax.

**Answer:**
**1. Explanation:**
The `switch-case` construct is a multi-way selection control statement in C that tests an integral or character expression against a list of constant case labels and branches execution accordingly.

**2. Standard C Syntax:**
```c
switch (expression) {
    case constant_1:
        // Statements executed if expression == constant_1
        break;
    case constant_2:
        // Statements executed if expression == constant_2
        break;
    default:
        // Statements executed if no case matches
}
```

**3. Essential Rules:**
* The controlling `expression` must evaluate to an integer (`int`) or character (`char`) type (floating-point numbers are prohibited).
* Each `case` constant must be a unique compile-time constant.
* The `break` statement prevents unintentional **fall-through** to consecutive cases.

---

### Q A5 [2 Marks, CO5]
**Question:**
Explain dynamic memory allocation with syntax.

**Answer:**
**1. Explanation:**
Dynamic Memory Allocation (DMA) is the mechanism in C that enables programs to allocate, resize, or release memory from the **Heap** segment at **runtime** (execution time), eliminating the restriction of fixed compile-time array sizes.

**2. Core Functions & Syntax Table (Defined in `<stdlib.h>`):**

| Function | Standard Prototype / Syntax | Core Operational Purpose |
| :--- | :--- | :--- |
| **`malloc()`** | `void* malloc(size_t size);` | Allocates single contiguous block of `size` bytes; holds indeterminate garbage values |
| **`calloc()`** | `void* calloc(size_t n, size_t size);` | Allocates `n * size` contiguous bytes and automatically initializes all bits to zero (`0`) |
| **`realloc()`**| `void* realloc(void* ptr, size_t new_size);` | Resizes an existing heap block to `new_size` while preserving existing contents |
| **`free()`**   | `void free(void* ptr);` | Deallocates heap memory back to the OS to prevent memory leaks |

**3. Syntax Example:**
```c
int *arr = (int*) malloc(5 * sizeof(int)); // Allocates space for 5 integers
if (arr != NULL) {
    arr[0] = 100;
    free(arr);   // Releases memory
    arr = NULL;  // Prevents dangling pointer
}
```

---

## SECTION B: ANALYTICAL & PROGRAMMING QUESTIONS (5 QUESTIONS × 6 MARKS = 30 MARKS)

### Q B1 [6 Marks, CO3]
**Question:**
Explain while loop. Write a program to reverse a given number (E.g. input a number: 2345 the reverse is: 5432).

**Answer:**
**1. Explanation of while Loop:**
The `while` loop is an entry-controlled (pre-test) loop construct in C. The test condition is evaluated before entering the loop body.
* If the condition evaluates to **true** (non-zero), the loop statements execute.
* If the condition is initially **false** (zero), the loop body is skipped entirely (0 iterations).

**2. Number Reversal Mathematical Algorithm:**
In each iteration of the loop:
1. Extract last digit: `rem = num % 10;`
2. Append digit to reversed result: `rev = (rev * 10) + rem;`
3. Truncate last digit: `num = num / 10;`
4. Repeat until `num == 0`.

**3. Complete Executable C Program:**
```c
#include <stdio.h>

int main() {
    int num, original, rev = 0, rem;

    printf("Enter an integer number: ");
    if (scanf("%d", &num) != 1) {
        printf("Invalid input! Please enter a valid integer.\n");
        return 1;
    }

    original = num;

    // Handle negative numbers
    int is_negative = 0;
    if (num < 0) {
        is_negative = 1;
        num = -num;
    }

    // While loop to reverse the digits
    while (num > 0) {
        rem = num % 10;
        rev = (rev * 10) + rem;
        num = num / 10;
    }

    if (is_negative) rev = -rev;

    printf("\nInput number  : %d\n", original);
    printf("The reverse is: %d\n", rev);

    return 0;
}
```

**4. Step-by-Step Execution Trace Table for Input `2345`:**

| Iteration | `num` at Start | `rem = num % 10` | `rev = (rev * 10) + rem` | `num = num / 10` at End |
| :---: | :---: | :---: | :---: | :---: |
| **Initial** | `2345` | - | `0` | - |
| **1** | `2345` | `5` | `(0 * 10) + 5 = 5` | `234` |
| **2** | `234` | `4` | `(5 * 10) + 4 = 54` | `23` |
| **3** | `23` | `3` | `(54 * 10) + 3 = 543` | `2` |
| **4** | `2` | `2` | `(543 * 10) + 2 = 5432` | `0` (Loop Terminates) |

*Final Screen Output:* **`The reverse is: 5432`**

---

### Q B2 [6 Marks, CO2]
**Question:**
Explain logical and relational operators in C with examples.

**Answer:**
**1. Relational Operators in C:**
Relational operators test the relationship (equality, magnitude) between two expressions, returning integer boolean values: `1` for True and `0` for False.

| Operator | Operation Description | C Syntax Example (`a = 10, b = 20`) | Evaluated Result |
| :---: | :--- | :--- | :---: |
| `==` | Equal to | `a == b` | `0` (False) |
| `!=` | Not equal to | `a != b` | `1` (True) |
| `>` | Greater than | `a > b` | `0` (False) |
| `<` | Less than | `a < b` | `1` (True) |
| `>=` | Greater than or equal to | `a >= 10` | `1` (True) |
| `<=` | Less than or equal to | `b <= 20` | `1` (True) |

---

**2. Logical Operators in C:**
Logical operators combine or invert relational expressions.

| Operator | Operation Description | Rule of Evaluation | Example (`x = 5, y = 10`) | Result |
| :---: | :--- | :--- | :--- | :---: |
| `&&` | Logical AND | Returns `1` if **both** operands are non-zero | `(x < 10) && (y > 5)` | `1` (True) |
| `\|\|` | Logical OR | Returns `1` if **either** operand is non-zero | `(x == 10) \|\| (y == 10)` | `1` (True) |
| `!` | Logical NOT | Inverts boolean state (`!1` = `0`, `!0` = `1`) | `!(x == y)` | `1` (True) |

*Short-Circuit Evaluation:* For `&&`, if the left operand is false (`0`), the right operand is never evaluated. For `||`, if the left operand is true (`1`), the right operand is skipped.

**3. Illustrative Demonstration Program:**
```c
#include <stdio.h>

int main() {
    int a = 10, b = 20;

    printf("Relational (a < b)  : %d\n", (a < b));         // 1 (True)
    printf("Relational (a == b) : %d\n", (a == b));        // 0 (False)
    printf("Logical AND (a < 15 && b > 15): %d\n", (a < 15 && b > 15)); // 1 (True)
    printf("Logical NOT !(a == b)         : %d\n", !(a == b));          // 1 (True)

    return 0;
}
```

---

### Q B3 [6 Marks, CO4]
**Question:**
Write a C program to print the Fibonacci series using recursion.

**Answer:**
**1. Mathematical Recurrence Relation:**
* Base Case 1: $F(0) = 0$
* Base Case 2: $F(1) = 1$
* Recursive Step: $F(n) = F(n - 1) + F(n - 2)$ for $n \ge 2$

**2. Complete C Program:**
```c
#include <stdio.h>

// Recursive function generating n-th Fibonacci number
int fibonacci(int n) {
    if (n == 0) return 0; // Base Case 1
    if (n == 1) return 1; // Base Case 2
    return fibonacci(n - 1) + fibonacci(n - 2); // Recursive Step
}

int main() {
    int terms, i;

    printf("Enter the number of terms in Fibonacci series: ");
    if (scanf("%d", &terms) != 1 || terms <= 0) {
        printf("Invalid input! Please enter a positive integer.\n");
        return 1;
    }

    printf("\nFibonacci Series (%d terms):\n", terms);
    for (i = 0; i < terms; i++) {
        printf("%d ", fibonacci(i));
    }
    printf("\n");

    return 0;
}
```

**3. Recursion Execution Tree for $F(3)$:**
```text
                  fib(3)
                /        \
            fib(2)       fib(1) -> 1
           /      \
       fib(1)    fib(0)
         |         |
         1         0
```
*Sample Run:*
Input: `terms = 7` &rarr; Output: `0 1 1 2 3 5 8`

---

### Q B4 [6 Marks, CO3]
**Question:**
Write a C program to print the sum of array elements.

**Answer:**
**1. Algorithmic Approach:**
* Allocate an array of size $N$.
* Initialize accumulator variable: `sum = 0`.
* Iterate through the array using a loop from index `0` to `N - 1`.
* Add each element to the accumulator: `sum += arr[i]`.
* Time Complexity: $O(N)$ linear time. Space Complexity: $O(1)$ auxiliary space.

**2. Complete C Program:**
```c
#include <stdio.h>

int main() {
    int n, i, sum = 0;

    printf("Enter number of elements: ");
    if (scanf("%d", &n) != 1 || n <= 0 || n > 100) {
        printf("Invalid size! Enter an integer between 1 and 100.\n");
        return 1;
    }

    int arr[n];
    printf("Enter %d integers:\n", n);
    for (i = 0; i < n; i++) {
        printf("arr[%d] = ", i);
        scanf("%d", &arr[i]);
        sum += arr[i]; // Accumulate sum
    }

    printf("\nElements entered: ");
    for (i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\nSum of all array elements = %d\n", sum);

    return 0;
}
```

**3. Execution Trace Table (Array = `[10, 20, 30, 40, 50]`):**

| Index `i` | Element `arr[i]` | Prior `sum` | Operation | Updated `sum` |
| :---: | :---: | :---: | :---: | :---: |
| `0` | `10` | `0` | `0 + 10` | `10` |
| `1` | `20` | `10` | `10 + 20` | `30` |
| `2` | `30` | `30` | `30 + 30` | `60` |
| `3` | `40` | `60` | `60 + 40` | `100` |
| `4` | `50` | `100` | `100 + 50` | `150` |

*Final Output:* **`Sum of all array elements = 150`**

---

### Q B5 [6 Marks, CO4]
**Question:**
Define pointers in C. Write a C program to input and print elements of an array using pointers.

**Answer:**
**1. Definition of Pointer:**
A **pointer** in C is a derived variable that stores the memory address of another variable.
* Address-of Operator (`&`): Returns the memory address of a variable.
* Dereferencing Operator (`*`): Accesses the value stored at the address pointed to by the pointer.
* Pointer Arithmetic: An array name `arr` is a constant pointer to its first element (`arr == &arr[0]`). Therefore, `*(arr + i)` directly accesses `arr[i]`.

**2. Complete C Program:**
```c
#include <stdio.h>

int main() {
    int n, i;

    printf("Enter number of elements in array: ");
    if (scanf("%d", &n) != 1 || n <= 0 || n > 50) {
        printf("Invalid size!\n");
        return 1;
    }

    int arr[n];
    int *ptr = arr; // ptr points to base address &arr[0]

    // Input using pointer arithmetic
    printf("Enter %d integers:\n", n);
    for (i = 0; i < n; i++) {
        printf("Enter element [%d]: ", i);
        scanf("%d", (ptr + i)); // (ptr + i) is address &arr[i]
    }

    // Output using pointer dereferencing
    printf("\nArray Elements Accessed via Pointers:\n");
    printf("Index\tAddress\t\tValue\n");
    printf("----------------------------------------\n");
    for (i = 0; i < n; i++) {
        printf("[%d]\t%p\t%d\n", i, (void*)(ptr + i), *(ptr + i));
    }

    return 0;
}
```

**3. Pointer Offset Mapping:**
```text
Index 0: ptr + 0  --> &arr[0]  --> Value: *(ptr + 0)
Index 1: ptr + 1  --> &arr[1]  --> Value: *(ptr + 1)
Index 2: ptr + 2  --> &arr[2]  --> Value: *(ptr + 2)
```

---

## SECTION C: APPLIED DESIGN & CONTROL STRUCTURES (2 QUESTIONS × 10 MARKS = 20 MARKS)

### Q C1 [10 Marks, CO5]
**Question:**
Explain the advantages of user-defined functions in C. Write a C program to add, subtract, multiply, and divide two integers using user user-defined type functions.

**Answer:**
**1. Advantages of User-Defined Functions in C:**
1. **Modularity:** Decomposes complex programs into smaller, isolated, logically manageable functional modules.
2. **Code Reusability (DRY Principle):** Eliminates redundant code; write the routine once and invoke it from multiple points across the program.
3. **Independent Testing & Debugging:** Each function can be tested, profiled, and debugged in isolation without side-effects.
4. **Information Hiding & Abstraction:** Callers only interact with the function's interface (signature and parameters), abstracting away internal execution details.
5. **Team Collaboration:** Enables multiple developers to author and maintain distinct functions concurrently within large software systems.

**2. Complete C Program:**
```c
#include <stdio.h>

// User-Defined Function Prototypes
int add(int a, int b);
int subtract(int a, int b);
long multiply(int a, int b);
double divide(int a, int b, int *error_flag);

int main() {
    int num1, num2;
    int div_error = 0;

    printf("==================================================\n");
    printf("     ARITHMETIC CALCULATOR (USER FUNCTIONS)       \n");
    printf("==================================================\n");

    printf("Enter first integer : ");
    scanf("%d", &num1);
    printf("Enter second integer: ");
    scanf("%d", &num2);

    // Calling the user-defined functions
    int sum_val = add(num1, num2);
    int diff_val = subtract(num1, num2);
    long prod_val = multiply(num1, num2);
    double quot_val = divide(num1, num2, &div_error);

    // Displaying Results
    printf("\n---------------- RESULTS ----------------\n");
    printf("  Addition       (%d + %d) = %d\n", num1, num2, sum_val);
    printf("  Subtraction    (%d - %d) = %d\n", num1, num2, diff_val);
    printf("  Multiplication (%d * %d) = %ld\n", num1, num2, prod_val);

    if (div_error) {
        printf("  Division       (%d / %d) = ERROR: Division by zero is undefined!\n", num1, num2);
    } else {
        printf("  Division       (%d / %d) = %.4f\n", num1, num2, quot_val);
    }
    printf("-----------------------------------------\n");

    return 0;
}

// Function 1: Addition
int add(int a, int b) {
    return a + b;
}

// Function 2: Subtraction
int subtract(int a, int b) {
    return a - b;
}

// Function 3: Multiplication
long multiply(int a, int b) {
    return (long)a * b;
}

// Function 4: Division (with zero-division error handling)
double divide(int a, int b, int *error_flag) {
    if (b == 0) {
        *error_flag = 1; // Flag division by zero
        return 0.0;
    }
    *error_flag = 0;
    return (double)a / b;
}
```

**3. Execution Verification Table:**

| Test Case | Inputs `num1, num2` | Addition | Subtraction | Multiplication | Division | Notes |
| :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **Normal Input** | `20, 8` | `28` | `12` | `160` | `2.5000` | Accurate floating-point division |
| **Zero Denominator** | `15, 0` | `15` | `15` | `0` | *Division by zero error* | Gracefully caught via error flag |

---

### Q C2 [10 Marks, CO3]
**Question:**
Explain Conditional Statements. Write a C program to find the largest among three numbers.

**Answer:**
**1. Explanation of Conditional Statements:**
Conditional statements are decision-making constructs that control the flow of program execution based on whether a boolean relational condition evaluates to true or false.

**Types of Conditional Constructs in C:**
1. **Simple `if` Statement:** Executes a block of code only if the specified condition is true.
2. **`if-else` Statement:** Provides two distinct execution paths: one for true, one for false.
3. **`else-if` Ladder:** Tests multiple conditions sequentially until one matches.
4. **Nested `if-else`:** An `if` or `else` block containing another conditional construct inside it.
5. **Conditional Operator (`?:`):** Ternary inline shortcut: `result = (condition) ? value_if_true : value_if_false;`

**2. Decision Logic for Finding the Largest of Three Numbers:**
For numbers $A, B, C$:
* If $A \ge B$ and $A \ge C$, then $A$ is largest.
* Else if $B \ge A$ and $B \ge C$, then $B$ is largest.
* Otherwise, $C$ is largest.

**3. Complete Executable C Program:**
```c
#include <stdio.h>

int main() {
    double num1, num2, num3, largest;

    printf("==================================================\n");
    printf("       FIND LARGEST AMONG THREE NUMBERS           \n");
    printf("==================================================\n");

    printf("Enter three numbers separated by spaces: ");
    if (scanf("%lf %lf %lf", &num1, &num2, &num3) != 3) {
        printf("Invalid input! Please enter three numeric values.\n");
        return 1;
    }

    // Evaluating conditions using else-if ladder with logical AND (&&)
    if (num1 >= num2 && num1 >= num3) {
        largest = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        largest = num2;
    } else {
        largest = num3;
    }

    printf("\n---------------- RESULTS ----------------\n");
    printf("  First Number  : %.2f\n", num1);
    printf("  Second Number : %.2f\n", num2);
    printf("  Third Number  : %.2f\n", num3);
    printf("  Largest Number: %.2f\n", largest);
    printf("-----------------------------------------\n");

    return 0;
}
```

**4. Decision Truth Matrix Table:**

| Condition `(num1 >= num2)` | Condition `(num1 >= num3)` | Condition `(num2 >= num3)` | Identified Largest Number |
| :---: | :---: | :---: | :---: |
| **True** | **True** | *(Bypassed)* | `num1` |
| **True** | **False** | *(Bypassed)* | `num3` |
| **False** | *(Bypassed)* | **True** | `num2` |
| **False** | *(Bypassed)* | **False** | `num3` |

---

## SECTION D: ADVANCED POINTERS & BITWISE ARCHITECTURE (2 QUESTIONS × 10 MARKS = 20 MARKS)

### Q D1 [10 Marks, CO4]
**Question:**
Differentiate between function call by value and call by reference. Write a program to swap two numbers using a function call by reference.

**Answer:**
**1. Comprehensive Comparison Table:**

| Analytical Parameter | Call by Value | Call by Reference (via Pointers) |
| :--- | :--- | :--- |
| **Parameter Passing** | Passes a **copy** of actual arguments | Passes the **memory address** (`&var`) of actual arguments |
| **Memory Allocation** | Formal parameters occupy separate stack memory | Formal parameters are pointers referencing caller's memory |
| **Modification Scope** | Changes made inside function **do not affect** original caller variables | Changes made via `*ptr` **permanently modify** caller variables |
| **Function Signature** | Normal data types: `void func(int x);` | Pointer types: `void func(int *x);` |
| **Return Capability** | Can return only a single value via `return` | Can modify and effectively 'return' multiple values |
| **Memory Overhead** | Higher memory overhead when passing large structs | Highly efficient: passes only pointer-sized addresses (4 or 8 bytes) |

**2. Swapping Mechanism (Call by Reference):**
* The caller passes memory addresses: `swap(&a, &b);`
* The function receives them into pointer variables: `swap(int *x, int *y)`
* Dereferencing allows direct memory manipulation:
  1. `temp = *x;`
  2. `*x = *y;`
  3. `*y = temp;`

**3. Complete C Program:**
```c
#include <stdio.h>

// Function prototype for call-by-reference swap
void swap(int *x, int *y);

int main() {
    int a, b;

    printf("Enter value of a: ");
    scanf("%d", &a);
    printf("Enter value of b: ");
    scanf("%d", &b);

    printf("\n--- BEFORE SWAPPING (in main) ---\n");
    printf("a = %d (Address: %p)\n", a, (void*)&a);
    printf("b = %d (Address: %p)\n", b, (void*)&b);

    // Call by Reference: passing addresses
    swap(&a, &b);

    printf("\n--- AFTER SWAPPING (in main) ---\n");
    printf("a = %d (Address: %p)\n", a, (void*)&a);
    printf("b = %d (Address: %p)\n", b, (void*)&b);

    return 0;
}

// Function definition modifying memory directly
void swap(int *x, int *y) {
    int temp;
    temp = *x;   // Store value at address x
    *x = *y;     // Assign value at address y to address x
    *y = temp;   // Assign temp to address y
}
```

**4. Memory State Trace Table:**

| Step | State | Memory `&a` | Memory `&b` | Pointer `x` | Pointer `y` | `temp` | Action |
| :---: | :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **1** | Start in `main` | `10` | `20` | - | - | - | Initial values |
| **2** | `temp = *x;` | `10` | `20` | `&a` | `&b` | `10` | Copied `a` into `temp` |
| **3** | `*x = *y;` | `20` | `20` | `&a` | `&b` | `10` | `*x` overwritten with `20` |
| **4** | `*y = temp;` | `20` | `10` | `&a` | `&b` | `10` | `*y` overwritten with `10` |
| **5** | Return to `main`| **`20`** | **`10`** | - | - | - | **Swapped permanently!** |

---

### Q D2 [10 Marks, CO2]
**Question:**
Write a C program to perform all the bitwise operations by taking inputs.

**Answer:**
**1. Summary of All 6 Bitwise Operators in C:**

| Operator | Symbol | Operation Name | Bit-Level Rule | Mathematical Shortcut |
| :---: | :---: | :--- | :--- | :--- |
| **AND** | `&` | Bitwise AND | Bit is `1` if both bits are `1` | Bit masking |
| **OR** | `\|` | Bitwise OR | Bit is `1` if either bit is `1` | Bit setting |
| **XOR** | `^` | Bitwise Exclusive-OR | Bit is `1` if bits differ; `0` if same | Bit toggling |
| **NOT** | `~` | Bitwise NOT (1's Compl.)| Inverts every bit (`0` &rarr; `1`, `1` &rarr; `0`) | `-(n + 1)` |
| **Left Shift** | `<<`| Bitwise Left Shift | Shifts bits left by $k$ positions | $n \times 2^k$ |
| **Right Shift**| `>>`| Bitwise Right Shift| Shifts bits right by $k$ positions | $\lfloor n / 2^k \rfloor$ |

**2. Complete C Program:**
```c
#include <stdio.h>

// Helper function to print 8-bit binary representation
void printBinary8(unsigned char val) {
    for (int i = 7; i >= 0; i--) {
        printf("%d", (val >> i) & 1);
        if (i == 4) printf(" ");
    }
}

int main() {
    unsigned char a, b;
    int shifts;

    printf("====================================================\n");
    printf("         ALL C BITWISE OPERATIONS DEMONSTRATOR      \n");
    printf("====================================================\n");

    printf("Enter first integer A  (0 - 255): ");
    scanf("%hhu", &a);
    printf("Enter second integer B (0 - 255): ");
    scanf("%hhu", &b);
    printf("Enter shift positions (e.g., 1 or 2): ");
    scanf("%d", &shifts);

    printf("\n--- BINARY INPUTS ---\n");
    printf("  A = %3u | Binary: ", a); printBinary8(a); printf("\n");
    printf("  B = %3u | Binary: ", b); printBinary8(b); printf("\n");
    printf("----------------------------------------------------\n");

    // 1. Bitwise AND (&)
    unsigned char and_res = a & b;
    printf("  1. Bitwise AND  (A & B) : %3u | Binary: ", and_res);
    printBinary8(and_res);
    printf("\n");

    // 2. Bitwise OR (|)
    unsigned char or_res = a | b;
    printf("  2. Bitwise OR   (A | B) : %3u | Binary: ", or_res);
    printBinary8(or_res);
    printf("\n");

    // 3. Bitwise XOR (^)
    unsigned char xor_res = a ^ b;
    printf("  3. Bitwise XOR  (A ^ B) : %3u | Binary: ", xor_res);
    printBinary8(xor_res);
    printf("\n");

    // 4. Bitwise NOT (~)
    unsigned char not_a = (unsigned char)(~a);
    unsigned char not_b = (unsigned char)(~b);
    printf("  4. Bitwise NOT  (~A)    : %3u | Binary: ", not_a);
    printBinary8(not_a);
    printf("\n");
    printf("     Bitwise NOT  (~B)    : %3u | Binary: ", not_b);
    printBinary8(not_b);
    printf("\n");

    // 5. Left Shift (<<)
    unsigned char lshift_a = (unsigned char)(a << shifts);
    printf("  5. Left Shift   (A << %d): %3u | Multiply: A * 2^%d\n", shifts, lshift_a, shifts);

    // 6. Right Shift (>>)
    unsigned char rshift_a = (unsigned char)(a >> shifts);
    printf("  6. Right Shift  (A >> %d): %3u | Divide  : A / 2^%d\n", shifts, rshift_a, shifts);

    printf("====================================================\n");

    return 0;
}
```

**3. Bitwise Evaluation Trace Table for `A = 12 (0000 1100)` and `B = 5 (0000 0101)` with `shifts = 1`:**

| Operation | C Expression | Binary Calculation | Decimal Result | Mathematical Rule |
| :--- | :---: | :---: | :---: | :--- |
| **Input A** | `a` | `0000 1100` | `12` | Base operand |
| **Input B** | `b` | `0000 0101` | `5` | Base operand |
| **Bitwise AND** | `a & b` | `0000 0100` | `4` | $12 \,\&\, 5 = 4$ |
| **Bitwise OR** | `a \| b` | `0000 1101` | `13` | $12 \mid 5 = 13$ |
| **Bitwise XOR** | `a ^ b` | `0000 1001` | `9` | $12 \oplus 5 = 9$ |
| **Bitwise NOT** | `~a` (8-bit) | `1111 0011` | `243` | Inverts all bits |
| **Left Shift** | `a << 1` | `0001 1000` | `24` | $12 \times 2^1 = 24$ |
| **Right Shift** | `a >> 1` | `0000 0110` | `6` | $12 / 2^1 = 6$ |

---

