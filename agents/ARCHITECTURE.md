# 🧱 ARCHITECTURE.md — System Architecture Documentation

This document describes the **actual architecture** of the Portfolio project.  
It complements GUIDELINES.md by detailing how this system is built.

---

# 🏗️ High-Level Architecture

The project follows **Clean Architecture + Component-Driven UI** with 4 primary layers:

domain/
application/
infrastructure/
interface/

Each layer has a distinct responsibility.

---

# 🔵 1. Domain Layer (Core Business Logic)

Contains:
- Pure functions  
- Entities  
- Business rules  
- Validation logic  

Restrictions:
- No side effects  
- No API calls  
- No UI code  
- No framework imports  

---

# 🟣 2. Application Layer (Use Cases)

Handles:
- Application workflows  
- Coordinating domain + infrastructure  
- User actions mapped to flows  

Examples:
- Loading portfolio data  
- Filtering projects  
- Resolving translations  

---

# 🟢 3. Infrastructure Layer (External Dependencies)

Contains:
- API integrations  
- Fetch utilities  
- Adapters  
- i18n configuration  

Rules:
- Cannot import UI components  
- Should remain replaceable  

---

# 🟡 4. Interface Layer (UI)

Contains:
- React components  
- Pages  
- Routes  
- Tailwind styling  

Rules:
- UI must be data-driven  
- No business logic here  
- Only invoke application workflows  

---

# 🔄 Data Flow Diagram

User → interface → application → domain
↓
infrastructure (if needed)

All flows must start from the UI and respect boundaries.

---

# 📦 Project Modules

### **UI Components**
- Atomic + reusable  
- Styled with TailwindCSS  
- Internationalized via i18n  

### **Pages/Sections**
- Map URL routes to compositions of components  

### **Hooks**
- Encapsulate reusable logic  
- May depend on application layer  

### **i18n System**
- Content stored in JSON  
- No hardcoded strings  

---

# 🧪 Testing Strategy

- UI components: RTL  
- Business logic: Jest unit tests  
- i18n + data: static tests  

---

# 🔧 Evolution & Extensibility

The architecture allows for easy addition of:
- New features  
- New languages  
- New UI sections  
- New data sources  

No modification of core layers required.

---

# 🏁 Summary

This architecture ensures:
- Long-term maintainability  
- Consistent structure  
- Separation of concerns  
- Scalability  
- Simplicity in debugging  

For a more detailed workflow, refer to GUIDELINES.md.
