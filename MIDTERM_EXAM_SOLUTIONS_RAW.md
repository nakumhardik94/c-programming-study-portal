# MANIPAL UNIVERSITY JAIPUR
## Faculty of Science, Technology and Architecture
### School of Computer Science and Engineering | Department of Computer Applications
**Master of Computer Applications (MCA) — Semester I**  
**Odd Semester Mid Term Examination (Academic Session: Jul–Nov 2026)**  

---

- **Course Code:** CAP6105  
- **Course Title:** Programming & Problem-Solving Using C  
- **Time Allowed:** 1.5 Hours  
- **Maximum Marks:** 30  
- **Student Name:** Hardik Nakum  
- **Registration No:** 2602030097  

**Instructions:**  
1. All questions are compulsory.  
2. Missing data, if any, may be assumed suitably.  
3. Calculator is not allowed.  

---

## SECTION A (Short Answer Questions & Output Prediction)
*Answer all questions. Each question carries 2 Marks. (Total: 4 × 2 = 8 Marks)*

---

### Q1 [2 Marks | CO1]
**What is the role of semi colon in C programming?**

#### Answer:
**1. Statement Terminator vs. Separator:**  
In C, the semicolon (`;`) serves as a **statement terminator**, not a separator (unlike languages such as Pascal). It informs the C compiler that a complete grammatical instruction has ended, allowing the lexical analyzer and parser to mark the boundary of an execution unit and emit corresponding machine code.

**2. Key Roles of the Semicolon in C:**
- **Expression Statements:** Transforms an expression into an executable statement:
  ```c
  x = a + b;
  printf("Result = %d\n", x);
  ```
- **Declarations & Definitions:** Concludes variable declarations, function prototypes, and structure definitions:
  ```c
  int roll_no = 101;
  int calculateSum(int a, int b);
  struct Student { int id; char name[50]; };
  ```
- **For Loop Header:** Separates the three control clauses (initialization, condition, and update expressions):
  ```c
  for (i = 0; i < 10; i++)
  ```
- **Null (Empty) Statement:** A solitary semicolon (`;`) creates a valid null statement that performs no operation, widely used in delay loops or pointer traversal:
  ```c
  while (*dest++ = *src++);
  ```

**3. Common Pitfall:**  
Placing a semicolon immediately after control structures terminates the construct prematurely:
```c
if (x > 0); // Semicolon ends the if statement immediately!
{
    printf("Positive\n"); // Executes unconditionally!
}
```

---

### Q2 [2 Marks | CO1]
**Differentiate between declaration and initialization.**

#### Answer:
| Feature | Declaration | Initialization |
| :--- | :--- | :--- |
| **Definition** | Informs the compiler about the identifier's name, type, and properties without assigning a value. | The process of assigning an explicit, meaningful initial value to a variable at the time of its memory allocation. |
| **Memory Allocation** | May or may not allocate storage (e.g., `extern int x;` allocates no memory). | Always allocates storage and immediately populates the memory cell with the supplied value. |
| **Initial Content** | Automatic local variables hold random, indeterminate **garbage values**. | Holds the explicitly designated value from the instant of creation. |
| **Multiplicity** | An identifier can be declared multiple times across translation units using `extern`. | A variable can only be initialized once during its definition within a given scope. |
| **C Syntax Example** | `int count;`<br>`extern int total;` | `int count = 0;`<br>`char grade = 'A';` |

---

### Q3 [2 Marks | CO2]
**Predict Output:**
```c
#include <stdio.h>
int main()
{
    int i;
    for(i = 1; i <= 10; i++)
    {
        if(i == 6)
            break;
        printf("%d ", i);
    }
    return 0;
}
```

#### Answer:
**Exact Output:**
```
1 2 3 4 5 
```

