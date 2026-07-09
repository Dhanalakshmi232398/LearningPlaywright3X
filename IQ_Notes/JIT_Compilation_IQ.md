# JIT Compilation vs Interpretation vs Ahead-of-Time Compilation

## Example: `02_SimpleVsComplexCode_letConcept.js`

```js
let x = 10;                          // Cold code — runs once
console.log(x);

for (let i = 0; i < 500; i++) {      // Hot code — runs 500 times
    console.log(i);
    badcodeFn();
}

function badcodeFn() {
    console.log("Hello, this is a bad code function");
}
```

---

| Aspect | **Interpretation** | **JIT Compilation** | **AOT Compilation** |
|---|---|---|---|
| **What is it?** | Code is translated line-by-line at runtime — no pre-processing | Code is interpreted first, then **hot paths** are compiled to machine code **at runtime** | Code is fully compiled to machine code **before execution** |
| **Our example** | `let x = 10;` — Ignition runs it as byte code, no optimisation | The `for` loop (hot) — TurboFan detects it runs 500×, compiles it to native code mid-execution | N/A in JS — but equivalent to compiling a C file with `gcc` into an `.exe` upfront |
| **When does translation happen?** | During execution (line by line) | During execution (after profiling the hot code) | Before execution (at build time) |
| **Speed of execution** | Slowest — must re-read/translate every time | Fast after warm-up — hot paths run as native code | Fastest from the start — already native code |
| **Startup time** | Fastest — no compilation step needed | Fast — starts interpreting immediately, compiles in background | Slowest — must compile everything before running |
| **Memory usage** | Low — no compiled code stored | Medium — stores both byte code and compiled native code | High — entire compiled binary stored on disk |
| **Platform dependent?** | ❌ No | ⚠️ Partially — compiles native code for the host CPU | ✅ Yes — binary is tied to a specific CPU/OS |
| **Used by** | Python (CPython), older JS engines (no JIT) | **V8 (Chrome/Node.js)**, Java JVM (HotSpot), .NET CLR | C, C++, Rust, Go (gcc, clang, rustc) |
| **Real-world analogy** | 🧑‍🏫 **Reading a foreign language aloud** — translate each word as you speak | 🧠 **Learning a dance** — slow at first, then your body moves automatically | 🎬 **Watching a dubbed movie** — everything is ready before you press play |

---

## How V8 Decides: Interpretation vs JIT

| Code Pattern | V8's Decision | Reason |
|---|---|---|
| `let x = 10;` (runs once) | **Interpret only** — Ignition byte code executes it directly | Compiling would cost more CPU time than it saves |
| `for` loop (runs 500×) | **Interpret → Profile → JIT compile** — TurboFan converts it to machine code after ~30–50 iterations | The compile cost is amortised over hundreds of runs |
| `badcodeFn()` inside the loop | **JIT compiled** as part of the hot loop body | Same loop heat — the function is inlined and optimised |
| A function that runs once, then never again | **Interpret only** — not worth the JIT warm-up overhead | Compilation would be wasted work |

---

## Visual Pipeline

```
                    Source Code
                         │
                         ▼
            ┌─────────────────────────┐
            │     Parser → AST         │
            └────────────┬────────────┘
                         │
                         ▼
            ┌─────────────────────────┐      COLD CODE
            │  Ignition (Byte Code)   │ ──────────────────→  CPU Execution
            │  Interprets & Profiles  │         (slow)
            └────────────┬────────────┘
                         │
                   ┌─────┴─────┐
                   │           │
              Hot code?    Not hot?
                   │           │
                   ▼           ▼
            ┌──────────┐   (stays interpreted)
            │TurboFan  │
            │JIT       │
            │Compile   │
            └────┬─────┘
                 │
                 ▼
        ┌─────────────────────┐
        │  Machine Code       │
        │  (Native CPU)       │
        │  FAST execution     │
        └─────────────────────┘
                 │
           (if assumptions fail)
                 ▼
        ┌─────────────────────┐
        │ Deoptimisation      │
        │ Fall back to byte   │
        │ code, re-profile    │
        └─────────────────────┘
```

---

## Step-by-Step Walkthrough — `02_SimpleVsComplexCode_letConcept.js`

| Step | What Happens | Code Affected | Engine |
|---|---|---|---|
| 1 | Source is parsed into an AST | Entire file | Parser |
| 2 | Ignition generates byte code and starts executing | Entire file | Ignition |
| 3 | `let x = 10` runs once as byte code | `let x = 10;` | Ignition (interpreted) |
| 4 | `console.log(x)` runs once as byte code | `console.log(x);` | Ignition (interpreted) |
| 5 | `for` loop begins — first ~30 iterations run as byte code, while Ignition **profiles** how many times it loops and what types are used | `for (let i = 0; i < 500; i++)` | Ignition (profiling) |
| 6 | TurboFan sees loop is hot (500 iterations) — compiles the loop body + `badcodeFn()` into native machine code | `console.log(i)` + `badcodeFn()` | TurboFan (JIT) |
| 7 | Remaining ~470 iterations execute as **native machine code** — much faster | Rest of the loop | CPU (native) |
| 8 | If `badcodeFn()` suddenly received a string argument (it only logs a string, so no break here) | `badcodeFn()` | Deoptimisation (fallback to byte code) |

---

## Speed Comparison Over Time

```
Execution Speed
     ▲
     │                                   ┌──── Native (AOT)
     │                                   │          (fast from start)
     │                                   │
     │               ┌───────────────────┘ JIT
     │               │       (slow start, then fast after warm-up)
     │               │
     │  ┌────────────┘ Interpretation
     │  │                    (consistently slow)
     │  │
     └──┴──────────────────────────────────────────► Time
        │
   Start of execution       Loop kicks in → JIT compiles → speed jumps
```

---

## Key Takeaway

| Strategy | Analogy | Best for |
|---|---|---|
| **Interpretation** | 🗣️ **Simultaneous interpreter** — translates every sentence as you speak | Scripts, prototyping, quick startups |
| **JIT Compilation** | 🏋️ **Training for a sport** — awkward at first, then effortless and fast | Long-running apps (Node servers, browsers) |
| **AOT Compilation** | 🎵 **A recorded song** — perfect quality from the first note | System software, games, mobile apps |

---

## TL;DR

> **Interpretation** → slow but starts instantly. **JIT** → starts fast, gets fast. **AOT** → starts slow, stays fast.

- JS in V8 uses **both** interpretation (Ignition) and **JIT** (TurboFan) — best of both worlds
- Cold code (runs once) → **interpreted only** — not worth compiling
- Hot code (runs many times) → **JIT-compiled to native** — massive speed boost
- If JIT's assumptions break → **deoptimisation** — fall back to byte code gracefully
- V8's hybrid approach is why Node.js is both quick to start and fast at runtime
