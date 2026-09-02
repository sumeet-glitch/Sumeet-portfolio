# MASTER ENTERPRISE ARCHITECT & SECURITY GOVERNANCE PROTOCOL
# Standard Operating Procedure & Repository Rules (`AGENT_RULES.md`)

> **CLASSIFICATION**: MANDATORY REPOSITORY GOVERNANCE  
> **ROLE ASSIGNMENT**: Principal Security Engineer, SRE, and Chief Software Architect  
> **SCOPE**: All current and future autonomous agent and developer tasks across this codebase.

---

## 1. Plan-First & Atomic Execution Protocol

### 1.1 Non-Negotiable Plan-First Mandate
1. **Never alter business logic or write functional code without an approved step-by-step Implementation Plan.**
2. The Implementation Plan must detail:
   - Specific files to modify, create, or delete.
   - Architectural boundaries touched (UI, State, Network, Subprocess, Storage).
   - Threat modeling and resilience implications.
   - Verification plan across Happy Path, Edge Cases, and Fault Injection.
3. **No Unsolicited Modifications**: Never refactor, rename, or delete existing working features outside the explicit scope approved by the user.

### 1.2 Atomic Commits & Changes
1. All changes must be modular, self-contained, and backwards-compatible.
2. Do not introduce breaking schema or interface changes without explicit deprecation cycles.
3. Ensure the project remains buildable and testable at every single step.

---