**Step-by-Step Execution Trace Table:**
| Iteration | Variable `i` | Loop Test (`i <= 10`) | Condition (`i == 6`) | Action Performed | Screen Output | Next `i` (`i++`) |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 1 | 1 <= 10 (True) | 1 == 6 (False) | Prints `1 ` | `1 ` | 2 |
| 2 | 2 | 2 <= 10 (True) | 2 == 6 (False) | Prints `2 ` | `1 2 ` | 3 |
| 3 | 3 | 3 <= 10 (True) | 3 == 6 (False) | Prints `3 ` | `1 2 3 ` | 4 |
| 4 | 4 | 4 <= 10 (True) | 4 == 6 (False) | Prints `4 ` | `1 2 3 4 ` | 5 |
| 5 | 5 | 5 <= 10 (True) | 5 == 6 (False) | Prints `5 ` | `1 2 3 4 5 ` | 6 |
| 6 | 6 | 6 <= 10 (True) | 6 == 6 (**True**) | **`break;` executed!** Loop terminates immediately | `1 2 3 4 5 ` | *(Terminated)* |

**Explanation:**  
The `for` loop initializes `i = 1`. For values `i = 1` through `5`, `if(i == 6)` is false, so `printf("%d ", i);` prints each number followed by a space. When `i` reaches `6`, the condition `if(i == 6)` evaluates to true, executing `break;`. This immediately terminates the enclosing loop, bypassing numbers `6, 7, 8, 9, 10`.

---

### Q4 [2 Marks | CO2]
**Predict Output:**
```c
#include <stdio.h>
int main()
{
    int a = 5, b = 10;
    printf("%d ", ++a);
    printf("%d ", b--);
    printf("%d %d", a, b);
    return 0;
}
```

#### Answer:
**Exact Output:**
```
6 10 6 9
```

**Step-by-Step Operator Evaluation Trace:**
| Step | Instruction | Operator Type | Mechanism & State Changes | Printed Value | State After Line |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **Init** | `int a = 5, b = 10;` | Initialization | Memory allocated and initialized | — | `a = 5, b = 10` |
| **Line 1** | `printf("%d ", ++a);` | **Pre-Increment** (`++a`) | `a` is incremented first (`5 + 1 = 6`), then passed to `printf` | `6 ` | `a = 6, b = 10` |
| **Line 2** | `printf("%d ", b--);` | **Post-Decrement** (`b--`) | Current value of `b` (`10`) is passed to `printf` first, then `b` is decremented (`10 - 1 = 9`) | `10 ` | `a = 6, b = 9` |
| **Line 3** | `printf("%d %d", a, b);` | Direct Value Access | Current values of `a` (`6`) and `b` (`9`) are printed | `6 9` | `a = 6, b = 9` |

**Explanation:**
1. `++a` (pre-increment) increments `a` from 5 to 6 in memory *before* evaluation; thus `6 ` is printed.
2. `b--` (post-decrement) yields the current value (10) for printing, then decrements `b` to 9 after the statement.
3. The final `printf` prints the updated memory values: `6 9`.
4. Overall concatenated output: `6 10 6 9`.

---

## SECTION B (Analytical & Architectural Questions)
*Answer all questions. Each question carries 5 Marks. (Total: 3 × 5 = 15 Marks)*

---

### Q5 [5 Marks | CO1]
**Why are sequence, selection, and iteration considered fundamental control structures in algorithm design? Relate each to its flowchart representation.**

#### Answer:
**1. Theoretical Foundation: The Böhm-Jacopini Theorem (1966)**  
Corrado Böhm and Giuseppe Jacopini mathematically demonstrated that **any computable algorithm or computer program can be expressed using only three basic control structures**:
1. **Sequence**
2. **Selection** (Conditioning / Branching)
3. **Iteration** (Repetition / Looping)

This theorem forms the bedrock of **Structured Programming**, eliminating arbitrary unconditional branching (`goto` spaghetti code) and guaranteeing Single-Entry Single-Exit (SESE) program flow.

**2. Flowchart Representation & Relational Analysis:**

