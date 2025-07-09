---
title: Flujos RAÍZ
description: Mapa simbólico del escaneo hasta el acceso consciente
---

# 🔁 Flujos RAÍZ

**"Del reciclaje físico al acceso espiritual."**

Este archivo documenta los flujos clave dentro del portal `en-landing-astro`, conectando capas físicas, digitales y simbólicas del ecosistema Enraiza.

---

## 🌀 Flujo principal: Escaneo → Token → Portal

```mermaid
graph TD;
  A[Escaneo del QR RAÍZ] --> B[Formulario React: wallet / código]
  B --> C[POST /api/scan]
  C --> D[Verificación en en-token-service]
  D --> E{¿Válido?}
  E -->|Sí| F[Entrega de token RAÍZ]
  F --> G[Almacenamiento en localStorage]
  G --> H[Redirección a /portal]
  E -->|No| X[Acceso simbólicamente denegado]
```

---

## 🔐 Validación de Acceso

```mermaid
sequenceDiagram
  participant Usuario
  participant Portal
  participant Validator

  Usuario->>Portal: Accede a /portal
  Portal->>Validator: GET /access/check/:wallet
  Validator-->>Portal: status: permitido | denegado
  Portal-->>Usuario: Renderiza contenido (o mensaje simbólico)
```

---

## 🌿 Microservicios involucrados

| Servicio              | Rol simbólico                                     |
|-----------------------|---------------------------------------------------|
| `en-token-service`    | El árbol que entrega un fruto (token RAÍZ)        |
| `en-access-validator` | El guardián que evalúa el mérito para cruzar      |
| `en-landing-astro`    | El portal de entrada y espejo de transformación   |

---

## 🧩 Estado simbólico (por sección)

| Sección         | Requiere Token RAÍZ | Validación Backend |
|------------------|---------------------|---------------------|
| `/` (landing)    | ❌                  | ❌                  |
| `/portal`        | ✅                  | ✅                  |
| `/scan` (API)    | ✅                  | ✅                  |

---

## ✨ Notas

- Los tokens RAÍZ no se otorgan sin acto simbólico.
- Cada paso está representado visualmente en el portal.
- Puede integrarse animación o feedback para cada etapa.

---

**"Cuando reciclas materia, siembras espíritu."**

🌱 Fundación Enraiza
