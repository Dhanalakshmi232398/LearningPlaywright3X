# V8 Engine — Full Concept Walkthrough

## Example File: `01_HelloWorld.js`

```js
console.log("Hello, World!");
```

## Example File: `02_SimpleVsComplexCode_letConcept.js`

```js
let x = 10;
console.log(x);

// Hot code — runs many times → gets compiled & optimised
for (let i = 0; i < 500; i++) {
    console.log(i);
    badcodeFn();
}

function badcodeFn() {
    console.log("Hello, this is a bad code function");
}
```

---

## V8 Engine Pipeline — Layer by Layer

| # | Layer / Step | What Happens | Input → Output | Example Trace (`01_HelloWorld.js`) |
|---|---|---|---|---|
| 1 | **Parser** | Source code is tokenised and parsed into an **AST** (Abstract Syntax Tree) | `.js` file → **AST** (tree of tokens) | `console` → `log` → `"Hello, World!"` is parsed into a tree structure |
| 2 | **Ignition Interpreter** | Walks the AST and generates **byte code**. Executes the byte code immediately. Also **profiles** the code — counts how many times each function runs | AST → **Byte Code** | `LdaGlobal "console"` → `Star r0` → `LdaNamedProperty r0, "log"` → `CallNoFeedback` |
| 3 | **TurboFan JIT Compiler** | Watches profiling data from Ignition. If a function is **hot** (called many times, e.g. the `for` loop runs 500×), TurboFan compiles its byte code into **optimised machine code** | Hot Byte Code → **Machine Code** | The `for` loop body + `badcodeFn()` get compiled to native x86/x64 instructions for speed |
| 4 | **Execution** | CPU runs the machine code directly | Machine Code → **Result** | `Hello, World!` printed to the console (fast) |
| 5 | **Deoptimisation** | If V8's assumptions (e.g. variable always has type `number`) turn out wrong, V8 **bails out** — falls back to Ignition byte code and re-profiles | Machine Code → **Byte Code** (fallback) | If `badcodeFn` suddenly started receiving a string argument, V8 throws away the optimised code and re-interprets |

---

## Side-by-Side: Simple Code vs Hot Code

| Aspect | Simple Code (`let x = 10`) | Hot Code (`for` loop running 500×) |
|---|---|---|
| **V8's action** | Only **parsed + interpreted** by Ignition — TurboFan never touches it | **Parsed → interpreted → profiled → JIT-compiled** by TurboFan |
| **Why?** | Runs once, not worth compiling | Runs many times — compilation cost is worth the speed gain |
| **Byte code generated?** | ✅ Yes (Ignition generates it anyway) | ✅ Yes (initial step) |
| **Machine code generated?** | ❌ No (not worth it) | ✅ Yes (TurboFan kicks in) |
| **Speed** | Slower (interpreted) | Much faster (native CPU execution) |
| **Deoptimisation risk** | None (no optimised code to throw away) | Can happen if V8's type assumptions break |

---

## Visual Architecture of V8

```
┌──────────────────────────────────────────────────────────────────┐
│                        Source Code (.js)                         │
│              console.log("Hello, World!");                       │
└──────────────────────────┬───────────────────────────────────────┘
                           │
                           ▼
┌──────────────────────────────────────────────────────────────────┐
│                      Parser (AST)                                 │
│  "Understands the grammar — builds a tree of tokens"             │
│  { type: ExpressionStatement, expression: { callee: ... } }     │
└──────────────────────────┬───────────────────────────────────────┘
                           │
                           ▼
┌──────────────────────────────────────────────────────────────────┐
│                   Ignition (Byte Code)                           │
│  "Interprets the byte code immediately AND profiles"            │
│  LdaGlobal "console"                                            │
│  Star r0                                                        │
│  LdaNamedProperty r0, "log"                                     │
│  Star r1                                                        │
│  Ldar r0                                                        │
│  CallNoFeedback r1, r0                                          │
└──────────────┬───────────────────────────────────┬───────────────┘
               │                                   │
               │  Cold code (runs once)            │  Hot code (runs 500×)
               ▼                                   ▼
     (executed directly)             ┌─────────────────────────────┐
                                     │  TurboFan (JIT Compiler)    │
                                     │  "Compiles hot byte code    │
                                     │   to native machine code"   │
                                     │  mov rax, [rbx+0x10]        │
                                     │  call [rax+0x20]            │
                                     └─────────────┬───────────────┘
                                                   │
                                                   ▼
                                    ┌─────────────────────────────┐
                                    │     CPU Execution            │
                                    │  (fastest speed)             │
                                    └─────────────────────────────┘
```

---

## Key Terms

| Term | Meaning |
|---|---|
| **AST** | Abstract Syntax Tree — tree representation of source code |
| **Ignition** | V8's fast interpreter — generates & runs byte code, collects type profiles |
| **TurboFan** | V8's optimising JIT compiler — turns hot byte code into machine code |
| **Byte Code** | Compact intermediate representation (not human-readable) |
| **Machine Code** | Raw CPU instructions (binary) |
| **Hot Code** | Code that runs many times — a candidate for JIT optimisation |
| **Deoptimisation** | Rolling back from machine code to byte code when assumptions fail |

---

## Summary

> **Source code** `→` **Parser** `→` **AST** `→` **Ignition** `→` **Byte Code** `→` **(hot?)** `→` **TurboFan** `→` **Machine Code** `→` **CPU**

- Simple code ➡ only **interpreted** (Ignition byte code)
- Hot code ➡ **JIT-compiled** (TurboFan machine code) for massive speed gains
- V8 **profiles** while it interprets, so it knows *what* to optimise
- If optimisation assumptions break, V8 **deoptimises** gracefully
