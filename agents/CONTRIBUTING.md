# 🤝 CONTRIBUTING.md — Contribution Guide

Thank you for contributing!  
This document explains the correct process for contributing to this project.

---

# 🛠️ Setup Instructions

## Install dependencies:

npm install

## Run local development:

npm run dev

## Run tests:

npm tests

---

# 🧭 Branch Strategy

Use the following structure:

feature/<description>
fix/<description>
refactor/<context>
chore/<task>
docs/<target>

---

# 📝 Commit Standards

Use **Conventional + Contextual commits**:


feat(header): add language switcher

Why: user feedback shows confusion regarding default language

What: implemented new switcher component

Impact: improves accessibility and UX

---

# 🚀 Pull Request Guidelines

Each PR must include:
- What changed  
- Why it changed  
- Screenshots (if UI)  
- Tests included  
- Any architectural implications  

Must pass:
- Lint  
- Build  
- Tests  

PRs are merged using **Squash & Merge**.

---

# 🧱 Code Style

- Follow GUIDELINES.md  
- English-only  
- No commented-out code  
- Keep functions small and clean  
- Prefer pure functions  

---

# 🧪 Testing Expectations

- All new logic must include tests  
- Do not reduce existing coverage  
- Prefer RTL for UI components  

---

# 🏁 Summary

This guide ensures consistent, predictable, and high-quality contributions.  
Thank you for helping maintain this project!
