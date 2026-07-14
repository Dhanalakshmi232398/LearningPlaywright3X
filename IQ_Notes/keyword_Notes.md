# JavaScript Keywords — Full Reference

## What is a Keyword?

A **keyword** is a reserved word in JavaScript that has a special meaning to the language. You **cannot** use them as variable names, function names, or identifiers. They are part of the language syntax itself.

---

## All JavaScript Reserved Keywords (ECMAScript)

### Declaration & Scope
| Keyword | Purpose | Found in IQ Notes? |
|---|---|---|
| `let` | Declares a block-scoped variable | ✅ `JIT_Compilation_IQ.md`, `V8_Engine_Concept.md` comparison tables |
| `const` | Declares a block-scoped constant | ❌ |
| `var` | Declares a function-scoped variable (legacy) | ❌ |
| `function` | Declares a function | ✅ `JIT_Compilation_IQ.md` comparison table |

### Control Flow
| Keyword | Purpose | Found in IQ Notes? |
|---|---|---|
| `if` | Conditional execution | ❌ |
| `else` | Alternative conditional | ❌ |
| `switch` | Multi-way conditional | ❌ |
| `case` | Branch in switch | ❌ |
| `break` | Exits loop or switch | ❌ |
| `continue` | Skips to next loop iteration | ❌ |
| `default` | Default case in switch, or export default | ❌ |

### Loops
| Keyword | Purpose | Found in IQ Notes? |
|---|---|---|
| `for` | For-loop | ✅ `JIT_Compilation_IQ.md`, `V8_Engine_Concept.md` comparison tables |
| `while` | While-loop | ❌ |
| `do` | Do-while loop | ❌ |
| `in` | Enumerates object properties | ❌ |
| `of` | Iterates over iterable values (with `for`) | ❌ |

### Error Handling
| Keyword | Purpose | Found in IQ Notes? |
|---|---|---|
| `try` | Begins error-handling block | ❌ |
| `catch` | Catches thrown errors | ❌ |
| `finally` | Executes after try/catch regardless | ❌ |
| `throw` | Throws a user-defined error | ❌ |

### Objects & Classes
| Keyword | Purpose | Found in IQ Notes? |
|---|---|---|
| `class` | Declares a class | ❌ |
| `extends` | Inherits from a parent class | ❌ |
| `super` | References parent class | ❌ |
| `new` | Creates an instance of a constructor | ❌ |
| `this` | Refers to current execution context | ❌ |

### Modules
| Keyword | Purpose | Found in IQ Notes? |
|---|---|---|
| `import` | Imports modules | ❌ |
| `export` | Exports modules | ❌ |

### Asynchronous
| Keyword | Purpose | Found in IQ Notes? |
|---|---|---|
| `async` | Declares async function | ❌ |
| `await` | Waits for promise resolution | ❌ |
| `yield` | Pauses/resumes generator | ❌ |

### Operators & Type
| Keyword | Purpose | Found in IQ Notes? |
|---|---|---|
| `typeof` | Returns type of operand as string | ❌ |
| `instanceof` | Tests if object is instance of constructor | ❌ |
| `void` | Evaluates expression and returns `undefined` | ❌ |
| `delete` | Deletes object property | ❌ |

### Literals & Special Values
| Keyword | Purpose | Found in IQ Notes? |
|---|---|---|
| `null` | Represents intentional absence of value | ❌ |
| `true` | Boolean true | ❌ |
| `false` | Boolean false | ❌ |
| `undefined` | Represents uninitialised value | ❌ |
| `NaN` | Not-a-Number value | ❌ |
| `Infinity` | Positive infinity value | ❌ |

### Debugging
| Keyword | Purpose | Found in IQ Notes? |
|---|---|---|
| `debugger` | Invokes debugger breakpoint | ❌ |

---

## Keywords Found in IQ_Notes Comparison Tables

Only **3 JavaScript keywords** appear across all comparison tables in `IQ_Notes/`:

| # | Keyword | File(s) | Table Name |
|---|---|---|---|
| 1 | `let` | `JIT_Compilation_IQ.md`, `V8_Engine_Concept.md` | V8 Decision Table, Side-by-Side Simple vs Hot Code |
| 2 | `for` | `JIT_Compilation_IQ.md`, `V8_Engine_Concept.md` | V8 Decision Table, Side-by-Side Simple vs Hot Code |
| 3 | `function` | `JIT_Compilation_IQ.md` | V8 Decision Table |

> **Note:** `console` appears frequently in all notes but is **not** a JavaScript keyword — it's a global object provided by the browser / Node.js runtime.

---

## TL;DR

> **Keywords are reserved words** built into the language — you cannot use them as variable names. JavaScript has ~45 reserved keywords. Of these, only **3** (`let`, `for`, `function`) appear in the comparison tables across `IQ_Notes/`. The most common identifier in the notes — `console` — is **not** a keyword, it's a runtime API object.
