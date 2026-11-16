// ============================================================================
// MANIPAL UNIVERSITY JAIPUR - MCA SEMESTER I
// CAP6105: Programming & Problem-Solving Using C
// Odd Semester Mid Term Examination (Jul-Nov 2026) - Complete Verified Solutions
// ============================================================================

const MIDTERM_EXAM_DATA = {
  examInfo: {
    institution: "MANIPAL UNIVERSITY JAIPUR",
    faculty: "Faculty of Science, Technology and Architecture",
    school: "School of Computer Science and Engineering",
    department: "Department of Computer Applications",
    program: "MCA (Master of Computer Applications)",
    semester: "Semester I",
    session: "Odd Semester Mid Term Examination, Jul-Nov 2026",
    courseCode: "CAP6105",
    courseTitle: "Programming & Problem-Solving Using C",
    time: "1.5 Hours",
    maxMarks: 30,
    studentName: "Hardik Nakum",
    regNo: "2602030097",
    instructions: [
      "All questions are compulsory.",
      "Missing data, if any, may be assumed suitably.",
      "Calculator is not allowed."
    ],
    paperPhoto: "assets/midterm_question_paper.jpg"
  },
  sections: [
    {
      id: "section-a",
      name: "SECTION A",
      totalMarks: 8,
      desc: "Short-answer questions & output prediction (4 Questions × 2 Marks = 8 Marks)",
      questions: [
        {
          num: "Q1",
          marks: 2,
          co: "CO1",
          q: "What is the role of semi colon in C programming?",
          a: `**1. Statement Terminator vs. Separator:**
In C, the semicolon (\`;\`) functions strictly as a **statement terminator**, not a statement separator (unlike languages such as Pascal). It informs the C compiler that a complete grammatical instruction has ended, allowing the lexical analyzer and parser to resolve the statement into machine instructions.

**2. Key Roles of the Semicolon in C:**
* **Expression Statements:** Transforms an expression into an executable statement:
  \`x = a + b;\`
  \`printf("Value: %d\\n", x);\`
* **Declarations & Definitions:** Concludes variable declarations, function prototypes, and structure/union definitions:
  \`int roll_no = 101;\`
  \`int calculateSum(int a, int b);\`
  \`struct Student { int id; char name[50]; };\`
* **For Loop Control Structure:** Semicolons are mandatory to separate the initialization, condition, and iteration expressions in a \`for\` header:
  \`for (i = 0; i < 10; i++)\`
* **Null (Empty) Statement:** A standalone semicolon \`;\` creates a valid null statement that performs no action. It is used in loop bodies where processing occurs within the control expression itself:
  \`while (*dest++ = *src++);\`

**3. Common Pitfall / Warning:**
Accidentally placing a semicolon immediately after an \`if\` condition or loop header terminates the control structure prematurely:
\`if (x > 0);\` // Semicolon terminates the if! The block below executes unconditionally!
\`{ printf("Positive"); }\``
        },
        {
          num: "Q2",
          marks: 2,
          co: "CO1",
          q: "Differentiate between declaration and initialization.",
          a: `**Comprehensive Comparison:**

| Feature | Declaration | Initialization |
| :--- | :--- | :--- |
| **Fundamental Meaning** | Informs the compiler about the name, type, and properties of an identifier without giving it a value. | The process of assigning an explicit, meaningful initial value to a variable at the time of its memory allocation. |
| **Memory Allocation** | May or may not reserve storage in memory (e.g., \`extern int x;\` allocates zero memory). | Always allocates storage and immediately populates the memory cell with the supplied value. |
| **Variable State** | Automatic local variables hold random, indeterminate **garbage values**. | The variable holds the explicitly designated value from the instant of creation. |
| **Multiplicity** | An identifier can be declared multiple times across files using the \`extern\` specifier. | A variable can only be initialized once during its definition within a given scope. |
| **C Syntax Example** | \`int count;\` <br>\`extern int total;\` | \`int count = 0;\` <br>\`char grade = 'A';\` |

**Technical Summary:**
Every initialization contains an implicit declaration, but a declaration does not necessarily initialize.`
        },
        {
          num: "Q3",
          marks: 2,
          co: "CO2",
          q: "Predict Output:\n```c\n#include <stdio.h>\nint main()\n{\n    int i;\n    for(i = 1; i <= 10; i++)\n    {\n        if(i == 6)\n            break;\n        printf(\"%d \", i);\n    }\n    return 0;\n}\n```",
          a: `**Exact Output:**
\`\`\`
1 2 3 4 5 
\`\`\`

**Step-by-Step Execution Trace Table:**

| Iteration | Variable \`i\` | Loop Test (\`i <= 10\`) | Condition (\`i == 6\`) | Action Performed | Screen Output | Next \`i\` (\`i++\`) |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **1** | 1 | 1 <= 10 (True) | 1 == 6 (False) | Prints \`1 \` | \`1 \` | 2 |
| **2** | 2 | 2 <= 10 (True) | 2 == 6 (False) | Prints \`2 \` | \`1 2 \` | 3 |
| **3** | 3 | 3 <= 10 (True) | 3 == 6 (False) | Prints \`3 \` | \`1 2 3 \` | 4 |
| **4** | 4 | 4 <= 10 (True) | 4 == 6 (False) | Prints \`4 \` | \`1 2 3 4 \` | 5 |
| **5** | 5 | 5 <= 10 (True) | 5 == 6 (False) | Prints \`5 \` | \`1 2 3 4 5 \` | 6 |
| **6** | 6 | 6 <= 10 (True) | 6 == 6 (**True**) | **\`break;\` executed!** Loop terminates immediately | \`1 2 3 4 5 \` | *(Terminated)* |

**Detailed Explanation:**
1. The loop begins with \`i = 1\` and checks the condition \`i <= 10\`.
2. For \`i = 1, 2, 3, 4, 5\`, the condition \`if(i == 6)\` evaluates to False, so \`printf("%d ", i);\` executes, printing each number followed by a space.
3. When \`i\` increments to \`6\`, the conditional check \`if(i == 6)\` evaluates to True.
4. The \`break\` statement executes instantly, terminating the enclosing \`for\` loop and transferring control directly to \`return 0;\`.
5. Values \`6, 7, 8, 9, 10\` are never printed.`
        },
        {
          num: "Q4",
          marks: 2,
          co: "CO2",
          q: "Predict Output:\n```c\n#include <stdio.h>\nint main()\n{\n    int a = 5, b = 10;\n    printf(\"%d \", ++a);\n    printf(\"%d \", b--);\n    printf(\"%d %d\", a, b);\n    return 0;\n}\n```",
          a: `**Exact Output:**
\`\`\`
6 10 6 9
\`\`\`

**Step-by-Step Operator Evaluation Trace:**

| Line | Instruction | Operator Involved | Evaluation & State Changes | Screen Output | Variables State After Line |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **Init** | \`int a = 5, b = 10;\` | Declaration & Init | Storage allocated and initialized in memory | *(None)* | \`a = 5\`, \`b = 10\` |
| **Line 1** | \`printf("%d ", ++a);\` | **Pre-Increment** (\`++a\`) | 1. Increment \`a\` first: \`a = 5 + 1 = 6\`<br>2. Pass updated value (6) to \`printf\` | \`6 \` | \`a = 6\`, \`b = 10\` |
| **Line 2** | \`printf("%d ", b--);\` | **Post-Decrement** (\`b--\`) | 1. Pass current value (10) to \`printf\` first<br>2. Decrement \`b\` in memory: \`b = 10 - 1 = 9\` | \`10 \` | \`a = 6\`, \`b = 9\` |
| **Line 3** | \`printf("%d %d", a, b);\` | Direct Variable Access | Fetches current values from memory: \`a = 6\`, \`b = 9\` | \`6 9\` | \`a = 6\`, \`b = 9\` |

**Technical Explanation:**
1. \`++a\` uses the **prefix increment** operator: the variable \`a\` is modified prior to value retrieval. Thus, 6 is passed to \`printf\`.
2. \`b--\` uses the **postfix decrement** operator: the current value 10 is supplied to \`printf\` before the decrement takes place. Immediately after the statement, \`b\` becomes 9.
3. The final \`printf("%d %d", a, b)\` accesses the updated memory locations, printing \`6 9\`.
4. Resulting string of output: \`6 10 6 9\`.`
        }
      ]
    },
    {
      id: "section-b",
      name: "SECTION B",
      totalMarks: 15,
      desc: "Detailed analytical & architectural questions (3 Questions × 5 Marks = 15 Marks)",
      questions: [
        {
          num: "Q5",
          marks: 5,
          co: "CO1",
          q: "Why are sequence, selection, and iteration considered fundamental control structures in algorithm design? Relate each to its flowchart representation.",
          a: `**1. Theoretical Foundation: The Böhm-Jacopini Theorem (1966)**
The Italian mathematicians Corrado Böhm and Giuseppe Jacopini established the fundamental theorem of structured programming: **any computable algorithm or computer program can be expressed using only three basic control structures**:
1. **Sequence**
2. **Selection** (Conditioning / Branching)
3. **Iteration** (Repetition / Looping)

This theorem revolutionized software engineering by eliminating arbitrary unconditional jumping (\`goto\` spaghetti code), ensuring every program possesses a clean, Single-Entry Single-Exit (SESE) structure that is mathematically provable, modular, and maintainable.

---

**2. The Three Control Structures & Flowchart Representations:**

### A. Sequence Structure
* **Concept:** Instructions execute in strict, linear order from top to bottom. No statement is skipped or executed more than once.
* **Flowchart Symbol:** Rectangles (Process) connected sequentially by vertical flowlines.
* **Flowchart Diagram:**
\`\`\`
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
\`\`\`
* **C Example:**
\`\`\`c
int a = 10, b = 20;
int sum = a + b;
printf("Sum = %d", sum);
\`\`\`

---

### B. Selection Structure (Branching / Decision)
* **Concept:** Evaluates a logical (boolean) condition and selectively follows one of multiple mutually exclusive pathways based on whether the condition evaluates to True or False.
* **Flowchart Symbol:** Diamond (Decision) with one entry and two labeled exits (True/False).
* **Flowchart Diagram:**
\`\`\`
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
\`\`\`
* **C Example:**
\`\`\`c
if (a > b)
    max = a;
else
    max = b;
\`\`\`

---

### C. Iteration Structure (Looping / Repetition)
* **Concept:** Repeatedly executes a block of statements (the loop body) as long as a specified test condition evaluates to True. When the condition evaluates to False, the loop terminates.
* **Flowchart Symbol:** Decision diamond combined with a feedback loopline directing control back to an earlier execution point.
* **Flowchart Diagram:**
\`\`\`
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
\`\`\`
* **C Example:**
\`\`\`c
for (int i = 1; i <= n; i++) {
    sum += i;
}
\`\`\`

---

**3. Conclusion:**
Sequence guarantees deterministic progression, Selection enables dynamic intelligence and conditional choices, and Iteration delivers computational power over large datasets. Together, they form the complete foundation of all algorithm design.`
        },
        {
          num: "Q6",
          marks: 5,
          co: "CO2",
          q: "Analyze the difference between entry-controlled and exit-controlled loops. Which type would be more appropriate for a menu-driven application and why?",
          a: `**1. Comprehensive Comparison:**

| Analytical Parameter | Entry-Controlled Loop (Pre-Test) | Exit-Controlled Loop (Post-Test) |
| :--- | :--- | :--- |
| **C Construct** | \`while\` loop, \`for\` loop | \`do-while\` loop |
| **Evaluation Point** | Condition is tested **at the very beginning** before executing the loop body. | Condition is evaluated **at the very end** after the loop body executes. |
| **Minimum Executions** | **0 times** (If condition is False initially, loop body never executes). | **1 time** (Guaranteed to execute at least once regardless of condition). |
| **Semicolon Requirement** | No semicolon after loop header (\`while (condition) { ... }\`). | Semicolon **is strictly mandatory** after the trailing while (\`do { ... } while (condition);\`). |
| **Variable Initialization** | Control variable must be initialized *prior* to entering the loop. | Control variable can be read or computed *inside* the loop body itself. |
| **Primary Use Cases** | Array processing, searching, sentinel-controlled loops, file EOF reading. | Interactive menus, password prompts, input validation loops. |

---

**2. Which Type is More Appropriate for Menu-Driven Applications and Why?**

The **Exit-Controlled Loop (\`do-while\`)** is overwhelmingly the most appropriate choice for menu-driven applications.

**Detailed Justification:**
1. **Mandatory First-Time Display:**
   In any menu-driven system, the menu options must be displayed to the user **at least once** before an input choice can even be entered. An entry-controlled loop (\`while\`) would test the condition before the user has even seen the menu or entered a choice.
2. **Elimination of Redundant Code:**
   If a developer uses a \`while\` loop for a menu, they are forced to duplicate the display and input logic:
   \`\`\`c
   // UGLY & REDUNDANT with while loop:
   printMenu();
   scanf("%d", &choice); // First input outside loop
   while (choice != 4) {
       processChoice(choice);
       printMenu();
       scanf("%d", &choice); // Duplicate input inside loop!
   }
   \`\`\`
3. **Elegant and Clean with \`do-while\`:**
   With \`do-while\`, the menu display, input prompt, and processing logic are written **only once**:
   \`\`\`c
   // CLEAN & PROFESSIONAL with do-while loop:
   do {
       printMenu();
       scanf("%d", &choice);
       processChoice(choice);
   } while (choice != 4);
   \`\`\`
4. **Natural User Interaction Flow:**
   The human interaction model is fundamentally "Show options -> Read input -> Process -> Repeat if user wants to continue". This matches the post-test \`do-while\` semantic perfectly.`
        },
        {
          num: "Q7",
          marks: 5,
          co: "CO3",
          q: "Discuss the importance of data types and type conversion in C programming.",
          a: `**PART 1: Importance of Data Types in C**

Data types are fundamental to C programming for the following critical reasons:
1. **Memory Allocation & Sizing:**
   Data types instruct the compiler how many bytes of RAM to reserve for a variable:
   * \`char\`: 1 byte (8 bits)
   * \`int\`: 4 bytes (32 bits typical)
   * \`float\`: 4 bytes (32-bit single precision IEEE 754)
   * \`double\`: 8 bytes (64-bit double precision IEEE 754)
2. **Binary Interpretation & Representation:**
   The data type tells the CPU how to decode the stored bit patterns:
   * An integer with hex value \`0x41\` is interpreted as decimal \`65\`.
   * A character with hex value \`0x41\` is rendered as ASCII character \`'A'\`.
   * Floating-point numbers use signed mantissa and exponent fields, fundamentally different from integer two's complement.
3. **Compile-Time Type Safety & Operation Validity:**
   The compiler enforces what operations are legally permitted on a given variable:
   * Bitwise operators (\`&\`, \`|\`, \`^\`, \`<<\`, \`>>\`) and modulus (\`%\`) are valid on integers, but strictly prohibited on \`float\` and \`double\`.
   * Pointer arithmetic increments memory addresses by \`sizeof(DataType)\`.
4. **Range & Boundary Management:**
   Modifiers (\`signed\`, \`unsigned\`, \`short\`, \`long\`) allow fine-tuning data ranges to prevent memory waste or numerical overflow.

---

**PART 2: Importance & Mechanics of Type Conversion**

Type conversion is the process of translating a value from one data type into another during expression evaluation or variable assignment.

### 1. Implicit Type Conversion (Type Promotion / Coercion)
* Performed automatically by the compiler to prevent precision loss when operations combine mixed data types.
* **The Promotion Hierarchy:**
  $$\\text{char, short} \\to \\text{int} \\to \\text{unsigned int} \\to \\text{long} \\to \\text{unsigned long} \\to \\text{float} \\to \\text{double} \\to \\text{long double}$$
* **Integer Division Hazard:**
  \`\`\`c
  int a = 5, b = 2;
  float result = a / b; // Computes 5/2 = 2 as integer, then assigns 2.0 to result!
  \`\`\`

### 2. Explicit Type Conversion (Type Casting)
* Manually forced by the programmer using the syntax: \`(TargetType) expression\`.
* **Key Use Cases:**
  1. **Preventing integer division truncation:**
     \`float result = (float)a / b;\` // Evaluates to 2.5
  2. **Interfacing with Memory Management APIs:**
     \`int *arr = (int *)malloc(n * sizeof(int));\`
  3. **Demoting floating point to integer without warnings:**
     \`int floorValue = (int)3.99;\` // Explicitly truncates to 3`
        }
      ]
    },
    {
      id: "section-c",
      name: "SECTION C",
      totalMarks: 7,
      desc: "Applied programming problem (1 Question × 7 Marks = 7 Marks)",
      questions: [
        {
          num: "Q8",
          marks: 7,
          co: "CO2",
          q: "Write a menu driven C program that starts with a balance of ₹10,000 and displays:\n1. Check Balance\n2. Deposit\n3. Withdraw\n4. Exit\nUse switch Statement to perform the selected operation. For withdrawal, check whether sufficient balance is available.",
          a: `**Complete Executable C Solution:**

\`\`\`c
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
    // Starting balance initialized to Rs. 10,000.00 as specified
    double balance = 10000.00;
    int choice;
    double amount;

    printf("====================================================\\n");
    printf("         WELCOME TO UNIVERSITY STUDENT BANK         \\n");
    printf("====================================================\\n");

    // Exit-controlled loop: displays menu and repeats until user chooses 4 (Exit)
    do
    {
        // Display Banking Operations Menu
        printf("\\n------------- BANKING OPERATIONS MENU -------------\\n");
        printf("  1. Check Balance\\n");
        printf("  2. Deposit\\n");
        printf("  3. Withdraw\\n");
        printf("  4. Exit\\n");
        printf("---------------------------------------------------\\n");
        printf("Enter your choice (1-4): ");
        
        // Read user choice with input validation
        if (scanf("%d", &choice) != 1)
        {
            printf("\\n[ERROR] Invalid input! Please enter a numeric choice (1-4).\\n");
            // Clear input stream buffer
            while (getchar() != '\\n');
            continue;
        }

        // Execute selected operation via switch statement
        switch (choice)
        {
            case 1:
                // Option 1: Check Current Balance
                printf("\\n>>> ACCOUNT BALANCE INQUIRY <<<\\n");
                printf("    Current Balance: Rs. %.2f\\n", balance);
                break;

            case 2:
                // Option 2: Deposit Money
                printf("\\nEnter amount to deposit: Rs. ");
                if (scanf("%lf", &amount) != 1 || amount <= 0.0)
                {
                    printf("[ERROR] Invalid amount! Deposit must be greater than Rs. 0.\\n");
                    while (getchar() != '\\n');
                }
                else
                {
                    balance += amount;
                    printf("[SUCCESS] Rs. %.2f deposited successfully.\\n", amount);
                    printf("          Updated Balance: Rs. %.2f\\n", balance);
                }
                break;

            case 3:
                // Option 3: Withdraw Money with Balance Verification
                printf("\\nEnter amount to withdraw: Rs. ");
                if (scanf("%lf", &amount) != 1 || amount <= 0.0)
                {
                    printf("[ERROR] Invalid amount! Withdrawal must be greater than Rs. 0.\\n");
                    while (getchar() != '\\n');
                }
                else if (amount > balance)
                {
                    // Strict Sufficient Balance Verification
                    printf("\\n[TRANSACTION DECLINED] Insufficient Balance!\\n");
                    printf("  Requested Amount : Rs. %.2f\\n", amount);
                    printf("  Available Balance: Rs. %.2f\\n", balance);
                    printf("  Shortage Amount  : Rs. %.2f\\n", amount - balance);
                }
                else
                {
                    balance -= amount;
                    printf("\\n[SUCCESS] Rs. %.2f withdrawn successfully.\\n", amount);
                    printf("          Remaining Balance: Rs. %.2f\\n", balance);
                }
                break;

            case 4:
                // Option 4: Exit Application
                printf("\\n====================================================\\n");
                printf(" Thank you for banking with us. Have a great day!   \\n");
                printf("====================================================\\n");
                break;

            default:
                // Invalid Choice Handling
                printf("\\n[INVALID CHOICE] '%d' is not a valid option.\\n", choice);
                printf("Please enter a selection from 1 to 4.\\n");
                break;
        }

    } while (choice != 4);

    return 0;
}
\`\`\`

---

**Sample Program Execution & Dry Run Transcript:**

\`\`\`
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
\`\`\`

---

**Key Technical Features Implemented:**
1. **Initial Balance Requirement:** Starts at exactly \`balance = 10000.00\`.
2. **Control Structure:** Exit-controlled \`do-while\` loop ensures menu prints on every pass until \`choice == 4\`.
3. **Switch Statement:** Clean \`switch(choice)\` handling all 4 cases plus \`default\`.
4. **Sufficient Balance Check:** Guard clause \`if (amount > balance)\` rejects invalid withdrawals and prints exact shortage.
5. **Input Buffer Safety:** \`while(getchar() != '\\n');\` flushes non-integer junk input to prevent infinite loops.`
        }
      ]
    }
  ]
};
