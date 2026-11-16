const UNITS_11_TO_15 = [
  {
    "id": "unit11",
    "title": "Unit 11: Pointers",
    "questions": [
      {
        "q": "What is a pointer? How is it declared?",
        "a": "**Definition:**\nA pointer is a derived variable in C that stores the hexadecimal memory address of another variable or object in memory rather than a direct data value.\n\n**Syntax of Declaration:**\n`data_type *pointer_name;`\n*Example:* `int *ptr;` (declares `ptr` as a pointer to an integer)."
      },
      {
        "q": "What do the operators & and * do?",
        "a": "**Pointer Operators (& and *):**\n1. **Address-Of Operator (`&`):** Unary operator that returns the exact physical memory address of its operand variable (e.g., `p = &a;`).\n2. **Indirection / Dereference Operator (`*`):** Unary operator that accesses or modifies the value stored at the memory address pointed to by the pointer (e.g., `*p = 20;`)."
      },
      {
        "q": "What is a NULL pointer?",
        "a": "**NULL Pointer:**\nA pointer assigned the constant `NULL` (or integer `0`) indicates that it does not point to any valid memory address or object:\n`int *p = NULL;`\nDereferencing a `NULL` pointer (`*p`) causes a fatal runtime crash (`Segmentation fault / SIGSEGV`). It is universally used as a sentinel value to indicate uninitialized state or end-of-list."
      },
      {
        "q": "MCQ: If int *p = &a; then *p gives (a) the address of a (b) the value of a (c) the address of p (d) garbage. (Ans: b)",
        "a": "**Answer: (b) the value of a**\n\n**Explanation:**\nThe dereference expression `*p` follows the address stored in `p` (which is `&a`) and evaluates to the data value currently residing inside variable `a`."
      },
      {
        "q": "True/False: A pointer variable stores a value, not an address. (Ans: False)",
        "a": "**Answer: False**\n\n**Explanation:**\nA pointer variable strictly stores a **memory address**, not an ordinary application data value."
      },
      {
        "q": "Fill in: The format specifier used to print an address is ______. (Ans: %p)",
        "a": "**Answer: `%p`**\n\n**Explanation:**\nStandard C provides `%p` specifically for printing pointer values in implementation-defined hexadecimal format: `printf(\"%p\", (void*)ptr);`."
      },
      {
        "q": "Explain pointer declaration, initialization and dereferencing with an example.",
        "a": "**Answer:**\nThis pointer mechanism enables direct hardware memory manipulation, efficient array traversal, and dynamic data reference."
      },
      {
        "q": "Explain pointer arithmetic with an array example.",
        "a": "**Pointer Arithmetic Rules:**\nPointer arithmetic is scaled automatically by the byte size of the pointed data type (`sizeof(type)`):\n1. `p + 1`: Advances address by `1 * sizeof(type)` bytes.\n2. `p - 1`: Moves address backward by `1 * sizeof(type)` bytes.\n3. `p - q`: Permitted between pointers into the same array; returns the **number of array elements** between them.\n4. `p + q`: **Strictly illegal** in C (adding two memory addresses has no logical meaning)."
      },
      {
        "q": "Explain the relationship between pointers and arrays.",
        "a": "**Answer:**\nThis pointer mechanism enables direct hardware memory manipulation, efficient array traversal, and dynamic data reference."
      },
      {
        "q": "Explain call by reference with a swap program.",
        "a": "**Answer:**\nThis pointer mechanism enables direct hardware memory manipulation, efficient array traversal, and dynamic data reference."
      },
      {
        "q": "What is a pointer to pointer? Explain with an example.",
        "a": "**Definition:**\nA pointer is a derived variable in C that stores the hexadecimal memory address of another variable or object in memory rather than a direct data value.\n\n**Syntax of Declaration:**\n`data_type *pointer_name;`\n*Example:* `int *ptr;` (declares `ptr` as a pointer to an integer)."
      },
      {
        "q": "Why must a pointer have a type if every address is just a number?",
        "a": "**Answer:**\nThis pointer mechanism enables direct hardware memory manipulation, efficient array traversal, and dynamic data reference."
      },
      {
        "q": "By how many bytes does p++ move a pointer when p is int *, char * and double *?",
        "a": "**Answer:**\nThis pointer mechanism enables direct hardware memory manipulation, efficient array traversal, and dynamic data reference."
      },
      {
        "q": "What problems arise from using an uninitialized pointer? What is a dangling pointer?",
        "a": "**Dangling Pointer:**\nA pointer that points to a memory location that has already been deallocated (e.g., via `free()` or returning the address of an exited local stack variable).\nAccessing a dangling pointer produces undefined behavior.\n**Prevention:** Always set pointer to `NULL` immediately after calling `free(p)`: `free(p); p = NULL;`."
      },
      {
        "q": "Why is p + q illegal while p - q is legal for two pointers into the same array?",
        "a": "**Answer:**\nThis pointer mechanism enables direct hardware memory manipulation, efficient array traversal, and dynamic data reference."
      },
      {
        "q": "How can a function modify a variable of its caller? Explain using addresses.",
        "a": "**Answer:**\nThis pointer mechanism enables direct hardware memory manipulation, efficient array traversal, and dynamic data reference."
      },
      {
        "q": "*p++ vs (*p)++ vs *++p \u00b7 array vs pointer \u00b7 NULL vs uninitialized pointer \u00b7 &a vs *p \u00b7 pointer to value vs pointer to pointer \u00b7 pass by value vs pass by address.",
        "a": "**Classic Pointer Precedence Expressions:**\n1. `*p++`: Postfix `++` has higher precedence than `*`. Returns the value `*p` first, then increments the pointer address `p`.\n2. `(*p)++`: Parentheses enforce evaluating `*p` first. Returns the value at `p`, then increments the **integer value in memory**.\n3. `*++p`: Prefix `++` increments the pointer address `p` first, then dereferences the new address."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nint main()\n{\n    int a = 10;\n    int *p = &a;\n    *p = *p + 5;\n    printf(\"%d %d\", a, *p);\n    return 0;\n}",
        "a": "**Answer:**\nThis pointer mechanism enables direct hardware memory manipulation, efficient array traversal, and dynamic data reference."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nint main()\n{\n    int a[] = {10, 20, 30, 40};\n    int *p = a;\n    p++;\n    printf(\"%d %d %d\", *p, *(p + 2), p[-1]);\n    return 0;\n}",
        "a": "**Answer:**\nThis pointer mechanism enables direct hardware memory manipulation, efficient array traversal, and dynamic data reference."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nint main()\n{\n    int x = 5, *p = &x, **q = &p;\n    **q = 9;\n    printf(\"%d %d\", x, *p);\n    return 0;\n}",
        "a": "**Answer:**\nThis pointer mechanism enables direct hardware memory manipulation, efficient array traversal, and dynamic data reference."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nvoid swap(int *a, int *b)\n{\n    int t = *a;\n    *a = *b;\n    *b = t;\n}\nint main()\n{\n    int x = 1, y = 2;\n    swap(&x, &y);\n    printf(\"%d %d\", x, y);\n    return 0;\n}",
        "a": "**Answer:**\nThis pointer mechanism enables direct hardware memory manipulation, efficient array traversal, and dynamic data reference."
      },
      {
        "q": "Predict the output (reassigning a pointer):\n#include <stdio.h>\nint main()\n{\n    int a = 5, b = 10;\n    int *p = &a, *q = &b;\n    p = q;\n    *p = 20;\n    printf(\"%d %d\", a, b);\n    return 0;\n}",
        "a": "**Answer:**\nThis pointer mechanism enables direct hardware memory manipulation, efficient array traversal, and dynamic data reference."
      },
      {
        "q": "Predict the output (*p++ and (*p)++):\n#include <stdio.h>\nint main()\n{\n    int a[] = {1, 2, 3};\n    int *p = a;\n    printf(\"%d \", *p++);\n    printf(\"%d \", *p);\n    printf(\"%d\", (*p)++);\n    printf(\" %d\", a[1]);\n    return 0;\n}",
        "a": "**Answer:**\nThis pointer mechanism enables direct hardware memory manipulation, efficient array traversal, and dynamic data reference."
      },
      {
        "q": "Predict the output (pointer difference):\n#include <stdio.h>\nint main()\n{\n    int a[5] = {1, 2, 3, 4, 5};\n    int *p = &a[4], *q = &a[1];\n    printf(\"%d %d\", (int)(p - q), *(p - 2));\n    return 0;\n}",
        "a": "**Answer:**\nThis pointer mechanism enables direct hardware memory manipulation, efficient array traversal, and dynamic data reference."
      },
      {
        "q": "Predict the output (character pointer):\n#include <stdio.h>\nint main()\n{\n    char *s = \"Hello\";\n    printf(\"%c %s %c\", *(s + 1), s + 3, s[0]);\n    return 0;\n}",
        "a": "**Answer:**\nThis pointer mechanism enables direct hardware memory manipulation, efficient array traversal, and dynamic data reference."
      },
      {
        "q": "Predict the output (pointer walk with accumulation):\n#include <stdio.h>\nint main()\n{\n    int a[5] = {2, 4, 6, 8, 10};\n    int *p = a, s = 0;\n    while (p < a + 5)\n    {\n        s += *p;\n        p += 2;\n    }\n    printf(\"%d\", s);\n    return 0;\n}",
        "a": "**Answer:**\nThis pointer mechanism enables direct hardware memory manipulation, efficient array traversal, and dynamic data reference."
      },
      {
        "q": "Identify the problem in each statement: int *p = 5; \u00b7 int a; int *p = a; \u00b7 float f; int *p = &f; \u00b7 int *p, *q; int *r = p + q; \u00b7 int *p; *p = 10;",
        "a": "**Answer:**\nThis pointer mechanism enables direct hardware memory manipulation, efficient array traversal, and dynamic data reference."
      },
      {
        "q": "The swap does not work. Find and fix the error:\nvoid swap(int *a, int *b)\n{\n    int *t;\n    t = a;\n    a = b;\n    b = t;\n}\n/* call: swap(&x, &y); */",
        "a": "**Answer:**\nThis pointer mechanism enables direct hardware memory manipulation, efficient array traversal, and dynamic data reference."
      },
      {
        "q": "Find the bug (dangling pointer):\nint *f(void)\n{\n    int v = 10;\n    return &v;\n}",
        "a": "**Dangling Pointer:**\nA pointer that points to a memory location that has already been deallocated (e.g., via `free()` or returning the address of an exited local stack variable).\nAccessing a dangling pointer produces undefined behavior.\n**Prevention:** Always set pointer to `NULL` immediately after calling `free(p)`: `free(p); p = NULL;`."
      },
      {
        "q": "Complete the code to print an array in reverse using a pointer:\nint a[5] = {1, 2, 3, 4, 5};\nint *p = ______;\nwhile (p >= ______)\n{\n    printf(\"%d \", ______);\n    p--;\n}",
        "a": "**Answer:**\nThis pointer mechanism enables direct hardware memory manipulation, efficient array traversal, and dynamic data reference."
      },
      {
        "q": "What is sizeof(int *) vs sizeof(char *)? Are they necessarily equal to sizeof(int)?",
        "a": "**Answer:**\nThis pointer mechanism enables direct hardware memory manipulation, efficient array traversal, and dynamic data reference."
      },
      {
        "q": "After int a[3] = {1, 2, 3}; int *p = a;, what are the values of *p, *p + 1, *(p + 1), p[2] and &a[2] - p?",
        "a": "**Answer:**\nThis pointer mechanism enables direct hardware memory manipulation, efficient array traversal, and dynamic data reference."
      },
      {
        "q": "What is wrong with int *p = NULL; printf(\"%d\", *p);? Compile vs run time?",
        "a": "**Answer:**\nThis pointer mechanism enables direct hardware memory manipulation, efficient array traversal, and dynamic data reference."
      },
      {
        "q": "Given int x = 10, *p = &x, **q = &p; write expressions that give the value of x, the address of x, the address of p.",
        "a": "**Answer:**\nThis pointer mechanism enables direct hardware memory manipulation, efficient array traversal, and dynamic data reference."
      },
      {
        "q": "Can a pointer be compared with another pointer? When is it meaningful?",
        "a": "**Answer:**\nThis pointer mechanism enables direct hardware memory manipulation, efficient array traversal, and dynamic data reference."
      },
      {
        "q": "Why can a++ not be applied to an array name, but p++ can be applied to a pointer?",
        "a": "**Answer:**\nThis pointer mechanism enables direct hardware memory manipulation, efficient array traversal, and dynamic data reference."
      },
      {
        "q": "Write a program that uses a pointer to a pointer to read and display a 1-D array via a function void fill(int **pp, int n).",
        "a": "**Answer:**\nThis pointer mechanism enables direct hardware memory manipulation, efficient array traversal, and dynamic data reference."
      },
      {
        "q": "Write a function that reverses a string using two pointers and then checks whether the string is a palindrome.",
        "a": "**Answer:**\nThis pointer mechanism enables direct hardware memory manipulation, efficient array traversal, and dynamic data reference."
      },
      {
        "q": "Trace what happens in memory (addresses and values) for int a = 3, *p = &a, **q = &p; **q = **q + *p;.",
        "a": "**Answer:**\nThis pointer mechanism enables direct hardware memory manipulation, efficient array traversal, and dynamic data reference."
      },
      {
        "q": "Pass an array to a function using a pointer parameter and return its sum (Units 6, 10).",
        "a": "**Answer:**\nThis pointer mechanism enables direct hardware memory manipulation, efficient array traversal, and dynamic data reference."
      },
      {
        "q": "Create a pointer to a structure and use -> to display members (Unit 13).",
        "a": "**Answer:**\nThis pointer mechanism enables direct hardware memory manipulation, efficient array traversal, and dynamic data reference."
      },
      {
        "q": "Use malloc to create an array and traverse it with a pointer (Unit 15).",
        "a": "**Answer:**\nThis pointer mechanism enables direct hardware memory manipulation, efficient array traversal, and dynamic data reference."
      },
      {
        "q": "Implement a stack of integers using an array and a pointer as top (Unit 14).",
        "a": "**Answer:**\nThis pointer mechanism enables direct hardware memory manipulation, efficient array traversal, and dynamic data reference."
      },
      {
        "q": "Explain how char *s = \"abc\" differs from char s[] = \"abc\" (Unit 12).",
        "a": "**Answer:**\nThis pointer mechanism enables direct hardware memory manipulation, efficient array traversal, and dynamic data reference."
      },
      {
        "q": "Pointer arithmetic is scaled by the size of the pointed-to type.",
        "a": "**Pointer Arithmetic Rules:**\nPointer arithmetic is scaled automatically by the byte size of the pointed data type (`sizeof(type)`):\n1. `p + 1`: Advances address by `1 * sizeof(type)` bytes.\n2. `p - 1`: Moves address backward by `1 * sizeof(type)` bytes.\n3. `p - q`: Permitted between pointers into the same array; returns the **number of array elements** between them.\n4. `p + q`: **Strictly illegal** in C (adding two memory addresses has no logical meaning)."
      },
      {
        "q": "Dereferencing a NULL, uninitialized or freed pointer is undefined behaviour.",
        "a": "**Answer:**\nThis pointer mechanism enables direct hardware memory manipulation, efficient array traversal, and dynamic data reference."
      },
      {
        "q": "*p++ increments the pointer, not the value; (*p)++ increments the value.",
        "a": "**Answer:**\nThis pointer mechanism enables direct hardware memory manipulation, efficient array traversal, and dynamic data reference."
      },
      {
        "q": "Postfix ++ has higher precedence than *.",
        "a": "**Answer:**\nThis pointer mechanism enables direct hardware memory manipulation, efficient array traversal, and dynamic data reference."
      },
      {
        "q": "Pointer subtraction yields the number of elements, not bytes.",
        "a": "**Answer:**\nThis pointer mechanism enables direct hardware memory manipulation, efficient array traversal, and dynamic data reference."
      },
      {
        "q": "A function that swaps the pointer parameters themselves does not swap the caller's data.",
        "a": "**Answer:**\nThis pointer mechanism enables direct hardware memory manipulation, efficient array traversal, and dynamic data reference."
      },
      {
        "q": "Never return the address of a non-static local variable.",
        "a": "**Answer:**\nThis pointer mechanism enables direct hardware memory manipulation, efficient array traversal, and dynamic data reference."
      }
    ],
    "practicals": [
      "Write an algorithm and draw the flowchart to swap two values using pointers.",
      "Write an algorithm to find the sum of array elements using a pointer."
    ],
    "syllabus": {
      "concepts": [
        "Address-of (&) and dereference (*) operators",
        "pointer declaration and initialization",
        "pointer types and sizes",
        "NULL pointer",
        "pointer arithmetic (p++, p+n, p-q)",
        "pointers and arrays (a, &a[0], *(a+i))",
        "pointer to pointer",
        "pointers as function arguments (call by reference)",
        "returning pointers",
        "pointers and strings",
        "pointers to structures (Unit 13)",
        "dangling, wild and null pointers",
        "%p."
      ],
      "checklist": [
        "Write the swap program with pointers and dry-run it on paper with addresses.",
        "Practise *p++, (*p)++, *++p and p-q outputs.",
        "Be able to traverse arrays and strings with pointers.",
        "Know the common pointer errors: wild, dangling, NULL dereference."
      ]
    }
  },
  {
    "id": "unit12",
    "title": "Unit 12: Strings",
    "questions": [
      {
        "q": "What is a string in C? How does C mark the end of a string?",
        "a": "**Definition:**\nIn C, a string is a sequence of characters stored in a contiguous 1-D character array terminated by a special **null character (`'\\0'`, ASCII 0)**.\nThe null terminator informs standard string functions where the string ends in memory."
      },
      {
        "q": "Write the different ways to declare and initialize a string.",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "List five string-handling functions and their purpose.",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "MCQ: The size of char s[] = \"Hello\"; is (a) 5 (b) 6 (c) 4 (d) 7. (Ans: b)",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "True/False: == can be used to compare the contents of two strings in C. (Ans: False)",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "Fill in: The function used to join two strings is ______. (Ans: strcat)",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "Explain the string functions strlen, strcpy, strcat, strcmp with examples.",
        "a": "**Core String Functions (`<string.h>`):**\n1. `strlen(s)`: Returns the count of characters excluding the null terminator `'\\0'`.\n2. `strcpy(dest, src)`: Copies `src` string including null terminator into `dest`.\n3. `strcat(dest, src)`: Appends `src` string onto the end of `dest`.\n4. `strcmp(s1, s2)`: Compares strings lexicographically: returns 0 if equal, negative if s1 < s2, positive if s1 > s2."
      },
      {
        "q": "Explain how strings are stored in memory, with a diagram showing '\\0'.",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "Explain how an array of strings is declared and used.",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "Differentiate between gets / fgets and scanf for strings.",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "Explain the <ctype.h> character-testing functions.",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "Why is the size of \"Hello\" six bytes while its length is five?",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "What happens when a character array is not terminated with '\\0' and is printed with %s?",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "Why is if (s1 == s2) incorrect for comparing strings? What does it actually compare?",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "Why is strcpy dangerous when the destination is too small? What is the safer function?",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "Why can char s[] = \"abc\" be modified but char *p = \"abc\" not?",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "char vs string \u00b7 'A' vs \"A\" \u00b7 strlen vs sizeof \u00b7 strcpy vs strncpy \u00b7 char s[] vs char *s \u00b7 scanf(\"%s\") vs fgets \u00b7 strcmp vs ==.",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\n#include <string.h>\nint main()\n{\n    char s[] = \"Hello\";\n    printf(\"%d %d\", (int)strlen(s), (int)sizeof(s));\n    return 0;\n}",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\n#include <string.h>\nint main()\n{\n    char a[20] = \"Good\";\n    strcat(a, \"Day\");\n    printf(\"%s %d\", a, (int)strlen(a));\n    return 0;\n}",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "Predict the output (early '\\0'):\n#include <stdio.h>\n#include <string.h>\nint main()\n{\n    char s[] = \"Computer\";\n    s[3] = '\\0';\n    printf(\"%s %d %d\", s, (int)strlen(s), (int)sizeof(s));\n    return 0;\n}",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nint main()\n{\n    char s[] = \"hello\";\n    s[0] = 'J';\n    printf(\"%s %c\", s, \"Hello\"[1]);\n    return 0;\n}",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "Predict the output (comparison by address):\n#include <stdio.h>\n#include <string.h>\nint main()\n{\n    char s1[] = \"abc\", s2[] = \"abc\";\n    if (s1 == s2)\n        printf(\"Same \");\n    else\n        printf(\"Diff \");\n    if (strcmp(s1, s2) == 0)\n        printf(\"Equal\");\n    else\n        printf(\"Unequal\");\n    return 0;\n}",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\n#include <ctype.h>\nint main()\n{\n    char s[] = \"aBc1\";\n    int i;\n    for (i = 0; s[i] != '\\0'; i++)\n        s[i] = toupper(s[i]);\n    printf(\"%s\", s);\n    return 0;\n}",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "Predict the output (loop with condition on characters):\n#include <stdio.h>\nint main()\n{\n    char s[] = \"programming\";\n    int i, c = 0;\n    for (i = 0; s[i]; i++)\n        if (s[i] == 'g' || s[i] == 'm')\n            c++;\n    printf(\"%d\", c);\n    return 0;\n}",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "Predict the output (strcmp sign only):\n#include <stdio.h>\n#include <string.h>\nint main()\n{\n    printf(\"%d %d %d\", strcmp(\"abc\", \"abd\") < 0,\n           strcmp(\"b\", \"a\") > 0, strcmp(\"hi\", \"hi\") == 0);\n    return 0;\n}",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "Predict the output (pointer on a string):\n#include <stdio.h>\nint main()\n{\n    char s[] = \"abcdef\";\n    char *p = s + 5;\n    while (p >= s)\n    {\n        printf(\"%c\", *p);\n        p -= 2;\n        if (p < s)\n            break;\n    }\n    return 0;\n}",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "Identify the problem in each statement: char s[10]; s = \"Hi\"; \u00b7 char c = \"A\"; \u00b7 if (s1 == \"abc\") \u00b7 char s[3] = \"abc\"; (no room for '\\0') \u00b7 strcpy(\"Hi\", s);",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "The program crashes. Find the cause:\n#include <stdio.h>\nint main()\n{\n    char *p = \"hello\";\n    p[0] = 'J';\n    printf(\"%s\", p);\n    return 0;\n}",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "Find the bug in this length function:\nint len(char s[])\n{\n    int i = 0;\n    while (s[i] != 0)\n        i++;\n    return i + 1;\n}",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "Complete the code to reverse a string in place:\nint i = 0, j = strlen(s) - 1;\nchar t;\nwhile (i ______ j)\n{\n    t = s[i];\n    s[i] = ______;\n    s[j] = ______;\n    i++;\n    j--;\n}",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "What is printed by printf(\"%d\", sizeof(\"Hello\")); and by printf(\"%d\", strlen(\"Hello\")); (assume correct casting)?",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "What happens if a string longer than the array size is read with scanf(\"%s\")?",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "Why does scanf(\"%s\", s) need no & while scanf(\"%d\", &n) does?",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "What does strcmp(\"Apple\", \"apple\") return a positive, negative or zero value, and why? (Consider ASCII values.)",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "What is the length of the string \"ab\\0cd\"? What does printf(\"%s\") print for it?",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "After char s[] = \"abc\"; s[1] = 0; what are strlen(s) and sizeof(s)?",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "Write a program that reads a sentence and prints each word on a separate line and the word count, without using strtok.",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "Write a program that checks whether a sentence is a palindrome ignoring spaces and letter case.",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "Write a program that compresses \"aaabbc\" into \"a3b2c1\".",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "Write a function that returns the length of a string using pointers (Units 10, 11).",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "Store names and marks of students in an array of structures and sort by name (Units 6, 13).",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "Use malloc to allocate memory for a string entered by the user and free it (Unit 15).",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "Menu-driven string operations (length, reverse, copy, compare, concatenate) using switch (Unit 5).",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "Predict the output of a program that passes a string to a function that changes its first character (Units 10, 11).",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "A string needs one extra byte for '\\0'.",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "String literals should not be modified; use a char array if modification is needed.",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "scanf(\"%s\") stops at whitespace; fgets reads a full line and keeps the newline.",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "strlen counts up to but not including '\\0'; sizeof counts the whole array.",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "strcmp returns 0 for equal strings, not 1; only the sign of the other results is portable.",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "Assignment s = \"text\" is invalid for arrays; use strcpy.",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      },
      {
        "q": "strcat and strcpy do not check destination size.",
        "a": "**Answer:**\nThis string concept manages character array buffers, null byte termination, and string library operations in C."
      }
    ],
    "practicals": [
      "Write an algorithm and flowchart to count vowels in a string.",
      "Write an algorithm and flowchart to check whether a string is a palindrome."
    ],
    "syllabus": {
      "concepts": [
        "String as a null-terminated char array",
        "declaration and initialization (char s[] = \"...\", char s[10], char *s)",
        "null character '\\0'",
        "size vs length",
        "reading/printing (scanf, gets/fgets, printf, puts)",
        "library functions from <string.h> (strlen, strcpy, strncpy, strcat, strcmp, strncmp, strchr, strstr)",
        "<ctype.h> (toupper, tolower, isalpha, isdigit, isspace)",
        "array of strings (2-D char array)",
        "string manipulation using loops and pointers",
        "string literals are not modifiable via char *."
      ],
      "checklist": [
        "Write length, copy, concatenate, compare, reverse and palindrome without library functions.",
        "Practise sizeof vs strlen and early '\\0' outputs.",
        "Know vowel/consonant/word counting loops.",
        "Memorise string.h and ctype.h functions and their return values."
      ]
    }
  },
  {
    "id": "unit13",
    "title": "Unit 13: Structure and Union",
    "questions": [
      {
        "q": "What is a structure? Why is it needed?",
        "a": "**Definition:**\nA structure (`struct`) is a user-defined composite data type that groups related variables of **different (heterogeneous) data types** under a single record name in contiguous memory.\n\n**Syntax:**\n```c\nstruct Student {\n    int roll;\n    char name[50];\n    float marks;\n};\n```"
      },
      {
        "q": "Write the syntax to define a structure and declare its variables.",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "What is a union?",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "MCQ: The member access operator for a pointer to a structure is (a) . (b) -> (c) :: (d) &. (Ans: b)",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "True/False: All members of a union can hold values at the same time. (Ans: False)",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "Fill in: The keyword used to give an alias name to an existing type is ______. (Ans: typedef)",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "Explain structures with a program to read and display the details of one student.",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "Explain array of structures with an example.",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "Explain nested structures with an example.",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "Explain unions with an example and state their advantages.",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "Explain how structures can be passed to functions.",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "What is typedef? Show how it simplifies structure declarations.",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "Why can't two structure variables be compared using ==? How should they be compared?",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "How is the memory for a structure different from the memory for a union?",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "What happens when you write to one member of a union and read another?",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "Why does sizeof(struct) sometimes exceed the sum of member sizes?",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "When would you choose an array of structures over parallel arrays?",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "Structure vs union \u00b7 structure vs array \u00b7 . vs -> \u00b7 structure vs class (concept) \u00b7 pass structure by value vs by address \u00b7 struct vs typedef struct.",
        "a": "**Key Differences Between Structure and Union:**\n1. **Memory Allocation:** In a `struct`, each member has its own separate memory; total size $\\ge$ sum of member sizes. In a `union`, all members **share the same memory location**; total size equals the size of its largest member.\n2. **Accessing Members:** In a `struct`, all members can be accessed simultaneously. In a `union`, only **one member can hold a valid value at any given time**.\n3. **Keyword:** `struct` vs `union`.\n4. **Use Case:** `struct` models records (e.g., student record); `union` is used for memory-saving variant records or hardware register overlays."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\nstruct P\n{\n    int x;\n    int y;\n};\nint main()\n{\n    struct P a = {3, 4};\n    struct P b = a;\n    b.x = 10;\n    printf(\"%d %d %d\", a.x, b.x, b.y);\n    return 0;\n}",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "Predict the output (partial initialization):\n#include <stdio.h>\nstruct P\n{\n    int x;\n    int y;\n};\nint main()\n{\n    struct P a = {5};\n    printf(\"%d %d\", a.x, a.y);\n    return 0;\n}",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "Predict the output (pass by value):\n#include <stdio.h>\nstruct P\n{\n    int x;\n};\nvoid inc(struct P p)\n{\n    p.x++;\n}\nvoid incAddr(struct P *p)\n{\n    p->x++;\n}\nint main()\n{\n    struct P a = {1};\n    inc(a);\n    printf(\"%d \", a.x);\n    incAddr(&a);\n    printf(\"%d\", a.x);\n    return 0;\n}",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "Predict the output (pointer to structure):\n#include <stdio.h>\nstruct S\n{\n    int id;\n    float m;\n};\nint main()\n{\n    struct S s = {1, 50.5f};\n    struct S *p = &s;\n    p->id = 7;\n    printf(\"%d %.1f\", s.id, (*p).m);\n    return 0;\n}",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "Predict the output (array of structures):\n#include <stdio.h>\nstruct S\n{\n    int id;\n    int m;\n};\nint main()\n{\n    struct S st[3] = {{1, 10}, {2, 20}, {3, 30}};\n    int i, t = 0;\n    for (i = 0; i < 3; i++)\n        t += st[i].id * st[i].m;\n    printf(\"%d\", t);\n    return 0;\n}",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "Predict the output (nested structure):\n#include <stdio.h>\nstruct D\n{\n    int d, m, y;\n};\nstruct E\n{\n    char n[10];\n    struct D dob;\n};\nint main()\n{\n    struct E e = {\"Raj\", {5, 6, 2000}};\n    printf(\"%s %d\", e.n, e.dob.y);\n    return 0;\n}",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "Predict the output (union overwriting):\n#include <stdio.h>\nunion V\n{\n    int i;\n    float f;\n};\nint main()\n{\n    union V v;\n    v.i = 10;\n    v.f = 2.5f;\n    printf(\"%.1f\", v.f);\n    return 0;\n}",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "Predict the output (assume 4-byte int, 8-byte double):\n#include <stdio.h>\nunion U\n{\n    int a;\n    int b;\n    char c;\n};\nint main()\n{\n    union U u;\n    u.a = 5;\n    printf(\"%d %d\", u.b, (int)sizeof(u));\n    return 0;\n}",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "Predict the output with typedef:\n#include <stdio.h>\ntypedef struct\n{\n    int x;\n    int y;\n} Pt;\nPt add(Pt a, Pt b)\n{\n    Pt r;\n    r.x = a.x + b.x;\n    r.y = a.y + b.y;\n    return r;\n}\nint main()\n{\n    Pt p = {1, 2}, q = {3, 4}, s;\n    s = add(p, q);\n    printf(\"%d %d\", s.x, s.y);\n    return 0;\n}",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "Find the errors:\n#include <stdio.h>\nstruct S\n{\n    int a = 5;\n    char name[10];\n}\nint main()\n{\n    struct S s;\n    s.name = \"Raj\";\n    S.a = 10;\n    return 0;\n}",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "Find the errors:\nstruct P { int x, y; };\nstruct P a = {1, 2}, b = {1, 2};\nstruct P *p = &a;\nif (a == b)\n    printf(\"Equal\");\nprintf(\"%d\", p.x);",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "Find the error: struct P c; c = {3, 4}; and suggest two valid ways.",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "Complete the missing code to find the student with the highest marks:\nstruct S { char name[20]; int marks; } st[5];\nint i, top = 0;\nfor (i = 1; i < 5; i++)\n    if (st[i].______ > st[______].marks)\n        top = ______;\nprintf(\"%s\", st[top].______);",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "Can a structure contain a member of its own type? A pointer to its own type? Explain.",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "Can a structure be assigned to another structure of the same type using =? What is copied?",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "Can a union member be initialized at declaration? Which member gets the value?",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "Give an example showing that sizeof of a structure with char, int, char members may differ from sizeof of the same members in a different order (assume 4-byte int).",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "After a structure is passed by value to a function that changes a member, is the original changed? What if the structure contains an array?",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "Can a function return a structure? Can it return an array?",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "Create a structure for a bank account (account number, name, balance) and write menu-driven functions to deposit, withdraw and display, using an array of accounts and a switch menu.",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "Use a union inside a structure to store either an integer ID or a string ID, with a flag member that tells which is valid.",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "Write a function that returns the structure of the student with the highest average from an array of structures.",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "Store N student records and print them in tabular format with width specifiers (Unit 9).",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "Pointer to an array of structures, traverse with p++ and -> (Unit 11).",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "Allocate memory for N structures with malloc, read values and free memory (Unit 15).",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "Implement a stack whose elements are structures (Unit 14).",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "Structure containing a string and an array member, passed to a function (Units 6, 10, 12).",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "Members cannot be initialized inside the structure definition.",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "A semicolon is required after the closing brace of a structure definition.",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "Structure variables can be assigned with = but not compared with ==.",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "Structures are passed by value; arrays inside them are copied too.",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "Union size equals the size of its largest member (plus padding).",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "In a union only the most recently written member has a valid value.",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "Use -> with pointers and . with variables.",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      },
      {
        "q": "String members need strcpy, not =, for assignment.",
        "a": "**Answer:**\nThis composite data structure concept allows structured data modeling, heterogeneous aggregation, and union memory conservation."
      }
    ],
    "practicals": [
      "Write an algorithm and flowchart to read and display the records of N students.",
      "Write an algorithm for finding the topper from an array of structures."
    ],
    "syllabus": {
      "concepts": [
        "Structure definition, variable declaration, initialization (full, partial)",
        "accessing members (. and ->)",
        "array of structures",
        "nested structures",
        "structures and functions (pass by value, by address, return a structure)",
        "pointer to structure",
        "typedef",
        "structure assignment (copy)",
        "memory layout and padding (concept only)",
        "union: shared memory, size = largest member, only one active member",
        "structure vs union",
        "self-referential structure (concept only)",
        "bit fields (not required)."
      ],
      "checklist": [
        "Write the student-record program with an array of structures and a topper search.",
        "Practise . vs -> and pass-by-value vs pass-by-address outputs.",
        "Be able to explain structure vs union memory with a diagram.",
        "Practise typedef, nested structure and partial initialization outputs."
      ]
    }
  },
  {
    "id": "unit14",
    "title": "Unit 14: Data Structure: Stack and Queue",
    "questions": [
      {
        "q": "What is a stack? State its principle of working.",
        "a": "**Definition:**\nA stack is a linear, restricted data structure that follows the **LIFO (Last In, First Out)** principle: the element inserted last is the first element to be removed.\nAll insertions and deletions occur at a single end called the **Top**.\n\n**Fundamental Operations:**\n1. `push(x)`: Inserts element `x` onto the top of the stack.\n2. `pop()`: Removes and returns the top element.\n3. `peek()`: Inspects the top element without removing it.\n4. `isEmpty()` / `isFull()`: Status tests."
      },
      {
        "q": "What is a queue? State its principle of working.",
        "a": "**Definition:**\nA queue is a linear data structure that follows the **FIFO (First In, First Out)** principle: elements are inserted at the **Rear** and removed from the **Front**.\n\n**Fundamental Operations:**\n1. `enqueue(x)`: Inserts element `x` at the rear.\n2. `dequeue()`: Deletes and returns the element at the front."
      },
      {
        "q": "Define overflow and underflow with respect to a stack and a queue.",
        "a": "**Conditions:**\n1. **Stack Overflow:** Attempting to `push` an element when the stack array is already full (`top == MAX - 1`).\n2. **Stack Underflow:** Attempting to `pop` an element from an empty stack (`top == -1`).\n3. **Queue Overflow:** Attempting to `enqueue` when rear reaches end of buffer.\n4. **Queue Underflow:** Attempting to `dequeue` from an empty queue."
      },
      {
        "q": "What are the basic operations of a stack and of a queue?",
        "a": "**Answer:**\nThis data structure principle governs abstract data types, buffer management, and runtime stack frame operations."
      },
      {
        "q": "MCQ: Which data structure uses LIFO? (a) queue (b) stack (c) array (d) string. (Ans: b)",
        "a": "**Answer:**\nThis data structure principle governs abstract data types, buffer management, and runtime stack frame operations."
      },
      {
        "q": "True/False: In a queue, insertion takes place at the front. (Ans: False, at the rear)",
        "a": "**Answer:**\nThis data structure principle governs abstract data types, buffer management, and runtime stack frame operations."
      },
      {
        "q": "Fill in: A stack with top = -1 is ______. (Ans: empty)",
        "a": "**Answer:**\nThis data structure principle governs abstract data types, buffer management, and runtime stack frame operations."
      },
      {
        "q": "Explain the stack operations with an array implementation and diagram.",
        "a": "**Answer:**\nThis data structure principle governs abstract data types, buffer management, and runtime stack frame operations."
      },
      {
        "q": "Explain the queue operations with an array implementation and diagram.",
        "a": "**Answer:**\nThis data structure principle governs abstract data types, buffer management, and runtime stack frame operations."
      },
      {
        "q": "Explain the applications of stack and queue.",
        "a": "**Answer:**\nThis data structure principle governs abstract data types, buffer management, and runtime stack frame operations."
      },
      {
        "q": "Explain the problem of a linear queue and how a circular queue solves it.",
        "a": "**Circular Queue:**\nA linear queue implemented with an array suffers from 'false overflow': slots vacated by dequeue operations at the front cannot be reused once rear reaches `MAX - 1`.\nA **circular queue** treats the array as a ring by wrapping indices around using the modulo operator:\n`rear = (rear + 1) % MAX;`\n`front = (front + 1) % MAX;`"
      },
      {
        "q": "Differentiate between stack and queue.",
        "a": "**Answer:**\nThis data structure principle governs abstract data types, buffer management, and runtime stack frame operations."
      },
      {
        "q": "Why is a stack used to keep track of function calls and recursion?",
        "a": "**Answer:**\nThis data structure principle governs abstract data types, buffer management, and runtime stack frame operations."
      },
      {
        "q": "Why does top start at -1 in an array-based stack? What changes if it starts at 0?",
        "a": "**Answer:**\nThis data structure principle governs abstract data types, buffer management, and runtime stack frame operations."
      },
      {
        "q": "Why can a linear queue report \"full\" even though array positions at the front are empty?",
        "a": "**Answer:**\nThis data structure principle governs abstract data types, buffer management, and runtime stack frame operations."
      },
      {
        "q": "What is the condition for an empty and a full circular queue when using a counter?",
        "a": "**Circular Queue:**\nA linear queue implemented with an array suffers from 'false overflow': slots vacated by dequeue operations at the front cannot be reused once rear reaches `MAX - 1`.\nA **circular queue** treats the array as a ring by wrapping indices around using the modulo operator:\n`rear = (rear + 1) % MAX;`\n`front = (front + 1) % MAX;`"
      },
      {
        "q": "Why is checking for underflow before pop or dequeue essential?",
        "a": "**Answer:**\nThis data structure principle governs abstract data types, buffer management, and runtime stack frame operations."
      },
      {
        "q": "Stack vs queue \u00b7 linear vs circular queue \u00b7 array vs linked implementation (concept) \u00b7 pop vs peek \u00b7 overflow vs underflow \u00b7 push vs enqueue.",
        "a": "**Circular Queue:**\nA linear queue implemented with an array suffers from 'false overflow': slots vacated by dequeue operations at the front cannot be reused once rear reaches `MAX - 1`.\nA **circular queue** treats the array as a ring by wrapping indices around using the modulo operator:\n`rear = (rear + 1) % MAX;`\n`front = (front + 1) % MAX;`"
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\n#define MAX 5\nint st[MAX], top = -1;\nvoid push(int x)\n{\n    if (top == MAX - 1)\n    {\n        printf(\"Overflow \");\n        return;\n    }\n    st[++top] = x;\n}\nint pop(void)\n{\n    if (top == -1)\n    {\n        printf(\"Underflow \");\n        return -1;\n    }\n    return st[top--];\n}\nint main()\n{\n    push(1);\n    push(2);\n    push(3);\n    printf(\"%d \", pop());\n    push(4);\n    printf(\"%d \", pop());\n    printf(\"%d \", pop());\n    printf(\"%d \", pop());\n    printf(\"%d\", pop());\n    return 0;\n}",
        "a": "**Answer:**\nThis data structure principle governs abstract data types, buffer management, and runtime stack frame operations."
      },
      {
        "q": "Trace: push 10, push 20, push 30, pop, push 40, pop, pop. List the stack contents and top after each operation, and give the final contents.",
        "a": "**Answer:**\nThis data structure principle governs abstract data types, buffer management, and runtime stack frame operations."
      },
      {
        "q": "Trace a linear queue of size 5: enqueue 5, enqueue 10, enqueue 15, dequeue, enqueue 20, dequeue. Give front, rear and the contents after every step.",
        "a": "**Answer:**\nThis data structure principle governs abstract data types, buffer management, and runtime stack frame operations."
      },
      {
        "q": "Predict the output (stack used to reverse a word):\n#include <stdio.h>\nint main()\n{\n    char s[] = \"stack\", st[10];\n    int i, top = -1;\n    for (i = 0; s[i] != '\\0'; i++)\n        st[++top] = s[i];\n    while (top >= 0)\n        printf(\"%c\", st[top--]);\n    return 0;\n}",
        "a": "**Answer:**\nThis data structure principle governs abstract data types, buffer management, and runtime stack frame operations."
      },
      {
        "q": "Evaluate the postfix expression 5 3 + 2 * 4 - using a stack and show the stack after every token.",
        "a": "**Answer:**\nThis data structure principle governs abstract data types, buffer management, and runtime stack frame operations."
      },
      {
        "q": "Convert to postfix, showing the operator stack: A + B * C, (A + B) * C, A * B + C / D.",
        "a": "**Answer:**\nThis data structure principle governs abstract data types, buffer management, and runtime stack frame operations."
      },
      {
        "q": "Predict the output (queue with array):\n#include <stdio.h>\nint main()\n{\n    int q[5], front = 0, rear = -1, i;\n    for (i = 1; i <= 4; i++)\n        q[++rear] = i * 10;\n    printf(\"%d \", q[front++]);\n    printf(\"%d \", q[front++]);\n    q[++rear] = 50;\n    while (front <= rear)\n        printf(\"%d \", q[front++]);\n    return 0;\n}",
        "a": "**Answer:**\nThis data structure principle governs abstract data types, buffer management, and runtime stack frame operations."
      },
      {
        "q": "For a circular queue of size 5 using (rear + 1) % 5, with rear = 4, what is the new value of rear after an enqueue? Show a sequence of operations in which rear < front and explain why the queue is not empty.",
        "a": "**Circular Queue:**\nA linear queue implemented with an array suffers from 'false overflow': slots vacated by dequeue operations at the front cannot be reused once rear reaches `MAX - 1`.\nA **circular queue** treats the array as a ring by wrapping indices around using the modulo operator:\n`rear = (rear + 1) % MAX;`\n`front = (front + 1) % MAX;`"
      },
      {
        "q": "Find the error:\n#define MAX 3\nint st[MAX], top = -1;\nvoid push(int x)\n{\n    if (top == MAX)\n        printf(\"Overflow\");\n    else\n        st[++top] = x;\n}",
        "a": "**Answer:**\nThis data structure principle governs abstract data types, buffer management, and runtime stack frame operations."
      },
      {
        "q": "Find the logical error in pop and in isEmpty:\nint pop(void)\n{\n    return st[top--];\n}\nint isEmpty(void)\n{\n    return top == 0;\n}",
        "a": "**Answer:**\nThis data structure principle governs abstract data types, buffer management, and runtime stack frame operations."
      },
      {
        "q": "The queue shows \"Full\" even after several dequeues. Which problem is this and what is the fix?",
        "a": "**Answer:**\nThis data structure principle governs abstract data types, buffer management, and runtime stack frame operations."
      },
      {
        "q": "Complete the missing code for dequeue in a circular queue with a count variable:\nint dequeue(void)\n{\n    int x;\n    if (count == ______)\n    {\n        printf(\"Underflow\");\n        return -1;\n    }\n    x = q[front];\n    front = (______ + 1) % MAX;\n    count--;\n    return x;\n}",
        "a": "**Circular Queue:**\nA linear queue implemented with an array suffers from 'false overflow': slots vacated by dequeue operations at the front cannot be reused once rear reaches `MAX - 1`.\nA **circular queue** treats the array as a ring by wrapping indices around using the modulo operator:\n`rear = (rear + 1) % MAX;`\n`front = (front + 1) % MAX;`"
      },
      {
        "q": "After pushing 1, 2, 3, 4 into a stack and popping twice, what is the value of top (array-based, starting at -1)? Which element is returned by the next peek?",
        "a": "**Answer:**\nThis data structure principle governs abstract data types, buffer management, and runtime stack frame operations."
      },
      {
        "q": "Can a queue be implemented using two stacks? Describe the idea in a few sentences.",
        "a": "**Answer:**\nThis data structure principle governs abstract data types, buffer management, and runtime stack frame operations."
      },
      {
        "q": "Can you access the middle element of a stack without popping? Does this violate the stack concept?",
        "a": "**Answer:**\nThis data structure principle governs abstract data types, buffer management, and runtime stack frame operations."
      },
      {
        "q": "What is the maximum number of elements in an array-based circular queue of size N using the (rear + 1) % N == front full condition?",
        "a": "**Circular Queue:**\nA linear queue implemented with an array suffers from 'false overflow': slots vacated by dequeue operations at the front cannot be reused once rear reaches `MAX - 1`.\nA **circular queue** treats the array as a ring by wrapping indices around using the modulo operator:\n`rear = (rear + 1) % MAX;`\n`front = (front + 1) % MAX;`"
      },
      {
        "q": "How does the order of elements change when a queue is emptied into a stack and then the stack into a queue?",
        "a": "**Answer:**\nThis data structure principle governs abstract data types, buffer management, and runtime stack frame operations."
      },
      {
        "q": "Write a program that sorts the values in a stack using only another stack (no arrays).",
        "a": "**Answer:**\nThis data structure principle governs abstract data types, buffer management, and runtime stack frame operations."
      },
      {
        "q": "Simulate a printer queue where jobs have an ID and number of pages, and print the order of service and total pages.",
        "a": "**Answer:**\nThis data structure principle governs abstract data types, buffer management, and runtime stack frame operations."
      },
      {
        "q": "Implement two stacks in one array of size N growing from opposite ends, with overflow detection.",
        "a": "**Answer:**\nThis data structure principle governs abstract data types, buffer management, and runtime stack frame operations."
      },
      {
        "q": "Menu-driven stack program using switch inside a do-while loop (Unit 5).",
        "a": "**Answer:**\nThis data structure principle governs abstract data types, buffer management, and runtime stack frame operations."
      },
      {
        "q": "Stack of characters for string reversal (Unit 12).",
        "a": "**Answer:**\nThis data structure principle governs abstract data types, buffer management, and runtime stack frame operations."
      },
      {
        "q": "Stack or queue of structures such as student records (Unit 13).",
        "a": "**Answer:**\nThis data structure principle governs abstract data types, buffer management, and runtime stack frame operations."
      },
      {
        "q": "Dynamic stack where the array is created with malloc and its size read from the user (Unit 15).",
        "a": "**Answer:**\nThis data structure principle governs abstract data types, buffer management, and runtime stack frame operations."
      },
      {
        "q": "Explain the relation between the call stack and a recursive function (Unit 10).",
        "a": "**Answer:**\nThis data structure principle governs abstract data types, buffer management, and runtime stack frame operations."
      },
      {
        "q": "top == MAX - 1 is the overflow condition when top starts at -1; top == -1 is empty.",
        "a": "**Answer:**\nThis data structure principle governs abstract data types, buffer management, and runtime stack frame operations."
      },
      {
        "q": "pop and dequeue must check for underflow; push and enqueue must check for overflow.",
        "a": "**Answer:**\nThis data structure principle governs abstract data types, buffer management, and runtime stack frame operations."
      },
      {
        "q": "A linear queue can show \"full\" even with free slots at the front; a circular queue fixes this.",
        "a": "**Circular Queue:**\nA linear queue implemented with an array suffers from 'false overflow': slots vacated by dequeue operations at the front cannot be reused once rear reaches `MAX - 1`.\nA **circular queue** treats the array as a ring by wrapping indices around using the modulo operator:\n`rear = (rear + 1) % MAX;`\n`front = (front + 1) % MAX;`"
      },
      {
        "q": "The circular index formula uses % MAX.",
        "a": "**Answer:**\nThis data structure principle governs abstract data types, buffer management, and runtime stack frame operations."
      },
      {
        "q": "Stack order is reverse; queue order is same as insertion.",
        "a": "**Answer:**\nThis data structure principle governs abstract data types, buffer management, and runtime stack frame operations."
      },
      {
        "q": "Infix expressions need precedence rules; postfix does not need parentheses.",
        "a": "**Answer:**\nThis data structure principle governs abstract data types, buffer management, and runtime stack frame operations."
      }
    ],
    "practicals": [
      "Write algorithms for push and pop and draw their flowcharts.",
      "Write algorithms for enqueue and dequeue and draw their flowcharts.",
      "Write the algorithm for checking balanced parentheses."
    ],
    "syllabus": {
      "concepts": [
        "Data structure: definition and classification (linear vs non-linear)",
        "Stack: LIFO, top, overflow, underflow, operations push, pop, peek, isEmpty, isFull",
        "array implementation",
        "applications (reversing a string, balanced parentheses, expression evaluation, infix to postfix, function calls/recursion, undo)",
        "Queue: FIFO, front, rear, enqueue, dequeue, overflow/underflow",
        "linear queue and its wasted space",
        "circular queue (rear + 1) % MAX",
        "applications (scheduling, buffers, printer queue)",
        "array vs linked implementation (concept)",
        "structures for stack/queue (Unit 13)."
      ],
      "checklist": [
        "Write the menu-driven array stack and queue programs from memory.",
        "Dry-run push/pop/enqueue/dequeue sequences with top, front, rear.",
        "Practise postfix evaluation and infix-to-postfix on two or three expressions.",
        "Know overflow/underflow conditions and the circular queue formula."
      ]
    }
  },
  {
    "id": "unit15",
    "title": "Unit 15: Dynamic Memory Allocation",
    "questions": [
      {
        "q": "What is dynamic memory allocation? Why is it needed?",
        "a": "**Definition:**\nDynamic Memory Allocation (DMA) is the mechanism by which memory is allocated and released manually from the **Heap** at runtime while the program is executing, rather than at compile time.\n\n**Why Needed:**\n1. Avoids allocating fixed-size arrays that waste memory or cause overflow.\n2. Allows data structures to grow and shrink dynamically based on user demand."
      },
      {
        "q": "List the four DMA functions with the header file in which they are declared.",
        "a": "**The Four DMA Functions (Declared in `<stdlib.h>`):**\n1. `malloc(size)`: Allocates `size` uninitialized bytes from the heap.\n2. `calloc(n, size)`: Allocates `n * size` contiguous bytes and **initializes every byte to zero (0)**.\n3. `realloc(ptr, new_size)`: Dynamically reallocates and resizes an existing heap block.\n4. `free(ptr)`: Releases allocated heap memory back to the system."
      },
      {
        "q": "What does malloc return when it fails?",
        "a": "**Answer: `NULL`**\n\n**Explanation:**\nIf the heap has insufficient memory to satisfy an allocation request, `malloc()` fails and returns a `NULL` pointer.\nTherefore, programmers must **always check** the returned pointer:\n`if (ptr == NULL) { printf(\"Memory allocation failed!\\n\"); exit(1); }`."
      },
      {
        "q": "MCQ: Which function initializes the allocated memory to zero? (a) malloc (b) calloc (c) realloc (d) free. (Ans: b)",
        "a": "**`realloc()` Operation:**\nResizes a previously allocated heap memory block:\n1. **Expansion in-place:** If sufficient contiguous memory exists after the current block, it expands the block and returns the original address.\n2. **Relocation:** If space is unavailable, it allocates a new block elsewhere, copies the old data over, frees the old block, and returns the new address.\n3. **Safe Pattern:**\n```c\nint *temp = realloc(p, new_size);\nif (temp != NULL) p = temp;\nelse { /* handle error without losing p */ }\n```"
      },
      {
        "q": "True/False: Memory allocated with malloc is released automatically when the function returns. (Ans: False)",
        "a": "**Answer:**\nThis dynamic memory allocation principle governs heap management, prevents memory leaks, and enables runtime scalability in C."
      },
      {
        "q": "Fill in: The function used to change the size of previously allocated memory is ______. (Ans: realloc)",
        "a": "**`realloc()` Operation:**\nResizes a previously allocated heap memory block:\n1. **Expansion in-place:** If sufficient contiguous memory exists after the current block, it expands the block and returns the original address.\n2. **Relocation:** If space is unavailable, it allocates a new block elsewhere, copies the old data over, frees the old block, and returns the new address.\n3. **Safe Pattern:**\n```c\nint *temp = realloc(p, new_size);\nif (temp != NULL) p = temp;\nelse { /* handle error without losing p */ }\n```"
      },
      {
        "q": "Explain malloc() and calloc() with syntax and examples.",
        "a": "**Answer:**\nThis dynamic memory allocation principle governs heap management, prevents memory leaks, and enables runtime scalability in C."
      },
      {
        "q": "Explain realloc() and free() with examples.",
        "a": "**`realloc()` Operation:**\nResizes a previously allocated heap memory block:\n1. **Expansion in-place:** If sufficient contiguous memory exists after the current block, it expands the block and returns the original address.\n2. **Relocation:** If space is unavailable, it allocates a new block elsewhere, copies the old data over, frees the old block, and returns the new address.\n3. **Safe Pattern:**\n```c\nint *temp = realloc(p, new_size);\nif (temp != NULL) p = temp;\nelse { /* handle error without losing p */ }\n```"
      },
      {
        "q": "Differentiate between static and dynamic memory allocation.",
        "a": "**Answer:**\nThis dynamic memory allocation principle governs heap management, prevents memory leaks, and enables runtime scalability in C."
      },
      {
        "q": "Differentiate between malloc and calloc.",
        "a": "**Key Differences:**\n1. **Parameters:** `malloc(size_in_bytes)` takes 1 argument; `calloc(num_elements, size_of_each)` takes 2 arguments.\n2. **Initialization:** `malloc` leaves memory uninitialized (containing garbage values); `calloc` automatically **initializes all bits to zero (0)**.\n3. **Execution Speed:** `malloc` is slightly faster because it skips the memory zeroing pass."
      },
      {
        "q": "What is a memory leak? How can it be avoided?",
        "a": "**Memory Leak:**\nOccurs when memory is allocated on the heap via `malloc` or `calloc` but is never released using `free()` after it is no longer needed.\nIf pointers referencing that memory are overwritten or go out of scope, that memory remains permanently reserved until program termination, depleting available system RAM.\n**Prevention:** Every dynamic allocation must have a corresponding `free()` call."
      },
      {
        "q": "Why is the returned pointer from malloc of type void *, and why do we usually cast it?",
        "a": "**Answer:**\nThis dynamic memory allocation principle governs heap management, prevents memory leaks, and enables runtime scalability in C."
      },
      {
        "q": "Why must the return value of malloc always be checked against NULL?",
        "a": "**Answer:**\nThis dynamic memory allocation principle governs heap management, prevents memory leaks, and enables runtime scalability in C."
      },
      {
        "q": "What is the difference between the memory used by local variables and the memory from malloc?",
        "a": "**Answer:**\nThis dynamic memory allocation principle governs heap management, prevents memory leaks, and enables runtime scalability in C."
      },
      {
        "q": "What are dangling pointers and how are they created by free? How are they avoided?",
        "a": "**Answer:**\nThis dynamic memory allocation principle governs heap management, prevents memory leaks, and enables runtime scalability in C."
      },
      {
        "q": "Why does realloc sometimes return a different address? What should be done with the old pointer?",
        "a": "**`realloc()` Operation:**\nResizes a previously allocated heap memory block:\n1. **Expansion in-place:** If sufficient contiguous memory exists after the current block, it expands the block and returns the original address.\n2. **Relocation:** If space is unavailable, it allocates a new block elsewhere, copies the old data over, frees the old block, and returns the new address.\n3. **Safe Pattern:**\n```c\nint *temp = realloc(p, new_size);\nif (temp != NULL) p = temp;\nelse { /* handle error without losing p */ }\n```"
      },
      {
        "q": "Static vs dynamic allocation \u00b7 malloc vs calloc \u00b7 realloc vs malloc \u00b7 stack vs heap \u00b7 array vs dynamically allocated array \u00b7 free(p) vs p = NULL.",
        "a": "**`realloc()` Operation:**\nResizes a previously allocated heap memory block:\n1. **Expansion in-place:** If sufficient contiguous memory exists after the current block, it expands the block and returns the original address.\n2. **Relocation:** If space is unavailable, it allocates a new block elsewhere, copies the old data over, frees the old block, and returns the new address.\n3. **Safe Pattern:**\n```c\nint *temp = realloc(p, new_size);\nif (temp != NULL) p = temp;\nelse { /* handle error without losing p */ }\n```"
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\n#include <stdlib.h>\nint main()\n{\n    int *p = (int *)malloc(3 * sizeof(int));\n    int i;\n    if (p == NULL)\n        return 1;\n    for (i = 0; i < 3; i++)\n        p[i] = (i + 1) * 10;\n    printf(\"%d\", p[0] + p[1] + p[2]);\n    free(p);\n    return 0;\n}",
        "a": "**Answer:**\nThis dynamic memory allocation principle governs heap management, prevents memory leaks, and enables runtime scalability in C."
      },
      {
        "q": "Predict the output:\n#include <stdio.h>\n#include <stdlib.h>\nint main()\n{\n    int *p = (int *)calloc(4, sizeof(int));\n    if (p == NULL)\n        return 1;\n    printf(\"%d %d\", p[0], p[3]);\n    free(p);\n    return 0;\n}",
        "a": "**Answer:**\nThis dynamic memory allocation principle governs heap management, prevents memory leaks, and enables runtime scalability in C."
      },
      {
        "q": "Predict the output (realloc):\n#include <stdio.h>\n#include <stdlib.h>\nint main()\n{\n    int *p = (int *)malloc(2 * sizeof(int));\n    int i, s = 0;\n    p[0] = 1;\n    p[1] = 2;\n    p = (int *)realloc(p, 4 * sizeof(int));\n    p[2] = 3;\n    p[3] = 4;\n    for (i = 0; i < 4; i++)\n        s += p[i];\n    printf(\"%d\", s);\n    free(p);\n    return 0;\n}",
        "a": "**`realloc()` Operation:**\nResizes a previously allocated heap memory block:\n1. **Expansion in-place:** If sufficient contiguous memory exists after the current block, it expands the block and returns the original address.\n2. **Relocation:** If space is unavailable, it allocates a new block elsewhere, copies the old data over, frees the old block, and returns the new address.\n3. **Safe Pattern:**\n```c\nint *temp = realloc(p, new_size);\nif (temp != NULL) p = temp;\nelse { /* handle error without losing p */ }\n```"
      },
      {
        "q": "Predict the output (dynamic string):\n#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\nint main()\n{\n    char *s = (char *)malloc(6);\n    strcpy(s, \"Hello\");\n    printf(\"%s %d\", s, (int)strlen(s));\n    free(s);\n    return 0;\n}",
        "a": "**Answer:**\nThis dynamic memory allocation principle governs heap management, prevents memory leaks, and enables runtime scalability in C."
      },
      {
        "q": "Predict the output (dynamic structure):\n#include <stdio.h>\n#include <stdlib.h>\nstruct S\n{\n    int id;\n    int m;\n};\nint main()\n{\n    struct S *s = (struct S *)malloc(sizeof(struct S));\n    s->id = 5;\n    s->m = 80;\n    printf(\"%d %d\", s->id, s->m + 1);\n    free(s);\n    return 0;\n}",
        "a": "**Answer:**\nThis dynamic memory allocation principle governs heap management, prevents memory leaks, and enables runtime scalability in C."
      },
      {
        "q": "Predict the output (2-D dynamic array):\n#include <stdio.h>\n#include <stdlib.h>\nint main()\n{\n    int r = 2, c = 3, i, j, sum = 0;\n    int **m = (int **)malloc(r * sizeof(int *));\n    for (i = 0; i < r; i++)\n        m[i] = (int *)malloc(c * sizeof(int));\n    for (i = 0; i < r; i++)\n        for (j = 0; j < c; j++)\n            m[i][j] = i + j;\n    for (i = 0; i < r; i++)\n        for (j = 0; j < c; j++)\n            sum += m[i][j];\n    printf(\"%d\", sum);\n    for (i = 0; i < r; i++)\n        free(m[i]);\n    free(m);\n    return 0;\n}",
        "a": "**Answer:**\nThis dynamic memory allocation principle governs heap management, prevents memory leaks, and enables runtime scalability in C."
      },
      {
        "q": "Predict the output when the input is 4 followed by 1 2 3 4:\n#include <stdio.h>\n#include <stdlib.h>\nint main()\n{\n    int n, i, *a, max;\n    scanf(\"%d\", &n);\n    a = (int *)malloc(n * sizeof(int));\n    for (i = 0; i < n; i++)\n        scanf(\"%d\", &a[i]);\n    max = a[0];\n    for (i = 1; i < n; i++)\n        if (a[i] > max)\n            max = a[i];\n    printf(\"%d\", max);\n    free(a);\n    return 0;\n}",
        "a": "**Answer:**\nThis dynamic memory allocation principle governs heap management, prevents memory leaks, and enables runtime scalability in C."
      },
      {
        "q": "Predict the output (pointer set to NULL):\n#include <stdio.h>\n#include <stdlib.h>\nint main()\n{\n    int *p = (int *)malloc(sizeof(int));\n    *p = 7;\n    free(p);\n    p = NULL;\n    if (p == NULL)\n        printf(\"Safe\");\n    else\n        printf(\"%d\", *p);\n    return 0;\n}",
        "a": "**Answer:**\nThis dynamic memory allocation principle governs heap management, prevents memory leaks, and enables runtime scalability in C."
      },
      {
        "q": "Find the errors:\n#include <stdio.h>\n#include <stdlib.h>\nint main()\n{\n    int *p = (int *)malloc(5);\n    int i;\n    for (i = 0; i < 5; i++)\n        p[i] = i;\n    free(p);\n    printf(\"%d\", p[2]);\n    return 0;\n}",
        "a": "**Answer:**\nThis dynamic memory allocation principle governs heap management, prevents memory leaks, and enables runtime scalability in C."
      },
      {
        "q": "Why is the following program wrong? Fix it:\nint a[5];\nint *p = a;\nfree(p);",
        "a": "**Answer:**\nThis dynamic memory allocation principle governs heap management, prevents memory leaks, and enables runtime scalability in C."
      },
      {
        "q": "Find the memory problems:\nint *p = (int *)malloc(sizeof(int));\n*p = 10;\np = (int *)malloc(sizeof(int));\n*p = 20;\nfree(p);\nfree(p);",
        "a": "**Answer:**\nThis dynamic memory allocation principle governs heap management, prevents memory leaks, and enables runtime scalability in C."
      },
      {
        "q": "The program may crash when memory is short. What is missing?\nint *a = (int *)malloc(1000000 * sizeof(int));\na[0] = 1;",
        "a": "**Answer:**\nThis dynamic memory allocation principle governs heap management, prevents memory leaks, and enables runtime scalability in C."
      },
      {
        "q": "Why is this realloc usage risky? Rewrite it safely:\nint *p = (int *)malloc(2 * sizeof(int));\np = (int *)realloc(p, 1000000000 * sizeof(int));",
        "a": "**`realloc()` Operation:**\nResizes a previously allocated heap memory block:\n1. **Expansion in-place:** If sufficient contiguous memory exists after the current block, it expands the block and returns the original address.\n2. **Relocation:** If space is unavailable, it allocates a new block elsewhere, copies the old data over, frees the old block, and returns the new address.\n3. **Safe Pattern:**\n```c\nint *temp = realloc(p, new_size);\nif (temp != NULL) p = temp;\nelse { /* handle error without losing p */ }\n```"
      },
      {
        "q": "What is the difference between malloc(n * sizeof(int)) and calloc(n, sizeof(int)) apart from zero-filling?",
        "a": "**Answer:**\nThis dynamic memory allocation principle governs heap management, prevents memory leaks, and enables runtime scalability in C."
      },
      {
        "q": "What happens when malloc(0) is called? When free(NULL) is called?",
        "a": "**Answer:**\nThis dynamic memory allocation principle governs heap management, prevents memory leaks, and enables runtime scalability in C."
      },
      {
        "q": "After p = realloc(p, 0); what could happen? Why do textbooks advise avoiding it?",
        "a": "**`realloc()` Operation:**\nResizes a previously allocated heap memory block:\n1. **Expansion in-place:** If sufficient contiguous memory exists after the current block, it expands the block and returns the original address.\n2. **Relocation:** If space is unavailable, it allocates a new block elsewhere, copies the old data over, frees the old block, and returns the new address.\n3. **Safe Pattern:**\n```c\nint *temp = realloc(p, new_size);\nif (temp != NULL) p = temp;\nelse { /* handle error without losing p */ }\n```"
      },
      {
        "q": "Does free(p) set p to NULL? What is p after the call?",
        "a": "**Answer:**\nThis dynamic memory allocation principle governs heap management, prevents memory leaks, and enables runtime scalability in C."
      },
      {
        "q": "How would you detect the size of a malloc-ed block using sizeof(p)? Why does it not work?",
        "a": "**Answer:**\nThis dynamic memory allocation principle governs heap management, prevents memory leaks, and enables runtime scalability in C."
      },
      {
        "q": "Is it valid to call free on a pointer into the middle of an allocated block, or on a where int a[5];? Explain.",
        "a": "**Answer:**\nThis dynamic memory allocation principle governs heap management, prevents memory leaks, and enables runtime scalability in C."
      },
      {
        "q": "A function returns a pointer to a malloc-ed array. Who is responsible for freeing it? Show the caller code and what happens if free is missed in a loop that runs 1,000 times.",
        "a": "**Answer:**\nThis dynamic memory allocation principle governs heap management, prevents memory leaks, and enables runtime scalability in C."
      },
      {
        "q": "Write a function int *grow(int *a, int oldN, int newN) that returns a bigger array copying old values using malloc and free instead of realloc.",
        "a": "**`realloc()` Operation:**\nResizes a previously allocated heap memory block:\n1. **Expansion in-place:** If sufficient contiguous memory exists after the current block, it expands the block and returns the original address.\n2. **Relocation:** If space is unavailable, it allocates a new block elsewhere, copies the old data over, frees the old block, and returns the new address.\n3. **Safe Pattern:**\n```c\nint *temp = realloc(p, new_size);\nif (temp != NULL) p = temp;\nelse { /* handle error without losing p */ }\n```"
      },
      {
        "q": "Create a 2-D array with all rows allocated in one malloc block of r * c integers and access it as a[i * c + j].",
        "a": "**Answer:**\nThis dynamic memory allocation principle governs heap management, prevents memory leaks, and enables runtime scalability in C."
      },
      {
        "q": "Dynamic array of integers with pointer arithmetic traversal (Units 6, 11).",
        "a": "**Answer:**\nThis dynamic memory allocation principle governs heap management, prevents memory leaks, and enables runtime scalability in C."
      },
      {
        "q": "malloc for strings and strcpy, strcat (Unit 12).",
        "a": "**Answer:**\nThis dynamic memory allocation principle governs heap management, prevents memory leaks, and enables runtime scalability in C."
      },
      {
        "q": "Dynamic array of structures sorted by a member (Units 13, 6).",
        "a": "**Answer:**\nThis dynamic memory allocation principle governs heap management, prevents memory leaks, and enables runtime scalability in C."
      },
      {
        "q": "Menu-driven program with function add_student that returns a pointer to a new structure (Units 5, 10, 13).",
        "a": "**Answer:**\nThis dynamic memory allocation principle governs heap management, prevents memory leaks, and enables runtime scalability in C."
      },
      {
        "q": "Predict the output when a function modifies a dynamically allocated array (Unit 10).",
        "a": "**Answer:**\nThis dynamic memory allocation principle governs heap management, prevents memory leaks, and enables runtime scalability in C."
      },
      {
        "q": "Allocated size is in bytes; use n * sizeof(type).",
        "a": "**Answer:**\nThis dynamic memory allocation principle governs heap management, prevents memory leaks, and enables runtime scalability in C."
      },
      {
        "q": "Always check for NULL.",
        "a": "**Answer:**\nThis dynamic memory allocation principle governs heap management, prevents memory leaks, and enables runtime scalability in C."
      },
      {
        "q": "Every malloc/calloc should have a matching free; only free pointers returned by these functions.",
        "a": "**Answer:**\nThis dynamic memory allocation principle governs heap management, prevents memory leaks, and enables runtime scalability in C."
      },
      {
        "q": "Never use memory after free; set the pointer to NULL.",
        "a": "**Answer:**\nThis dynamic memory allocation principle governs heap management, prevents memory leaks, and enables runtime scalability in C."
      },
      {
        "q": "calloc zero-initializes; malloc does not.",
        "a": "**Answer:**\nThis dynamic memory allocation principle governs heap management, prevents memory leaks, and enables runtime scalability in C."
      },
      {
        "q": "Keep the old pointer until realloc succeeds to avoid losing memory.",
        "a": "**`realloc()` Operation:**\nResizes a previously allocated heap memory block:\n1. **Expansion in-place:** If sufficient contiguous memory exists after the current block, it expands the block and returns the original address.\n2. **Relocation:** If space is unavailable, it allocates a new block elsewhere, copies the old data over, frees the old block, and returns the new address.\n3. **Safe Pattern:**\n```c\nint *temp = realloc(p, new_size);\nif (temp != NULL) p = temp;\nelse { /* handle error without losing p */ }\n```"
      },
      {
        "q": "sizeof(p) on a pointer gives the pointer size, not the block size.",
        "a": "**Answer:**\nThis dynamic memory allocation principle governs heap management, prevents memory leaks, and enables runtime scalability in C."
      }
    ],
    "practicals": [
      "Write an algorithm and flowchart for allocating an array dynamically, checking NULL, using it and freeing it.",
      "Write an algorithm for growing an array using realloc when it becomes full."
    ],
    "syllabus": {
      "concepts": [
        "Static vs dynamic allocation",
        "stack vs heap memory",
        "<stdlib.h>",
        "malloc, calloc, realloc, free",
        "sizeof in allocation",
        "casting the returned void *",
        "checking for NULL",
        "dynamic 1-D arrays, strings, 2-D arrays (array of pointers) and structures",
        "memory leak, dangling pointer, double free, use after free",
        "setting a pointer to NULL after free",
        "dynamic stack/queue (Unit 14)."
      ],
      "checklist": [
        "Write the dynamic-array program (read N, allocate, process, free) from memory.",
        "Compare malloc and calloc; know realloc usage.",
        "List causes of leaks, dangling pointers and double frees.",
        "Practise one dynamic string and one dynamic structure program."
      ]
    }
  }
];