#### A. Sequence Structure
- **Concept:** Statements execute strictly one after another in chronological order from top to bottom.
- **Flowchart Representation:** Rectangular process blocks connected sequentially by downward arrows.
```
       │ (Entry)
       ▼
 ┌───────────┐
 │ Process 1 │
 └─────┬─────┘
       ▼
 ┌───────────┐
 │ Process 2 │
 └─────┬─────┘
       ▼ (Exit)
```
- **C Implementation:**
```c
int a = 10, b = 20;
int sum = a + b;
printf("Sum = %d\n", sum);
```

#### B. Selection Structure (Branching / Decision)
- **Concept:** Evaluates a logical condition and selects one of two or more mutually exclusive paths.
- **Flowchart Representation:** A diamond decision symbol with one entry and two labeled exits (`True` and `False`).
```
           │ (Entry)
           ▼
         ╱   ╲
       ╱       ╲
     ◁   Condition ▷
       ╲   (a > b) ╱
         ╲       ╱
         ╱       ╲
   True ╱         ╲ False
       ▼           ▼
 ┌───────────┐ ┌───────────┐
 │ Action A  │ │ Action B  │
 └─────┬─────┘ └─────┬─────┘
       └─────┬───────┘
             ▼ (Exit)
```
- **C Implementation:** `if-else`, `switch-case`.

#### C. Iteration Structure (Looping / Repetition)
- **Concept:** Repeatedly executes a block of statements (loop body) as long as a test condition remains true.
- **Flowchart Representation:** A decision diamond paired with a backward feedback loop directed to an earlier execution point.
```
             │ (Entry)
             ▼
        ┌──▶ ╱   ╲
        │  ╱       ╲
        │◁ Condition ▷─────┐ False
        │  ╲ (i <= n)╱      │
        │    ╲   ╱         │
        │      │ True      │
        │      ▼           │
        │ ┌───────────┐    │
        │ │ Loop Body │    │
        │ └─────┬─────┘    │
        └───────┘          ▼ (Exit)
```
- **C Implementation:** `for`, `while`, `do-while`.

---

### Q6 [5 Marks | CO2]
**Analyze the difference between entry-controlled and exit-controlled loops. Which type would be more appropriate for a menu-driven application and why?**

#### Answer:
**1. Analytical Comparison:**
| Analytical Parameter | Entry-Controlled Loop (Pre-Test) | Exit-Controlled Loop (Post-Test) |
| :--- | :--- | :--- |
| **C Construct** | `while` loop, `for` loop | `do-while` loop |
| **Evaluation Point** | Condition is tested **at the entry** before the loop body runs. | Condition is evaluated **at the exit** after the loop body runs. |
| **Minimum Executions** | **0 times** (If condition is initially false, body never runs). | **1 time** (Guaranteed to execute at least once). |
| **Semicolon Requirement** | No semicolon after header (`while (condition) { ... }`). | Semicolon **is strictly mandatory**: `do { ... } while (condition);`. |
| **Variable Initialization** | Control variable must be initialized *prior* to loop entry. | Control variable can be read or computed *inside* the loop body. |
| **Primary Use Cases** | Array processing, search algorithms, sentinel-controlled loops. | Interactive menus, input validation, password prompts. |

**2. Why Exit-Controlled Loop (`do-while`) is Most Appropriate for Menu-Driven Applications:**
1. **Mandatory First Presentation:** In any interactive application, the menu options must be displayed to the user **at least once** before an input choice exists. An entry-controlled loop tests the condition before the user has even seen the menu.
2. **Elimination of Code Duplication:** With `while`, the display and input prompt must be duplicated: once before the loop and again inside the loop body. With `do-while`, menu display and input are written **only once**.
3. **Clean Natural Flow:** "Display Menu -> Read Choice -> Process Operation -> Repeat if Choice != Exit" perfectly matches post-test semantics.

---

