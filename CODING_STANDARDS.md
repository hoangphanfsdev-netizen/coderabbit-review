# Node.js, TypeScript Coding & Security Standards

Đây là tài liệu định nghĩa các quy chuẩn về code và bảo mật cho các dự án sử dụng Node.js và TypeScript.

## Table of Contents
- [1. Naming Conventions (Quy tắc đặt tên)](#1-naming-conventions-quy-tắc-đặt-tên)
- [2. Styling & Formatting (Phong cách và định dạng)](#2-styling--formatting-phong-cách-và-định-dạng)
- [3. Documentation & Comments (Ghi chú và tài liệu)](#3-documentation--comments-ghi-chú-và-tài-liệu)
- [4. Best Practices (Các thông lệ tốt nhất)](#4-best-practices-các-thông-lệ-tốt-nhất)
- [5. Security (Bảo mật)](#5-security-bảo-mật)

---

## 1. Naming Conventions (Quy tắc đặt tên)

### [TS-NAMING-001] Use camelCase for variables 
- **Severity**: REQUIRED
- **Linter Rule**: `@typescript-eslint/naming-convention`
- **Description**: Tên biến, tham số, và thuộc tính phải sử dụng `camelCase`.
- **Examples**:
  ```typescript
  // Bad
  let first_name = 'John';

  // Good
  let firstName = 'John';
  ```

### [TS-NAMING-002] Use meaningful names
- **Severity**: REQUIRED
- **Description**: Tên phải có ý nghĩa và mô tả rõ ràng. Tránh dùng tên quá ngắn (ví dụ: a, b) trừ khi trong các vòng lặp nhỏ.
- **Examples**:
  ```typescript
    // Bad
    let a = 'John';

    // Good
    let firstName = 'John';
    ```

### [TS-NAMING-003] Avoid overly long variable names
- **Severity**: RECOMMENDED
- **Linter Rule**: `eslint:max-len`
- **Description**: Tên biến nên ngắn gọn nhưng vẫn đủ mô tả.
- **Examples**:
  ```typescript
  // Bad
  let thisIsAVariableThatContainsTheFirstNameOfTheUser = 'John';

  // Good
  let firstName = 'John';
  ```

### [TS-NAMING-004] No leading underscores for public properties
- **Severity**: REQUIRED
- **Linter Rule**: `@typescript-eslint/naming-convention`
- **Description**: Không bắt đầu tên biến, thuộc tính bằng dấu gạch dưới `_`, trừ khi đó là thuộc tính `private` trong class.
- **Examples**:
  ```typescript
  // Bad
  let _firstName = 'John';

  // Good (if private)
  private _firstName = 'John';
  ```

### [TS-NAMING-006] No unclear abbreviations
- **Severity**: REQUIRED
- **Description**: Tránh các từ viết tắt không được hiểu rộng rãi.
- **Examples**:
  ```typescript
  // Bad
  let fn = 'John';

  // Good
  let firstName = 'John';
  ```

### [TS-NAMING-007] Constants must be UPPER_SNAKE_CASE
- **Severity**: REQUIRED
- **Linter Rule**: `@typescript-eslint/naming-convention`
- **Description**: Hằng số (đặc biệt là các hằng số toàn cục hoặc cấu hình) phải sử dụng `UPPER_SNAKE_CASE`.
- **Examples**:
  ```typescript
  // Bad
  const bucketUpload = 'folder';

  // Good
  const BUCKET_UPLOAD = 'folder';
  ```

### [TS-NAMING-008] Boolean variables must have verb prefixes
- **Severity**: REQUIRED
- **Linter Rule**: `@typescript-eslint/naming-convention`
- **Description**: Tên biến boolean nên bắt đầu bằng `is`, `should`, `can`, `has`.
- **Examples**:
  ```typescript
  // Good
  let isConnected = true;
  let hasPermission = false;
  ```

### [TS-NAMING-009] Use let/const instead of var
- **Severity**: REQUIRED
- **Linter Rule**: `eslint:no-var`
- **Description**: Không bao giờ sử dụng `var`. Dùng `const` làm mặc định, và dùng `let` nếu cần gán lại giá trị.
- **Examples**:
  ```typescript
  // Bad
  var num = 10;

  // Good
  const PI = 3.14;
  let num = 10;
  ```

### [TS-NAMING-010] Avoid keyword collisions
- **Severity**: REQUIRED
- **Linter Rule**: `eslint:no-shadow-restricted-names`
- **Description**: Không sử dụng tên biến trùng với các từ khóa của ngôn ngữ (ví dụ: `class`, `function`, `break`).
- **Examples**:
  ```typescript
  // Bad
  let class = 'Math';

  // Good
  let className = "Math";
  ```

### [TS-NAMING-011] Use PascalCase for Types
- **Severity**: REQUIRED
- **Linter Rule**: `@typescript-eslint/naming-convention`
- **Description**: Tên của `class`, `interface`, `type`, và `enum` phải sử dụng `PascalCase`.
- **Examples**:
  ```typescript
  // Bad
  class person {}
  type userProfile = {};

  // Good
  class Person {}
  type UserProfile = {};
  ```

## 2. Styling & Formatting (Phong cách và định dạng)

### [TS-STYLE-001] Use single quotes for strings
- **Severity**: RECOMMENDED
- **Linter Rule**: `eslint:quotes`
- **Description**: Sử dụng dấu nháy đơn `'` cho chuỗi, trừ khi cần nội suy chuỗi (dùng `` ` ``) hoặc chuỗi chứa dấu nháy đơn.
- **Examples**:
  ```typescript
  // Bad
  const message = "Hello World";

  // Good
  const message = 'Hello World';
  ```

### [TS-STYLE-002] Explicit Type Annotations
- **Severity**: REQUIRED
- **Linter Rule**: `@typescript-eslint/explicit-function-return-type`
- **Description**: Phải chỉ định kiểu dữ liệu rõ ràng cho tham số và giá trị trả về của hàm.
- **Examples**:
  ```typescript
  // Bad
  function calculate(price, discount) { ... }

  // Good
  function calculate(price: number, discount: number): number { ... }
  ```

### [TS-STYLE-003] Indentation (2 Spaces)
- **Severity**: REQUIRED
- **Linter Rule**: `eslint:indent` (Thường được quản lý bởi Prettier)
- **Description**: Sử dụng 2 dấu cách để thụt đầu dòng.
- **Examples**:
  ```typescript
  // Good
  function multiplyNumbers(a: number, b: number): number {
    return a * b;
  }
  ```

### [TS-STYLE-004] Async/Await over Callbacks/Promises
- **Severity**: REQUIRED
- **Linter Rule**: `eslint-plugin-promise/prefer-await-to-then`
- **Description**: Luôn ưu tiên sử dụng cú pháp `async/await` thay vì `.then()` hoặc callbacks để xử lý các tác vụ bất đồng bộ.
- **Examples**:
  ```typescript
  // Bad
  fetch(url).then(res => ...);

  // Good
  const res = await fetch(url);
  ```

## 3. Documentation & Comments (Ghi chú và tài liệu)

### [TS-DOC-001] JSDoc for public functions
- **Severity**: RECOMMENDED
- **Linter Rule**: `eslint-plugin-jsdoc/require-jsdoc`
- **Description**: Sử dụng JSDoc `/** ... */` cho các hàm phức tạp, hàm được export hoặc các hàm trong API công khai.
- **Examples**:
  ```typescript
  /**
  * Adds two numbers together.
  * @param a - The first number.
  * @param b - The second number.
  * @returns The sum of a and b.
  */
  function add(a: number, b: number): number { ... }
  ```

### [TS-DOC-002] Comment API endpoint or Screen name
- **Severity**: RECOMMENDED
- **Description**: Nên có comment về tên màn hình hoặc URL của API trước các khối logic liên quan.
- **Examples**:
  ```typescript
  /**
  * POST /api/customers
  * Handles customer creation.
  */
  export const createCustomer = async (req: Request, res: Response) => {...};
  ```

## 4. Best Practices (Các thông lệ tốt nhất)

### [TS-LINT-001] No `console.log` in production code
- **Severity**: WARNING
- **Linter Rule**: `eslint:no-console`
- **Description**: Không để lại `console.log` trong code production. Sử dụng một thư viện logger chuyên dụng (ví dụ: Winston, Pino).

### [TS-LINT-002] Enforce Semicolons
- **Severity**: REQUIRED
- **Linter Rule**: `eslint:semi`
- **Description**: Các câu lệnh phải kết thúc bằng dấu chấm phẩy `;`.

### [TS-LINT-003] No `debugger`
- **Severity**: ERROR
- **Linter Rule**: `eslint:no-debugger`
- **Description**: Các câu lệnh `debugger` bị cấm tuyệt đối trong code được commit.

### [TS-LINT-004] No Explicit `any`
- **Severity**: WARNING
- **Linter Rule**: `@typescript-eslint/no-explicit-any`
- **Description**: Tránh sử dụng `any`. Hãy định nghĩa kiểu dữ liệu cụ thể hoặc sử dụng `unknown` nếu thực sự cần thiết.

## 5. Security (Bảo mật)

### [SEC-DB-001] Prevent SQL Injection
- **Severity**: CRITICAL
- **Linter Rule**: `semgrep:javascript.express.security.audit.sequelize-raw-query.sequelize-raw-query`
- **Description**: KHÔNG BAO GIỜ nối chuỗi trực tiếp vào câu lệnh SQL. Luôn sử dụng ORM methods hoặc parameterized queries.
- **Examples**:
  ```typescript
  // Bad
  const query = `SELECT * FROM users WHERE id = ${userId}`;

  // Good (Sequelize)
  const users = await User.findAll({ where: { id: userId } });
  ```

### [SEC-XSS-001] Escape HTML output to prevent XSS
- **Severity**: CRITICAL
- **Description**: Luôn escape dữ liệu do người dùng nhập vào trước khi hiển thị ra HTML để chống lại tấn công Cross-Site Scripting (XSS).
- **Examples**:
  ```typescript
  // Use libraries like 'escape-html' or framework features
  const safeHtml = escapeHtml(userInput);
  ```

### [SEC-FILE-001] Avoid Path Traversal
- **Severity**: CRITICAL
- **Linter Rule**: `eslint-plugin-security/detect-non-literal-fs-filename`
- **Description**: Không sử dụng trực tiếp dữ liệu người dùng nhập vào để tạo đường dẫn file hoặc URL.
- **Examples**:
  ```typescript
  // Bad
  const data = fs.readFileSync(req.body.filePath);

  // Good
  const safePath = path.join('/base/path/', safeFilename);
  const data = fs.readFileSync(safePath);
  ```

### [SEC-DATA-001] Encrypt Sensitive Data
- **Severity**: CRITICAL
- **Description**: Mật khẩu và các thông tin định danh cá nhân (PII) phải được hash (ví dụ: Bcrypt) hoặc mã hóa khi lưu trữ.
- **Examples**:
  ```typescript
  const hash = await bcrypt.hash(password, salt);
  ```