## 2. Architecture & Boundary Specification

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        PRESENTATION / UI LAYER                          │
│        (HTML5, Responsive Glassmorphic CSS, Dynamic DOM, WCAG 2.1)      │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │ (Sanitized Events & Actions)
┌────────────────────────────────────▼────────────────────────────────────┐
│                    SELF-HEALING CONTROLLER & RUNTIME                    │
│    (Global Error Trap, Watchdog Supervisor, State Snapshot & Fallback)   │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │ (Typed Contracts / Circuit Breaker)
┌────────────────────────────────────▼────────────────────────────────────┐
│                  NETWORK, API & SUBPROCESS ADAPTERS                     │
│    (Exponential Backoff, Timeout Wrappers, Sanitized Shell Invocation)  │
└─────────────────────────────────────────────────────────────────────────┘
```

### 2.1 Boundary Enforcements
- **UI Layer**: Pure presentation and user interaction. Must NEVER directly execute unvalidated raw input or perform unhandled asynchronous operations.
- **Controller / State Layer**: Governs workflow state, input sanitization, snapshot restoration, and error trapping.
- **Service & Network Layer**: Wrapped in Circuit Breakers, Exponential Backoff Retries, and strict timeout bounds.
- **Storage & Native Layer**: Local state and secrets must use OS-level protected storage (DPAPI/Keytar/AES-GCM Web Crypto) or environment variables. No secrets in source code.

---

## 3. Run-Time Self-Healing (Resilience & SRE Architecture)

All components, modules, and API calls must adhere to zero-crash, self-healing resilience patterns:

### 3.1 Global Error Trapping & Subsystem Supervisors
1. **Root Process Immunity**: No unhandled exception, syntax anomaly in external data, or unhandled Promise rejection may crash the root process or freeze the UI thread.
2. **Supervisor Watchdogs**:
   - Wrap all dynamic initialization, intersection observers, and DOM mutations in `try-catch` blocks and supervisor watchdogs.
   - On error: log sanitized diagnostic telemetry, isolate the failing subsystem, fall back to safe default rendering, and trigger a graceful restart of the failed worker/listener.
3. **Window Traps**:
   ```javascript
   window.addEventListener('error', (event) => {
       console.error('[CRITICAL SELF-HEALING WATCHDOG]', {
           message: event.message,
           source: event.filename,
           lineno: event.lineno,
           timestamp: new Date().toISOString()
       });
       event.preventDefault(); // Prevent browser crash / loud unhandled error
   });

   window.addEventListener('unhandledrejection', (event) => {
       console.error('[CRITICAL UNHANDLED REJECTION TRAP]', {
           reason: event.reason,
           timestamp: new Date().toISOString()
       });
       event.preventDefault();
   });
   ```

### 3.2 Circuit Breaker & Resilient Retry Engine
All external network requests, LLM API calls, speech/audio streams, or background daemons must be governed by a Circuit Breaker with Exponential Backoff:
- **Max Retries**: 3 to 5 attempts.
- **Backoff Formula**: $t_{retry} = \min(t_{max}, t_{base} \times 2^{attempt}) \pm \text{jitter}$.
- **Circuit States**: `CLOSED` (normal), `OPEN` (fail fast when threshold exceeded), `HALF-OPEN` (trial recovery probe).
- **Hard Timeout**: Every network request must enforce a strict `AbortController` timeout (default 8000ms).

### 3.3 State Recovery & Resource Clean Disposals
1. **State Snapshots**: Critical state must be periodically synced to persistent storage with schema versioning. Corrupted state must automatically reset to a guaranteed safe default without blocking user access.
2. **Deterministic Cleanup Protocol**:
   - Before restarting any listener, worker thread, or stream: cancel all pending `requestAnimationFrame`, `setTimeout`, and `setInterval` handles.
   - Disconnect `IntersectionObserver`, `MutationObserver`, and `ResizeObserver` instances.
   - Explicitly release camera, microphone, WebGL, and media stream tracks via `track.stop()`.
   - Close open database handles, worker threads, and OS file descriptors.

---

## 4. Zero-Trust Security & Anti-Reverse Engineering Protocol

### 4.1 Anti-Decompilation & Source Code Hardening (Production Builds)
When building production assets, desktop installers, or web bundles:
1. **Multi-Stage Obfuscation**:
   - Abstract Syntax Tree (AST) obfuscation with control-flow flattening.
   - String encryption (base64/RC4 rotated string array encoding).
   - Dead-code injection and identifier mangling.
2. **Binary Hardening**:
   - Strip all symbol tables, comments, and debugging source maps (`sourcemap: false` in production).
   - For desktop binaries/executables: enforce ASLR (Address Space Layout Randomization) and DEP (Data Execution Prevention).
3. **Anti-Debugging & Runtime Anti-Tamper**:
   - Periodic runtime integrity verification (detect debugger attachment via timing deltas or `debugger` trapping).
   - Console suppression and DOM mutation locks on sensitive elements.

### 4.2 Zero Secrets Exposure
1. **No Hardcoded Credentials**: No API tokens, private keys, database credentials, or secret webhook URLs in client-side code, Git commits, or build outputs.
2. **Environment Variables**: Load secrets exclusively via secure environment configuration (`.env` omitted from Git via `.gitignore`).
3. **Secure Vaulting**: For desktop/local daemon components (FastAPI / Electron / Node), utilize OS Credential Manager (Windows Credential Vault / macOS Keychain / Linux SecretService via Keytar or DPAPI) or AES-256-GCM encrypted vaults with ephemeral machine-bound keys.

### 4.3 Input Sanitization & Injection Defense
1. **Cross-Site Scripting (XSS)**:
   - Never inject unsanitized HTML via `.innerHTML`. Use `.textContent` or run data through strict sanitizers (e.g., DOMPurify) with strict tag whitelists.
2. **Command & Path Injection**:
   - Never concatenate untrusted strings into OS shell commands (`exec`, `spawn`, `subprocess`).
   - Use parameterized arguments and enforce strict whitelist validation on file paths.
3. **Desktop Context Isolation**:
   - For any desktop/hybrid wrappers: enforce `contextIsolation: true`, `nodeIntegration: false`, `sandbox: true`, and strictly whitelist IPC message channels.

---

## 5. Strict Typing & Schema Validation

1. **TypeScript / Typed JavaScript**:
   - Strict mode enabled (`"strict": true`, `"noImplicitAny": true`).
   - No untyped or loosely defined `any` objects in core logic.
2. **Runtime Schema Validation**:
   - Use Zod or standard JSON schema validators for all incoming network payloads, form submissions, and configuration files.
3. **Python / Backend Daemons**:
   - Pydantic v2 schemas required for all request bodies, responses, and environment settings. Type hints (`typing`, `mypy` strict) mandatory.

---

## 6. Test-Driven Development (TDD) & Quality Assurance Matrix

Every feature, bugfix, or subsystem modification must be backed by automated test suites structured across four distinct tiers:

| Tier | Category | Objective | Enforcement Standard |
| :--- | :--- | :--- | :--- |
| **Tier 1** | **Happy Path** | Validate correct behavior under standard expected inputs. | 100% pass rate. Verify all return values, UI renders, and state mutations. |
| **Tier 2** | **Edge Cases** | Probe boundary conditions (null, undefined, empty strings, max unicode length, NaN, negative bounds). | Ensure graceful handling without crashes or invalid state. |
| **Tier 3** | **Fault Injection & Resilience** | Simulate network dropouts, 500 server errors, timeouts, corrupt state, and rapid user inputs. | Verify that Circuit Breaker trips, fallback state renders, and self-healing recovers subsystem. |
| **Tier 4** | **Mocked System Calls** | Stub all filesystem, network fetch, audio/video hardware, and OS subprocess calls. | **CRITICAL**: Tests must NEVER trigger destructive OS actions or unmocked external network calls. |

---

## 7. Production Build & Security Verification Pipeline

Before releasing or deploying any update, execute the following verification checklist:

- [ ] **Static Code Analysis (SAST)**: Zero linter errors, zero unresolved high-severity vulnerabilities (`npm audit` / dependency scan).
- [ ] **Type Check**: Type validation passes with zero errors.
- [ ] **Automated Test Matrix**: Tier 1 through Tier 4 tests pass with green status.
- [ ] **Security Sanitization Audit**: No secrets, test tokens, or internal IP addresses committed or visible in client builds.
- [ ] **Build Hardening**: Source maps disabled, asset minification & obfuscation active, integrity hashes verified.
- [ ] **Aesthetics & Performance**: Lighthouse score $\ge 95$, zero layout shift (CLS < 0.1), First Contentful Paint < 1.2s.

---

## 8. Agent Governance & Compliance Agreement

Any autonomous agent operating within this repository is bound by the rules in this document. When receiving a prompt:
1. **Audit existing code first** without destructive alterations.
2. **Formulate a clear Plan** following Section 1.
3. **Implement self-healing guards** (Section 3) and **security protections** (Section 4).
4. **Verify through the TDD Matrix** (Section 6) before reporting completion.
