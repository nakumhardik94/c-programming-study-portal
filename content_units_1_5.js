const UNITS_1_TO_5 = [
  {
    "id": "unit1",
    "title": "Unit 1: Algorithm & Flow Charts",
    "questions": [
      {
        "q": "Define an algorithm. List its characteristics.",
        "a": "**Definition:**\nAn algorithm is a finite, well-defined sequence of unambiguous computational steps that takes zero or more inputs and produces one or more desired outputs.\n\n**Essential Characteristics (Knuth Criteria):**\n1. **Finiteness:** Must terminate after a finite number of operations for all valid inputs.\n2. **Definiteness:** Each step must be clearly and unambiguously specified without vagueness.\n3. **Input:** Accepts zero or more externally supplied quantities.\n4. **Output:** Produces at least one defined output or result.\n5. **Effectiveness:** Every operation must be sufficiently basic that it can be carried out exactly in finite time using pencil and paper."
      },
      {
        "q": "What is a flowchart? Name the symbol used for decision, input/output, and start/end.",
        "a": "**Definition:**\nA flowchart is a standardized visual diagram representing the sequence of operations, data flow, and control logic of an algorithm using standard ANSI shapes connected by directional arrows.\n\n**Standard Symbols:**\n1. **Start/End (Terminator):** Oval or rounded rectangle.\n2. **Input/Output:** Parallelogram (e.g., Read N, Print S).\n3. **Decision / Branching:** Diamond (Rhombus) with one entry and two exits (True/False).\n4. **Process / Computation:** Rectangle (e.g., S = S + I).\n5. **Connector:** Circle (for on-page junctions), Pentagon (for off-page continuity).\n6. **Flow Lines:** Arrowed lines indicating direction of execution."
      },
      {
        "q": "What is pseudocode?",
        "a": "**Definition:**\nPseudocode is an informal, language-independent, human-readable description of an algorithm that utilizes structured programming conventions (like IF, WHILE, FOR) without requiring the strict syntactic baggage of a formal programming language.\n\n**Key Advantages:**\n1. Allows programmers to focus purely on algorithmic logic rather than language syntax.\n2. Bridges the conceptual transition from problem specifications to executable code.\n3. Easily translated into any procedural language like C, Python, or Java."
      },
      {
        "q": "Define dry run.",
        "a": "**Definition:**\nA dry run (also called manual code walk-through or desk checking) is the step-by-step paper execution of an algorithm or program using sample input values, tracking every variable change in a trace table.\n\n**Significance:**\n1. Identifies logical bugs, off-by-one loop errors, and infinite loops before coding.\n2. Verifies whether boundary conditions (e.g., N=0, N=1, negative inputs) are handled properly.\n3. Confirms that output matches problem requirements."
      },
      {
        "q": "Write the advantages and limitations of flowcharts.",
        "a": "**Advantages:**\n1. **Visual Clarity:** Visualizes complex branching and iteration paths intuitively.\n2. **Effective Communication:** Facilitates clear communication between programmers, system designers, and non-technical stakeholders.\n3. **Aids Debugging:** Highlights logic dead ends and unhandled decision branches early.\n\n**Limitations:**\n1. **Difficult Modifications:** Any alteration or insertion in complex logic often necessitates redrawing the entire diagram.\n2. **Clutter in Large Programs:** Becomes unwieldy and hard to manage when problems contain deeply nested decisions.\n3. **Time-Consuming:** Manual drafting takes significantly more time than writing pseudocode."
      },
      {
        "q": "Explain the steps involved in solving a problem on a computer.",
        "a": "**Six Problem-Solving Steps on a Computer:**\n1. **Problem Analysis:** Understand the problem, defining clear inputs, required outputs, and edge constraints.\n2. **Algorithm Design:** Develop a step-by-step logical sequence (algorithm) and visual flowchart.\n3. **Verification (Dry Run):** Trace the algorithm manually with representative test cases to verify logic.\n4. **Coding (Implementation):** Translate the algorithm into high-level source code (e.g., C) following syntax rules.\n5. **Compilation & Linking:** Compile source files into object code and link libraries to produce an executable.\n6. **Testing & Debugging:** Execute the program with varied test inputs to eliminate runtime and semantic defects."
      },
      {
        "q": "Explain the three basic control structures with flowchart sketches.",
        "a": "**Three Basic Control Structures (B\u00f6hm-Jacopini Theorem):**\n1. **Sequence:** Statements execute consecutively in order, top to bottom (`A -> B -> C`).\n2. **Selection (Decision):** Chooses between alternative branches based on a Boolean condition (e.g., `if-else`, `switch`). Flowchart: Diamond with two exit paths (True / False).\n3. **Iteration (Looping):** Repeats a set of statements while/until a condition holds (`while`, `for`, `do-while`). Flowchart: Decision diamond with a feedback loop returning to a preceding node."
      },
      {
        "q": "Why are sequence, selection, and iteration considered fundamental in algorithm design? Relate each to its flowchart representation.",
        "a": "**Theoretical Justification:**\nThe B\u00f6hm-Jacopini Structured Programming Theorem proves that any computable function can be expressed using only these three basic control structures without using arbitrary jumps (`goto`).\n\n**Relating to Flowchart Representation:**\n1. **Sequence:** Represented by linear vertical flow lines connecting rectangular process boxes.\n2. **Selection:** Represented by a diamond decision symbol with one input and two distinct output branches.\n3. **Iteration:** Represented by a diamond decision node whose active branch executes a body and loops back above the diamond."
      },
      {
        "q": "Why must an algorithm be finite? Give an example of a procedure that violates finiteness.",
        "a": "**Requirement of Finiteness:**\nA computer algorithm must terminate after a finite number of operations because computer resources (CPU cycles, memory, and time) are bounded. An infinite procedure never yields a result, rendering it computationally invalid.\n\n**Example Violating Finiteness:**\n```text\n1. Set I = 1\n2. While I > 0:\n3.     Print I\n4.     I = I + 1\n```\nBecause `I` starts at 1 and increases indefinitely, `I > 0` is permanently true, creating an infinite loop that violates finiteness."
      },
      {
        "q": "Can two different algorithms solve the same problem? How do you decide which is better?",
        "a": "**Yes:** Multiple algorithms can solve the same problem (e.g., Bubble Sort vs Quick Sort; Linear Search vs Binary Search).\n\n**How to Decide Which is Better:**\n1. **Time Complexity:** How running time grows with input size `N` (e.g., `O(N)` vs `O(log N)`).\n2. **Space Complexity:** Amount of auxiliary memory required (e.g., in-place `O(1)` vs `O(N)` extra storage).\n3. **Simplicity and Maintainability:** For small `N`, a simple algorithm may be preferred over complex overhead."
      },
      {
        "q": "Why is the diamond the only flowchart symbol with two exits?",
        "a": "**Explanation:**\nThe diamond represents a conditional evaluation (Boolean predicate). In two-valued Boolean logic, any condition evaluates strictly to either **TRUE** or **FALSE** (YES or NO).\n\n**Design Integrity:**\nBecause execution must diverge into one of these two mutually exclusive logical paths, the diamond must have two exits. All other symbols (process, I/O, terminator) maintain single-entry single-exit (SESE) linear continuity."
      },
      {
        "q": "Algorithm vs flowchart.",
        "a": "**Key Differences:**\n1. **Form:** Algorithm is a textual, step-by-step description; Flowchart is a graphical representation using standardized geometric shapes.\n2. **Modification:** Algorithms are easy to edit in text; Flowcharts often require redrawing the diagram.\n3. **Ease of Understanding:** Flowcharts provide instantaneous visual intuition for branches and loops; algorithms require reading and mental tracking.\n4. **Detail Level:** Flowcharts highlight overall control flow; algorithms can include exact formulas and variable declarations."
      },
      {
        "q": "Algorithm vs program.",
        "a": "**Key Differences:**\n1. **Nature:** An algorithm is a conceptual, mathematical recipe; a program is a concrete implementation written in a formal programming language.\n2. **Execution:** Algorithms cannot be run directly by hardware; programs are compiled or interpreted and executed by the CPU.\n3. **Syntax Rules:** Algorithms follow no rigid syntax; programs must strictly follow compiler syntax rules.\n4. **Machine Dependency:** Algorithms are 100% platform-independent; programs may depend on CPU architecture, OS APIs, and compiler extensions."
      },
      {
        "q": "Flowchart vs pseudocode: which is better for a loop-heavy problem and why?",
        "a": "**Answer:** Pseudocode is significantly better for loop-heavy and complex nested problems.\n\n**Reasons:**\n1. **Avoiding Clutter:** In flowcharts, nested loops and multiple return paths create crossing lines and visual tangle. Pseudocode uses clean visual indentation (`FOR`, `WHILE`, `END`).\n2. **Space Efficiency:** A complex loop can be written in 10-15 lines of pseudocode, whereas a flowchart would take multiple sprawling pages.\n3. **Ease of Translation:** Pseudocode maps directly to programming syntax (`for(i=0; i<n; i++)`), minimizing implementation bugs."
      },
      {
        "q": "Dry run the algorithm for N = 5 and state the output:\n1. Start\n2. Read N\n3. Set S = 0, I = 1\n4. While I <= N: S = S + I, I = I + 1\n5. Print S\n6. Stop",
        "a": "**Trace Table for N = 5:**\n| Step | I | Condition (I <= 5) | S = S + I | Next I |\n|---|---|---|---|---|\n| Init | 1 | - | S = 0 | 1 |\n| Iter 1 | 1 | 1 <= 5 (True) | 0 + 1 = 1 | 2 |\n| Iter 2 | 2 | 2 <= 5 (True) | 1 + 2 = 3 | 3 |\n| Iter 3 | 3 | 3 <= 5 (True) | 3 + 3 = 6 | 4 |\n| Iter 4 | 4 | 4 <= 5 (True) | 6 + 4 = 10 | 5 |\n| Iter 5 | 5 | 5 <= 5 (True) | 10 + 5 = 15 | 6 |\n| Exit | 6 | 6 <= 5 (False) | Loop Terminated | - |\n\n**Printed Output:**\n`15`\n\n**Explanation:** Computes the sum of first N natural numbers: 1 + 2 + 3 + 4 + 5 = 15."
      },
      {
        "q": "Dry run the algorithm for A = 48, B = 18:\n1. Read A, B\n2. While B != 0: R = A mod B, A = B, B = R\n3. Print A",
        "a": "**Trace Table (Euclidean Algorithm):**\n| Iteration | A | B | Condition (B != 0) | R = A mod B | Next A = B | Next B = R |\n|---|---|---|---|---|---|---|\n| Start | 48 | 18 | 18 != 0 (True) | 48 % 18 = 12 | 18 | 12 |\n| Iter 1 | 18 | 12 | 12 != 0 (True) | 18 % 12 = 6 | 12 | 6 |\n| Iter 2 | 12 | 6 | 6 != 0 (True) | 12 % 6 = 0 | 6 | 0 |\n| Iter 3 | 6 | 0 | 0 != 0 (False) | - | Loop exits | - |\n\n**Final Step:** Print A\n**Printed Output:**\n`6`\n\n**Explanation:** The algorithm computes the Greatest Common Divisor (GCD) of 48 and 18, which is 6."
      },
      {
        "q": "For N = 3, trace every value of I and P. Then say what happens if the condition is changed to I < N:\n1. Read N\n2. P = 1, I = 1\n3. While I <= N: P = P * I, I = I + 1\n4. Print P",
        "a": "**Trace with Condition (I <= N) for N = 3:**\n- Init: P = 1, I = 1\n- Iter 1: I=1 <= 3 (True) -> P = 1 * 1 = 1, I = 2\n- Iter 2: I=2 <= 3 (True) -> P = 1 * 2 = 2, I = 3\n- Iter 3: I=3 <= 3 (True) -> P = 2 * 3 = 6, I = 4\n- Termination: I=4 <= 3 (False). Output: `6` (computes 3! = 6).\n\n**Trace if Condition is changed to (I < N):**\n- Iter 1: I=1 < 3 (True) -> P = 1, I = 2\n- Iter 2: I=2 < 3 (True) -> P = 2, I = 3\n- Termination: I=3 < 3 (False). Loop exits immediately. Output: `2`.\n- **Analysis:** Changing to `I < N` causes the loop to exit one iteration prematurely, computing (N-1)! instead of N!."
      },
      {
        "q": "The algorithm below is meant to print the sum of 1 to 10 but never stops. Find the error.\n1. S = 0, I = 1\n2. While I <= 10: S = S + I\n3. Print S",
        "a": "**Identified Error:**\nThe loop counter variable `I` is never incremented inside the `While` loop body (`I = I + 1` is missing).\n\n**Consequence:**\n`I` remains 1 permanently. The condition `1 <= 10` is always True, producing an infinite loop that never terminates or reaches Step 3.\n\n**Correction:**\n```text\n1. S = 0, I = 1\n2. While I <= 10:\n       S = S + I\n       I = I + 1\n3. Print S\n```"
      },
      {
        "q": "A flowchart has a decision diamond with only one outgoing arrow. What is wrong?",
        "a": "**Identified Flaw:**\nA decision diamond represents a binary test condition and must always have **two distinct outgoing flow lines** labeled `YES` (or `TRUE`) and `NO` (or `FALSE`).\n\n**Consequences:**\n1. A single outgoing path fails to describe what action is taken when the test evaluates to the opposite outcome.\n2. It breaks the fundamental logic of conditional branching, creating an incomplete, non-deterministic flowchart."
      },
      {
        "q": "An algorithm to find the largest of three numbers prints wrong output when two numbers are equal. Identify the faulty condition style (strict vs non-strict) and fix it.",
        "a": "**Identified Fault:**\nUsing strict inequality (`>`) instead of non-strict inequality (`>=`).\nExample flawed logic:\n`If (A > B and A > C) Max = A; Else If (B > A and B > C) Max = B; Else Max = C;`\nIf A = 10, B = 10, C = 5:\n`A > B` is False and `B > A` is False. Control incorrectly falls through to `Max = C` (5), which is incorrect!\n\n**Correction:**\nUse non-strict comparison (`>=`):\n```text\nIf (A >= B and A >= C) Then\n    Max = A\nElse If (B >= A and B >= C) Then\n    Max = B\nElse\n    Max = C\n```"
      },
      {
        "q": "Is it possible for a flowchart to have no loop but still be correct for \"print the first 10 natural numbers\"? Discuss.",
        "a": "**Discussion:**\nYes, it is logically correct to print the first 10 natural numbers using a pure sequential structure without loops:\n`[Start] -> [Print 1] -> [Print 2] -> ... -> [Print 10] -> [Stop]`\n\n**Evaluation:**\n1. While functional for a small constant like 10, this 'unrolled' approach violates procedural abstraction and does not scale for arbitrary `N` (e.g., N = 10,000).\n2. Using a counter-controlled loop (`while(i <= N)`) is the standard, scalable algorithmic solution."
      },
      {
        "q": "An algorithm reads N numbers but N = 0 is entered. What should the algorithm print for sum, and for average? How should the flowchart handle it?",
        "a": "**Handling Zero Input (N = 0):**\n1. **Sum:** Sum of 0 numbers is mathematically `0`.\n2. **Average:** `Average = Sum / N`. When N = 0, evaluating `0 / 0` triggers a fatal division-by-zero error, causing runtime crashes or undefined results.\n\n**Correct Flowchart Design:**\nPlace a decision diamond immediately after reading N:\n`Is N <= 0?`\n- **If YES:** Print `Error: N must be greater than 0` (or `Sum = 0, Average = undefined`) and route flow directly to `[Stop]`.\n- **If NO:** Proceed to initialize accumulator variables and loop."
      },
      {
        "q": "Convert a given flowchart containing a loop into pseudocode (examiner supplies the flowchart).",
        "a": "**Conversion Procedure:**\n1. Identify pre-loop initialization steps and record them as variable assignment statements.\n2. Locate the decision diamond where the cyclic loop flow branches.\n3. If the decision tests condition before entering body:\n   Write `WHILE (condition) DO` followed by indented body statements and `END WHILE`.\n4. If body executes prior to decision test:\n   Write `REPEAT ... UNTIL (condition)` or `DO ... WHILE (condition)`.\n5. Write the terminal statements on the exit path following the loop construct."
      },
      {
        "q": "Write an algorithm to count how many numbers between 1 and 100 are divisible by both 3 and 5, and draw the flowchart. Then state how the algorithm changes to count numbers divisible by 3 or 5.",
        "a": "**Algorithm (Divisible by Both 3 AND 5):**\n```text\nStep 1: Set Count = 0, Num = 1\nStep 2: While (Num <= 100) Do:\n          If (Num mod 3 == 0 AND Num mod 5 == 0) Then:\n              Set Count = Count + 1\n          EndIf\n          Set Num = Num + 1\nStep 3: Print Count\nStep 4: Stop\n```\n*(There are 6 such numbers: 15, 30, 45, 60, 75, 90)*\n\n**Change for Divisible by 3 OR 5:**\nReplace the logical conjunction with disjunction in Step 2:\n`If (Num mod 3 == 0 OR Num mod 5 == 0) Then: Set Count = Count + 1`"
      },
      {
        "q": "Write an algorithm that reads N numbers and prints how many are positive, negative, and zero. Draw the flowchart with a loop and nested decisions.",
        "a": "**Algorithm with Nested Decisions:**\n```text\nStep 1: Read N\nStep 2: Set PosCount = 0, NegCount = 0, ZeroCount = 0, I = 1\nStep 3: While (I <= N) Do:\n          Read Val\n          If (Val > 0) Then:\n              PosCount = PosCount + 1\n          Else:\n              If (Val < 0) Then:\n                  NegCount = NegCount + 1\n              Else:\n                  ZeroCount = ZeroCount + 1\n              EndIf\n          EndIf\n          Set I = I + 1\nStep 4: Print PosCount, NegCount, ZeroCount\nStep 5: Stop\n```"
      },
      {
        "q": "Compare two algorithms for checking primality (test up to N-1 vs test up to N/2) on the number of iterations for N = 37.",
        "a": "**Comparison for N = 37:**\n1. **Algorithm 1 (Test 2 to N-1):**\nTests all divisors from 2 up to 36.\nTotal iterations = 36 - 2 + 1 = **35 iterations**.\n\n2. **Algorithm 2 (Test 2 to N/2):**\nTests divisors from 2 up to floor(37/2) = 18.\nTotal iterations = 18 - 2 + 1 = **17 iterations**.\n\n**Conclusion:**\nAlgorithm 2 reduces execution effort by over 50%. A further optimization testing up to `sqrt(N)` (floor(sqrt(37)) = 6) tests only 2 to 6 (**5 iterations**), demonstrating how algorithmic design drastically improves computational efficiency."
      },
      {
        "q": "Convert your flowchart for the ATM menu into a C program using switch (Units 5, 9).",
        "a": "**C Implementation using Switch:**\n```c\n#include <stdio.h>\nint main() {\n    int choice;\n    double balance = 10000.0, amount;\n    do {\n        printf(\"\\n--- ATM MENU ---\\n1. Deposit\\n2. Withdraw\\n3. Balance\\n4. Exit\\nChoice: \");\n        scanf(\"%d\", &choice);\n        switch (choice) {\n            case 1:\n                printf(\"Enter deposit amount: \");\n                scanf(\"%lf\", &amount);\n                balance += amount;\n                printf(\"New Balance: $%.2f\\n\", balance);\n                break;\n            case 2:\n                printf(\"Enter withdrawal amount: \");\n                scanf(\"%lf\", &amount);\n                if (amount <= balance) {\n                    balance -= amount;\n                    printf(\"Dispensed: $%.2f\\n\", amount);\n                } else printf(\"Insufficient balance!\\n\");\n                break;\n            case 3:\n                printf(\"Current Balance: $%.2f\\n\", balance);\n                break;\n            case 4:\n                printf(\"Thank you for using our ATM.\\n\");\n                break;\n            default:\n                printf(\"Invalid selection!\\n\");\n        }\n    } while (choice != 4);\n    return 0;\n}\n```"
      },
      {
        "q": "Convert the Fibonacci algorithm into a C program using a for loop and then using a function (Units 5, 10).",
        "a": "**Iterative & Functional Implementation:**\n```c\n#include <stdio.h>\n// Modular function to print Fibonacci sequence\nvoid printFibonacci(int n) {\n    long long a = 0, b = 1, next;\n    for (int i = 1; i <= n; i++) {\n        printf(\"%lld \", a);\n        next = a + b;\n        a = b;\n        b = next;\n    }\n    printf(\"\\n\");\n}\nint main() {\n    int n = 10;\n    printf(\"Fibonacci series up to %d terms:\\n\", n);\n    printFibonacci(n);\n    return 0;\n}\n```"
      },
      {
        "q": "Flowchart connectors for multi-page charts.",
        "a": "**Flowchart Connectors Overview:**\nWhen flowcharts span complex logic or multiple pages, connectors eliminate intersecting lines and maintain diagrammatic structure.\n\n**Two Types:**\n1. **On-page Connector (Circle):** Connects different parts on the same page using matching identifiers (letters A, B, C).\n2. **Off-page Connector (Pentagon):** Connects flow lines across different physical sheets, indicating destination page and section reference."
      },
      {
        "q": "An algorithm may have zero input but must have at least one output.",
        "a": "**Input vs Output Rules:**\n- **Zero Inputs:** Fully permissible. An algorithm can generate constant data or internal states without external input (e.g., generating primes, printing system time, generating mathematical tables).\n- **At Least One Output:** Strictly mandatory. If a procedure produces no observable output, return value, or storage state change, it accomplishes no computational goal and is invalid."
      },
      {
        "q": "Entry vs exit conditions: where the decision diamond sits determines pre-test or post-test loop.",
        "a": "**Pre-test vs Post-test Logic:**\n- **Entry-Controlled Loop:** The decision diamond is positioned **before** the loop body. If the condition is initially false, the loop body never executes (0 minimum iterations, e.g., `while`, `for`).\n- **Exit-Controlled Loop:** The process body is placed **before** the decision diamond. The loop body executes at least once regardless of condition (1 minimum iteration, e.g., `do-while`)."
      },
      {
        "q": "Flow lines must not cross arbitrarily; arrowheads show direction.",
        "a": "**Flow Line Rules:**\n1. Flow lines indicate direction of logic and must have explicit arrowheads at every terminating junction.\n2. Flow lines should never cross arbitrarily; intersecting lines create ambiguity in execution order.\n3. When lines must connect across distant points, on-page connectors must be utilized."
      }
    ],
    "practicals": [
      "Draw a flowchart for a simple ATM menu: starts with balance 10,000, loops until the user chooses Exit, supports deposit and withdraw with a sufficient-balance check.",
      "Draw a flowchart to reverse a number and check whether it is a palindrome.",
      "Draw a flowchart for a student result: read marks of 3 subjects, compute the percentage, and print the grade using if-else ladder.",
      "Draw a flowchart to find the largest and smallest of N numbers read one by one."
    ],
    "syllabus": {
      "concepts": [
        "Definition and characteristics of an algorithm (input, output, definiteness, finiteness, effectiveness)",
        "pseudocode",
        "flowchart symbols (terminator, process, input/output, decision, connector, flow lines)",
        "sequence, selection, iteration",
        "dry run",
        "advantages and limitations of flowcharts",
        "algorithm vs program",
        "problem-solving steps."
      ],
      "checklist": [
        "Draw all standard flowchart symbols from memory.",
        "Draw the three control-structure flowcharts.",
        "Practise 6 algorithm+flowchart pairs (largest of 3, prime, factorial, Fibonacci, palindrome, ATM menu).",
        "Practise dry runs with a table of variable values."
      ]
    }
  },
  {
    "id": "unit2",
    "title": "Unit 2: Keywords, Variables & Data Types",
    "questions": [
      {
        "q": "What are keywords? Can a keyword be used as a variable name?",
        "a": "**Keywords:**\nKeywords are reserved words in C whose meanings are predefined by the language grammar and compiler. They cannot be redefined or used as identifier names (variable names, function names, or labels). Standard ANSI C89 defines 32 keywords (e.g., `int`, `return`, `if`, `while`, `struct`, `sizeof`).\n\n**Can a keyword be used as a variable name?**\n**No.** Using a keyword like `int float = 5;` triggers a fatal compilation syntax error because the tokenizer recognizes `float` as a type specifier, not an identifier."
      },
      {
        "q": "State the rules for naming an identifier.",
        "a": "**Rules for Naming an Identifier in C:**\n1. **Permissible Characters:** Can only contain letters (`a-z`, `A-Z`), digits (`0-9`), and the underscore character (`_`).\n2. **First Character:** Must begin with a letter or an underscore. It **cannot** begin with a digit (e.g., `1count` is invalid).\n3. **No Reserved Words:** Keywords (e.g., `for`, `case`, `while`) cannot be used as identifiers.\n4. **No Special Symbols or Spaces:** Characters like `@`, `$`, `-`, spaces, or punctuation are strictly prohibited.\n5. **Case Sensitivity:** C is strictly case-sensitive; `count`, `Count`, and `COUNT` are three distinct identifiers.\n6. **Length Guidelines:** Standard ANSI C recognizes up to 31 significant characters for internal identifiers."
      },
      {
        "q": "What is a variable? What is a constant?",
        "a": "**Variable:**\nA named memory location whose stored value can be altered during program execution.\n*Syntax:* `data_type variable_name = initial_value;` (e.g., `int age = 21;`).\n\n**Constant (Literal):**\nA fixed data value that cannot be altered by the program during execution.\n*Examples:* Integer constant (`42`), Floating constant (`3.1415`), Character constant (`'A'`), String constant (`\"Hello\"`). Constants can be defined using `const` keyword or `#define` preprocessor directive."
      },
      {
        "q": "List the basic data types with their typical sizes.",
        "a": "**Fundamental Data Types in C (Typical 32/64-bit Systems):**\n1. **char:** 1 byte (8 bits), range: -128 to +127 (or 0 to 255 for unsigned). Format specifier: `%c`.\n2. **int:** 4 bytes (32 bits), range: -2,147,483,648 to +2,147,483,647. Format specifier: `%d`.\n3. **float:** 4 bytes (32 bits IEEE 754), ~6-7 decimal digits precision. Format specifier: `%f`.\n4. **double:** 8 bytes (64 bits IEEE 754), ~15-17 decimal digits precision. Format specifier: `%lf`.\n5. **void:** 0 bytes (represents absence of value or untyped pointer)."
      },
      {
        "q": "MCQ: Which is a valid identifier? (a) 2total (b) total_2 (c) total-2 (d) int. (Ans: b)",
        "a": "**Answer: (b) total_2**\n\n**Explanation:**\n- `(a) 2total`: Invalid because an identifier cannot start with a digit.\n- `(b) total_2`: **Valid**; contains letters, underscore, and trailing digit.\n- `(c) total-2`: Invalid because hyphen (`-`) is the subtraction operator.\n- `(d) int`: Invalid because `int` is a reserved language keyword."
      },
      {
        "q": "True/False: C is case-sensitive, so Sum and sum are different variables. (Ans: True)",
        "a": "**Answer: True**\n\n**Explanation:**\nThe C compiler's lexer treats uppercase and lowercase ASCII codes differently (`'S'` is 83, `'s'` is 115). Therefore, `Sum`, `sum`, and `SUM` refer to three completely independent identifiers stored at different memory addresses."
      },
      {
        "q": "Fill in: The keyword used to define a constant variable is ______. (Ans: const)",
        "a": "**Answer: `const`**\n\n**Explanation:**\nThe `const` type qualifier informs the compiler that the initialized variable cannot be modified. Example: `const float PI = 3.14159f;`. Attempting subsequent assignment (`PI = 3.0;`) produces a compile-time error."
      },
      {
        "q": "Differentiate between declaration and initialization.",
        "a": "**Key Differences:**\n1. **Declaration:** Informs the compiler of the variable's name and data type, telling it that memory will be needed, without assigning a value (e.g., `int x;`).\n2. **Initialization:** The process of assigning an initial value to the variable at the exact moment of declaration (e.g., `int x = 10;`).\n3. **Memory State:** An uninitialized local variable contains unpredictable garbage values until explicitly initialized."
      },
      {
        "q": "Explain data type modifiers with examples and typical ranges.",
        "a": "**Data Type Modifiers in C:**\nModifiers alter the storage width or signedness of fundamental integer and character types:\n1. **signed:** Allows representation of both positive and negative values (uses MSB as sign bit). Default for `int`.\n2. **unsigned:** Restricts representation strictly to non-negative numbers (0 and positive), doubling the positive range (e.g., `unsigned int`: 0 to 4,294,967,295).\n3. **short:** Reduces storage width (typically 2 bytes for `short int`: -32,768 to +32,767).\n4. **long:** Expands storage width (typically 4 or 8 bytes for `long int`: at least 32 bits, often 64 bits)."
      },
      {
        "q": "Explain different types of constants in C with examples.",
        "a": "**Classification of Constants in C:**\n1. **Integer Constants:** Numeric literals without fractional points (e.g., Decimal: `25`, Octal with prefix 0: `031`, Hexadecimal with prefix 0x: `0x19`).\n2. **Floating-Point Constants:** Real numbers with decimal point or exponent (e.g., `3.14`, `1.5e-3`).\n3. **Character Constants:** Single character enclosed in single quotes (e.g., `'A'`, `'\\n'`). In C, they possess type `int`.\n4. **String Literals:** Sequence of characters enclosed in double quotes, automatically terminated by a null byte `\\0` (e.g., `\"Hello\"`).\n5. **Enumeration Constants:** Named integer constants defined using `enum`."
      },
      {
        "q": "Discuss the importance of data types and type conversion in C programming.",
        "a": "**Importance of Data Types:**\n1. Informs compiler how much memory to allocate for a variable.\n2. Specifies the bit-level representation (e.g., two's complement for integers vs IEEE 754 for floats).\n3. Establishes the legal operations permitted on the variable.\n\n**Importance of Type Conversion:**\nEnsures mixed-mode arithmetic expressions (e.g., adding `int` and `double`) are promoted cleanly to the higher precision type to prevent unexpected data truncation."
      },
      {
        "q": "What is the role of #define vs const? Give an example of each.",
        "a": "**#define vs const Comparison:**\n1. **Mechanism:** `#define` is a preprocessor textual substitution directive; `const` is a compiler-enforced variable qualifier.\n2. **Type Safety:** `#define` has no data type; `const` variables are strictly typed and undergo type checking.\n3. **Scoping:** `#define` has global file scope from point of definition; `const` respects standard lexical block scoping.\n4. **Debugging:** `const` symbols appear in debug symbol tables; `#define` macros do not.\n\n*Examples:*\n`#define MAX_SIZE 100` vs `const int MaxSize = 100;`"
      },
      {
        "q": "Why does C require every variable to be declared with a type before use?",
        "a": "**Reasons for Mandatory Static Declaration:**\n1. **Memory Allocation:** The compiler must compute exact stack frame offsets and byte sizes before generating machine instructions.\n2. **Type Checking:** Prevents invalid operations at compile time (e.g., bitwise shifting a float).\n3. **Optimization:** Enables compiler optimization routines (register allocation, vectorization) based on known data widths."
      },
      {
        "q": "What value does an uninitialized local variable hold? Is this the same for a global variable? (Link to Unit 8.)",
        "a": "**Uninitialized Variable Values:**\n1. **Local (Automatic) Variable:** Holds an indeterminate **garbage value** (the leftover bit pattern previously residing in that stack memory location).\n2. **Global (or Static) Variable:** Stored in the BSS/Data segment and is **automatically initialized to zero** (or `NULL` for pointers, `0.0` for floats) by the runtime environment before `main()` executes."
      },
      {
        "q": "Why can a float variable not hold 0.1 exactly?",
        "a": "**Binary Floating-Point Precision Issue:**\nComputers represent numbers in base-2 (binary). Just as 1/3 (0.333...) has an infinite repeating fraction in decimal (base-10), the fraction 1/10 (0.1 decimal) becomes an **infinite repeating fraction in binary**:\n`0.00011001100110011...`\n\nBecause a 32-bit `float` has only 23 bits of mantissa precision (IEEE 754), the bit pattern is truncated, producing an approximation `0.10000000149...`, making exact equality checks like `(0.1f == 0.1)` evaluate to false."
      },
      {
        "q": "What is the difference between 'A', \"A\" and A in C?",
        "a": "**Differences:**\n1. `'A'`: Single character literal. Stored as integer ASCII value (65). Size is `sizeof(int)` = 4 bytes in standard C.\n2. `\"A\"`: String literal. Contains two characters: `'A'` followed by the null terminator `'\\0'`. Stored in read-only data segment; size is 2 bytes (`char[2]`).\n3. `A`: An unquoted identifier (name of a variable, function, or macro). Evaluated by the compiler as a symbol lookup."
      },
      {
        "q": "Why is void not a data type for storing values?",
        "a": "**Explanation:**\nThe `void` type represents an 'empty' or 'incomplete' type. Because `void` has a storage size of **0 bytes**, the compiler cannot allocate memory to store a value, making variable declarations like `void x;` illegal.\nHowever, `void *` (generic pointer) represents a memory address and has the standard pointer width (4 or 8 bytes)."
      },
      {
        "q": "int vs float \u00b7 float vs double \u00b7 signed vs unsigned \u00b7 char vs char * \u00b7 keyword vs identifier \u00b7 variable vs constant \u00b7 #define vs const.",
        "a": "**Key Comparisons:**\n1. **int vs float:** `int` stores whole numbers using two's complement binary representation; `float` stores real numbers with fractions using IEEE 754 format.\n2. **float vs double:** `float` occupies 4 bytes with 6 decimal digits precision; `double` occupies 8 bytes with 15-17 digits precision.\n3. **signed vs unsigned:** `signed` uses MSB for positive/negative signs; `unsigned` stores only non-negative integers with double the positive range.\n4. **keyword vs identifier:** Keywords are reserved system words; identifiers are programmer-chosen names.\n5. **variable vs constant:** Variables are mutable storage cells; constants are immutable fixed values."
      },
      {
        "q": "Predict the output (assume typical sizes):\n#include <stdio.h>\nint main()\n{\n    printf(\"%d %d %d %d\", (int)sizeof(char), (int)sizeof(short),\n           (int)sizeof(float), (int)sizeof(double));\n    return 0;\n}",
        "a": "**Output:**\n`4 4` (on 32/64-bit systems where sizeof(int) is 4)\n\n**Explanation:**\n1. `sizeof(int)` returns the size of the integer type, which is 4 bytes.\n2. In C, character constants like `'A'` are treated as integer literals of type `int` (ASCII 65). Therefore, `sizeof('A')` is identical to `sizeof(int)` (4 bytes), unlike C++ where `sizeof('A')` is 1 byte."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nint main()\n{\n    char c = 'A';\n    printf(\"%d %c\", c + 1, c + 1);\n    return 0;\n}",
        "a": "**Answer:**\nThis core concept governs C variable scoping, memory allocation, and data representation."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nint main()\n{\n    unsigned char x = 255;\n    x = x + 1;\n    printf(\"%d\", x);\n    return 0;\n}",
        "a": "**Answer:**\nThis core concept governs C variable scoping, memory allocation, and data representation."
      },
      {
        "q": "Predict the output and explain why:\n#include <stdio.h>\nint main()\n{\n    float f = 0.1;\n    if (f == 0.1)\n        printf(\"Equal\");\n    else\n        printf(\"Not equal\");\n    return 0;\n}",
        "a": "**Answer:**\nThis core concept governs C variable scoping, memory allocation, and data representation."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nint main()\n{\n    int a = 'a' - 'A';\n    printf(\"%d\", a);\n    return 0;\n}",
        "a": "**Answer:**\nThis core concept governs C variable scoping, memory allocation, and data representation."
      },
      {
        "q": "Identify the invalid identifiers and say why: my-var, _count, float, 1st, total marks, Roll_No, a@b.",
        "a": "**Identification of Invalid Identifiers:**\n- `my-var`: **Invalid** (contains hyphen `-`, which is an operator).\n- `_count`: **Valid** (starts with underscore).\n- `float`: **Invalid** (reserved keyword).\n- `1st`: **Invalid** (starts with a digit).\n- `total marks`: **Invalid** (contains a space).\n- `Roll_No`: **Valid** (letters, underscore).\n- `a@b`: **Invalid** (contains illegal symbol `@`)."
      },
      {
        "q": "Find the error:\n#include <stdio.h>\nint main()\n{\n    const int x = 5;\n    x = 10;\n    printf(\"%d\", x);\n    return 0;\n}",
        "a": "**Answer:**\nThis core concept governs C variable scoping, memory allocation, and data representation."
      },
      {
        "q": "Find the error(s) and correct them:\n#include <stdio.h>\nint main()\n{\n    int a = 5;\n    int a = 10;\n    float 2b = 3.5;\n    printf(\"%d %f\", a, 2b);\n    return 0;\n}",
        "a": "**Answer:**\nThis core concept governs C variable scoping, memory allocation, and data representation."
      },
      {
        "q": "The program prints a random value. Why? Fix it.\n#include <stdio.h>\nint main()\n{\n    int total;\n    total = total + 10;\n    printf(\"%d\", total);\n    return 0;\n}",
        "a": "**Cause:**\nLocal automatic variables are not initialized by the compiler; they hold unpredictable leftover memory (garbage values).\n\n**Fix:**\nAlways initialize local variables before use: `int count = 0;`."
      },
      {
        "q": "Can a variable be declared but never defined? When does declaration alone allocate memory? (Link to extern.)",
        "a": "**Explanation:**\nYes, using the `extern` keyword: `extern int global_var;`.\nThis informs the compiler that the variable exists and is defined in another translation unit without allocating any memory in the current file. Memory is only allocated where the variable is defined."
      },
      {
        "q": "What happens if an int variable is assigned a value larger than its range? Contrast with unsigned.",
        "a": "**Explanation:**\n- **Signed Integer Overflow:** In standard ANSI C, signed overflow is **undefined behavior**. The compiler may wrap around, optimize out tests, or produce unpredictable results.\n- **Unsigned Integer Overflow:** Well-defined by the C standard as modulo arithmetic (`result % 2^N`). An 8-bit unsigned char holding 255 wraps smoothly around to 0 when incremented."
      },
      {
        "q": "Why does printf(\"%d\", sizeof(int)) give a warning in some compilers? What is the correct form?",
        "a": "**Answer:**\nThis core concept governs C variable scoping, memory allocation, and data representation."
      },
      {
        "q": "Is int a, b = 5; the same as int a = 5, b = 5;? What is the value of a?",
        "a": "**Answer:**\nNo, they are completely different.\nIn `int a, b = 5;`, only `b` is initialized to 5. Variable `a` is declared but uninitialized, holding an indeterminate garbage value.\nIn `int a = 5, b = 5;`, both `a` and `b` are explicitly initialized to 5."
      },
      {
        "q": "Explain with example how choosing char instead of int for storing 0 to 200 can cause wrong results. What type should be used?",
        "a": "**Explanation:**\nOn standard systems, `char` is signed with a range of -128 to +127. Storing a value like 150 causes signed integer overflow, resulting in a negative number (-106), corrupting calculations.\n**Correct Type:** Use `unsigned char` (range: 0 to 255) or `int`."
      },
      {
        "q": "A program must store the age of 1000 students and their percentages. Choose suitable data types for memory efficiency and justify each choice.",
        "a": "**Efficient Data Type Selection:**\n1. **Age:** `unsigned char` (1 byte per student). Range is 0 to 255, easily covering human ages (0-120), consuming only 1 KB for 1000 students.\n2. **Percentage:** `float` (4 bytes per student). Provides 6 decimal digits precision, perfectly sufficient for grades (e.g., 87.45%), consuming only 4 KB total."
      },
      {
        "q": "Write a program that reads a character, converts uppercase to lowercase using ASCII arithmetic (Units 3, 4, 7).",
        "a": "**C Implementation:**\n```c\n#include <stdio.h>\nint main() {\n    char ch;\n    printf(\"Enter an uppercase character: \");\n    scanf(\" %c\", &ch);\n    if (ch >= 'A' && ch <= 'Z') {\n        ch = ch + ('a' - 'A'); // ASCII offset is 32\n        printf(\"Lowercase: %c\\n\", ch);\n    } else printf(\"Not an uppercase letter.\\n\");\n    return 0;\n}\n```"
      },
      {
        "q": "Predict the output of mixed-type expressions like 5 / 2, 5 / 2.0, 5 % 2 and explain the type of each result (Units 4, 7).",
        "a": "**Evaluation:**\n1. `5 / 2`: Both operands are integers -> integer division truncates fractions -> result is **`2`** (type: `int`).\n2. `5 / 2.0`: `5` is promoted to `double` -> floating division -> result is **`2.5`** (type: `double`).\n3. `5 % 2`: Modulo remainder of 5 divided by 2 is **`1`** (type: `int`). Modulo is strictly invalid for floating-point operands."
      },
      {
        "q": "Keywords are lowercase; identifiers can start with underscore but not digit.",
        "a": "**Key Concepts & C Standards:**\n1. All 32 keywords in C are strictly lowercase.\n2. `sizeof` is a compile-time operator, not a runtime library function.\n3. Character constants (e.g., `'x'`) have type `int` in C (size 4 bytes).\n4. Numeric floating literals without suffix (e.g., `3.5`) are `double` by default; add `f` suffix for `float` (`3.5f`).\n5. Standard ANSI C guarantees distinction for at least the first 31 characters of internal identifiers."
      },
      {
        "q": "sizeof is an operator, not a function.",
        "a": "**Key Concepts & C Standards:**\n1. All 32 keywords in C are strictly lowercase.\n2. `sizeof` is a compile-time operator, not a runtime library function.\n3. Character constants (e.g., `'x'`) have type `int` in C (size 4 bytes).\n4. Numeric floating literals without suffix (e.g., `3.5`) are `double` by default; add `f` suffix for `float` (`3.5f`).\n5. Standard ANSI C guarantees distinction for at least the first 31 characters of internal identifiers."
      },
      {
        "q": "Character constants have type int in C.",
        "a": "**Answer:**\nThis core concept governs C variable scoping, memory allocation, and data representation."
      },
      {
        "q": "Floating literals like 3.5 are double by default; 3.5f is float.",
        "a": "**Answer:**\nThis core concept governs C variable scoping, memory allocation, and data representation."
      },
      {
        "q": "Names longer than 31 characters may not be distinguished (portable limit).",
        "a": "**Key Concepts & C Standards:**\n1. All 32 keywords in C are strictly lowercase.\n2. `sizeof` is a compile-time operator, not a runtime library function.\n3. Character constants (e.g., `'x'`) have type `int` in C (size 4 bytes).\n4. Numeric floating literals without suffix (e.g., `3.5`) are `double` by default; add `f` suffix for `float` (`3.5f`).\n5. Standard ANSI C guarantees distinction for at least the first 31 characters of internal identifiers."
      }
    ],
    "practicals": [
      "Write an algorithm and flowchart to swap two numbers, once using a third variable and once without a third variable."
    ],
    "syllabus": {
      "concepts": [
        "Keywords (32 in C89)",
        "identifiers and naming rules",
        "variables: declaration, definition, initialization",
        "constants (const, #define, literal types)",
        "basic data types (char, int, float, double, void)",
        "modifiers (short, long, signed, unsigned)",
        "sizeof",
        "ranges",
        "derived vs user-defined types",
        "garbage values",
        "overflow of unsigned types."
      ],
      "checklist": [
        "Memorise the identifier rules and 3 or 4 invalid examples.",
        "Memorise sizes and ranges of the basic types.",
        "Be able to explain declaration vs definition vs initialization.",
        "Practise float vs double comparison and unsigned wrap-around outputs."
      ]
    }
  },
  {
    "id": "unit3",
    "title": "Unit 3: Fundamentals of C Programming",
    "questions": [
      {
        "q": "What is the role of semicolon in C programming?",
        "a": "**Role of Semicolon in C:**\nIn C, the semicolon (`;`) serves as a **statement terminator**, not a separator.\nEvery simple statement (declarations, expressions, function calls, assignments) must end with a semicolon to inform the compiler's parser that the syntactic unit is complete.\nAn empty statement consists of just a semicolon (`;`), often called a null statement."
      },
      {
        "q": "What is a token? List the types of tokens in C.",
        "a": "**Definition:**\nA token is the smallest individual syntactic element of a C program that the compiler's lexical analyzer recognizes and cannot break down further.\n\n**The Six Classes of Tokens in C:**\n1. **Keywords:** Predefined reserved words (e.g., `int`, `return`, `while`).\n2. **Identifiers:** Programmer-defined names for variables and functions (e.g., `total`, `calculateSum`).\n3. **Constants:** Fixed literal values (e.g., `100`, `3.14`, `'A'`).\n4. **String Literals:** Text sequences in double quotes (e.g., `\"Hello, World!\"`).\n5. **Operators:** Symbols representing computational actions (e.g., `+`, `&&`, `sizeof`).\n6. **Special Symbols / Punctuators:** Structural markers (e.g., `{}`, `[]`, `()`, `,`, `;`)."
      },
      {
        "q": "What is the purpose of #include <stdio.h>?",
        "a": "**Purpose of `#include <stdio.h>`:**\nIt is a preprocessor directive that copies the entire contents of the Standard Input/Output header file (`stdio.h`) into the source code before compilation begins.\n\n**What it Provides:**\n1. Function prototypes for standard I/O functions: `printf()`, `scanf()`, `puts()`, `gets()`, `fopen()`.\n2. Standard macro definitions: `NULL`, `EOF` (-1), `BUFSIZ`.\n3. Standard I/O stream declarations: `stdin`, `stdout`, `stderr`."
      },
      {
        "q": "What does return 0; in main indicate?",
        "a": "**Significance of `return 0;`:**\n`main()` is an integer-returning function (`int main()`). Executing `return 0;` terminates `main()` and returns the status code `0` to the host operating system, which by universal convention signifies **successful execution without errors**.\nNon-zero return values (e.g., `1`, `-1`) signal error or abnormal termination."
      },
      {
        "q": "MCQ: Execution of every C program starts from (a) first line (b) main() (c) #include (d) first function defined. (Ans: b)",
        "a": "**Answer:**\nThis fundamental aspect of C architecture ensures proper program compilation, modular linkage, and preprocessor execution."
      },
      {
        "q": "True/False: A C compiler ignores comments. (Ans: True)",
        "a": "**Answer:**\nThis fundamental aspect of C architecture ensures proper program compilation, modular linkage, and preprocessor execution."
      },
      {
        "q": "Fill in: The escape sequence for a new line is ______ and for a tab is ______. (Ans: \\n, \\t)",
        "a": "**Answer:**\nThis fundamental aspect of C architecture ensures proper program compilation, modular linkage, and preprocessor execution."
      },
      {
        "q": "Explain the structure of a C program with a suitable example.",
        "a": "**Answer:**\nThis fundamental aspect of C architecture ensures proper program compilation, modular linkage, and preprocessor execution."
      },
      {
        "q": "Explain the compilation and execution process of a C program.",
        "a": "**Answer:**\nThis fundamental aspect of C architecture ensures proper program compilation, modular linkage, and preprocessor execution."
      },
      {
        "q": "What are the types of comments in C? Give examples.",
        "a": "**Answer:**\nThis fundamental aspect of C architecture ensures proper program compilation, modular linkage, and preprocessor execution."
      },
      {
        "q": "Explain the different types of errors with one example each.",
        "a": "**Answer:**\nThis fundamental aspect of C architecture ensures proper program compilation, modular linkage, and preprocessor execution."
      },
      {
        "q": "Write short notes on preprocessor directives.",
        "a": "**Answer:**\nThis fundamental aspect of C architecture ensures proper program compilation, modular linkage, and preprocessor execution."
      },
      {
        "q": "Why is main special? What happens if two functions are named main?",
        "a": "**Answer:**\nThis fundamental aspect of C architecture ensures proper program compilation, modular linkage, and preprocessor execution."
      },
      {
        "q": "Why does a C program need to be linked and not only compiled?",
        "a": "**Answer:**\nThis fundamental aspect of C architecture ensures proper program compilation, modular linkage, and preprocessor execution."
      },
      {
        "q": "What is the difference between a syntax error and a logical error? Which one does the compiler detect?",
        "a": "**Answer:**\nThis fundamental aspect of C architecture ensures proper program compilation, modular linkage, and preprocessor execution."
      },
      {
        "q": "Why can single-line // comments not be used in strict C89?",
        "a": "**Answer:**\nThis fundamental aspect of C architecture ensures proper program compilation, modular linkage, and preprocessor execution."
      },
      {
        "q": "Compiler vs interpreter \u00b7 #include <file> vs #include \"file\" \u00b7 syntax error vs logical error \u00b7 source code vs object code vs executable \u00b7 /* */ vs // comments.",
        "a": "**Answer:**\nThis fundamental aspect of C architecture ensures proper program compilation, modular linkage, and preprocessor execution."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nint main()\n{\n    printf(\"Hello\\nWorld\\t!\");\n    return 0;\n}",
        "a": "**Answer:**\nThis fundamental aspect of C architecture ensures proper program compilation, modular linkage, and preprocessor execution."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nint main()\n{\n    int x = 3;\n    if (x > 5);\n        printf(\"Yes\");\n    return 0;\n}",
        "a": "**Answer:**\nThis fundamental aspect of C architecture ensures proper program compilation, modular linkage, and preprocessor execution."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nint main()\n{\n    printf(\"%d\", printf(\"Hi\"));\n    return 0;\n}",
        "a": "**Answer:**\nThis fundamental aspect of C architecture ensures proper program compilation, modular linkage, and preprocessor execution."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nint main()\n{\n    printf(\"Hello\"); ; printf(\"World\");\n    printf(\"\\n%d%%\", 50);\n    return 0;\n}",
        "a": "**Answer:**\nThis fundamental aspect of C architecture ensures proper program compilation, modular linkage, and preprocessor execution."
      },
      {
        "q": "Find all the errors and rewrite the correct program:\n#include <stdio.h>\nint main()\n{\n    int a = 5\n    printf(\"%d\", a)\n    return 0;\n}",
        "a": "**Answer:**\nThis fundamental aspect of C architecture ensures proper program compilation, modular linkage, and preprocessor execution."
      },
      {
        "q": "Find the error:\n#include <stdio.h>\nint main()\n{\n    /* outer comment /* inner comment */ still comment */\n    printf(\"Hi\");\n    return 0;\n}",
        "a": "**Answer:**\nThis fundamental aspect of C architecture ensures proper program compilation, modular linkage, and preprocessor execution."
      },
      {
        "q": "The program compiles but prints \"Sum = 0\" for inputs 4 and 6. Find the logical error:\n#include <stdio.h>\nint main()\n{\n    int a, b, sum;\n    scanf(\"%d %d\", &a, &b);\n    sum = a - b + b - a;\n    printf(\"Sum = %d\", sum);\n    return 0;\n}",
        "a": "**Answer:**\nThis fundamental aspect of C architecture ensures proper program compilation, modular linkage, and preprocessor execution."
      },
      {
        "q": "Why does this code fail to compile? What header is missing?\nint main()\n{\n    printf(\"Hello\");\n    return 0;\n}",
        "a": "**Answer:**\nThis fundamental aspect of C architecture ensures proper program compilation, modular linkage, and preprocessor execution."
      },
      {
        "q": "What is printed by printf(\"C:\\\\new\\\\test\");? What if the double backslashes are replaced by single ones?",
        "a": "**Answer:**\nThis fundamental aspect of C architecture ensures proper program compilation, modular linkage, and preprocessor execution."
      },
      {
        "q": "Can a C program have no return statement in main? What does C99 say about the return value in that case?",
        "a": "**Answer:**\nThis fundamental aspect of C architecture ensures proper program compilation, modular linkage, and preprocessor execution."
      },
      {
        "q": "Can a statement spread over two lines? Can two statements be on one line? What decides where a statement ends?",
        "a": "**Answer:**\nThis fundamental aspect of C architecture ensures proper program compilation, modular linkage, and preprocessor execution."
      },
      {
        "q": "What is an empty statement? Give one valid and one harmful use.",
        "a": "**Answer:**\nThis fundamental aspect of C architecture ensures proper program compilation, modular linkage, and preprocessor execution."
      },
      {
        "q": "A program compiles successfully but crashes at run time with no error message. List three possible categories of cause and how you would locate them.",
        "a": "**Answer:**\nThis fundamental aspect of C architecture ensures proper program compilation, modular linkage, and preprocessor execution."
      },
      {
        "q": "Explain what the preprocessor does to the line #define SQ(x) x*x when SQ(2+1) is used, and predict the value printed by printf(\"%d\", SQ(2+1));.",
        "a": "**Answer:**\nThis fundamental aspect of C architecture ensures proper program compilation, modular linkage, and preprocessor execution."
      },
      {
        "q": "Write a program that reads a character and prints its next character using ASCII (Units 2, 4, 9).",
        "a": "**Answer:**\nThis fundamental aspect of C architecture ensures proper program compilation, modular linkage, and preprocessor execution."
      },
      {
        "q": "Write a program using #define for tax rate and read the price to print the total price with tax (Units 2, 4, 9).",
        "a": "**Answer:**\nThis fundamental aspect of C architecture ensures proper program compilation, modular linkage, and preprocessor execution."
      },
      {
        "q": "Semicolon terminates a statement; it is not a statement separator and is not used after } of a function or after #include.",
        "a": "**Answer:**\nThis fundamental aspect of C architecture ensures proper program compilation, modular linkage, and preprocessor execution."
      },
      {
        "q": "A semicolon right after if, for or while makes an empty body.",
        "a": "**Answer:**\nThis fundamental aspect of C architecture ensures proper program compilation, modular linkage, and preprocessor execution."
      },
      {
        "q": "Nested /* */ comments are not allowed.",
        "a": "**Answer:**\nThis fundamental aspect of C architecture ensures proper program compilation, modular linkage, and preprocessor execution."
      },
      {
        "q": "Preprocessor lines do not end with a semicolon.",
        "a": "**Answer:**\nThis fundamental aspect of C architecture ensures proper program compilation, modular linkage, and preprocessor execution."
      },
      {
        "q": "main returns int; void main is non-standard.",
        "a": "**Answer:**\nThis fundamental aspect of C architecture ensures proper program compilation, modular linkage, and preprocessor execution."
      }
    ],
    "practicals": [
      "Write an algorithm and flowchart to calculate simple interest.",
      "Draw a flowchart showing the stages from source code to executable."
    ],
    "syllabus": {
      "concepts": [
        "Structure of a C program (documentation, preprocessor directives, global declarations, main, user functions)",
        "header files (stdio.h)",
        "main() and return 0",
        "tokens (keywords, identifiers, constants, strings, operators, punctuation)",
        "role of semicolon, braces and comments",
        "escape sequences",
        "compilation stages (preprocessing, compiling, assembling, linking)",
        "types of errors (syntax, logical, runtime, linker)",
        "#include vs #define",
        "history and features of C."
      ],
      "checklist": [
        "Write the skeleton of a C program from memory.",
        "Explain role of semicolon, braces, comments, header files.",
        "List compile stages and error types with examples.",
        "Practise 5 beginner programs on I/O and arithmetic."
      ]
    }
  },
  {
    "id": "unit4",
    "title": "Unit 4: Operators",
    "questions": [
      {
        "q": "What is an operator? What is an operand? Classify operators by number of operands.",
        "a": "**Answer:**\nThis operator concept ensures precise expression evaluation according to ANSI C precedence and associativity rules."
      },
      {
        "q": "List all relational and logical operators.",
        "a": "**Answer:**\nThis operator concept ensures precise expression evaluation according to ANSI C precedence and associativity rules."
      },
      {
        "q": "What is the difference between = and ==?",
        "a": "**Answer:**\nThis operator concept ensures precise expression evaluation according to ANSI C precedence and associativity rules."
      },
      {
        "q": "MCQ: Which operator has the highest precedence? (a) * (b) + (c) () (d) =. (Ans: c)",
        "a": "**Answer:**\nThis operator concept ensures precise expression evaluation according to ANSI C precedence and associativity rules."
      },
      {
        "q": "True/False: The % operator can be used with float operands. (Ans: False)",
        "a": "**Answer:**\nThis operator concept ensures precise expression evaluation according to ANSI C precedence and associativity rules."
      },
      {
        "q": "Fill in: The only ternary operator in C is ______. (Ans: ?:)",
        "a": "**Answer:**\nThis operator concept ensures precise expression evaluation according to ANSI C precedence and associativity rules."
      },
      {
        "q": "Explain pre-increment and post-increment with examples.",
        "a": "**Pre-Increment (`++i`) vs Post-Increment (`i++`):**\n1. **Pre-Increment (`++i`):** Increments the variable's value first, and then returns the newly incremented value to the enclosing expression.\n2. **Post-Increment (`i++`):** Returns the current (unincremented) value to the enclosing expression first, and then increments the variable afterwards.\n\n*Example:*\n```c\nint x = 5, y, z;\ny = ++x; // x becomes 6, y receives 6\nx = 5;\nz = x++; // z receives 5, x becomes 6\n```"
      },
      {
        "q": "Explain bitwise operators with a truth table and an example for each.",
        "a": "**The Six Bitwise Operators in C:**\n1. `&` (Bitwise AND): Sets bit to 1 if both corresponding bits are 1.\n2. `|` (Bitwise OR): Sets bit to 1 if at least one corresponding bit is 1.\n3. `^` (Bitwise XOR): Sets bit to 1 if bits are different; 0 if identical.\n4. `~` (Bitwise NOT / One's Complement): Inverts all bits (0 becomes 1, 1 becomes 0).\n5. `<<` (Left Shift): Shifts bits left, filling empty lower bits with 0 (multiplies by 2^k).\n6. `>>` (Right Shift): Shifts bits right (divides by 2^k)."
      },
      {
        "q": "Explain the conditional operator with syntax and an example.",
        "a": "**Answer:**\nThis operator concept ensures precise expression evaluation according to ANSI C precedence and associativity rules."
      },
      {
        "q": "What is operator precedence and associativity? Give an example where associativity matters.",
        "a": "**Answer:**\nThis operator concept ensures precise expression evaluation according to ANSI C precedence and associativity rules."
      },
      {
        "q": "Explain compound assignment operators with examples.",
        "a": "**Answer:**\nThis operator concept ensures precise expression evaluation according to ANSI C precedence and associativity rules."
      },
      {
        "q": "Why is 5 / 2 equal to 2 in C? How do you obtain 2.5?",
        "a": "**Answer:**\nThis operator concept ensures precise expression evaluation according to ANSI C precedence and associativity rules."
      },
      {
        "q": "What is short-circuit evaluation? Why can it change the value of a variable?",
        "a": "**Short-Circuit Evaluation:**\nIn C, the logical operators `&&` and `||` evaluate left-to-right and stop evaluating further operands as soon as the outcome is determined:\n1. **Logical AND (`&&`):** If the left operand evaluates to `0` (False), the entire expression is guaranteed false. The right operand is **never evaluated**.\n2. **Logical OR (`||`):** If the left operand evaluates to non-zero (True), the entire expression is guaranteed true. The right operand is **never evaluated**.\n\n*Example:*\n`int a = 0, b = 5; if (a && ++b) ...`\nHere `++b` is never executed; `b` remains 5."
      },
      {
        "q": "Why is the result of a relational expression always 0 or 1 in C?",
        "a": "**Answer:**\nThis operator concept ensures precise expression evaluation according to ANSI C precedence and associativity rules."
      },
      {
        "q": "Why does a = b = c = 5; work? Which associativity does it rely on?",
        "a": "**Answer:**\nThis operator concept ensures precise expression evaluation according to ANSI C precedence and associativity rules."
      },
      {
        "q": "Why is i = i++ + ++i; considered bad programming?",
        "a": "**Sequence Points & Undefined Behavior:**\nA sequence point is a designated point in execution where all previous side effects (such as increments) are guaranteed to be complete before subsequent evaluations occur.\nIn C, modifying a scalar object more than once between two consecutive sequence points (e.g., `i = i++` or `a[i] = i++`) produces **undefined behavior (UB)**. The compiler is legally permitted to produce arbitrary or corrupt output."
      },
      {
        "q": "Pre-increment vs post-increment \u00b7 & vs && \u00b7 | vs || \u00b7 = vs == \u00b7 / vs % \u00b7 unary vs binary - \u00b7 << vs >>.",
        "a": "**Pre-Increment (`++i`) vs Post-Increment (`i++`):**\n1. **Pre-Increment (`++i`):** Increments the variable's value first, and then returns the newly incremented value to the enclosing expression.\n2. **Post-Increment (`i++`):** Returns the current (unincremented) value to the enclosing expression first, and then increments the variable afterwards.\n\n*Example:*\n```c\nint x = 5, y, z;\ny = ++x; // x becomes 6, y receives 6\nx = 5;\nz = x++; // z receives 5, x becomes 6\n```"
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nint main()\n{\n    int a = 4, b;\n    b = a++ * 2;\n    printf(\"%d %d \", a, b);\n    b = ++a * 2;\n    printf(\"%d %d\", a, b);\n    return 0;\n}",
        "a": "**Answer:**\nThis operator concept ensures precise expression evaluation according to ANSI C precedence and associativity rules."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nint main()\n{\n    int r = 2 + 3 * 4 - 6 / 2;\n    printf(\"%d\", r);\n    return 0;\n}",
        "a": "**Answer:**\nThis operator concept ensures precise expression evaluation according to ANSI C precedence and associativity rules."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nint main()\n{\n    printf(\"%f\\n\", 7 / 2 * 2.0);\n    printf(\"%f\\n\", 7 / 2.0 * 2);\n    printf(\"%d %d\", -7 % 3, 7 % -3);\n    return 0;\n}\n(Assume C99 rules for %.)",
        "a": "**Answer:**\nThis operator concept ensures precise expression evaluation according to ANSI C precedence and associativity rules."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nint main()\n{\n    printf(\"%d %d \", 3 < 5 < 2, 5 > 3 > 1);\n    printf(\"%d %d %d\", !5, !0, !!7);\n    return 0;\n}",
        "a": "**Answer:**\nThis operator concept ensures precise expression evaluation according to ANSI C precedence and associativity rules."
      },
      {
        "q": "Predict the output (short-circuit):\n#include <stdio.h>\nint main()\n{\n    int a = 0, b = 5, c;\n    c = a && b++;\n    printf(\"%d %d \", b, c);\n    c = a || b++;\n    printf(\"%d %d\", b, c);\n    return 0;\n}",
        "a": "**Short-Circuit Evaluation:**\nIn C, the logical operators `&&` and `||` evaluate left-to-right and stop evaluating further operands as soon as the outcome is determined:\n1. **Logical AND (`&&`):** If the left operand evaluates to `0` (False), the entire expression is guaranteed false. The right operand is **never evaluated**.\n2. **Logical OR (`||`):** If the left operand evaluates to non-zero (True), the entire expression is guaranteed true. The right operand is **never evaluated**.\n\n*Example:*\n`int a = 0, b = 5; if (a && ++b) ...`\nHere `++b` is never executed; `b` remains 5."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nint main()\n{\n    int x = 0;\n    if (x = 5)\n        printf(\"A\");\n    else\n        printf(\"B\");\n    printf(\" %d\", x);\n    return 0;\n}",
        "a": "**Answer:**\nThis operator concept ensures precise expression evaluation according to ANSI C precedence and associativity rules."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nint main()\n{\n    printf(\"%d %d %d %d %d\", 5 & 3, 5 | 3, 5 ^ 3, ~5, 5 << 2);\n    return 0;\n}",
        "a": "**Answer:**\nThis operator concept ensures precise expression evaluation according to ANSI C precedence and associativity rules."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nint main()\n{\n    int x = 10;\n    x *= 2 + 3;\n    x -= 4;\n    x /= 2;\n    x %= 7;\n    printf(\"%d\", x);\n    return 0;\n}",
        "a": "**Answer:**\nThis operator concept ensures precise expression evaluation according to ANSI C precedence and associativity rules."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nint main()\n{\n    int i = 5;\n    printf(\"%d \", (int)sizeof(i++));\n    printf(\"%d\", i);\n    return 0;\n}",
        "a": "**Answer:**\nThis operator concept ensures precise expression evaluation according to ANSI C precedence and associativity rules."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nint main()\n{\n    int a = (1, 2, 3);\n    int m = (a > 2) ? 10 : (a > 1) ? 20 : 30;\n    printf(\"%d %d\", a, m);\n    return 0;\n}",
        "a": "**Answer:**\nThis operator concept ensures precise expression evaluation according to ANSI C precedence and associativity rules."
      },
      {
        "q": "Find the errors in each statement: 5 = x; \u00b7 x + 1 = y; \u00b7 if (a =< b) \u00b7 z = a ** b; \u00b7 (a + b)++;",
        "a": "**Answer:**\nThis operator concept ensures precise expression evaluation according to ANSI C precedence and associativity rules."
      },
      {
        "q": "The program is meant to print the average of 5 and 6 as 5.5 but prints 5.000000. Fix it.\n#include <stdio.h>\nint main()\n{\n    float avg = (5 + 6) / 2;\n    printf(\"%f\", avg);\n    return 0;\n}",
        "a": "**Answer:**\nThis operator concept ensures precise expression evaluation according to ANSI C precedence and associativity rules."
      },
      {
        "q": "The condition should be true when a number is between 10 and 20. Correct it:\nif (10 < n < 20)\n    printf(\"In range\");",
        "a": "**Answer:**\nThis operator concept ensures precise expression evaluation according to ANSI C precedence and associativity rules."
      },
      {
        "q": "Why does this swap fail to give a correct result for a = 5? Fix it.\na = a + b;\nb = a - b;\na = a - b;\n/* what if the programmer wrote  a = a + b; b = a - b; a = b - a;  instead? */",
        "a": "**Answer:**\nThis operator concept ensures precise expression evaluation according to ANSI C precedence and associativity rules."
      },
      {
        "q": "Evaluate by hand with precedence and associativity: int x = 10, y = 3; x - y * 2 + x / y % 2.",
        "a": "**Answer:**\nThis operator concept ensures precise expression evaluation according to ANSI C precedence and associativity rules."
      },
      {
        "q": "What is the value of a after a = 5; a += a++ ;? Is it defined? Explain why examiners avoid this.",
        "a": "**Answer:**\nThis operator concept ensures precise expression evaluation according to ANSI C precedence and associativity rules."
      },
      {
        "q": "If a = 5, what are the values of a after a = a++; (discuss) and a = ++a; (discuss)?",
        "a": "**Answer:**\nThis operator concept ensures precise expression evaluation according to ANSI C precedence and associativity rules."
      },
      {
        "q": "Predict the value of x = 7 & 3 == 3. Explain using precedence of == vs &.",
        "a": "**Answer:**\nThis operator concept ensures precise expression evaluation according to ANSI C precedence and associativity rules."
      },
      {
        "q": "Write a program that reads an integer and checks whether it is a power of 2 using the expression n > 0 && (n & (n - 1)) == 0. Dry run for 8, 12 and 1.",
        "a": "**Answer:**\nThis operator concept ensures precise expression evaluation according to ANSI C precedence and associativity rules."
      },
      {
        "q": "Write a program that uses bitwise shifts to multiply a number by 8 and divide it by 4. State the restriction on negative numbers.",
        "a": "**Answer:**\nThis operator concept ensures precise expression evaluation according to ANSI C precedence and associativity rules."
      },
      {
        "q": "Write a program to extract the k-th bit of an integer and print it, using >> and &.",
        "a": "**Answer:**\nThis operator concept ensures precise expression evaluation according to ANSI C precedence and associativity rules."
      },
      {
        "q": "Write a menu program that applies +, -, *, / on two numbers using switch (Units 5, 9).",
        "a": "**Answer:**\nThis operator concept ensures precise expression evaluation according to ANSI C precedence and associativity rules."
      },
      {
        "q": "Predict the output of mixed-type expressions with int, float and char operands and explain the type conversion that happens (Unit 7).",
        "a": "**Answer:**\nThis operator concept ensures precise expression evaluation according to ANSI C precedence and associativity rules."
      },
      {
        "q": "Postfix ++ has higher precedence than prefix, but the value used is the old one.",
        "a": "**Answer:**\nThis operator concept ensures precise expression evaluation according to ANSI C precedence and associativity rules."
      },
      {
        "q": "&& has higher precedence than ||.",
        "a": "**Answer:**\nThis operator concept ensures precise expression evaluation according to ANSI C precedence and associativity rules."
      },
      {
        "q": "== has higher precedence than &, ^, |.",
        "a": "**Answer:**\nThis operator concept ensures precise expression evaluation according to ANSI C precedence and associativity rules."
      },
      {
        "q": "% works only with integers; sign of result follows the left operand in C99.",
        "a": "**Answer:**\nThis operator concept ensures precise expression evaluation according to ANSI C precedence and associativity rules."
      },
      {
        "q": "Assignment is right-associative; relational operators are left-associative.",
        "a": "**Answer:**\nThis operator concept ensures precise expression evaluation according to ANSI C precedence and associativity rules."
      },
      {
        "q": "Operands of sizeof are not evaluated (except variable length arrays).",
        "a": "**Answer:**\nThis operator concept ensures precise expression evaluation according to ANSI C precedence and associativity rules."
      }
    ],
    "practicals": [
      "Draw a flowchart to evaluate the expression (a + b) * c / d, reading all inputs and printing the result."
    ],
    "syllabus": {
      "concepts": [
        "Arithmetic (+ - * / %)",
        "relational",
        "logical (&& || !) with short-circuit evaluation",
        "assignment and compound assignment",
        "increment/decrement (pre vs post)",
        "conditional (?:)",
        "bitwise (& | ^ ~ << >>)",
        "comma",
        "sizeof",
        "unary, binary, ternary",
        "precedence and associativity",
        "integer vs floating division",
        "% with negative operands (C99)."
      ],
      "checklist": [
        "Memorise the precedence table down to the ternary operator.",
        "Trace pre/post increment inside printf and assignment.",
        "Practise short-circuit and = vs == outputs.",
        "Practise all six bitwise operators with small numbers."
      ]
    }
  },
  {
    "id": "unit5",
    "title": "Unit 5: Control Constructs",
    "questions": [
      {
        "q": "List the decision-making statements in C.",
        "a": "**Decision-Making Statements in C:**\n1. `if` statement (simple one-way branch).\n2. `if-else` statement (two-way branch).\n3. Nested `if` / `if-else` statement.\n4. `if-else-if` ladder (multi-way conditional checking).\n5. `switch` statement (multi-way integral dispatch).\n6. Conditional operator (`?:`) (inline ternary expression)."
      },
      {
        "q": "Write the syntax of for, while and do-while.",
        "a": "**Syntax of C Loops:**\n1. **for Loop (Entry-controlled):**\n```c\nfor (initialization; condition; update) {\n    // statements\n}\n```\n2. **while Loop (Entry-controlled):**\n```c\nwhile (condition) {\n    // statements\n}\n```\n3. **do-while Loop (Exit-controlled):**\n```c\ndo {\n    // statements\n} while (condition);\n```"
      },
      {
        "q": "What is the role of break and continue?",
        "a": "**break vs continue:**\n1. **`break`:** Terminates the innermost enclosing loop (`for`, `while`, `do-while`) or `switch` block immediately, transferring control to the statement following the block.\n2. **`continue`:** Skips the remaining statements in the current loop iteration and jumps immediately to the loop update expression (in `for`) or condition test (in `while`/`do-while`). Does not apply to `switch`."
      },
      {
        "q": "MCQ: Which loop executes at least once even when the condition is false? (a) for (b) while (c) do-while (d) none. (Ans: c)",
        "a": "**Answer: (c) do-while**\n\n**Explanation:**\nThe `do-while` loop is an exit-controlled loop. Because its condition is evaluated *after* executing the loop body, the body is guaranteed to execute at least once even if the condition is false from the start."
      },
      {
        "q": "True/False: A switch expression can be a float. (Ans: False)",
        "a": "**Answer: False**\n\n**Explanation:**\nThe controlling expression of a `switch` statement and all `case` labels must strictly evaluate to an **integral type** (`int`, `char`, `short`, `long`, or `enum`). Floating-point types (`float`, `double`) and strings are illegal in C switch statements."
      },
      {
        "q": "Fill in: In a for loop for(;;) the condition is treated as ______. (Ans: true / infinite loop)",
        "a": "**Answer: True / Infinite loop**\n\n**Explanation:**\nIn C syntax, omitting the condition in `for(;;)` defaults to a constant non-zero (True) condition, creating an intentional infinite loop."
      },
      {
        "q": "Explain switch-case with syntax and an example. Why is break used?",
        "a": "**Switch-Case Overview:**\nProvides multi-way branching based on the exact value of an integral expression.\n\n**Syntax:**\n```c\nswitch (expression) {\n    case CONST1:\n        // code\n        break;\n    case CONST2:\n        // code\n        break;\n    default:\n        // code if no case matches\n}\n```\n**Why `break` is Used:** Prevents unintentional 'fall-through' into subsequent cases."
      },
      {
        "q": "Explain the else-if ladder with an example.",
        "a": "**Answer:**\nThis control structure construct controls branch prediction, loop iteration, and execution sequencing in ANSI C."
      },
      {
        "q": "Explain nested loops with a pattern-printing example.",
        "a": "**Answer:**\nThis control structure construct controls branch prediction, loop iteration, and execution sequencing in ANSI C."
      },
      {
        "q": "Explain goto and state why its use is discouraged.",
        "a": "**Answer:**\nThis control structure construct controls branch prediction, loop iteration, and execution sequencing in ANSI C."
      },
      {
        "q": "Distinguish break and continue with a loop example.",
        "a": "**Answer:**\nThis control structure construct controls branch prediction, loop iteration, and execution sequencing in ANSI C."
      },
      {
        "q": "Analyze the difference between entry-controlled and exit-controlled loops. Which type would be more appropriate for a menu-driven application and why?",
        "a": "**Answer:**\nThis control structure construct controls branch prediction, loop iteration, and execution sequencing in ANSI C."
      },
      {
        "q": "Why must the controlling expression of a switch be integral? Which case labels are legal (constants only)?",
        "a": "**Answer:**\nThis control structure construct controls branch prediction, loop iteration, and execution sequencing in ANSI C."
      },
      {
        "q": "When would you choose switch over an else-if ladder, and when is else-if unavoidable?",
        "a": "**Answer:**\nThis control structure construct controls branch prediction, loop iteration, and execution sequencing in ANSI C."
      },
      {
        "q": "What happens in a switch if break is omitted? Give a real situation where this is intended.",
        "a": "**Answer:**\nThis control structure construct controls branch prediction, loop iteration, and execution sequencing in ANSI C."
      },
      {
        "q": "Why does if (x = 5) always take the true branch?",
        "a": "**Answer:**\nThis control structure construct controls branch prediction, loop iteration, and execution sequencing in ANSI C."
      },
      {
        "q": "while vs do-while \u00b7 for vs while \u00b7 if-else vs switch \u00b7 break vs continue \u00b7 break vs exit() \u00b7 goto vs break.",
        "a": "**Answer:**\nThis control structure construct controls branch prediction, loop iteration, and execution sequencing in ANSI C."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nint main()\n{\n    int i;\n    for (i = 1; i <= 10; i++)\n    {\n        if (i == 6)\n            continue;\n        printf(\"%d \", i);\n    }\n    return 0;\n}",
        "a": "**Answer:**\nThis control structure construct controls branch prediction, loop iteration, and execution sequencing in ANSI C."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nint main()\n{\n    int i, j;\n    for (i = 1; i <= 3; i++)\n    {\n        for (j = 1; j <= i; j++)\n            printf(\"*\");\n        printf(\"\\n\");\n    }\n    return 0;\n}",
        "a": "**Answer:**\nThis control structure construct controls branch prediction, loop iteration, and execution sequencing in ANSI C."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nint main()\n{\n    int n = 3;\n    while (n--)\n        printf(\"%d \", n);\n    return 0;\n}",
        "a": "**Output:**\n`2 1 0 `\n\n**Explanation:**\nInitial: `n = 3`.\n1. `while(3--)`: condition true (3 is non-zero), `n` becomes 2, prints `2 `.\n2. `while(2--)`: condition true, `n` becomes 1, prints `1 `.\n3. `while(1--)`: condition true, `n` becomes 0, prints `0 `.\n4. `while(0--)`: condition false (0 is zero), loop terminates."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nint main()\n{\n    int i = 10;\n    do\n    {\n        printf(\"%d \", i);\n        i++;\n    } while (i < 10);\n    return 0;\n}",
        "a": "**Answer:**\nThis control structure construct controls branch prediction, loop iteration, and execution sequencing in ANSI C."
      },
      {
        "q": "Predict the output (fall-through):\n#include <stdio.h>\nint main()\n{\n    int x = 2;\n    switch (x)\n    {\n        case 1: printf(\"One \");\n        case 2: printf(\"Two \");\n        case 3: printf(\"Three \"); break;\n        default: printf(\"Default\");\n    }\n    return 0;\n}",
        "a": "**Fall-Through in Switch:**\nWhen a `case` block does not end with a `break` statement, execution continues seamlessly into the statements of the subsequent `case`, regardless of whether that case's constant matches.\n*Intended Use Case:* Grouping multiple cases that share identical logic:\n```c\nswitch (ch) {\n    case 'a': case 'e': case 'i': case 'o': case 'u':\n        printf(\"Vowel\");\n        break;\n}\n```"
      },
      {
        "q": "Predict the output (default placed first):\n#include <stdio.h>\nint main()\n{\n    int ch = 5;\n    switch (ch)\n    {\n        default: printf(\"D \");\n        case 1: printf(\"One \"); break;\n        case 2: printf(\"Two \");\n    }\n    return 0;\n}",
        "a": "**Answer:**\nThis control structure construct controls branch prediction, loop iteration, and execution sequencing in ANSI C."
      },
      {
        "q": "Predict the output (dangling else):\n#include <stdio.h>\nint main()\n{\n    int a = 5;\n    if (a > 3)\n        if (a > 10)\n            printf(\"A\");\n        else\n            printf(\"B\");\n    return 0;\n}",
        "a": "**The Dangling Else Problem:**\nOccurs in nested `if` statements when an `else` clause is not enclosed in braces, creating ambiguity over which `if` it belongs to:\n```c\nif (a > 3)\n    if (a > 10)\n        printf(\"A\");\nelse\n    printf(\"B\");\n```\n**Resolution Rule:** In C, an `else` **always pairs with the closest preceding unmatched `if`** within the same block scope. Therefore, the `else` belongs to `if (a > 10)`. When `a = 5`, it prints `B`! Always use curly braces `{}` to avoid bugs."
      },
      {
        "q": "Predict the output (comma in for):\n#include <stdio.h>\nint main()\n{\n    int i, j;\n    for (i = 0, j = 5; i < j; i++, j--)\n        printf(\"%d%d \", i, j);\n    return 0;\n}",
        "a": "**Answer:**\nThis control structure construct controls branch prediction, loop iteration, and execution sequencing in ANSI C."
      },
      {
        "q": "Predict the output (semicolon after for):\n#include <stdio.h>\nint main()\n{\n    int i;\n    for (i = 0; i < 3; i++);\n    printf(\"%d\", i);\n    return 0;\n}",
        "a": "**Output:**\n`3`\n\n**Explanation:**\nThe semicolon immediately following `for (i = 0; i < 3; i++);` acts as an empty (null) loop body. The loop iterates 3 times silently until `i = 3`. The subsequent `printf(\"%d\", i);` executes once after loop termination, printing `3`."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nint main()\n{\n    int i = 0;\n    for (;;)\n    {\n        if (++i > 3)\n            break;\n        printf(\"%d \", i);\n    }\n    return 0;\n}",
        "a": "**Answer:**\nThis control structure construct controls branch prediction, loop iteration, and execution sequencing in ANSI C."
      },
      {
        "q": "Predict the output of this nested loop with break:\n#include <stdio.h>\nint main()\n{\n    int i, j;\n    for (i = 1; i <= 3; i++)\n    {\n        for (j = 1; j <= 3; j++)\n        {\n            if (j == 2)\n                break;\n            printf(\"%d%d \", i, j);\n        }\n    }\n    return 0;\n}",
        "a": "**Output:**\n`11 21 31 `\n\n**Explanation:**\nFor each outer iteration `i` (1, 2, 3):\n- Inner loop runs for `j = 1`, prints `i` and `j` (e.g., `11 `).\n- When `j = 2`, `break` terminates the **inner loop only**. Control returns to the outer loop."
      },
      {
        "q": "Find the errors:\n#include <stdio.h>\nint main()\n{\n    int i;\n    for (i = 0, i < 5, i++)\n        printf(\"%d\", i);\n    return 0;\n}",
        "a": "**Answer:**\nThis control structure construct controls branch prediction, loop iteration, and execution sequencing in ANSI C."
      },
      {
        "q": "The loop was meant to print 1 to 5 but never ends. Find the cause:\n#include <stdio.h>\nint main()\n{\n    int i = 1;\n    while (i <= 5);\n    {\n        printf(\"%d \", i);\n        i++;\n    }\n    return 0;\n}",
        "a": "**Answer:**\nThis control structure construct controls branch prediction, loop iteration, and execution sequencing in ANSI C."
      },
      {
        "q": "Find the errors in the switch:\nint x = 2, y = 3;\nswitch (x)\n{\n    case 1.5: printf(\"A\"); break;\n    case y:   printf(\"B\"); break;\n    case 2:   printf(\"C\"); break;\n    case 2:   printf(\"D\"); break;\n}",
        "a": "**Identified Errors:**\n1. `case 1.5:` - Float literals are illegal as case labels; must be integers or characters.\n2. `case y:` - Variable identifiers cannot be case labels; must be compile-time constants.\n3. `case 2:` duplicated twice - Duplicate case labels are strictly forbidden."
      },
      {
        "q": "Output is always \"Equal\" even for unequal inputs. Fix it:\nif (a = b)\n    printf(\"Equal\");\nelse\n    printf(\"Not equal\");",
        "a": "**Identified Error:**\n`if (a = b)` uses assignment `=` instead of equality `==`. It copies `b` into `a` and evaluates the truth value of that number.\n\n**Fix:**\nChange to equality operator: `if (a == b)`."
      },
      {
        "q": "Complete the missing code to print the sum of digits of n:\nsum = 0;\nwhile (______)\n{\n    sum = sum + ______;\n    n = ______;\n}",
        "a": "**Completed Code:**\n```c\nsum = 0;\nwhile (n > 0)\n{\n    sum = sum + (n % 10);\n    n = n / 10;\n}\n```"
      },
      {
        "q": "Can a switch have no default? What happens when no case matches?",
        "a": "**Answer:**\nThis control structure construct controls branch prediction, loop iteration, and execution sequencing in ANSI C."
      },
      {
        "q": "Can continue be used inside a switch? What about break inside a loop inside a switch?",
        "a": "**Answer:**\nThis control structure construct controls branch prediction, loop iteration, and execution sequencing in ANSI C."
      },
      {
        "q": "Which loop would you use if the number of iterations is unknown and at least one run is required? Why?",
        "a": "**Answer:**\nThis control structure construct controls branch prediction, loop iteration, and execution sequencing in ANSI C."
      },
      {
        "q": "Rewrite a for loop as a while loop and as a do-while loop.",
        "a": "**Answer:**\nThis control structure construct controls branch prediction, loop iteration, and execution sequencing in ANSI C."
      },
      {
        "q": "How many times does for (i = 10; i > 0; i = i / 2) execute? List the values of i.",
        "a": "**Answer:**\nThis control structure construct controls branch prediction, loop iteration, and execution sequencing in ANSI C."
      },
      {
        "q": "Write the output when case labels use character constants and the switch variable is char c = 'b'.",
        "a": "**Answer:**\nThis control structure construct controls branch prediction, loop iteration, and execution sequencing in ANSI C."
      },
      {
        "q": "Print Pascal's triangle for N rows using only nested loops and the formula for binomial coefficients (no arrays).",
        "a": "**Answer:**\nThis control structure construct controls branch prediction, loop iteration, and execution sequencing in ANSI C."
      },
      {
        "q": "Write a program that prints the sum of the series 1 + 1/2 + 1/3 + ... + 1/N and explain the type issue if 1/i is written with integers.",
        "a": "**Answer:**\nThis control structure construct controls branch prediction, loop iteration, and execution sequencing in ANSI C."
      },
      {
        "q": "Read N and print all its prime factors.",
        "a": "**Answer:**\nThis control structure construct controls branch prediction, loop iteration, and execution sequencing in ANSI C."
      },
      {
        "q": "Convert a number from decimal to binary using a loop (store the digits in an array or reverse the number).",
        "a": "**Answer:**\nThis control structure construct controls branch prediction, loop iteration, and execution sequencing in ANSI C."
      },
      {
        "q": "Menu-driven program calling a separate function for each option (Unit 10).",
        "a": "**Answer:**\nThis control structure construct controls branch prediction, loop iteration, and execution sequencing in ANSI C."
      },
      {
        "q": "Read N numbers into an array and print the largest using a loop (Unit 6).",
        "a": "**Answer:**\nThis control structure construct controls branch prediction, loop iteration, and execution sequencing in ANSI C."
      },
      {
        "q": "Read a string and count vowels, consonants, digits and spaces with a switch or ladder (Unit 12).",
        "a": "**Answer:**\nThis control structure construct controls branch prediction, loop iteration, and execution sequencing in ANSI C."
      },
      {
        "q": "Simulate a stack with a switch-based menu: push, pop, display, exit (Unit 14).",
        "a": "**Answer:**\nThis control structure construct controls branch prediction, loop iteration, and execution sequencing in ANSI C."
      },
      {
        "q": "switch compares only for equality; no ranges, no strings, no floats.",
        "a": "**Answer:**\nThis control structure construct controls branch prediction, loop iteration, and execution sequencing in ANSI C."
      },
      {
        "q": "Case labels must be unique compile-time constants.",
        "a": "**Answer:**\nThis control structure construct controls branch prediction, loop iteration, and execution sequencing in ANSI C."
      },
      {
        "q": "default can appear anywhere; control still falls through after it.",
        "a": "**Answer:**\nThis control structure construct controls branch prediction, loop iteration, and execution sequencing in ANSI C."
      },
      {
        "q": "continue in a for loop jumps to the update expression, in a while loop jumps to the condition check.",
        "a": "**Answer:**\nThis control structure construct controls branch prediction, loop iteration, and execution sequencing in ANSI C."
      },
      {
        "q": "A ; right after for(...), while(...) or if(...) makes the body empty.",
        "a": "**Answer:**\nThis control structure construct controls branch prediction, loop iteration, and execution sequencing in ANSI C."
      },
      {
        "q": "An else pairs with the nearest unmatched if.",
        "a": "**Answer:**\nThis control structure construct controls branch prediction, loop iteration, and execution sequencing in ANSI C."
      },
      {
        "q": "Variables declared in a for initializer (C99) are local to the loop.",
        "a": "**Answer:**\nThis control structure construct controls branch prediction, loop iteration, and execution sequencing in ANSI C."
      }
    ],
    "practicals": [
      "Draw flowcharts for if-else, switch, while and do-while.",
      "Draw the flowchart for the ATM menu program (loop + switch + balance check).",
      "Draw the flowchart to print all numbers between 1 and 100 divisible by 7."
    ],
    "syllabus": {
      "concepts": [
        "Decision making: if, if-else, else-if ladder, nested if, switch-case (break, default, fall-through, allowed case labels)",
        "loops: for, while, do-while",
        "entry-controlled vs exit-controlled loops",
        "nested loops",
        "break, continue, goto",
        "infinite loops",
        "empty loop bodies",
        "menu-driven programs",
        "pattern printing",
        "number-theory programs (prime, Armstrong, palindrome, GCD, Fibonacci)."
      ],
      "checklist": [
        "Write the menu-driven switch program (ATM / calculator) without looking.",
        "Dry-run break/continue in single and nested loops.",
        "Dry-run switch fall-through and misplaced default.",
        "Practise 8 loop programs: factorial, prime, Fibonacci, palindrome, Armstrong, GCD, reverse, patterns.",
        "Be able to justify exit-controlled loops for menus."
      ]
    }
  }
];
