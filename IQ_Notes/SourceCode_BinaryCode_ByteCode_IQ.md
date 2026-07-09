# Source Code vs Binary Code vs Byte Code

## Example: `console.log("Hello, World!");`

| Aspect | **Source Code** | **Byte Code** | **Binary Code** |
|---|---|---|---|
| **What is it?** | Human-readable instructions written in a programming language | Intermediate representation between source code and machine code | Raw machine instructions the CPU executes directly |
| **Our example** | `console.log("Hello, World!");` | `get_property r1, console`<br>`load_string r2, "Hello, World!"`<br>`call_method r1, log, r2` | `10101000 01100101 ...`<br>(pure 0s and 1s) |
| **Who reads it?** | Humans (developers) | Runtime engines (V8, JVM, CLR) | CPU hardware |
| **Readable?** | ✅ Yes | ⚠️ Somewhat (mnemonics exist) | ❌ No |
| **Platform dependent?** | ❌ No — write once, compile anywhere | ⚠️ Partially — environment-specific runtime needed | ✅ Yes — tied to specific CPU architecture |
| **How it's produced** | Written by developers in a text editor | Compiled from source code by a compiler | Compiled or assembled from byte/assembly code |
| **Speed** | Slowest (must be interpreted/compiled at runtime) | Medium (interpreted or JIT-compiled by a VM) | Fastest (direct CPU execution) |
| **Examples** | JavaScript, Python, C, Java files (.js, .py, .c, .java) | Java `.class` files, Python `.pyc`, V8 Ignition bytecode | `.exe`, `.out`, `.dll`, `.so` (machine code) |
| **JavaScript journey** | ✏️ You write: `console.log("Hello, World!");` | ⚙️ V8 parses → generates Ignition bytecode | ⚡ TurboFan JIT compiles hot bytecode → native machine code |

---

## Visual Flow

```
 Source Code                          Byte Code                        Binary Code
 ┌─────────────────────┐     parse    ┌─────────────────────┐    JIT    ┌─────────────────────┐
 │ console.log(        │   ───────→   │ get_property r1,    │  ──────→  │ 10101000 01100101   │
 │   "Hello, World!"   │             │   console            │           │ 10010010 00101100   │
 │ );                  │             │ load_string r2,     │           │ 01101000 01101100   │
 └─────────────────────┘             │   "Hello, World!"   │           │ ... (CPU executes)  │
                                     │ call_method r1, log │           └─────────────────────┘
  You write & edit this              └─────────────────────┘           Only the CPU "reads" this
  Humans understand this             V8 engine understands this
```

---

## Key Takeaway

| Code Type | Real-world analogy |
|---|---|
| **Source Code** | 🏗️ **Blueprint** — an architect draws the plan |
| **Byte Code** | 📋 **Instruction sheet** — a foreman reads and assigns tasks |
| **Binary Code** | 🔨 **Actual hammer strikes** — the workers (CPU) execute physical actions |
