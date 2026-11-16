const PROGRAMS = [
  // ─── BASICS ───────────────────────────────────────────────────────────────
  {
    id: "p1",
    title: "Print Hello World",
    category: "Basics",
    code: `#include <stdio.h>
int main() {
    printf("Hello, World!\\n");
    return 0;
}`
  },
  {
    id: "p2",
    title: "Add Two Numbers",
    category: "Basics",
    code: `#include <stdio.h>
int main() {
    int a, b, sum;
    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);
    sum = a + b;
    printf("Sum = %d\\n", sum);
    return 0;
}`
  },
  {
    id: "p3",
    title: "Swap Two Numbers Using Temp Variable",
    category: "Basics",
    code: `#include <stdio.h>
int main() {
    int a, b, temp;
    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);
    temp = a;
    a = b;
    b = temp;
    printf("After swap: a = %d, b = %d\\n", a, b);
    return 0;
}`
  },
  {
    id: "p4",
    title: "Swap Two Numbers Without Temp (XOR Method)",
    category: "Basics",
    code: `#include <stdio.h>
int main() {
    int a, b;
    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    printf("After swap: a = %d, b = %d\\n", a, b);
    return 0;
}`
  },
  {
    id: "p5",
    title: "Find Simple Interest",
    category: "Basics",
    code: `#include <stdio.h>
int main() {
    float principal, rate, time, si;
    printf("Enter principal, rate, time: ");
    scanf("%f %f %f", &principal, &rate, &time);
    si = (principal * rate * time) / 100;
    printf("Simple Interest = %.2f\\n", si);
    return 0;
}`
  },
  {
    id: "p6",
    title: "Find Area and Perimeter of Rectangle",
    category: "Basics",
    code: `#include <stdio.h>
int main() {
    float length, width, area, perimeter;
    printf("Enter length and width: ");
    scanf("%f %f", &length, &width);
    area = length * width;
    perimeter = 2 * (length + width);
    printf("Area = %.2f\\n", area);
    printf("Perimeter = %.2f\\n", perimeter);
    return 0;
}`
  },
  {
    id: "p7",
    title: "Convert Celsius to Fahrenheit",
    category: "Basics",
    code: `#include <stdio.h>
int main() {
    float celsius, fahrenheit;
    printf("Enter temperature in Celsius: ");
    scanf("%f", &celsius);
    fahrenheit = (celsius * 9 / 5) + 32;
    printf("%.2f Celsius = %.2f Fahrenheit\\n", celsius, fahrenheit);
    return 0;
}`
  },
  {
    id: "p8",
    title: "Find Quotient and Remainder",
    category: "Basics",
    code: `#include <stdio.h>
int main() {
    int dividend, divisor, quotient, remainder;
    printf("Enter dividend and divisor: ");
    scanf("%d %d", &dividend, &divisor);
    quotient  = dividend / divisor;
    remainder = dividend % divisor;
    printf("Quotient  = %d\\n", quotient);
    printf("Remainder = %d\\n", remainder);
    return 0;
}`
  },

  // ─── DECISION MAKING ──────────────────────────────────────────────────────
  {
    id: "p9",
    title: "Check Even or Odd",
    category: "Decision Making",
    code: `#include <stdio.h>
int main() {
    int n;
    printf("Enter a number: ");
    scanf("%d", &n);
    if (n % 2 == 0)
        printf("%d is Even\\n", n);
    else
        printf("%d is Odd\\n", n);
    return 0;
}`
  },
  {
    id: "p10",
    title: "Find Largest of Three Numbers",
    category: "Decision Making",
    code: `#include <stdio.h>
int main() {
    int a, b, c;
    printf("Enter three numbers: ");
    scanf("%d %d %d", &a, &b, &c);
    if (a >= b && a >= c)
        printf("Largest = %d\\n", a);
    else if (b >= a && b >= c)
        printf("Largest = %d\\n", b);
    else
        printf("Largest = %d\\n", c);
    return 0;
}`
  },
  {
    id: "p11",
    title: "Check Leap Year",
    category: "Decision Making",
    code: `#include <stdio.h>
int main() {
    int year;
    printf("Enter year: ");
    scanf("%d", &year);
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))
        printf("%d is a Leap Year\\n", year);
    else
        printf("%d is not a Leap Year\\n", year);
    return 0;
}`
  },
  {
    id: "p12",
    title: "Check Positive, Negative, or Zero",
    category: "Decision Making",
    code: `#include <stdio.h>
int main() {
    int n;
    printf("Enter a number: ");
    scanf("%d", &n);
    if (n > 0)
        printf("Positive\\n");
    else if (n < 0)
        printf("Negative\\n");
    else
        printf("Zero\\n");
    return 0;
}`
  },
  {
    id: "p13",
    title: "Simple Calculator Using Switch",
    category: "Decision Making",
    code: `#include <stdio.h>
int main() {
    char op;
    double a, b;
    printf("Enter operator (+, -, *, /): ");
    scanf(" %c", &op);
    printf("Enter two operands: ");
    scanf("%lf %lf", &a, &b);
    switch (op) {
        case '+': printf("%.2lf\\n", a + b); break;
        case '-': printf("%.2lf\\n", a - b); break;
        case '*': printf("%.2lf\\n", a * b); break;
        case '/':
            if (b != 0)
                printf("%.2lf\\n", a / b);
            else
                printf("Division by zero\\n");
            break;
        default: printf("Invalid operator\\n");
    }
    return 0;
}`
  },
  {
    id: "p14",
    title: "Check Whether a Character is Vowel or Consonant",
    category: "Decision Making",
    code: `#include <stdio.h>
int main() {
    char ch;
    printf("Enter a character: ");
    scanf(" %c", &ch);
    if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' ||
        ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U')
        printf("%c is a Vowel\\n", ch);
    else
        printf("%c is a Consonant\\n", ch);
    return 0;
}`
  },

  // ─── LOOPS ────────────────────────────────────────────────────────────────
  {
    id: "p15",
    title: "Print Multiplication Table",
    category: "Loops",
    code: `#include <stdio.h>
int main() {
    int n;
    printf("Enter a number: ");
    scanf("%d", &n);
    for (int i = 1; i <= 10; i++)
        printf("%d x %d = %d\\n", n, i, n * i);
    return 0;
}`
  },
  {
    id: "p16",
    title: "Sum of First N Natural Numbers",
    category: "Loops",
    code: `#include <stdio.h>
int main() {
    int n, sum = 0;
    printf("Enter N: ");
    scanf("%d", &n);
    for (int i = 1; i <= n; i++)
        sum += i;
    printf("Sum = %d\\n", sum);
    return 0;
}`
  },
  {
    id: "p17",
    title: "Count Digits in a Number",
    category: "Loops",
    code: `#include <stdio.h>
int main() {
    long long n;
    int count = 0;
    printf("Enter a number: ");
    scanf("%lld", &n);
    if (n == 0) { printf("Digits = 1\\n"); return 0; }
    if (n < 0) n = -n;
    while (n != 0) {
        n /= 10;
        count++;
    }
    printf("Digits = %d\\n", count);
    return 0;
}`
  },
  {
    id: "p18",
    title: "Reverse a Number",
    category: "Loops",
    code: `#include <stdio.h>
int main() {
    int n, reversed = 0, digit;
    printf("Enter a number: ");
    scanf("%d", &n);
    while (n != 0) {
        digit    = n % 10;
        reversed = reversed * 10 + digit;
        n       /= 10;
    }
    printf("Reversed = %d\\n", reversed);
    return 0;
}`
  },
  {
    id: "p19",
    title: "Check Palindrome Number",
    category: "Loops",
    code: `#include <stdio.h>
int main() {
    int n, original, reversed = 0, digit;
    printf("Enter a number: ");
    scanf("%d", &n);
    original = n;
    while (n != 0) {
        digit    = n % 10;
        reversed = reversed * 10 + digit;
        n       /= 10;
    }
    if (original == reversed)
        printf("%d is a Palindrome\\n", original);
    else
        printf("%d is not a Palindrome\\n", original);
    return 0;
}`
  },
  {
    id: "p20",
    title: "Find Sum of Digits",
    category: "Loops",
    code: `#include <stdio.h>
int main() {
    int n, sum = 0;
    printf("Enter a number: ");
    scanf("%d", &n);
    if (n < 0) n = -n;
    while (n != 0) {
        sum += n % 10;
        n   /= 10;
    }
    printf("Sum of digits = %d\\n", sum);
    return 0;
}`
  },

  // ─── PATTERNS ─────────────────────────────────────────────────────────────
  {
    id: "p21",
    title: "Print Right-Angled Star Triangle",
    category: "Patterns",
    code: `#include <stdio.h>
int main() {
    int n;
    printf("Enter number of rows: ");
    scanf("%d", &n);
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++)
            printf("* ");
        printf("\\n");
    }
    return 0;
}`
  },
  {
    id: "p22",
    title: "Print Inverted Star Triangle",
    category: "Patterns",
    code: `#include <stdio.h>
int main() {
    int n;
    printf("Enter number of rows: ");
    scanf("%d", &n);
    for (int i = n; i >= 1; i--) {
        for (int j = 1; j <= i; j++)
            printf("* ");
        printf("\\n");
    }
    return 0;
}`
  },
  {
    id: "p23",
    title: "Print Number Pyramid",
    category: "Patterns",
    code: `#include <stdio.h>
int main() {
    int n;
    printf("Enter number of rows: ");
    scanf("%d", &n);
    for (int i = 1; i <= n; i++) {
        for (int sp = 1; sp <= n - i; sp++)
            printf(" ");
        for (int j = 1; j <= 2 * i - 1; j++)
            printf("%d", i);
        printf("\\n");
    }
    return 0;
}`
  },
  {
    id: "p24",
    title: "Print Floyd's Triangle",
    category: "Patterns",
    code: `#include <stdio.h>
int main() {
    int n, num = 1;
    printf("Enter number of rows: ");
    scanf("%d", &n);
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++)
            printf("%d ", num++);
        printf("\\n");
    }
    return 0;
}`
  },

  // ─── ARRAYS ───────────────────────────────────────────────────────────────
  {
    id: "p25",
    title: "Find Largest Element in Array",
    category: "Arrays",
    code: `#include <stdio.h>
int main() {
    int n, arr[100], max;
    printf("Enter number of elements: ");
    scanf("%d", &n);
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    max = arr[0];
    for (int i = 1; i < n; i++)
        if (arr[i] > max) max = arr[i];
    printf("Largest = %d\\n", max);
    return 0;
}`
  },
  {
    id: "p26",
    title: "Find Second Largest Element in Array",
    category: "Arrays",
    code: `#include <stdio.h>
int main() {
    int n, arr[100], first, second;
    printf("Enter number of elements: ");
    scanf("%d", &n);
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    first = second = -2147483648;
    for (int i = 0; i < n; i++) {
        if (arr[i] > first) {
            second = first;
            first  = arr[i];
        } else if (arr[i] > second && arr[i] != first) {
            second = arr[i];
        }
    }
    printf("Second Largest = %d\\n", second);
    return 0;
}`
  },
  {
    id: "p27",
    title: "Reverse an Array",
    category: "Arrays",
    code: `#include <stdio.h>
int main() {
    int n, arr[100];
    printf("Enter number of elements: ");
    scanf("%d", &n);
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    printf("Reversed: ");
    for (int i = n - 1; i >= 0; i--)
        printf("%d ", arr[i]);
    printf("\\n");
    return 0;
}`
  },
  {
    id: "p28",
    title: "Linear Search",
    category: "Arrays",
    code: `#include <stdio.h>
int main() {
    int n, arr[100], key, found = 0;
    printf("Enter number of elements: ");
    scanf("%d", &n);
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    printf("Enter element to search: ");
    scanf("%d", &key);
    for (int i = 0; i < n; i++) {
        if (arr[i] == key) {
            printf("Found at index %d\\n", i);
            found = 1;
            break;
        }
    }
    if (!found) printf("Not found\\n");
    return 0;
}`
  },
  {
    id: "p29",
    title: "Binary Search",
    category: "Arrays",
    code: `#include <stdio.h>
int main() {
    int n, arr[100], key, low, high, mid;
    printf("Enter number of elements (sorted): ");
    scanf("%d", &n);
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    printf("Enter element to search: ");
    scanf("%d", &key);
    low = 0; high = n - 1;
    while (low <= high) {
        mid = (low + high) / 2;
        if (arr[mid] == key) { printf("Found at index %d\\n", mid); return 0; }
        else if (arr[mid] < key) low = mid + 1;
        else high = mid - 1;
    }
    printf("Not found\\n");
    return 0;
}`
  },
  {
    id: "p30",
    title: "Bubble Sort",
    category: "Arrays",
    code: `#include <stdio.h>
int main() {
    int n, arr[100], temp;
    printf("Enter number of elements: ");
    scanf("%d", &n);
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    for (int i = 0; i < n - 1; i++)
        for (int j = 0; j < n - i - 1; j++)
            if (arr[j] > arr[j + 1]) {
                temp = arr[j]; arr[j] = arr[j + 1]; arr[j + 1] = temp;
            }
    printf("Sorted: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    return 0;
}`
  },
  {
    id: "p31",
    title: "Selection Sort",
    category: "Arrays",
    code: `#include <stdio.h>
int main() {
    int n, arr[100], minIdx, temp;
    printf("Enter number of elements: ");
    scanf("%d", &n);
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    for (int i = 0; i < n - 1; i++) {
        minIdx = i;
        for (int j = i + 1; j < n; j++)
            if (arr[j] < arr[minIdx]) minIdx = j;
        temp = arr[minIdx]; arr[minIdx] = arr[i]; arr[i] = temp;
    }
    printf("Sorted: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    return 0;
}`
  },
  {
    id: "p32",
    title: "Count Even and Odd Numbers in Array",
    category: "Arrays",
    code: `#include <stdio.h>
int main() {
    int n, arr[100], even = 0, odd = 0;
    printf("Enter number of elements: ");
    scanf("%d", &n);
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    for (int i = 0; i < n; i++) {
        if (arr[i] % 2 == 0) even++;
        else odd++;
    }
    printf("Even count = %d\\n", even);
    printf("Odd  count = %d\\n", odd);
    return 0;
}`
  },

  // ─── MATRIX ───────────────────────────────────────────────────────────────
  {
    id: "p33",
    title: "Add Two Matrices",
    category: "Matrix",
    code: `#include <stdio.h>
int main() {
    int r, c, a[10][10], b[10][10], sum[10][10];
    printf("Enter rows and columns: ");
    scanf("%d %d", &r, &c);
    printf("Enter Matrix A:\\n");
    for (int i = 0; i < r; i++) for (int j = 0; j < c; j++) scanf("%d", &a[i][j]);
    printf("Enter Matrix B:\\n");
    for (int i = 0; i < r; i++) for (int j = 0; j < c; j++) scanf("%d", &b[i][j]);
    printf("Sum Matrix:\\n");
    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            sum[i][j] = a[i][j] + b[i][j];
            printf("%d ", sum[i][j]);
        }
        printf("\\n");
    }
    return 0;
}`
  },
  {
    id: "p34",
    title: "Multiply Two Matrices",
    category: "Matrix",
    code: `#include <stdio.h>
int main() {
    int r1, c1, r2, c2, a[10][10], b[10][10], res[10][10];
    printf("Enter rows and columns of Matrix A: ");
    scanf("%d %d", &r1, &c1);
    printf("Enter rows and columns of Matrix B: ");
    scanf("%d %d", &r2, &c2);
    printf("Enter Matrix A:\\n");
    for (int i = 0; i < r1; i++) for (int j = 0; j < c1; j++) scanf("%d", &a[i][j]);
    printf("Enter Matrix B:\\n");
    for (int i = 0; i < r2; i++) for (int j = 0; j < c2; j++) scanf("%d", &b[i][j]);
    for (int i = 0; i < r1; i++)
        for (int j = 0; j < c2; j++) {
            res[i][j] = 0;
            for (int k = 0; k < c1; k++) res[i][j] += a[i][k] * b[k][j];
        }
    printf("Product:\\n");
    for (int i = 0; i < r1; i++) {
        for (int j = 0; j < c2; j++) printf("%d ", res[i][j]);
        printf("\\n");
    }
    return 0;
}`
  },
  {
    id: "p35",
    title: "Transpose of a Matrix",
    category: "Matrix",
    code: `#include <stdio.h>
int main() {
    int r, c, a[10][10];
    printf("Enter rows and columns: ");
    scanf("%d %d", &r, &c);
    printf("Enter matrix:\\n");
    for (int i = 0; i < r; i++) for (int j = 0; j < c; j++) scanf("%d", &a[i][j]);
    printf("Transpose:\\n");
    for (int i = 0; i < c; i++) {
        for (int j = 0; j < r; j++) printf("%d ", a[j][i]);
        printf("\\n");
    }
    return 0;
}`
  },
  {
    id: "p36",
    title: "Check Symmetric Matrix",
    category: "Matrix",
    code: `#include <stdio.h>
int main() {
    int n, a[10][10], sym = 1;
    printf("Enter size of square matrix: ");
    scanf("%d", &n);
    printf("Enter matrix:\\n");
    for (int i = 0; i < n; i++) for (int j = 0; j < n; j++) scanf("%d", &a[i][j]);
    for (int i = 0; i < n && sym; i++)
        for (int j = 0; j < n && sym; j++)
            if (a[i][j] != a[j][i]) sym = 0;
    printf(sym ? "Symmetric\\n" : "Not Symmetric\\n");
    return 0;
}`
  },

  // ─── STRINGS ──────────────────────────────────────────────────────────────
  {
    id: "p37",
    title: "Find Length of String Without strlen()",
    category: "Strings",
    code: `#include <stdio.h>
int main() {
    char str[100];
    int len = 0;
    printf("Enter a string: ");
    scanf("%s", str);
    while (str[len] != '\\0') len++;
    printf("Length = %d\\n", len);
    return 0;
}`
  },
  {
    id: "p38",
    title: "Copy String Without strcpy()",
    category: "Strings",
    code: `#include <stdio.h>
int main() {
    char src[100], dest[100];
    int i = 0;
    printf("Enter source string: ");
    scanf("%s", src);
    while (src[i] != '\\0') {
        dest[i] = src[i];
        i++;
    }
    dest[i] = '\\0';
    printf("Copied string: %s\\n", dest);
    return 0;
}`
  },
  {
    id: "p39",
    title: "Compare Two Strings Without strcmp()",
    category: "Strings",
    code: `#include <stdio.h>
int main() {
    char s1[100], s2[100];
    int i = 0, result = 0;
    printf("Enter first string: ");
    scanf("%s", s1);
    printf("Enter second string: ");
    scanf("%s", s2);
    while (s1[i] != '\\0' && s2[i] != '\\0') {
        if (s1[i] != s2[i]) { result = s1[i] - s2[i]; break; }
        i++;
    }
    if (result == 0) result = s1[i] - s2[i];
    if (result == 0) printf("Strings are equal\\n");
    else if (result < 0) printf("First string is smaller\\n");
    else printf("First string is greater\\n");
    return 0;
}`
  },
  {
    id: "p40",
    title: "Reverse a String",
    category: "Strings",
    code: `#include <stdio.h>
#include <string.h>
int main() {
    char str[100];
    int len, i, j;
    char temp;
    printf("Enter a string: ");
    scanf("%s", str);
    len = strlen(str);
    for (i = 0, j = len - 1; i < j; i++, j--) {
        temp = str[i]; str[i] = str[j]; str[j] = temp;
    }
    printf("Reversed: %s\\n", str);
    return 0;
}`
  },
  {
    id: "p41",
    title: "Check Palindrome String",
    category: "Strings",
    code: `#include <stdio.h>
#include <string.h>
int main() {
    char str[100];
    int len, isPalin = 1;
    printf("Enter a string: ");
    scanf("%s", str);
    len = strlen(str);
    for (int i = 0; i < len / 2; i++) {
        if (str[i] != str[len - 1 - i]) { isPalin = 0; break; }
    }
    printf(isPalin ? "Palindrome\\n" : "Not a Palindrome\\n");
    return 0;
}`
  },
  {
    id: "p42",
    title: "Count Vowels and Consonants in String",
    category: "Strings",
    code: `#include <stdio.h>
#include <ctype.h>
int main() {
    char str[100];
    int vowels = 0, consonants = 0;
    printf("Enter a string: ");
    scanf("%s", str);
    for (int i = 0; str[i] != '\\0'; i++) {
        char c = tolower(str[i]);
        if (c >= 'a' && c <= 'z') {
            if (c=='a'||c=='e'||c=='i'||c=='o'||c=='u') vowels++;
            else consonants++;
        }
    }
    printf("Vowels = %d\\n", vowels);
    printf("Consonants = %d\\n", consonants);
    return 0;
}`
  },

  // ─── FUNCTIONS ────────────────────────────────────────────────────────────
  {
    id: "p43",
    title: "Find Factorial Using Function",
    category: "Functions",
    code: `#include <stdio.h>
long long factorial(int n) {
    long long fact = 1;
    for (int i = 2; i <= n; i++) fact *= i;
    return fact;
}
int main() {
    int n;
    printf("Enter a number: ");
    scanf("%d", &n);
    printf("Factorial = %lld\\n", factorial(n));
    return 0;
}`
  },
  {
    id: "p44",
    title: "Check Prime Using Function",
    category: "Functions",
    code: `#include <stdio.h>
int isPrime(int n) {
    if (n < 2) return 0;
    for (int i = 2; i * i <= n; i++)
        if (n % i == 0) return 0;
    return 1;
}
int main() {
    int n;
    printf("Enter a number: ");
    scanf("%d", &n);
    printf(isPrime(n) ? "%d is Prime\\n" : "%d is Not Prime\\n", n);
    return 0;
}`
  },
  {
    id: "p45",
    title: "Find GCD Using Function",
    category: "Functions",
    code: `#include <stdio.h>
int gcd(int a, int b) {
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
int main() {
    int a, b;
    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);
    printf("GCD = %d\\n", gcd(a, b));
    return 0;
}`
  },
  {
    id: "p46",
    title: "Find Power Using Function",
    category: "Functions",
    code: `#include <stdio.h>
double power(double base, int exp) {
    double result = 1;
    for (int i = 0; i < exp; i++) result *= base;
    return result;
}
int main() {
    double base;
    int exp;
    printf("Enter base and exponent: ");
    scanf("%lf %d", &base, &exp);
    printf("%.2lf ^ %d = %.2lf\\n", base, exp, power(base, exp));
    return 0;
}`
  },

  // ─── RECURSION ────────────────────────────────────────────────────────────
  {
    id: "p47",
    title: "Factorial Using Recursion",
    category: "Recursion",
    code: `#include <stdio.h>
long long factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
int main() {
    int n;
    printf("Enter a number: ");
    scanf("%d", &n);
    printf("Factorial = %lld\\n", factorial(n));
    return 0;
}`
  },
  {
    id: "p48",
    title: "Fibonacci Series Using Recursion",
    category: "Recursion",
    code: `#include <stdio.h>
int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
int main() {
    int n;
    printf("Enter number of terms: ");
    scanf("%d", &n);
    for (int i = 0; i < n; i++)
        printf("%d ", fibonacci(i));
    printf("\\n");
    return 0;
}`
  },
  {
    id: "p49",
    title: "Sum of Digits Using Recursion",
    category: "Recursion",
    code: `#include <stdio.h>
int sumDigits(int n) {
    if (n == 0) return 0;
    return (n % 10) + sumDigits(n / 10);
}
int main() {
    int n;
    printf("Enter a number: ");
    scanf("%d", &n);
    printf("Sum of digits = %d\\n", sumDigits(n));
    return 0;
}`
  },
  {
    id: "p50",
    title: "Tower of Hanoi",
    category: "Recursion",
    code: `#include <stdio.h>
void hanoi(int n, char from, char to, char aux) {
    if (n == 1) {
        printf("Move disk 1 from %c to %c\\n", from, to);
        return;
    }
    hanoi(n - 1, from, aux, to);
    printf("Move disk %d from %c to %c\\n", n, from, to);
    hanoi(n - 1, aux, to, from);
}
int main() {
    int n;
    printf("Enter number of disks: ");
    scanf("%d", &n);
    hanoi(n, 'A', 'C', 'B');
    return 0;
}`
  },

  // ─── POINTERS ─────────────────────────────────────────────────────────────
  {
    id: "p51",
    title: "Demonstrate Basic Pointer Operations",
    category: "Pointers",
    code: `#include <stdio.h>
int main() {
    int var = 42;
    int *ptr = &var;
    printf("Value of var  = %d\\n", var);
    printf("Address of var = %p\\n", (void*)&var);
    printf("Value via ptr = %d\\n", *ptr);
    printf("Address in ptr = %p\\n", (void*)ptr);
    *ptr = 100;
    printf("After *ptr=100, var = %d\\n", var);
    return 0;
}`
  },
  {
    id: "p52",
    title: "Swap Two Numbers Using Pointers",
    category: "Pointers",
    code: `#include <stdio.h>
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}
int main() {
    int a, b;
    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);
    swap(&a, &b);
    printf("After swap: a = %d, b = %d\\n", a, b);
    return 0;
}`
  },
  {
    id: "p53",
    title: "Find Largest in Array Using Pointer",
    category: "Pointers",
    code: `#include <stdio.h>
int main() {
    int n, arr[100];
    printf("Enter number of elements: ");
    scanf("%d", &n);
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    int *ptr = arr;
    int max = *ptr;
    for (int i = 1; i < n; i++) {
        if (*(ptr + i) > max) max = *(ptr + i);
    }
    printf("Largest = %d\\n", max);
    return 0;
}`
  },
  {
    id: "p54",
    title: "String Reverse Using Pointer",
    category: "Pointers",
    code: `#include <stdio.h>
#include <string.h>
int main() {
    char str[100];
    printf("Enter a string: ");
    scanf("%s", str);
    char *start = str;
    char *end   = str + strlen(str) - 1;
    while (start < end) {
        char temp = *start;
        *start = *end;
        *end   = temp;
        start++;
        end--;
    }
    printf("Reversed: %s\\n", str);
    return 0;
}`
  },

  // ─── STRUCTURES ───────────────────────────────────────────────────────────
  {
    id: "p55",
    title: "Store and Display Student Record Using Structure",
    category: "Structures",
    code: `#include <stdio.h>
struct Student {
    char name[50];
    int  rollNo;
    float marks;
};
int main() {
    struct Student s;
    printf("Enter name: ");
    scanf("%s", s.name);
    printf("Enter roll number: ");
    scanf("%d", &s.rollNo);
    printf("Enter marks: ");
    scanf("%f", &s.marks);
    printf("\\nStudent Record\\n");
    printf("Name    : %s\\n", s.name);
    printf("Roll No : %d\\n", s.rollNo);
    printf("Marks   : %.2f\\n", s.marks);
    return 0;
}`
  },
  {
    id: "p56",
    title: "Calculate Area of Shapes Using Structure",
    category: "Structures",
    code: `#include <stdio.h>
#define PI 3.14159
struct Shape {
    float length, width, radius;
};
int main() {
    struct Shape s;
    printf("Enter length and width of rectangle: ");
    scanf("%f %f", &s.length, &s.width);
    printf("Rectangle Area = %.2f\\n", s.length * s.width);
    printf("Enter radius of circle: ");
    scanf("%f", &s.radius);
    printf("Circle Area = %.2f\\n", PI * s.radius * s.radius);
    return 0;
}`
  },
  {
    id: "p57",
    title: "Add Two Complex Numbers Using Structure",
    category: "Structures",
    code: `#include <stdio.h>
struct Complex {
    float real, imag;
};
struct Complex add(struct Complex a, struct Complex b) {
    struct Complex c;
    c.real = a.real + b.real;
    c.imag = a.imag + b.imag;
    return c;
}
int main() {
    struct Complex a, b, result;
    printf("Enter real and imaginary of first: ");
    scanf("%f %f", &a.real, &a.imag);
    printf("Enter real and imaginary of second: ");
    scanf("%f %f", &b.real, &b.imag);
    result = add(a, b);
    printf("Sum = %.2f + %.2fi\\n", result.real, result.imag);
    return 0;
}`
  },
  {
    id: "p58",
    title: "Employee Salary Calculation Using Structure",
    category: "Structures",
    code: `#include <stdio.h>
struct Employee {
    char name[50];
    int  id;
    float basicSalary, hra, da, netSalary;
};
int main() {
    struct Employee e;
    printf("Enter employee name: ");
    scanf("%s", e.name);
    printf("Enter employee ID: ");
    scanf("%d", &e.id);
    printf("Enter basic salary: ");
    scanf("%f", &e.basicSalary);
    e.hra = 0.20f * e.basicSalary;
    e.da  = 0.50f * e.basicSalary;
    e.netSalary = e.basicSalary + e.hra + e.da;
    printf("\\nEmployee: %s (ID: %d)\\n", e.name, e.id);
    printf("Basic Salary : %.2f\\n", e.basicSalary);
    printf("HRA          : %.2f\\n", e.hra);
    printf("DA           : %.2f\\n", e.da);
    printf("Net Salary   : %.2f\\n", e.netSalary);
    return 0;
}`
  },

  // ─── STACK & QUEUE ────────────────────────────────────────────────────────
  {
    id: "p59",
    title: "Stack Implementation Using Array (Push, Pop, Display)",
    category: "Stack & Queue",
    code: `#include <stdio.h>
#define MAX 100
int stack[MAX], top = -1;
void push(int val) {
    if (top == MAX - 1) { printf("Stack Overflow\\n"); return; }
    stack[++top] = val;
}
int pop() {
    if (top == -1) { printf("Stack Underflow\\n"); return -1; }
    return stack[top--];
}
void display() {
    if (top == -1) { printf("Stack is empty\\n"); return; }
    for (int i = top; i >= 0; i--) printf("%d ", stack[i]);
    printf("\\n");
}
int main() {
    push(10); push(20); push(30);
    printf("Stack: "); display();
    printf("Popped: %d\\n", pop());
    printf("Stack: "); display();
    return 0;
}`
  },
  {
    id: "p60",
    title: "Queue Implementation Using Array (Enqueue, Dequeue, Display)",
    category: "Stack & Queue",
    code: `#include <stdio.h>
#define MAX 100
int queue[MAX], front = -1, rear = -1;
void enqueue(int val) {
    if (rear == MAX - 1) { printf("Queue Full\\n"); return; }
    if (front == -1) front = 0;
    queue[++rear] = val;
}
int dequeue() {
    if (front == -1 || front > rear) { printf("Queue Empty\\n"); return -1; }
    return queue[front++];
}
void display() {
    if (front == -1 || front > rear) { printf("Queue is empty\\n"); return; }
    for (int i = front; i <= rear; i++) printf("%d ", queue[i]);
    printf("\\n");
}
int main() {
    enqueue(10); enqueue(20); enqueue(30);
    printf("Queue: "); display();
    printf("Dequeued: %d\\n", dequeue());
    printf("Queue: "); display();
    return 0;
}`
  },
  {
    id: "p61",
    title: "Check Balanced Parentheses Using Stack",
    category: "Stack & Queue",
    code: `#include <stdio.h>
#include <string.h>
#define MAX 100
char stack[MAX];
int top = -1;
void push(char c) { stack[++top] = c; }
char pop()        { return stack[top--]; }
int isBalanced(char *expr) {
    for (int i = 0; expr[i]; i++) {
        char c = expr[i];
        if (c == '(' || c == '[' || c == '{') push(c);
        else if (c == ')' || c == ']' || c == '}') {
            if (top == -1) return 0;
            char t = pop();
            if ((c==')' && t!='(') || (c==']' && t!='[') || (c=='}' && t!='{'))
                return 0;
        }
    }
    return top == -1;
}
int main() {
    char expr[100];
    printf("Enter expression: ");
    scanf("%s", expr);
    printf(isBalanced(expr) ? "Balanced\\n" : "Not Balanced\\n");
    return 0;
}`
  },
  {
    id: "p62",
    title: "Circular Queue Implementation",
    category: "Stack & Queue",
    code: `#include <stdio.h>
#define MAX 5
int queue[MAX], front = -1, rear = -1;
void enqueue(int val) {
    if ((rear + 1) % MAX == front) { printf("Queue Full\\n"); return; }
    if (front == -1) front = 0;
    rear = (rear + 1) % MAX;
    queue[rear] = val;
}
int dequeue() {
    if (front == -1) { printf("Queue Empty\\n"); return -1; }
    int val = queue[front];
    if (front == rear) { front = rear = -1; }
    else front = (front + 1) % MAX;
    return val;
}
void display() {
    if (front == -1) { printf("Queue is empty\\n"); return; }
    int i = front;
    while (1) {
        printf("%d ", queue[i]);
        if (i == rear) break;
        i = (i + 1) % MAX;
    }
    printf("\\n");
}
int main() {
    enqueue(10); enqueue(20); enqueue(30);
    printf("Queue: "); display();
    printf("Dequeued: %d\\n", dequeue());
    printf("Queue: "); display();
    return 0;
}`
  },

  // ─── DYNAMIC MEMORY ───────────────────────────────────────────────────────
  {
    id: "p63",
    title: "Dynamic Array Using malloc()",
    category: "Dynamic Memory",
    code: `#include <stdio.h>
#include <stdlib.h>
int main() {
    int n, *arr;
    printf("Enter number of elements: ");
    scanf("%d", &n);
    arr = (int*)malloc(n * sizeof(int));
    if (arr == NULL) { printf("Memory allocation failed\\n"); return 1; }
    for (int i = 0; i < n; i++) {
        printf("Enter element %d: ", i + 1);
        scanf("%d", &arr[i]);
    }
    printf("Array: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    free(arr);
    return 0;
}`
  },
  {
    id: "p64",
    title: "Dynamic Array Using calloc() and realloc()",
    category: "Dynamic Memory",
    code: `#include <stdio.h>
#include <stdlib.h>
int main() {
    int n, *arr;
    printf("Enter initial size: ");
    scanf("%d", &n);
    arr = (int*)calloc(n, sizeof(int));
    if (arr == NULL) { printf("Memory allocation failed\\n"); return 1; }
    for (int i = 0; i < n; i++) arr[i] = i + 1;
    printf("Array after calloc: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    int newSize = n + 3;
    arr = (int*)realloc(arr, newSize * sizeof(int));
    if (arr == NULL) { printf("Realloc failed\\n"); return 1; }
    for (int i = n; i < newSize; i++) arr[i] = i + 1;
    printf("Array after realloc: ");
    for (int i = 0; i < newSize; i++) printf("%d ", arr[i]);
    printf("\\n");
    free(arr);
    return 0;
}`
  },
  {
    id: "p65",
    title: "Dynamic 2D Array",
    category: "Dynamic Memory",
    code: `#include <stdio.h>
#include <stdlib.h>
int main() {
    int rows, cols;
    printf("Enter rows and columns: ");
    scanf("%d %d", &rows, &cols);
    int **arr = (int**)malloc(rows * sizeof(int*));
    for (int i = 0; i < rows; i++)
        arr[i] = (int*)malloc(cols * sizeof(int));
    printf("Enter elements:\\n");
    for (int i = 0; i < rows; i++)
        for (int j = 0; j < cols; j++)
            scanf("%d", &arr[i][j]);
    printf("Matrix:\\n");
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) printf("%d ", arr[i][j]);
        printf("\\n");
    }
    for (int i = 0; i < rows; i++) free(arr[i]);
    free(arr);
    return 0;
}`
  }
];