### Q7 [5 Marks | CO3]
**Discuss the importance of data types and type conversion in C programming.**

#### Answer:
**PART 1: Importance of Data Types in C**
1. **Memory Allocation:** Informs the compiler how many bytes of RAM to reserve (`char` = 1, `int` = 4, `float` = 4, `double` = 8).
2. **Binary Decoding:** Dictates how raw bit patterns are interpreted (e.g., `0x41` as decimal `65` for `int`, or ASCII `'A'` for `char`; floating-point uses IEEE 754 exponent/mantissa).
3. **Compile-Time Type Safety:** Enforces valid operations (bitwise operators and modulus `%` are valid on integers, but strictly prohibited on floating-point).
4. **Range Management:** Modifiers (`signed`, `unsigned`, `short`, `long`) allow optimization of numerical ranges.

**PART 2: Importance & Mechanics of Type Conversion**
1. **Implicit Type Conversion (Type Promotion / Coercion):**
   - Performed automatically by the compiler to prevent precision loss in mixed expressions:
     $$\text{char, short} \to \text{int} \to \text{unsigned int} \to \text{long} \to \text{unsigned long} \to \text{float} \to \text{double} \to \text{long double}$$
   - *Integer Division Hazard:* `int a = 5, b = 2; float result = a / b;` yields `2.0` because `5 / 2` evaluates to integer `2` prior to assignment.
2. **Explicit Type Conversion (Type Casting):**
   - Forced by the developer: `(TargetType) expression`.
   - *Key Applications:*
     - Preventing integer division truncation: `float avg = (float)sum / count;`
     - Interfacing with dynamic memory APIs: `int *ptr = (int *)malloc(n * sizeof(int));`
     - Intentional precision truncation: `int intVal = (int)floatVal;`

---

## SECTION C (Applied Programming Problem)
*Answer the question. The question carries 7 Marks. (Total: 1 × 7 = 7 Marks)*

---

### Q8 [7 Marks | CO2]
**Write a menu driven C program that starts with a balance of ₹10,000 and displays:**
1. Check Balance
2. Deposit
3. Withdraw
4. Exit
**Use `switch` Statement to perform the selected operation. For withdrawal, check whether sufficient balance is available.**

#### Answer:
**Complete Executable C Solution (`banking_system.c`):**

