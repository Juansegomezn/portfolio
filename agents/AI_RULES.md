# 🤖 AI_RULES.md — AI Collaboration Rules

This document defines how AI agents (ChatGPT, Copilot, etc.) must operate within the project.

These rules override default AI behavior.

---

# 🚫 Files AI MUST NOT Modify

- PROJECT_CONTEXT.md  
- Architecture decisions (unless explicitly instructed)  
- Content JSON files not marked as editable  
- Images or static assets  

---

# 🛠️ AI Must Always:

- Follow **GUIDELINES.md**  
- Follow **STACK.md**  
- Respect the architecture  
- Produce English-only output  
- Use type-safe, testable code  
- Write contextual commits  
- Keep UI accessible  
- Use TailwindCSS consistently  

---

# 📦 Allowed Code Changes

AI may:
- Add new components  
- Fix bugs  
- Improve tests  
- Add documentation  
- Refactor non-critical areas 

---

# ❌ Forbidden Code Patterns

- Adding heavy libraries without approval  
- Using `any` carelessly  
- Writing business logic inside components  
- Hardcoding user-facing text  
- Bypassing the architecture  

---

# 🧪 AI Test Rules

AI-generated code must:
- Include tests for new business logic  
- Ensure existing tests pass  
- Maintain at least 80% coverage  

---

# 🧭 AI Commit Rules

Always use contextual commits:

type(scope): short title

Why: problem

What: solution

Impact: business/system effect

---

# 🏁 Summary

These rules ensure AI agents contribute safely, consistently, and professionally while respecting project architecture and standards.
