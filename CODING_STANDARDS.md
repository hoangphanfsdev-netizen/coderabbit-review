# NodeJs Coding Rules for CodeRabbit

## Instructions
Apply these rules rigorously. Ignore formatting issues (indentation, quotes, semicolons).

## 1. Naming Rules
- **[TS-NAMING-001] CamelCase**: Variables/functions must be `camelCase`. Ex: `firstName`.
- **[TS-NAMING-002] Meaningful Names**: No single letters (a, b) except in strictly local loops. Ex: `userIndex` instead of `i`.
- **[TS-NAMING-003] No Underscores**: No leading `_` unless strictly private/framework required.
- **[TS-NAMING-004] Constants**: Global constants must be `UPPER_SNAKE_CASE`. Ex: `MAX_RETRY`.
- **[TS-NAMING-005] Booleans**: Must have verb prefixes: `is`, `should`, `can`, `has`. Ex: `isValid`.
- **[TS-NAMING-016] PascalCase**: Class, Interface, Type, Enum must be `PascalCase`.

## 2. Logic & Usage Rules
- **[TS-STYLE-001] Explicit Types**: Arguments and Return types must be explicit. `(a: number): number`.
- **[TS-STYLE-002] Async/Await**: ALWAYS use `async/await` instead of `.then()` callback chains.
- **[TS-STYLE-003] Null Safety**: Use Optional Chaining `?.` and Nullish Coalescing `??`. Never access nested props unsafe.
- **[TS-USAGE-001] Native over Utils**: Prefer ES6+ native array methods over Lodash unless necessary for safety.
- **[TS-LINT-001] No Debugger/Console**: `debugger` and `console.log` are strictly forbidden. Use `logger`.

## 3. Documentation
- **[TS-DOC-001] JSDoc**: Exported functions/complex logic MUST have JSDoc describing params and return.
- **[TS-DOC-002] API Annotation**: Controller methods must comment the related Screen Name or API URL endpoint.

## 4. Security (CRITICAL)
- **[SEC-DB-001] No SQL Injection**: Use parameterized queries or ORM methods. NEVER string concatenation for SQL.
- **[SEC-XSS-001] Output Encoding**: Escape user input before rendering HTML.
- **[SEC-FILE-001] Path Traversal**: No raw user input in `fs` paths or file serving. Use ID mapping.
- **[SEC-DATA-001] Data Protection**: Sensitive data (Password, PII) must be hashed/encrypted.

## 5. Clean Code & Architecture Principles

### Instructions for AI
Focus heavily on these principles during review. Prioritize readability and maintainability over cleverness.

- **[CLEAN-DRY] Don't Repeat Yourself**:
  - Detect duplicated logic across files or functions.
  - Suggest extracting repeated code into reusable utility functions or hooks.

- **[CLEAN-KISS] Keep It Simple**:
  - Flag over-engineered solutions (e.g., using `reduce` where `map` suffices, complex regex where string methods work).
  - Suggest the simplest implementation possible.

- **[CLEAN-YAGNI] You Aren't Gonna Need It**:
  - Strict check on unused parameters, dead code, or "future-proofing" features that are not currently used.
  - Suggest removing fields in Classes/Interfaces that serve no immediate purpose.

- **[CLEAN-SRP] Single Responsibility Principle**:
  - **Severity: REQUIRED**.
  - A function must do only one thing. If a function name has "And" (e.g., `validateAndSave`), suggest splitting it.
  - Separate Business Logic from UI/View Logic.

- **[CLEAN-FUNC-SIZE] Function Complexity**:
  - **Severity: REQUIRED**.
  - Instead of strictly counting lines, flag functions that are intellectually difficult to scan.
  - Suggest breaking down long functions (>20 lines) into sub-routines with descriptive names.

- **[CLEAN-PARAMS] Parameter Object Pattern**:
  - **Severity: REQUIRED**.
  - Functions with >3 arguments MUST be refactored to use an Interface/Object Destructuring.
  - Ex: `fn(a, b, c, d)` -> `fn({ a, b, c, d })`.

- **[CLEAN-NESTING] Early Return / Guard Clauses**:
  - **Severity: RECOMMENDED**.
  - Flatten deep nesting (>3 levels).
  - Suggest inverting `if` statements to return early (Guard Clauses) instead of wrapping logic in big `else` blocks.