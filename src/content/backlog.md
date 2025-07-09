# 📝 Backlog & Progreso — Portal RAÍZ

**"Caminar el bosque es también saber dónde plantar."**

Este documento reúne lo que ha germinado en el portal y lo que aún está por brotar.  
Organizado en checklist de verificación + backlog vivo por prioridad.

---

## ✅ Progreso actual

| Elemento clave                           | Estado |
|------------------------------------------|--------|
| Astro + SCSS funcional                   | ✅     |
| Navbar responsiva + logo                 | ✅     |
| Hero simbólico con animación             | ✅     |
| InitClient.jsx funcional                 | ✅     |
| Anime.js y AOS activos                   | ✅     |
| Animación post-AOS en título             | ✅     |
| Carpeta `content/` con documentos vivos  | ✅     |
| Checklist y flujo RAÍZ documentado       | ✅     |

---

## ⏳ Backlog RAÍZ

### 🔐 Tokenización & Acceso

- [ ] Crear `TokenScanner.jsx` con input de wallet y botón
- [ ] Usar Axios para hacer `POST /api/scan`
- [ ] Guardar token RAÍZ en `localStorage`
- [ ] Redirigir a `/portal` si es válido
- [ ] Crear endpoint `api/scan.js` que conecte con `en-token-service`
- [ ] Implementar validación con `en-access-validator`

### 🎨 Animación simbólica

- [ ] Componente `TreeCycle.jsx` con SVG animado (♻️🌳)
- [ ] Sincronización con scroll usando `AOS`
- [ ] Movimiento perpetuo en flechas de reciclaje (Anime.js)
- [ ] Animación sutil en árbol (latido, crecimiento, respiración)

### 📱 Capacitor (App móvil)

- [ ] `npx cap init` y configuración inicial
- [ ] `npx cap add android` y build para `.apk`
- [ ] Pruebas en emulador / dispositivo real
- [ ] Validación de QR desde cámara (futuro)

### 🌿 UI simbólica

- [ ] Sección `Vision.astro` con diagrama RAÍZ
- [ ] Footer con cita del manifiesto
- [ ] Página `/progreso` que lea `checklist.md`

---

## 📚 Documentación pendiente

- [ ] `docs/colaborar.md`: guía para contribuidores
- [ ] `docs/estructura.md`: explicación de carpetas simbólicas
- [ ] `docs/ciclo-token.md`: visión espiritual de la tokenización

---

**Última actualización:** _2025-06-12_  
**Cuidador actual del bosque:** _@adareloise_

🌱 _Fundación Enraiza — "Siembra, conecta, accede."_
