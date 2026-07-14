# JavaScript Identifier Rules

## What is an Identifier?

An **identifier** is the name you give to variables, functions, classes, properties, or labels in JavaScript so you can reference them in your code.

```
Examples:
let userName = "John";    → userName is an identifier
function sayHi() {}       → sayHi is an identifier
class UserAccount {}      → UserAccount is an identifier
```

---

## Rules

| # | Rule | Valid Example | Invalid Example |
|---|---|---|---|
| 1 | Must start with a **letter (`a-z`, `A-Z`)**, **underscore (`_`)**, or **dollar sign (`$`)** | `name`, `_count`, `$price` | `1name` (starts with digit) |
| 2 | After the first character, can include **letters, digits, underscores, or dollar signs** | `user123`, `my_var`, `data$` | `my-var` (hyphen not allowed) |
| 3 | **Cannot** be a **reserved keyword** | `player`, `score`, `myClass` | `let`, `function`, `class` |
| 4 | **Case-sensitive** — `myVar` and `myvar` are different identifiers | `name` and `Name` are distinct | N/A |
| 5 | No spaces allowed | `firstName` | `first name` |
| 6 | Unicode letters are allowed (ES6+) | `straße`, `π`, `你好` | N/A |

---

## Valid Characters (Regex)

```
/^[a-zA-Z_$][a-zA-Z0-9_$]*$/
```

| Part | Allowed characters |
|---|---|
| First character | `a-z`, `A-Z`, `_`, `$`, Unicode letters |
| Rest of characters | Above + `0-9` |

---

## Naming Conventions (Not enforced, but standard practice)

| Convention | Example | Used for |
|---|---|---|
| **camelCase** | `firstName`, `getUserData` | Variables, functions, object properties |
| **PascalCase** | `UserAccount`, `HttpClient` | Classes, constructors, React components |
| **UPPER_SNAKE_CASE** | `MAX_LIMIT`, `API_KEY` | Constants (true constants) |
| **snake_case** | `first_name`, `get_user_data` | Rare in JS, common in Python/PHP |
| **`_` prefix** | `_private`, `_internal` | Convention for "private" (not enforced) |
| **`$` prefix** | `$element`, `$scope` | Often signals jQuery/ Angular; not special to JS |

---

## Keywords You Cannot Use as Identifiers

These reserved words cause a **Syntax Error** if used as identifiers:

**Declaration:** `let`, `const`, `var`, `function`, `class`
**Control flow:** `if`, `else`, `switch`, `case`, `break`, `continue`, `default`
**Loops:** `for`, `while`, `do`, `in`, `of`
**Error handling:** `try`, `catch`, `finally`, `throw`
**Objects:** `new`, `this`, `super`, `extends`
**Modules:** `import`, `export`
**Async:** `async`, `await`, `yield`
**Type:** `typeof`, `instanceof`, `void`, `delete`
**Literals:** `null`, `true`, `false`

> ⚠️ Some words like `undefined`, `NaN`, and `Infinity` are **not technically reserved** but are global properties — using them as identifiers is allowed but **strongly discouraged** because you'll shadow the built-in values.

---

## TL;DR

> **Identifiers** name your variables/functions/classes. They must start with a letter, `_`, or `$`. They can contain letters, digits, `_`, and `$`. They are case-sensitive, cannot contain spaces, and cannot be reserved keywords. Conventions: `camelCase` for variables/functions, `PascalCase` for classes, `UPPER_SNAKE_CASE` for constants.