```c
/**
 * ============================================================================
 * MANIPAL UNIVERSITY JAIPUR - MCA (CAP6105)
 * Mid-Term Examination - Section C (Question 8)
 * Problem: Menu-Driven Banking Application using switch statement & do-while
 * Initial Balance: Rs. 10,000.00
 * ============================================================================
 */

#include <stdio.h>
#include <stdlib.h>

int main()
{
    // Initialize starting balance to Rs. 10,000.00 as specified
    double balance = 10000.00;
    int choice;
    double amount;

    printf("====================================================\n");
    printf("         WELCOME TO UNIVERSITY STUDENT BANK         \n");
    printf("====================================================\n");

    // Exit-controlled loop: displays menu and repeats until user chooses 4 (Exit)
    do
    {
        // Display Banking Operations Menu
        printf("\n------------- BANKING OPERATIONS MENU -------------\n");
        printf("  1. Check Balance\n");
        printf("  2. Deposit\n");
        printf("  3. Withdraw\n");
        printf("  4. Exit\n");
        printf("---------------------------------------------------\n");
        printf("Enter your choice (1-4): ");
        
        // Read user choice with input validation
        if (scanf("%d", &choice) != 1)
        {
            printf("\n[ERROR] Invalid input! Please enter a numeric choice (1-4).\n");
            while (getchar() != '\n'); // Clear stream buffer
            continue;
        }

        // Execute selected operation via switch statement
        switch (choice)
        {
            case 1:
                // Option 1: Check Current Balance
                printf("\n>>> ACCOUNT BALANCE INQUIRY <<<\n");
                printf("    Current Balance: Rs. %.2f\n", balance);
                break;

            case 2:
                // Option 2: Deposit Money
                printf("\nEnter amount to deposit: Rs. ");
                if (scanf("%lf", &amount) != 1 || amount <= 0.0)
                {
                    printf("[ERROR] Invalid amount! Deposit must be greater than Rs. 0.\n");
                    while (getchar() != '\n');
                }
                else
                {
                    balance += amount;
                    printf("[SUCCESS] Rs. %.2f deposited successfully.\n", amount);
                    printf("          Updated Balance: Rs. %.2f\n", balance);
                }
                break;

            case 3:
                // Option 3: Withdraw Money with Balance Verification
                printf("\nEnter amount to withdraw: Rs. ");
                if (scanf("%lf", &amount) != 1 || amount <= 0.0)
                {
                    printf("[ERROR] Invalid amount! Withdrawal must be greater than Rs. 0.\n");
                    while (getchar() != '\n');
                }
                else if (amount > balance)
                {
                    // Strict Sufficient Balance Verification
                    printf("\n[TRANSACTION DECLINED] Insufficient Balance!\n");
                    printf("  Requested Amount : Rs. %.2f\n", amount);
                    printf("  Available Balance: Rs. %.2f\n", balance);
                    printf("  Shortage Amount  : Rs. %.2f\n", amount - balance);
                }
                else
                {
                    balance -= amount;
                    printf("\n[SUCCESS] Rs. %.2f withdrawn successfully.\n", amount);
                    printf("          Remaining Balance: Rs. %.2f\n", balance);
                }
                break;

            case 4:
                // Option 4: Exit Application
                printf("\n====================================================\n");
                printf(" Thank you for banking with us. Have a great day!   \n");
                printf("====================================================\n");
                break;

            default:
                // Invalid Choice Handling
                printf("\n[INVALID CHOICE] '%d' is not a valid option.\n", choice);
                printf("Please enter a selection from 1 to 4.\n");
                break;
        }

    } while (choice != 4);

    return 0;
}
```

---

**Sample Program Execution & Dry Run Transcript:**

```
====================================================
         WELCOME TO UNIVERSITY STUDENT BANK         
====================================================

------------- BANKING OPERATIONS MENU -------------
  1. Check Balance
  2. Deposit
  3. Withdraw
  4. Exit
---------------------------------------------------
Enter your choice (1-4): 1

>>> ACCOUNT BALANCE INQUIRY <<<
    Current Balance: Rs. 10000.00

------------- BANKING OPERATIONS MENU -------------
  1. Check Balance
  2. Deposit
  3. Withdraw
  4. Exit
---------------------------------------------------
Enter your choice (1-4): 2

Enter amount to deposit: Rs. 2500.50
[SUCCESS] Rs. 2500.50 deposited successfully.
          Updated Balance: Rs. 12500.50

------------- BANKING OPERATIONS MENU -------------
  1. Check Balance
  2. Deposit
  3. Withdraw
  4. Exit
---------------------------------------------------
Enter your choice (1-4): 3

Enter amount to withdraw: Rs. 15000.00

[TRANSACTION DECLINED] Insufficient Balance!
  Requested Amount : Rs. 15000.00
  Available Balance: Rs. 12500.50
  Shortage Amount  : Rs. 2499.50

------------- BANKING OPERATIONS MENU -------------
  1. Check Balance
  2. Deposit
  3. Withdraw
  4. Exit
---------------------------------------------------
Enter your choice (1-4): 3

Enter amount to withdraw: Rs. 4500.50

[SUCCESS] Rs. 4500.50 withdrawn successfully.
          Remaining Balance: Rs. 8000.00

------------- BANKING OPERATIONS MENU -------------
  1. Check Balance
  2. Deposit
  3. Withdraw
  4. Exit
---------------------------------------------------
Enter your choice (1-4): 4

====================================================
 Thank you for banking with us. Have a great day!   
====================================================
```
