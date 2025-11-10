# 🤖 AGENTS.md — AI & Copilot Development Guidelines

This document defines how **AI-based assistants (Copilot, ChatGPT, Claude, etc.)** should operate within this repository.  
It ensures all code generation and suggestions align with the project’s goals, best practices, and clean architecture standards.

---

## 🎯 Project Context

This repository hosts the **Professional Portfolio** of **Juan Sebastián Gómez Ayala**, a **Web UI Developer**.  
The goal is to present a **clean, maintainable, and accessible frontend application** that demonstrates strong software engineering principles and technical storytelling.

---

## ⚙️ Core Principles

1. **Clarity & Simplicity:** code must be self-explanatory and maintainable.  
2. **Single Responsibility (SOLID - S):** each component should have one clear purpose.  
3. **Composition over inheritance:** prefer hooks and reusable props.  
4. **Clean Code:** descriptive naming, no duplication, no commented-out code.  
5. **Clean Architecture:** clear separation between presentation, logic, and data.  
6. **Data-driven development:** all content comes from structured JSON or config files.  
7. **Testing mindset:** prioritize component and unit tests for critical parts.

---

## 🧩 Technical Guidelines

| Area | Recommendation |
|------|----------------|
| **Framework** | React + TypeScript — functional components only |
| **Styling** | TailwindCSS — no inline styles unless necessary |
| **Routing** | React Router DOM — accessible navigation |
| **State** | useState / useReducer — avoid large state libs |
| **Typing** | Strong TypeScript interfaces for all props |
| **Linting** | Follow ESLint + Prettier rules |
| **Commits** | Conventional commits (`feat:`, `fix:`, `refactor:`…) |

---

## 🧱 Expected Structure

src/
components/ → Atomic & reusable UI components
pages/ → Main views
hooks/ → Reusable logic
data/ → Static or JSON data
i18n/ → Translations
styles/ → Tailwind setup
context/
AGENTS.md → This document
CONTEXT.md → Author’s personal data for portfolio


---

## 🧠 Additional AI / Copilot Rules

1. Do **not** edit `/context/CONTEXT.md`.  
2. Never hardcode text — always use `i18n` or JSON data.  
3. Prefer **pure functions** and avoid unnecessary side effects.  
4. Maintain **strict typing** (avoid `any`).  
5. Ensure **accessibility compliance**: `alt`, `aria`, focus states, contrast.  
6. Do **not** add heavy dependencies without justification.  
7. Always respect **SOLID principles**:
   - **S** — Single Responsibility  
   - **O** — Open/Closed  
   - **L** — Liskov Substitution  
   - **I** — Interface Segregation  
   - **D** — Dependency Inversion  

---

## 🧩 Architectural Layers

- **Presentation Layer:** UI components and layout.  
- **Domain Layer:** business logic and reusable hooks.  
- **Infrastructure Layer:** data fetching, i18n, or JSON data integration.  
- **Interface Layer:** forms, events, routing.

---

## 🧪 Testing

- Framework: **Jest + React Testing Library**.  
- Test all reusable components and critical UI features.  
- Minimum coverage goal: **80%** for core components.

---

## 🧭 Git & Version Control Guidelines

1. **Branch Strategy**
   - Use feature branches for all new work:  
     `feature/<short-description>`  
     e.g., `feature/add-language-switch`  
   - Use fix branches for bug fixes:  
     `fix/<issue-description>`  
     e.g., `fix/header-alignment`
   - Use refactor branches for restructuring without new features:  
     `refactor/<context>`

2. **Commits**
   - Follow **Conventional Commit** format:
     ```
     feat: add new project filter
     fix: resolve layout issue on mobile
     refactor: simplify project card component
     docs: update README with deploy instructions
     ```
   - Each commit must represent a **single, logical change**.
   - Use **imperative tone** in commit messages (e.g., “add” not “added”).

3. **Pull Requests**
   - PR titles should mirror the commit message style.
   - Include a short summary describing:
     - What was changed
     - Why it was changed
     - How it was tested
   - Avoid merging directly into `main` without review or testing.

4. **Merging**
   - Prefer **Squash & Merge** to keep a clean linear history.
   - Ensure PRs pass ESLint and build checks before merge.

5. **Versioning**
   - Use **semantic versioning** (e.g., `v1.2.0`).
   - Update changelog or release notes after each deployment.

6. **Commit Quality for AI Agents**
   - AI-generated commits should:
     - Contain clear and descriptive messages.
     - Avoid meaningless messages like “update files” or “fix stuff”.
     - Be reviewed manually before merging.

---

> ✅ *Goal:* Maintain a clear, auditable Git history that reflects the professional quality and structure of the project.


## 🔒 Security & Privacy

- Do not include sensitive personal data.  
- Never expose tokens or keys.  
- Use `Formspree` or `mailto:` for contact forms (no backend).  
- Keep dependencies up-to-date.

---

## ✅ AI Objective Summary

> *Generate clear, accessible, type-safe React components aligned with Clean Architecture, SOLID, and the professional vision of the Author.*
