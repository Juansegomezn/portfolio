# 🧰 STACK.md — Portfolio Technology Stack

This document defines the **official technology stack** used in the Portfolio project.  
All contributors and AI assistants must follow this stack and the standards defined in  
**SOFTWARE_GUIDELINES.md** (also referenced as **GUIDELINES.md**).

---

## 🎯 Purpose

Ensure the project remains:
- Maintainable  
- Scalable  
- Accessible  
- Professional  
- Easy to audit  
- Consistent with industry best practices  

---

# ⚙️ Core Technologies

## **Framework**
- **React** (functional components only)

## **Language**
- **TypeScript**
- Strict mode enforced  
- No `any` except in extremely justified scenarios

---

# 🎨 Styling

- **TailwindCSS**  
- Utility-first design  
- No inline styles (unless strictly necessary)

---

# 🧭 Routing

- **React Router DOM**  
- Must use semantic navigation and preserve accessibility

---

# 🧩 State Management

- Native React tools only:
  - `useState`
  - `useReducer`
  - `useContext` (only when justified)

> ❌ No Redux, Zustand, Jotai, MobX, etc.

---

# 🧪 Testing Stack

- **Jest**
- **React Testing Library**
- Minimum test coverage target: **80%**

---

# 🌍 Internationalization

- All user-facing text must come from:
  - `i18n` translation files  
  - or JSON configuration files  

> ❌ No hardcoded strings anywhere in components.

---

# 📁 Expected Project Structure

src/
  components/
  sections/ 
  hooks/
  data/
  i18n/
  styles/
  context/
  utils/

---

# 📦 Dependency Rules

- Avoid large UI libraries  
- Keep dependencies lightweight  
- No dependency added without a clear justification  
- All dependencies must remain upgradeable  

---

# 🔒 Security Rules

- No secrets, tokens, or credentials in the repository  
- Use `.env` only for non-sensitive configuration  
- Keep dependencies up-to-date  
- Validate all input in forms  

---

# 🤖 AI Assistant Rules

AI agents must always:
- Follow **STACK.md**  
- Follow **SOFTWARE_GUIDELINES.md** / **GUIDELINES.md**  
- Respect folder structure  
- Use TailwindCSS consistently  
- Produce clean, accessible, typed code  
- Avoid adding unauthorized dependencies  

---

# 📝 Summary

This stack ensures the Portfolio project remains:
- Lightweight  
- Performant  
- Scalable  
- Type-safe  
- Professional  

Aligned fully with the development standards defined in **GUIDELINES.md**.

