# 📘 GUIDELINES.md — Software Development Standards

This document defines the **universal development standards** for this repository.  
It ensures quality, maintainability, architecture discipline, security, consistency, and safe AI collaboration.

All contributors — human or AI — MUST comply with these rules.

---

# 🎯 Core Principles

## **Clarity & Simplicity**
- Code must be self-explanatory and explicit.
- Prefer readability over cleverness.

## **Single Responsibility (SOLID — S)**
Each file, class, or function must have one clear purpose.

## **Clean Code Discipline**
- Meaningful naming  
- Small functions  
- No duplication  
- No commented-out code  
- No unnecessary abstractions  

## **Commenting Policy**
Only allow comments for:
- Complex logic  
- Domain rules  
- Non-obvious algorithms  
- Security-sensitive code  

Everything else should be made clear via code.

## **English-Only Standard**
All documentation, comments, commits, and communication must be in English.

---

# 🧱 Clean Architecture Compliance

domain/ → pure business logic
application/ → use cases, orchestrators
infrastructure/ → APIs, DB, adapters
interface/ → UI, controllers, routes

Rules:
- Inner layers must NOT depend on outer layers.
- External dependencies must remain replaceable.
- Domain logic MUST remain pure.

---

# 🧪 Testing Guidelines

- Tests are mandatory for critical areas.
- Minimum coverage: **80%**
- Prefer behavioral tests over implementation details.
- Test categories:
  - Unit  
  - Integration  
  - E2E (if applicable)  

---

# 🔒 Security Standards

- No secrets or tokens in the repo.
- Validate all inputs.
- Avoid insecure patterns (`eval`, raw SQL strings, plaintext storage).
- Follow least-privilege principle.

---

# 🧭 Git & Version Control Guidelines

## **Branch Strategy**

feature/<description>
fix/<description>
refactor/<context>
chore/<task>
docs/<target>

## **Commit Format — Conventional + Contextual Commits**

Every commit must:
- Be atomic  
- Follow conventional commits  
- Include context, problem, solution, impact  

Example:

feat(cart): add guests checkout flow

Why: 40% of users abandon on login screen

What: Implemented checkout without account creation

Impact: Expected 15% increase in conversion

This creates a meaningful, auditable Git history.

---

# 🚀 Pull Requests

Every PR must include:
- Summary of changes  
- Why the change was needed  
- How it was tested  
- Risks or breaking changes  
- Architectural impact  

PRs must use **Squash & Merge**.

---

# 📁 Repository Structure

src/
domain/
application/
infrastructure/
interface/
agents/ # all .md AI-related documentation
tests/
docs/

---

# 📚 Documentation Requirements

Required project documentation:

### **Architecture Documentation**
- Layer descriptions  
- Flow diagrams  
- Data lifecycle  
- Approved decisions  

### **API Reference / Event Reference**
(If applicable for the project)

### **Troubleshooting Guide**
(If applicable)

### **Required Repository Docs**
- README.md  
- GUIDELINES.md  
- STACK.md  
- PROJECT_CONTEXT.md  
- CONTRIBUTING.md  
- ARCHITECTURE.md  
- AI_RULES.md

---

# 🤖 AI Assistant Rules

AI agents must:
- Respect architecture  
- Follow STACK.md  
- Follow GUIDELINES.md  
- Avoid unauthorized libraries  
- Produce clean, testable, typed, accessible code  
- NEVER modify PROJECT_CONTEXT.md  
- Use English exclusively  

---

# 🏁 Summary

This document defines the foundation for:
- Predictable development  
- Clean maintainable architecture  
- Professional Git workflow  
- Safe AI collaboration  

Following these guidelines ensures a high-quality, scalable, long-term project.
